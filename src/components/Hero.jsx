import React, { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import coffeeHeroVideo from '../assets/videos/coffee-hero.mp4';
import heroPoster from '../assets/images/coffee-cup-art.jpg';

export default function Hero({ onExploreClick, onOrderClick }) {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure video autoplays smoothly on all mobile and desktop browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', 'true');
      videoRef.current.setAttribute('webkit-playsinline', 'true');
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay handled by poster fallback
        });
      }
    }
  }, []);

  // Calculate subtle cinematic parallax and scale for Section 2 transition
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
  const videoScale = isMobile ? 1 : 1 + progress * 0.08;
  const contentOpacity = isMobile ? 1 : Math.max(1 - progress * 1.35, 0);
  const contentTranslateY = isMobile ? 0 : progress * 70;

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        height: '100dvh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-espresso-deep)',
        backgroundImage: `url(${heroPoster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        touchAction: 'pan-y',
      }}
    >
      {/* Background Cinematic Video with Parallax & Scale */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: isMobile ? 'none' : `scale(${videoScale}) translate3d(0, ${scrollY * 0.25}px, 0)`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s linear',
          willChange: isMobile ? 'auto' : 'transform',
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          src={coffeeHeroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Cinematic Dark & Warm Gradient Overlay */}
      <div
        className="overlay-gradient-hero"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Radial Vignette for commercial focus */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 3,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(13, 8, 5, 0.7) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Hero Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          maxWidth: '860px',
          opacity: contentOpacity,
          transform: `translate3d(0, ${contentTranslateY}px, 0)`,
          willChange: 'transform, opacity',
          paddingTop: '60px',
        }}
      >
        {/* Small Label */}
        <div style={{ marginBottom: '22px' }}>
          <span className="badge-pill">
            <Sparkles size={13} style={{ color: 'var(--color-amber)' }} />
            PREMIUM COFFEE EXPERIENCE
          </span>
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)',
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--color-cream-soft)',
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.65)',
            marginBottom: '20px',
          }}
        >
          Crafted for Your <br />
          <span
            style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #FFFFFF 20%, #E6CAAA 60%, #C49767 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Perfect Moment
          </span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
            color: 'var(--color-cream)',
            fontWeight: 300,
            letterSpacing: '0.04em',
            maxWidth: '560px',
            margin: '0 auto 36px auto',
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.7)',
            opacity: 0.92,
          }}
        >
          Rich coffee. Smooth milk. Perfectly chilled.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            flexWrap: 'wrap',
          }}
        >
          <button
            id="hero-explore-menu-btn"
            onClick={onExploreClick}
            className="btn btn-secondary"
            style={{
              padding: '16px 36px',
              fontSize: '0.96rem',
            }}
          >
            Explore Our Menu
          </button>
          <button
            id="hero-order-now-btn"
            onClick={onOrderClick}
            className="btn btn-primary btn-shimmer"
            style={{
              padding: '16px 38px',
              fontSize: '0.96rem',
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#collection"
        aria-label="Scroll down to coffee collection"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-warm-beige)',
          textDecoration: 'none',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          opacity: 0.8,
          transition: 'opacity 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
      >
        <span>Discover</span>
        <div
          style={{
            width: '28px',
            height: '42px',
            borderRadius: '20px',
            border: '2px solid rgba(217, 184, 146, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              backgroundColor: 'var(--color-warm-beige)',
              animation: 'scrollBob 2s infinite ease-in-out',
            }}
          />
        </div>
      </a>

      <style>{`
        @keyframes scrollBob {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(12px);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}
