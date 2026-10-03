import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, Plus } from 'lucide-react';

const SIZES = [
  { id: 'regular', name: 'Regular', volume: '250ml (8oz)', extraPrice: 0 },
  { id: 'grande', name: 'Grande', volume: '350ml (12oz)', extraPrice: 30 },
  { id: 'venti', name: 'Venti', volume: '450ml (16oz)', extraPrice: 60 },
];

const MILKS = [
  { id: 'whole', name: 'Farm Whole Milk', extraPrice: 0, tag: 'Classic' },
  { id: 'oat', name: 'Barista Oat Milk', extraPrice: 35, tag: 'Plant-Based' },
  { id: 'almond', name: 'Roasted Almond Milk', extraPrice: 40, tag: 'Nutty' },
  { id: 'coconut', name: 'Creamy Coconut Milk', extraPrice: 40, tag: 'Tropical' },
];

const ROASTS = [
  { id: 'blonde', name: 'Blonde Roast', notes: 'Floral & citrus notes with gentle brightness' },
  { id: 'medium', name: 'House Reserve', notes: 'Balanced hazelnut, milk chocolate & caramel' },
  { id: 'dark', name: 'Espresso Dark', notes: 'Intense cocoa, smoky richness & bold crema' },
];

const SWEETNESS_LEVELS = [
  { id: '0', label: '0%', desc: 'Unsweetened' },
  { id: '25', label: '25%', desc: 'Light' },
  { id: '50', label: '50%', desc: 'Balanced' },
  { id: '100', label: '100%', desc: 'Sweet' },
];

const ADDONS = [
  { id: 'extra-shot', name: 'Extra Espresso Shot', price: 45, icon: '☕' },
  { id: 'whipped-cream', name: 'Fresh Whipped Cream', price: 30, icon: '🍦' },
  { id: 'caramel-drizzle', name: 'Salted Caramel Drizzle', price: 25, icon: '🍯' },
  { id: 'vanilla-syrup', name: 'Madagascar Vanilla Syrup', price: 30, icon: '🌿' },
];

