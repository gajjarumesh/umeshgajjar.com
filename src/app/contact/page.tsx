import ContactForm from './ContactForm';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiClock } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { HoloPanel } from '@/components/dimension/HoloPanel';
import { Prompt, Glitch, TerminalWindow, StatLine } from '@/components/terminal/Terminal';
import {
  SpatialSection, Stagger, StaggerItem, ParallaxLayer, Reveal,
} from '@/components/dimension/Spatial';

export const metadata = {
  title: 'Contact – Hire Full Stack Developer | Umesh Gajjar',
  description:
    'Get in touch with Umesh Gajjar for web development projects, technical consulting, or freelance opportunities.',
};

const contactDetails = [
  { icon: FiMail,   label: 'Email',        value: 'urvishgajjar6@gmail.com',  href: 'mailto:urvishgajjar6@gmail.com' },
  { icon: FiMapPin, label: 'Location',     value: 'Pune, Maharashtra, India', href: null },
  { icon: FiClock,  label: 'Availability', value: 'Mon–Fri, 9 AM – 7 PM IST', href: null },
];

const socialLinks = [
  { icon: FiGithub,   label: 'GitHub',      href: 'https://github.com/gajjarumesh',            handle: '@gajjarumesh' },
  { icon: FiLinkedin, label: 'LinkedIn',    href: 'https://www.linkedin.com/in/umesh-gajjar/', handle: '/in/umesh-gajjar' },
  { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com/_umesh_gajjar',               handle: '@_umesh_gajjar' },
];

export default function ContactPage() {
  return (
    <>
      {/* ═══ HEADER ═══ */}
      <SpatialSection as="header" className="dim-section" depth={180}>
        <Prompt path="~" command="connect --open-channel" />
        <h1 className="dim-h1" style={{ marginTop: '1rem' }}>
          Let&apos;s make your project{' '}
          <Glitch className="dim-beam-text">brilliant</Glitch>
        </h1>
        <div className="dim-rule" />
        <p className="dim-lede">
          Have a project idea or need technical expertise? I&apos;d love to hear
          from you. Response time: within 24 hours.
        </p>
      </SpatialSection>

      {/* ═══ CHANNELS + FORM ═══ */}
      <SpatialSection className="dim-section">
        <div className="dim-split-wide">

          {/* Left: channels */}
          <ParallaxLayer depth={0.22}>
            <Stagger style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} gap={0.09}>

              <StaggerItem>
                <TerminalWindow title="channels.cfg" meta="3 open" scan>
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '1rem' }}>
                        <div className="dim-glyph" style={{ width: 36, height: 36 }}>
                          <Icon size={14} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="dim-label" style={{ marginBottom: '0.2rem' }}>
                            {item.label}
                          </div>
                          {item.href ? (
                            <a href={item.href} style={{ fontSize: '0.8375rem', color: 'var(--pulse)', fontWeight: 500 }}>
                              {item.value}
                            </a>
                          ) : (
                            <span style={{ fontSize: '0.8375rem', color: 'var(--lum-80)' }}>
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  <div style={{ borderTop: '1px solid var(--lum-08)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                    <StatLine label="response" value="< 24h" />
                    <StatLine label="timezone" value="IST / UTC+5:30" />
                  </div>
                </TerminalWindow>
              </StaggerItem>

              <StaggerItem>
                <HoloPanel variant="bracket">
                  <h2 className="dim-h3" style={{ marginBottom: '1.25rem' }}>Connect Online</h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {socialLinks.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                            padding: '0.625rem',
                            borderRadius: 'var(--r-sm)',
                            border: '1px solid var(--lum-08)',
                            transition: 'border-color 240ms var(--ease-out-expo), background 240ms var(--ease-out-expo)',
                          }}
                          className="dim-contact-link"
                        >
                          <div className="dim-glyph" style={{ width: 34, height: 34 }}>
                            <Icon size={14} />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--lum-100)' }}>
                              {s.label}
                            </div>
                            <div style={{
                              fontFamily: 'var(--font-mono)', fontSize: '0.6875rem',
                              color: 'var(--lum-38)',
                            }}>
                              {s.handle}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </HoloPanel>
              </StaggerItem>

              {/* Availability beacon */}
              <StaggerItem>
                <HoloPanel variant="pulse" className="holo--flat">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: 'var(--pulse)',
                      boxShadow: '0 0 10px var(--pulse)',
                    }} />
                    <span className="dim-glow" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                      Currently available
                    </span>
                  </div>
                  <p className="dim-body" style={{ fontSize: '0.8125rem', margin: 0 }}>
                    Open to freelance projects and consulting engagements.
                  </p>
                </HoloPanel>
              </StaggerItem>
            </Stagger>
          </ParallaxLayer>

          {/* Right: the form */}
          <Reveal delay={0.12}>
            <HoloPanel style={{ padding: '1.875rem' }}>
              <h2 className="dim-h3" style={{ marginBottom: '0.5rem' }}>Send a Message</h2>
              <p className="dim-body" style={{ fontSize: '0.8125rem', marginBottom: '1.75rem' }}>
                Tell me what you&apos;re building and I&apos;ll come back with next steps.
              </p>
              <ContactForm />
            </HoloPanel>
          </Reveal>
        </div>
      </SpatialSection>
    </>
  );
}
