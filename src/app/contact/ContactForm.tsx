'use client';

import { useState } from 'react';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Contact Information */}
      <div className="lg:col-span-1 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you have a project in mind, need technical consulting, or
            just want to say hello, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <FiMail className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Email
              </h3>
              <a
                href="mailto:hello@umeshgajjar.com"
                className="text-indigo-600 hover:underline"
              >
                hello@umeshgajjar.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <FiMapPin className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Location
              </h3>
              <p className="text-gray-600">
                Pune, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <FiClock className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Availability
              </h3>
              <p className="text-gray-600">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
          <p className="text-sm text-indigo-900">
            <strong>Response Time:</strong> I typically respond to all
            inquiries within 24-48 hours during business days.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 bg-white border border-gray-200 rounded-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900 mb-2"
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
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 mb-2"
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
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 transition-colors"
              placeholder="Project Inquiry / Consultation / General Question"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 transition-colors resize-none"
              placeholder="Tell me about your project, timeline, and any specific requirements..."
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div
              className={`p-4 rounded-lg border ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-red-50 text-red-800 border-red-200'
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
                Sending...
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to be contacted regarding your
            inquiry.
          </p>
        </form>
      </div>
    </div>
  );
}
