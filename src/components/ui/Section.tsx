import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  container?: boolean;
  id?: string;
}

export function Section({
  children,
  className = '',
  container = true,
  id,
}: SectionProps) {
  const content = container ? (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  ) : (
    children
  );

  return (
    <section id={id} className={`py-16 md:py-24 lg:py-28 ${className}`}>
      {content}
    </section>
  );
}
