'use client';

import { useState } from 'react';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

const PROJECT_TYPES = [
  'Web Development',
  'E-commerce Solution',
  'SaaS Application',
  'WordPress Development',
  'Technical Consulting',
  'Maintenance & Support',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({
    type: '',
    message: '',
  });
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
        setStatus({ type: 'success', message: "Message sent — I'll get back to you within 24 hours." });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please email me directly at urvishgajjar6@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.125rem' }}>
        <div>
          <label htmlFor="cf-name" className="dim-label">Name *</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="dim-input"
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="cf-email" className="dim-label">Email *</label>
          <input
            id="cf-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="dim-input"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-subject" className="dim-label">Project Type</label>
        <select
          id="cf-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="dim-input"
          style={{ cursor: 'pointer' }}
        >
          <option value="" style={{ background: '#0b0e1b' }}>Select project type…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t} style={{ background: '#0b0e1b' }}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="dim-label">Message *</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="dim-input"
          placeholder="Tell me about your project goals, timeline, and requirements…"
          style={{ resize: 'vertical', minHeight: 130, lineHeight: 1.7 }}
        />
      </div>

      {/* Status — announced to assistive tech as it changes */}
      <div role="status" aria-live="polite">
        {status.message && (
          <div
            style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
              padding: '0.875rem 1rem',
              borderRadius: 'var(--r-sm)',
              fontSize: '0.8375rem',
              lineHeight: 1.6,
              background: status.type === 'success' ? 'var(--pulse-06)' : 'rgba(239,68,68,0.08)',
              color: status.type === 'success' ? 'var(--pulse)' : '#ff8080',
              border: `1px solid ${status.type === 'success' ? 'var(--pulse-22)' : 'rgba(239,68,68,0.28)'}`,
            }}
          >
            {status.type === 'success'
              ? <FiCheck size={15} style={{ flexShrink: 0, marginTop: 2 }} />
              : <FiAlertCircle size={15} style={{ flexShrink: 0, marginTop: 2 }} />}
            <span>{status.message}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="dim-btn dim-btn--pulse"
        style={{
          width: '100%',
          justifyContent: 'center',
          opacity: isSubmitting ? 0.7 : 1,
          cursor: isSubmitting ? 'wait' : 'pointer',
        }}
      >
        {isSubmitting ? (
          <>
            <svg
              width="15" height="15" viewBox="0 0 24 24" fill="none"
              style={{ animation: 'spin 0.9s linear infinite' }}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
              <path
                d="M4 12a8 8 0 018-8"
                stroke="currentColor" strokeWidth="3" strokeLinecap="round"
              />
            </svg>
            Transmitting…
          </>
        ) : (
          <>
            <FiSend size={14} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
