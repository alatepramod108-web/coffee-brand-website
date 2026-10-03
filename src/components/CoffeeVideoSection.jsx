import React, { useRef, useEffect } from 'react';
import coffeeCommercialVideo from '../assets/videos/coffee-commercial.mp4';
import posterImg from '../assets/images/coffee-story-header.webp';
import { ArrowRight, Coffee } from 'lucide-react';

export default function CoffeeVideoSection({ onExploreCoffeeClick }) {
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
      id="cinematic-showcase"
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
        backgroundImage: `url(${posterImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Full-Width Video */}
      <video
        ref={videoRef}
        src={coffeeCommercialVideo}
        poster={posterImg}
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

      {/* Warm Cinematic Overlay */}
      <div
        className="overlay-warm-cinematic"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
        }}
      />

      {/* Edge gradient transitions */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(180deg, var(--color-espresso) 0%, transparent 100%)',
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(0deg, var(--color-espresso) 0%, transparent 100%)',
          zIndex: 3,
        }}
      />

      {/* Centered Content with Scroll Reveal */}
      <div
        className="container reveal"
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          maxWidth: '780px',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(217, 184, 146, 0.15)',
            border: '1px solid rgba(217, 184, 146, 0.35)',
            color: 'var(--color-warm-beige)',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Coffee size={26} strokeWidth={1.8} />
        </div>

        <h2
          style={{
            fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            color: 'var(--color-cream-soft)',
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            textShadow: '0 4px 25px rgba(0, 0, 0, 0.8)',
          }}
        >
          Taste the Difference
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: 'var(--color-warm-beige-light)',
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: '620px',
            margin: '0 auto 36px auto',
            textShadow: '0 2px 18px rgba(0, 0, 0, 0.85)',
          }}
        >
          &ldquo;Every cup is crafted with rich espresso, smooth milk and unforgettable flavor.&rdquo;
        </p>

        <button
          id="explore-coffee-btn"
          onClick={onExploreCoffeeClick}
          className="btn btn-primary btn-shimmer"
          style={{
            padding: '16px 40px',
            fontSize: '0.98rem',
          }}
        >
          Explore Coffee
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
