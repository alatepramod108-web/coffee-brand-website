import React, { useRef, useEffect } from 'react';
import coffeeCtaVideo from '../assets/videos/coffee-cta.mp4';
import ctaPoster from '../assets/images/coffee-creamy.jpeg';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA({ onOrderClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', 'true');
      videoRef.current.setAttribute('webkit-playsinline', 'true');
      const p = videoRef.current.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    }
  }, []);

  return (
    <section
      id="order-cta"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '60vh',
        height: '75vh',
        maxHeight: '900px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-espresso-deep)',
        backgroundImage: `url(${ctaPoster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Cinematic Video */}
      <video
        ref={videoRef}
        src={coffeeCtaVideo}
        poster={ctaPoster}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Dark & Amber Gradient Overlay for Contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(13, 8, 5, 0.75) 0%, rgba(28, 18, 13, 0.55) 50%, rgba(13, 8, 5, 0.88) 100%)',
        }}
      />

      {/* Radial Focus Spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          background: 'radial-gradient(circle at center, transparent 30%, rgba(13, 8, 5, 0.7) 90%)',
          pointerEvents: 'none',
        }}
      />

      {/* Centered Content with Cinematic Entrance */}
      <div
        className="container reveal reveal-scale"
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          maxWidth: '820px',
          padding: '0 20px',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <span className="badge-pill">
            <Sparkles size={13} style={{ color: 'var(--color-amber)' }} />
            JOIN THE EXPERIENCE
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(2.8rem, 5.8vw, 4.8rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            color: 'var(--color-cream-soft)',
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.85)',
          }}
        >
          Your Perfect Coffee <br />
          <span
            style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #FFF 0%, #D9B892 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Is Waiting.
          </span>
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
            color: 'var(--color-cream)',
            opacity: 0.95,
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: '540px',
            margin: '0 auto 40px auto',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.9)',
          }}
        >
          &ldquo;Discover your next favorite cup.&rdquo;
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <button
            id="order-your-coffee-btn"
            onClick={onOrderClick}
            className="btn btn-primary btn-shimmer"
            style={{
              padding: '18px 46px',
              fontSize: '1.05rem',
              boxShadow: '0 10px 35px rgba(217, 184, 146, 0.4)',
            }}
          >
            Order Your Coffee
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
