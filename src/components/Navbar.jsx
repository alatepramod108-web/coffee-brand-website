import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOrderClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Coffee', href: '#collection' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        backgroundColor: isScrolled ? 'rgba(20, 13, 9, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(217, 184, 146, 0.15)'
          : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.35)' : 'none',
        padding: isScrolled ? '14px 0' : '24px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'var(--color-cream)',
          }}
          aria-label="COFFEE HOUSE Home"
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(217, 184, 146, 0.2), rgba(90, 56, 37, 0.5))',
              border: '1px solid rgba(217, 184, 146, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-warm-beige)',
            }}
          >
            <Coffee size={20} strokeWidth={1.8} />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: 'var(--color-cream)',
                display: 'block',
                lineHeight: 1,
              }}
            >
              COFFEE HOUSE
            </span>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.28em',
                color: 'var(--color-warm-beige)',
                textTransform: 'uppercase',
                display: 'block',
                marginTop: '3px',
              }}
            >
              Artisanal Roasters
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          style={{ display: 'none' }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              listStyle: 'none',
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: 'var(--color-cream)',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--color-warm-beige)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-cream)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA & Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            id="nav-cart-btn"
            aria-label={`Open shopping cart, ${cartCount} items`}
            style={{
              background: 'rgba(217, 184, 146, 0.1)',
              border: '1px solid rgba(217, 184, 146, 0.25)',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-cream)',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(217, 184, 146, 0.2)';
              e.currentTarget.style.color = 'var(--color-warm-beige)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(217, 184, 146, 0.1)';
              e.currentTarget.style.color = 'var(--color-cream)';
            }}
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'var(--color-warm-beige)',
                  color: 'var(--color-espresso-deep)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Desktop Order Now Button */}
          <button
            id="nav-order-btn"
            onClick={onOrderClick}
            className="btn btn-primary btn-shimmer desktop-only-btn"
            style={{
              padding: '10px 24px',
              fontSize: '0.86rem',
            }}
          >
            Order Now
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--color-cream)',
              cursor: 'pointer',
              padding: '6px',
            }}
            className="mobile-hamburger"
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(20, 13, 9, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(217, 184, 146, 0.2)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: 'var(--color-cream)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-serif)',
                padding: '8px 0',
                borderBottom: '1px solid rgba(217, 184, 146, 0.08)',
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOrderClick();
            }}
            className="btn btn-primary btn-shimmer"
            style={{ width: '100%', marginTop: '8px' }}
          >
            Order Now
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
          .desktop-only-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-only-btn {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
