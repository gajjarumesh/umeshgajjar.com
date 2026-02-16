'use client';

import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | '';
    message: string;
  }>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message:
            "Message sent successfully! I'll get back to you within 24-48 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        if (onSuccess) onSuccess();
      } else {
        const errorMessage =
          data.error || 'Failed to send message. Please try again.';
        setStatus({
          type: 'error',
          message: errorMessage,
        });
        if (onError) onError(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        'An error occurred while sending your message. Please try again or email me directly.';
      setStatus({
        type: 'error',
        message: errorMessage,
      });
      if (onError) onError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-12">
      {/* Contact Information */}
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-gray-900/80 leading-relaxed mb-8">
            Ready to bring your vision to life? I'm here to help you build exceptional web experiences that drive results.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-gray/20">
              <FiMail className="w-6 h-6 text-pattern" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 text-lg">
                Email
              </h3>
              <a
                href="mailto:hello@umeshgajjar.com"
                className="text-pattern/80 hover:text-pattern transition-colors font-medium"
              >
                hello@umeshgajjar.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-gray/20">
              <FiMapPin className="w-6 h-6 text-pattern" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 text-lg">
                Location
              </h3>
              <p className="text-gray-900/70 font-medium">
                Pune, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-gray/20">
              <FiClock className="w-6 h-6 text-pattern" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 text-lg">
                Response Time
              </h3>
              <p className="text-gray-900/70 font-medium">
                Within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Features */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h4 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
            <FiCheckCircle className="w-5 h-5 text-pattern" />
            <span>Why Work With Me?</span>
          </h4>
          <ul className="space-y-3 text-gray-900/80 text-sm">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-pattern rounded-full flex-shrink-0"></div>
              8+ years of full-stack experience
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-pattern rounded-full flex-shrink-0"></div>
              100+ successful projects delivered
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-pattern rounded-full flex-shrink-0"></div>
              Modern tech stack expertise
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-pattern rounded-full flex-shrink-0"></div>
              Agile development approach
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-3">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 bg-white/10 backdrop-blur-sm border border-gray/20 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900 mb-3"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-gray/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-900 placeholder-white/50 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-3"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-gray/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-900 placeholder-white/50 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-900 mb-3"
            >
              Project Type
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-gray/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-900 transition-all duration-300"
            >
              <option value="">Select project type...</option>
              <option value="Web Development">Web Development</option>
              <option value="E-commerce">E-commerce Solution</option>
              <option value="SaaS Application">SaaS Application</option>
              <option value="WordPress">WordPress Development</option>
              <option value="Consulting">Technical Consulting</option>
              <option value="Maintenance">Maintenance & Support</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900 mb-3"
            >
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-gray/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-900 placeholder-white/50 transition-all duration-300 resize-none"
              placeholder="Tell me about your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better I can assist you."
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div
              className={`p-4 rounded-2xl border backdrop-blur-sm ${
                status.type === 'success'
                  ? 'bg-pattern/10 text-green-300 border-green-500/30'
                  : 'bg-red-500/10 text-red-300 border-red-500/30'
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary/95 text-primary px-8 py-4 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
            variant="outline"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-pattern"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Sending your message...</span>
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5 text-pattern" />
                <span>Send Message</span>
              </>
            )}
          </Button>

          <p className="text-sm text-gray-900/60 text-center leading-relaxed">
            I'll review your project details and get back to you within 24 hours with next steps.
            <br />
            <span className="text-gray-900/40">By submitting, you agree to be contacted regarding your inquiry.</span>
          </p>
        </form>
      </div>
    </div>
  );
}
