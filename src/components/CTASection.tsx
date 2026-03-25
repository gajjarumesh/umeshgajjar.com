import Link from 'next/link';
import { FadeUp } from '@/components/animations/FadeUp';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CTASection({
  title = "Ready to Put These Skills to Work?",
  subtitle = "Let's discuss how my technical expertise can help bring your vision to life and drive your business forward.",
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View Projects",
  secondaryButtonHref = "/projects"
}: CTASectionProps) {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pattern/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeUp>
        <div className="bg-white/15 bg-gradient-to-r from-primary to-primary-400 p-12 md:p-16 lg:p-20 rounded-3xl shadow-lg animate-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-semibold mb-12 border border-white/30 shadow-sm">
              <span>Let's Collaborate</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {title.split(' ').map((word, index) => (
                word.toLowerCase() === 'work?' || word.toLowerCase() === 'work' ? (
                      <span key={index} className="text-primary">{word} </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              ))}
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-16 leading-relaxed font-light max-w-3xl mx-auto">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={primaryButtonHref}
                className="group inline-flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-primary px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-primary/20"
              >
                <span>{primaryButtonText}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              
              <Link
                href={secondaryButtonHref}
                className="group inline-flex items-center gap-3 border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-fontColor px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>{secondaryButtonText}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}