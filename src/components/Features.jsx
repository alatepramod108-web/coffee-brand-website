import React from 'react';
import { Coffee, Milk, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Coffee size={32} strokeWidth={1.8} />,
      emoji: '☕',
      title: 'Premium Beans',
      description: 'Carefully selected coffee beans for a rich and smooth taste.',
      details: 'High-elevation shade-grown Arabica with slow batch roasting.',
    },
    {
      icon: <Milk size={32} strokeWidth={1.8} />,
      emoji: '🥛',
      title: 'Fresh Ingredients',
      description: 'Quality milk and ingredients for a creamy experience.',
      details: 'Organic whole milk, oat alternatives, and handcrafted syrups.',
    },
    {
      icon: <Heart size={32} strokeWidth={1.8} />,
      emoji: '❤️',
      title: 'Crafted With Care',
      description: 'Every drink is prepared with attention to detail.',
      details: 'Precision brew extraction by certified master baristas.',
    },
  ];

  return (
    <section
      id="features"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-espresso)',
        borderTop: '1px solid rgba(217, 184, 146, 0.08)',
        borderBottom: '1px solid rgba(217, 184, 146, 0.08)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge-pill">
            <Sparkles size={13} style={{ color: 'var(--color-amber)' }} />
            THE ARTISANAL STANDARD
          </span>
          <h2 className="section-title">The Essence of Our Craft</h2>
          <p className="section-subtitle">
            Uncompromising standards at every step — from farm terroir to your very first morning sip.
          </p>
        </div>

        {/* 3 Sequential Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {features.map((item, idx) => (
            <div
              key={item.title}
              className={`glass-card reveal reveal-delay-${idx + 1}`}
              style={{
                padding: '40px 32px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s var(--ease-cinematic)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(217, 184, 146, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(217, 184, 146, 0.15)';
              }}
            >
              {/* Subtle card glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(217, 184, 146, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Icon Container with dual display (Lucide + Emoji badge) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginBottom: '26px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, rgba(90, 56, 37, 0.6) 0%, rgba(28, 18, 13, 0.9) 100%)',
                    border: '1px solid rgba(217, 184, 146, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-warm-beige)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                  }}
                >
                  {item.icon}
                </div>
                <span style={{ fontSize: '2rem' }}>{item.emoji}</span>
              </div>

              {/* Heading */}
              <h3
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 500,
                  color: 'var(--color-cream)',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>

              {/* Required Exact Text */}
              <p
                style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.65,
                  color: 'var(--color-cream-soft)',
                  marginBottom: '18px',
                }}
              >
                {item.description}
              </p>

              {/* Subtle Details footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.84rem',
                  color: 'var(--color-muted)',
                  marginTop: 'auto',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(217, 184, 146, 0.1)',
                  width: '100%',
                }}
              >
                <CheckCircle2 size={15} style={{ color: 'var(--color-amber)', flexShrink: 0 }} />
                <span>{item.details}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
