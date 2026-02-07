'use client';

export default function ContentOverlay({ children, className = '' }) {
  return (
    <div className={`relative z-10 ${className}`}>
      {children}
    </div>
  );
}
