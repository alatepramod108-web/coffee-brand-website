import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + taxes;

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      onClose();
    }, 2800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        backgroundColor: 'rgba(13, 8, 5, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: 'var(--color-espresso-deep)',
          borderLeft: '1px solid rgba(217, 184, 146, 0.25)',
          boxShadow: '-15px 0 40px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '24px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(217, 184, 146, 0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} style={{ color: 'var(--color-warm-beige)' }} />
            <h3 style={{ fontSize: '1.45rem', color: 'var(--color-cream)' }}>
              Your Coffee Order
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-muted)',
              cursor: 'pointer',
              padding: '6px',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {orderPlaced ? (
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px',
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(217, 184, 146, 0.15)',
                color: 'var(--color-warm-beige)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <CheckCircle2 size={40} />
            </div>
            <h4
              style={{
                fontSize: '1.8rem',
                fontFamily: 'var(--font-serif)',
                marginBottom: '10px',
                color: 'var(--color-cream)',
              }}
            >
              Order Confirmed!
            </h4>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Our baristas are preparing your freshly extracted coffee with utmost precision.
            </p>
          </div>
        ) : items.length === 0 ? (
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'var(--color-muted)',
            }}
          >
            <ShoppingBag size={48} strokeWidth={1.2} style={{ marginBottom: '16px', opacity: 0.5 }} />
            <p style={{ fontSize: '1.1rem', color: 'var(--color-cream-soft)', marginBottom: '8px' }}>
              Your bag is empty
            </p>
            <p style={{ fontSize: '0.9rem', maxWidth: '240px' }}>
              Discover handcrafted cold brews, espresso, and signature drinks.
            </p>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div
              style={{
                flexGrow: 1,
                overflowY: 'auto',
                padding: '16px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px',
                    backgroundColor: 'rgba(28, 18, 13, 0.7)',
                    borderRadius: '14px',
                    border: '1px solid rgba(217, 184, 146, 0.12)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                    }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--color-cream)', fontSize: '0.95rem' }}>
                      {item.name}
                    </div>
                    {item.customDetails ? (
                      <div style={{ fontSize: '0.74rem', color: 'var(--color-warm-beige-light)', margin: '3px 0 4px 0', lineHeight: 1.35 }}>
                        <span>{item.customDetails.size}</span> • <span>{item.customDetails.milk}</span> • <span>{item.customDetails.sweetness}</span>
                        {item.customDetails.addons?.length > 0 && (
                          <div style={{ color: 'var(--color-amber)', fontSize: '0.72rem', marginTop: '2px' }}>
                            +{item.customDetails.addons.join(', ')}
                          </div>
                        )}
                      </div>
                    ) : null}
                    <div style={{ color: 'var(--color-warm-beige)', fontSize: '0.85rem' }}>
                      ₹{item.price} each
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(13, 8, 5, 0.6)',
                      borderRadius: '999px',
                      padding: '4px 8px',
                      border: '1px solid rgba(217, 184, 146, 0.2)',
                    }}
                  >
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-cream)',
                        cursor: 'pointer',
                        padding: '2px',
                      }}
                    >
                      <Minus size={13} />
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, minWidth: '16px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-cream)',
                        cursor: 'pointer',
                        padding: '2px',
                      }}
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--color-muted)',
                      cursor: 'pointer',
                      padding: '6px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5252')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Price Summary & Checkout */}
            <div
              style={{
                borderTop: '1px solid rgba(217, 184, 146, 0.15)',
                paddingTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                <span>Estimated Tax (5% GST)</span>
                <span>₹{taxes}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'var(--color-cream)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  paddingTop: '8px',
                  borderTop: '1px dashed rgba(217, 184, 146, 0.2)',
                }}
              >
                <span>Total</span>
                <span style={{ color: 'var(--color-warm-beige)' }}>₹{grandTotal}</span>
              </div>

              <button
                id="cart-checkout-btn"
                onClick={handleCheckout}
                className="btn btn-primary btn-shimmer"
                style={{
                  width: '100%',
                  marginTop: '12px',
                  padding: '16px',
                  fontSize: '1rem',
                }}
              >
                Place Order (₹{grandTotal})
                <ArrowRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
