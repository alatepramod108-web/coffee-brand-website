import React from 'react';
import { Sparkles, ArrowRight, Award, Compass, HeartHandshake } from 'lucide-react';
import storyImage from '../assets/images/coffee-cup-art.jpg';

export default function Story({ onStoryClick }) {
  return (
    <section
      id="story"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-espresso-deep)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* Left Side: Visual Media with Premium Frame */}
          <div
            className="reveal reveal-scale"
            style={{
              position: 'relative',
            }}
          >
            {/* Background Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '-20px',
                bottom: '-20px',
                background: 'linear-gradient(135deg, rgba(217, 184, 146, 0.2), rgba(90, 56, 37, 0.4))',
                borderRadius: '32px',
                filter: 'blur(30px)',
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(217, 184, 146, 0.25)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              }}
            >
              <img
                src={storyImage}
                alt="Artisanal coffee cup with heart latte art"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'clamp(300px, 55vw, 480px)',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.7s var(--ease-cinematic)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(13, 8, 5, 0.7) 100%)',
                }}
              />

              {/* Floating Stat Chip */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  background: 'rgba(28, 18, 13, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(217, 184, 146, 0.3)',
                  borderRadius: '16px',
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-warm-beige), var(--color-brown))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-espresso-deep)',
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-cream)' }}>
                    Top 1% Arabica
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>
                    Ethically Sourced & Freshly Roasted
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative Text */}
          <div className="reveal reveal-delay-2">
            <span className="badge-pill">
              <Sparkles size={13} style={{ color: 'var(--color-amber)' }} />
              HERITAGE & CRAFT
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: 500,
                marginTop: '16px',
                marginBottom: '24px',
                color: 'var(--color-cream)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Made With Passion
            </h2>

            <p
              style={{
                fontSize: '1.12rem',
                lineHeight: 1.8,
                color: 'var(--color-cream)',
                opacity: 0.9,
                marginBottom: '20px',
                fontWeight: 300,
              }}
            >
              From carefully selected coffee beans to perfectly balanced milk and cream, every cup is created to deliver a rich and memorable coffee experience.
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'var(--color-muted)',
                marginBottom: '36px',
              }}
            >
              We believe great coffee is not merely a beverage — it is a daily sanctuary. Each batch is roasted in small quantities to unlock peak floral subtleties, velvety body, and caramel undertones.
            </p>

            {/* Quick Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                marginBottom: '36px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(217, 184, 146, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Compass size={18} style={{ color: 'var(--color-warm-beige)' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--color-warm-beige-light)' }}>
                  Single Origin Lots
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HeartHandshake size={18} style={{ color: 'var(--color-warm-beige)' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--color-warm-beige-light)' }}>
                  Direct Trade Roasters
                </span>
              </div>
            </div>

            <button
              id="our-story-btn"
              onClick={onStoryClick}
              className="btn btn-secondary"
              style={{
                padding: '14px 34px',
                fontSize: '0.94rem',
              }}
            >
              Our Story
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
