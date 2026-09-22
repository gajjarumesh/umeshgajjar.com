import Link from 'next/link';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { Prompt } from '@/components/terminal/Terminal';

export const metadata = {
  title: 'Signal Lost – 404 | Umesh Gajjar',
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1rem',
      }}
    >
      <Prompt path="~" command="cd /unknown" caret={false} />

      <div
        className="dim-beam-text"
        style={{
          fontSize: 'clamp(5rem, 18vw, 9rem)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.05em',
          marginBottom: '0.5rem',
        }}
      >
        404
      </div>

      <h1 className="dim-h2" style={{ marginBottom: '0.75rem' }}>
        This coordinate doesn&apos;t exist
      </h1>

      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        color: 'var(--term-red)', marginBottom: '1rem', letterSpacing: '0.06em',
      }}>
        ERR_NO_SUCH_COORDINATE
      </p>

      <p className="dim-body" style={{ maxWidth: 380, marginBottom: '2rem' }}>
        The section you were looking for has moved or was never mapped.
        Let&apos;s get you back to a known position.
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="dim-btn dim-btn--pulse">
          <FiHome size={14} /> Back to Origin
        </Link>
        <Link href="/projects" className="dim-btn dim-btn--ghost">
          <FiArrowLeft size={14} /> View Work
        </Link>
      </div>
    </section>
  );
}
