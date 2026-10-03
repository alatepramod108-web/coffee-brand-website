import React, { useEffect } from 'react';
import { X, Sparkles, Plus, Thermometer, Flame } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart, onOpenCustomizer }) {
  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(13, 8, 5, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'fadeInModal 0.25s ease-out forwards',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'rgba(28, 18, 13, 0.95)',
          border: '1px solid rgba(217, 184, 146, 0.3)',
          borderRadius: '24px',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(217, 184, 146, 0.15)',
          position: 'relative',
          padding: '0',
          WebkitOverflowScrolling: 'touch',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(20, 13, 9, 0.8)',
            border: '1px solid rgba(217, 184, 146, 0.3)',
            color: 'var(--color-cream)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-beige)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
        >
          <X size={20} />
        </button>

        {/* Modal Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {/* Image */}
          <div style={{ position: 'relative', height: '340px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(20, 13, 9, 0.9) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                background: 'var(--color-warm-beige)',
                color: 'var(--color-espresso-deep)',
                padding: '6px 16px',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '1.1rem',
              }}
            >
              ₹{product.price}
            </div>
          </div>

          {/* Details Content */}
          <div
            style={{
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span className="badge-pill" style={{ marginBottom: '14px' }}>
                <Sparkles size={12} style={{ color: 'var(--color-amber)' }} />
                {product.badge}
              </span>

              <h3
                id="modal-product-title"
                style={{
                  fontSize: '2rem',
                  letterSpacing: '-0.01em',
                  marginBottom: '12px',
                  color: 'var(--color-cream)',
                }}
              >
                {product.name}
              </h3>

              <p
                style={{
                  color: 'var(--color-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                {product.description}
              </p>

              {/* Flavor Profile */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-warm-beige)', marginBottom: '8px' }}>
                  Flavor Notes
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {product.flavorNotes?.map((note) => (
                    <span
                      key={note}
                      style={{
                        padding: '4px 12px',
                        background: 'rgba(217, 184, 146, 0.1)',
                        border: '1px solid rgba(217, 184, 146, 0.25)',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        color: 'var(--color-cream-soft)',
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  padding: '14px',
                  background: 'rgba(13, 8, 5, 0.5)',
                  borderRadius: '14px',
                  border: '1px solid rgba(217, 184, 146, 0.15)',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-muted)', fontSize: '0.75rem' }}>
                    <Flame size={13} style={{ color: 'var(--color-amber)' }} />
                    Roast
                  </div>
                  <div style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: '0.85rem' }}>
                    {product.roast}
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-muted)', fontSize: '0.75rem' }}>
                    <Thermometer size={13} style={{ color: 'var(--color-amber)' }} />
                    Serving Temp
                  </div>
                  <div style={{ color: 'var(--color-cream)', fontWeight: 600, fontSize: '0.85rem' }}>
                    {product.temp}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => {
                  onClose();
                  onOpenCustomizer(product);
                }}
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  fontSize: '0.92rem',
                  borderColor: 'var(--color-warm-beige)',
                  color: 'var(--color-warm-beige)',
                }}
              >
                <Sparkles size={16} />
                Customize Drink (Milk, Sweetness, Size)
              </button>

              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="btn btn-primary btn-shimmer"
                style={{
                  width: '100%',
                  padding: '13px 24px',
                  fontSize: '0.95rem',
                }}
              >
                <Plus size={18} />
                Quick Add to Order (₹{product.price})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