export default function DrinkCustomizerModal({ product, onClose, onAddCustomizedDrink }) {
  const [selectedSize, setSelectedSize] = useState('grande');
  const [selectedMilk, setSelectedMilk] = useState('whole');
  const [selectedRoast, setSelectedRoast] = useState('medium');
  const [sweetness, setSweetness] = useState('50');
  const [selectedAddons, setSelectedAddons] = useState([]);

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

  const currentSizeObj = SIZES.find((s) => s.id === selectedSize) || SIZES[0];
  const currentMilkObj = MILKS.find((m) => m.id === selectedMilk) || MILKS[0];
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const finalPrice = product.price + currentSizeObj.extraPrice + currentMilkObj.extraPrice + addonsTotal;

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddCustomized = () => {
    const currentRoastObj = ROASTS.find((r) => r.id === selectedRoast);
    const addonNames = selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name).filter(Boolean);

    const customizedItem = {
      ...product,
      id: `${product.id}-custom-${Date.now()}`,
      originalId: product.id,
      name: product.name,
      price: finalPrice,
      isCustomized: true,
      customDetails: {
        size: currentSizeObj.name,
        volume: currentSizeObj.volume,
        milk: currentMilkObj.name,
        roast: currentRoastObj?.name,
        sweetness: `${sweetness}% Sweet`,
        addons: addonNames,
      },
    };

    onAddCustomizedDrink(customizedItem);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 220,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(13, 8, 5, 0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '92vh',
          backgroundColor: 'rgba(28, 18, 13, 0.98)',
          border: '1px solid rgba(217, 184, 146, 0.35)',
          borderRadius: '24px',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.9), 0 0 50px rgba(217, 184, 146, 0.15)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid rgba(217, 184, 146, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, rgba(37, 24, 17, 0.6) 0%, transparent 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                objectFit: 'cover',
                border: '1px solid rgba(217, 184, 146, 0.3)',
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge-pill" style={{ padding: '3px 10px', fontSize: '0.68rem' }}>
                  <Sparkles size={11} style={{ color: 'var(--color-amber)' }} />
                  ARTISAN CUSTOMIZER
                </span>
              </div>
              <h3
                id="customizer-modal-title"
                style={{
                  fontSize: '1.6rem',
                  color: 'var(--color-cream)',
                  margin: '4px 0 0 0',
                }}
              >
                Customize {product.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close customizer"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(217, 184, 146, 0.1)',
              border: '1px solid rgba(217, 184, 146, 0.25)',
              color: 'var(--color-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-beige)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
          >
            <X size={19} />
          </button>
        </div>

        {/* Scrollable Customization Controls */}
        <div
          style={{
            padding: '24px 28px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '26px',
            flexGrow: 1,
          }}
        >
          {/* 1. Size Selection */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-warm-beige)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                1. Cup Size
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                {currentSizeObj.volume}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {SIZES.map((size) => {
                const isSelected = selectedSize === size.id;
                return (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    style={{
                      padding: '14px 12px',
                      borderRadius: '16px',
                      background: isSelected ? 'rgba(217, 184, 146, 0.18)' : 'rgba(20, 13, 9, 0.6)',
                      border: isSelected ? '1px solid var(--color-warm-beige)' : '1px solid rgba(217, 184, 146, 0.15)',
                      color: isSelected ? 'var(--color-warm-beige-light)' : 'var(--color-cream)',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>
                      {size.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>
                      {size.extraPrice > 0 ? `+₹${size.extraPrice}` : 'Included'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Milk Choice */}
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-warm-beige)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                2. Choice of Milk
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
              {MILKS.map((milk) => {
                const isSelected = selectedMilk === milk.id;
                return (
                  <button
                    key={milk.id}
                    onClick={() => setSelectedMilk(milk.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '14px',
                      background: isSelected ? 'rgba(217, 184, 146, 0.18)' : 'rgba(20, 13, 9, 0.6)',
                      border: isSelected ? '1px solid var(--color-warm-beige)' : '1px solid rgba(217, 184, 146, 0.15)',
                      color: isSelected ? 'var(--color-warm-beige-light)' : 'var(--color-cream)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{milk.name}</span>
                      {isSelected && <Check size={14} style={{ color: 'var(--color-warm-beige)' }} />}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--color-muted)' }}>
                      {milk.extraPrice > 0 ? `+₹${milk.extraPrice}` : 'Standard'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Roast Profile */}
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-warm-beige)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                3. Espresso Roast Profile
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {ROASTS.map((roast) => {
                const isSelected = selectedRoast === roast.id;
                return (
                  <button
                    key={roast.id}
                    onClick={() => setSelectedRoast(roast.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '14px',
                      background: isSelected ? 'rgba(217, 184, 146, 0.18)' : 'rgba(20, 13, 9, 0.6)',
                      border: isSelected ? '1px solid var(--color-warm-beige)' : '1px solid rgba(217, 184, 146, 0.15)',
                      color: 'var(--color-cream)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: isSelected ? 'var(--color-warm-beige)' : 'var(--color-cream)', marginBottom: '3px' }}>
                      {roast.name}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--color-muted)', lineHeight: 1.4 }}>
                      {roast.notes}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Sweetness Level */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-warm-beige)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                4. Sweetness
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-warm-beige)' }}>
                {SWEETNESS_LEVELS.find((s) => s.id === sweetness)?.desc}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {SWEETNESS_LEVELS.map((level) => {
                const isSelected = sweetness === level.id;
                return (
                  <button
                    key={level.id}
                    onClick={() => setSweetness(level.id)}
                    style={{
                      padding: '10px',
                      borderRadius: '12px',
                      background: isSelected ? 'var(--color-warm-beige)' : 'rgba(20, 13, 9, 0.6)',
                      color: isSelected ? 'var(--color-espresso-deep)' : 'var(--color-cream)',
                      border: isSelected ? '1px solid var(--color-warm-beige)' : '1px solid rgba(217, 184, 146, 0.2)',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {level.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Add-ons */}
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-warm-beige)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                5. Luxury Add-ons & Toppings
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '10px' }}>
              {ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '14px',
                      background: isSelected ? 'rgba(217, 184, 146, 0.2)' : 'rgba(20, 13, 9, 0.6)',
                      border: isSelected ? '1px solid var(--color-warm-beige)' : '1px solid rgba(217, 184, 146, 0.15)',
                      color: 'var(--color-cream)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{addon.icon}</span>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: isSelected ? 'var(--color-warm-beige-light)' : 'var(--color-cream)' }}>
                          {addon.name}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--color-muted)' }}>
                          +₹{addon.price}
                        </div>
                      </div>
                    </div>
                    {isSelected && <Check size={16} style={{ color: 'var(--color-warm-beige)', flexShrink: 0 }} />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Summary & Add Button */}
        <div
          style={{
            padding: '20px 28px',
            borderTop: '1px solid rgba(217, 184, 146, 0.15)',
            background: 'rgba(20, 13, 9, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Customized Total
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-warm-beige)', fontFamily: 'var(--font-sans)' }}>
              ₹{finalPrice}
            </div>
          </div>

          <button
            id="add-customized-drink-btn"
            onClick={handleAddCustomized}
            className="btn btn-primary btn-shimmer"
            style={{
              padding: '14px 34px',
              fontSize: '0.98rem',
              flexGrow: 1,
              maxWidth: '380px',
            }}
          >
            <Plus size={18} />
            Add Customized Drink to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
