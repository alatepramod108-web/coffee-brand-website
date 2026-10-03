import React, { useState } from 'react';
import { Eye, Plus, Sparkles } from 'lucide-react';
import icedCoffeeImg from '../assets/images/iced-latte.jpg';
import creamyCoffeeImg from '../assets/images/coffee-creamy.jpeg';
import signatureCoffeeImg from '../assets/images/coffee-signature.jpeg';

export default function CoffeeCollection({ onSelectProduct, onAddToCart }) {
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    {
      id: 'collection-iced-coffee',
      name: 'Iced Coffee',
      tag: 'Customer Favorite',
      description: 'Slow-steeped artisan espresso poured over crystal ice with a gentle cascade of chilled velvety milk.',
      price: 190,
      image: icedCoffeeImg,
      badge: 'Chilled Reserve',
      flavorNotes: ['Dark Chocolate', 'Roasted Hazelnut', 'Vanilla Bean'],
      roast: 'Medium-Dark Roast',
      temp: 'Chilled / 4°C',
    },
    {
      id: 'collection-creamy-cold-coffee',
      name: 'Creamy Cold Coffee',
      tag: 'Silky Texture',
      description: 'Rich cold brew whipped with farm-fresh organic cream and golden caramel notes for an ultra-smooth finish.',
      price: 210,
      image: creamyCoffeeImg,
      badge: 'Signature Blend',
      flavorNotes: ['Sweet Cream', 'Caramelized Sugar', 'Toffee'],
      roast: 'Dark Espresso Blend',
      temp: 'Chilled / 3°C',
    },
    {
      id: 'collection-signature-coffee',
      name: 'Signature Coffee',
      tag: 'Master Roast',
      description: 'Our house specialty crafted from single-origin Arabica beans, finished with microfoam and cacao dust.',
      price: 240,
      image: signatureCoffeeImg,
      badge: 'Limited Batch',
      flavorNotes: ['Wild Berry', 'Brown Sugar', 'Belgian Cocoa'],
      roast: 'Medium Roast',
      temp: 'Hot / 68°C',
    },
  ];

  return (
    <section
      id="collection"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-espresso)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative ambient background blur */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(90, 56, 37, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 184, 146, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge-pill">
            <Sparkles size={13} style={{ color: 'var(--color-amber)' }} />
            CURATED SELECTION
          </span>
          <h2 className="section-title">Discover Your Coffee</h2>
          <p className="section-subtitle">
            Immerse yourself in precision brewing and layered textures, calibrated to elevate your every morning ritual.
          </p>
        </div>

        {/* 3 Coffee Product Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {products.map((item, idx) => {
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                className={`glass-card reveal reveal-delay-${idx + 1}`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(28, 18, 13, 0.75)',
                  border: isHovered
                    ? '1px solid rgba(217, 184, 146, 0.4)'
                    : '1px solid rgba(217, 184, 146, 0.15)',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 24px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(217, 184, 146, 0.12)'
                    : '0 12px 30px rgba(0, 0, 0, 0.35)',
                  transition: 'transform 0.4s var(--ease-cinematic), box-shadow 0.4s var(--ease-cinematic), border-color 0.4s ease',
                }}
              >
                {/* Visual Media Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '290px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-espresso-deep)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.5s var(--ease-cinematic)',
                    }}
                  />
                  {/* Subtle Gradient Shadow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(13, 8, 5, 0.2) 0%, rgba(20, 13, 9, 0.75) 100%)',
                    }}
                  />

                  {/* Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: 'rgba(20, 13, 9, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(217, 184, 146, 0.3)',
                      color: 'var(--color-warm-beige)',
                      padding: '5px 14px',
                      borderRadius: '999px',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.badge}
                  </div>

                  {/* Price Tag in Image */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      background: 'rgba(217, 184, 146, 0.95)',
                      color: 'var(--color-espresso-deep)',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      letterSpacing: '-0.02em',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    ₹{item.price}
                  </div>
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.65rem',
                      marginBottom: '10px',
                      color: 'var(--color-cream)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      color: 'var(--color-muted)',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                      flexGrow: 1,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Card Actions */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(217, 184, 146, 0.1)',
                    }}
                  >
                    <button
                      id={`view-details-${item.id}`}
                      onClick={() => onSelectProduct(item)}
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        padding: '12px 18px',
                        fontSize: '0.88rem',
                        gap: '8px',
                        borderColor: isHovered ? 'var(--color-warm-beige)' : 'rgba(217, 184, 146, 0.25)',
                      }}
                    >
                      <Eye size={16} />
                      View Details
                    </button>

                    <button
                      id={`quick-add-${item.id}`}
                      onClick={() => onAddToCart(item)}
                      className="btn btn-primary"
                      aria-label={`Add ${item.name} to cart`}
                      title="Add to cart"
                      style={{
                        width: '46px',
                        height: '46px',
                        padding: 0,
                        borderRadius: '50%',
                        flexShrink: 0,
                      }}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
