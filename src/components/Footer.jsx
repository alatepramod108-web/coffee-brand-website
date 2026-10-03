import React from 'react';
import { Coffee, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-espresso-deep)',
        borderTop: '1px solid rgba(217, 184, 146, 0.15)',
        paddingTop: '80px',
        paddingBottom: '40px',
        color: 'var(--color-cream)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '18px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(217, 184, 146, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-warm-beige)',
                }}
              >
                <Coffee size={20} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  color: 'var(--color-cream)',
                }}
              >
                COFFEE HOUSE
              </span>
            </div>

            <p
              style={{
                color: 'var(--color-muted)',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              Crafting unforgettable sensory coffee moments through artisanal sourcing, ethical trade, and meticulous barista roasting.
            </p>

            <div style={{ display: 'flex', gap: '14px' }}>
              {/* Instagram SVG */}
              <a
                href="#footer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(217, 184, 146, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cream)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-warm-beige)';
                  e.currentTarget.style.borderColor = 'var(--color-warm-beige)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-cream)';
                  e.currentTarget.style.borderColor = 'rgba(217, 184, 146, 0.25)';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="#footer"
                aria-label="Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(217, 184, 146, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cream)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-warm-beige)';
                  e.currentTarget.style.borderColor = 'var(--color-warm-beige)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-cream)';
                  e.currentTarget.style.borderColor = 'rgba(217, 184, 146, 0.25)';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* X / Twitter SVG */}
              <a
                href="#footer"
                aria-label="X Twitter"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid rgba(217, 184, 146, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cream)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-warm-beige)';
                  e.currentTarget.style.borderColor = 'var(--color-warm-beige)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-cream)';
                  e.currentTarget.style.borderColor = 'rgba(217, 184, 146, 0.25)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--color-warm-beige)',
                marginBottom: '20px',
                letterSpacing: '0.02em',
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home', href: '#hero' },
                { name: 'Menu', href: '#menu' },
                { name: 'Our Story', href: '#story' },
                { name: 'Coffee Collection', href: '#collection' },
                { name: 'Experience Video', href: '#cinematic-showcase' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: 'var(--color-muted)',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Timings */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--color-warm-beige)',
                marginBottom: '20px',
                letterSpacing: '0.02em',
              }}
            >
              Café Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Clock size={18} style={{ color: 'var(--color-warm-beige)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: 'var(--color-cream)', fontWeight: 600 }}>Monday – Friday</div>
                  <div style={{ color: 'var(--color-muted)' }}>6:30 AM – 9:30 PM</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Clock size={18} style={{ color: 'var(--color-warm-beige)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: 'var(--color-cream)', fontWeight: 600 }}>Saturday – Sunday</div>
                  <div style={{ color: 'var(--color-muted)' }}>7:30 AM – 10:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Café Location */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--color-warm-beige)',
                marginBottom: '20px',
                letterSpacing: '0.02em',
              }}
            >
              Visit Our Bar
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-warm-beige)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--color-muted)', lineHeight: 1.5 }}>
                  14 Grand Roastery Arcade, Heritage Boulevard, Mumbai
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--color-warm-beige)', flexShrink: 0 }} />
                <span style={{ color: 'var(--color-muted)' }}>+91 98200 45678</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--color-warm-beige)', flexShrink: 0 }} />
                <span style={{ color: 'var(--color-muted)' }}>concierge@coffeehouse.luxury</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(217, 184, 146, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: 'var(--color-muted)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>
              © {CURRENT_YEAR} COFFEE HOUSE. All rights reserved.
            </div>
            <div
              style={{
                color: 'var(--color-muted)',
                fontSize: '0.86rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                flexWrap: 'wrap',
              }}
            >
              <span>Created by</span>
              <span
                style={{
                  color: 'var(--color-warm-beige)',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  background: 'rgba(217, 184, 146, 0.1)',
                  padding: '2px 10px',
                  borderRadius: '999px',
                  border: '1px solid rgba(217, 184, 146, 0.25)',
                }}
              >
                Pramod Alate
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              background: 'rgba(217, 184, 146, 0.1)',
              border: '1px solid rgba(217, 184, 146, 0.25)',
              color: 'var(--color-warm-beige)',
              borderRadius: '999px',
              padding: '8px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-warm-beige)';
              e.currentTarget.style.color = 'var(--color-espresso-deep)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(217, 184, 146, 0.1)';
              e.currentTarget.style.color = 'var(--color-warm-beige)';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
