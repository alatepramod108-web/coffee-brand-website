import React, { useState } from 'react';
import { Plus, Check, Sparkles, Flame, Snowflake, Star } from 'lucide-react';
import icedLatteImg from '../assets/images/iced-latte.jpg';
import creamyCoffeeImg from '../assets/images/coffee-creamy.jpeg';
import caramelCoffeeImg from '../assets/images/caramel-coffee.jpg';
import cappuccinoImg from '../assets/images/coffee-cup-art.jpg';
import mochaImg from '../assets/images/mocha.jpg';
import signatureColdBrewImg from '../assets/images/coffee-signature.jpeg';

export default function Menu({ onAddToCart, onOpenCustomizer }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [addedItemIds, setAddedItemIds] = useState({});

  const categories = ['All', 'Cold Coffee', 'Hot Coffee', 'Signature Drinks'];

  const menuItems = [
    {
      id: 'menu-iced-latte',
      name: 'Iced Latte',
      price: 180,
      category: 'Cold Coffee',
      description: 'Chilled espresso topped with cold whole milk and served over crystal ice cubes.',
      image: icedLatteImg,
      calories: '140 kcal',
      isHot: false,
    },
    {
      id: 'menu-creamy-cold-coffee',
      name: 'Creamy Cold Coffee',
      price: 200,
      category: 'Cold Coffee',
      description: 'Rich dark espresso whipped with chilled sweet cream for a velvety, frothy texture.',
      image: creamyCoffeeImg,
      calories: '220 kcal',
      isHot: false,
      featured: true,
    },
    {
      id: 'menu-caramel-coffee',
      name: 'Caramel Coffee',
      price: 220,
      category: 'Signature Drinks',
      description: 'Decadent slow-drizzled sea salt caramel over chilled espresso and whipped mountain cream.',
      image: caramelCoffeeImg,
      calories: '260 kcal',
      isHot: false,
    },
    {
      id: 'menu-classic-cappuccino',
      name: 'Classic Cappuccino',
      price: 170,
      category: 'Hot Coffee',
      description: 'Equal parts dark espresso, hot steamed milk, and a thick cushion of silky microfoam.',
      image: cappuccinoImg,
      calories: '110 kcal',
      isHot: true,
    },
    {
      id: 'menu-mocha',
      name: 'Mocha',
      price: 210,
      category: 'Hot Coffee',
      description: 'Single-origin espresso blended with premium Belgian dark chocolate and steamed whole milk.',
      image: mochaImg,
      calories: '240 kcal',
      isHot: true,
    },
    {
      id: 'menu-signature-cold-brew',
      name: 'Signature Cold Brew',
      price: 230,
      category: 'Signature Drinks',
      description: 'Steeped for 18 hours in cold filtered spring water. Naturally sweet with zero bitterness.',
      image: signatureColdBrewImg,
      calories: '25 kcal',
      isHot: false,
      featured: true,
    },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section
      id="menu"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-espresso-deep)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge-pill">
            <Sparkles size={13} style={{ color: 'var(--color-amber)' }} />
            HOUSE SPECIALTIES
          </span>
          <h2 className="section-title">Artisanal Coffee Menu</h2>
          <p className="section-subtitle">
            Handcrafted with freshly roasted single-origin lots, precision ratios, and organic dairy.
          </p>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '32px',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-cinematic)',
                    border: isActive
                      ? '1px solid var(--color-warm-beige)'
                      : '1px solid rgba(217, 184, 146, 0.2)',
                    background: isActive
                      ? 'var(--color-warm-beige)'
                      : 'rgba(28, 18, 13, 0.6)',
                    color: isActive
                      ? 'var(--color-espresso-deep)'
                      : 'var(--color-cream)',
                    boxShadow: isActive
                      ? '0 4px 20px rgba(217, 184, 146, 0.3)'
                      : 'none',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredItems.map((item, idx) => {
            const isAdded = addedItemIds[item.id];

            return (
              <div
                key={item.id}
                className={`glass-card reveal reveal-delay-${(idx % 3) + 1}`}
                style={{
                  borderRadius: '22px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(28, 18, 13, 0.8)',
                  position: 'relative',
                  transition: 'all 0.4s var(--ease-cinematic)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(217, 184, 146, 0.45)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(217, 184, 146, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(217, 184, 146, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Product Image Frame */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
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
                      transition: 'transform 0.5s var(--ease-cinematic)',
                    }}
                  />

                  {/* Gradient bottom shadow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(20, 13, 9, 0.8) 100%)',
                    }}
                  />

                  {/* Hot/Cold indicator chip */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(20, 13, 9, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(217, 184, 146, 0.25)',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.74rem',
                      color: 'var(--color-warm-beige)',
                      fontWeight: 600,
                    }}
                  >
                    {item.isHot ? (
                      <>
                        <Flame size={13} style={{ color: '#E57373' }} />
                        <span>Hot</span>
                      </>
                    ) : (
                      <>
                        <Snowflake size={13} style={{ color: '#81D4FA' }} />
                        <span>Chilled</span>
                      </>
                    )}
                  </div>

                  {item.featured && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        background: 'linear-gradient(135deg, var(--color-amber), var(--color-caramel))',
                        color: 'var(--color-espresso-deep)',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      <Star size={11} fill="currentColor" />
                      Popular
                    </div>
                  )}
                </div>

                {/* Card Details */}
                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.4rem',
                        color: 'var(--color-cream)',
                        fontWeight: 500,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--color-warm-beige)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      ₹{item.price}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'var(--color-muted)',
                      marginBottom: '20px',
                      flexGrow: 1,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Card Action Buttons */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button
                      id={`customize-${item.id}`}
                      onClick={() => onOpenCustomizer(item)}
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        padding: '11px 14px',
                        fontSize: '0.84rem',
                        borderColor: 'rgba(217, 184, 146, 0.3)',
                      }}
                    >
                      <Sparkles size={14} style={{ color: 'var(--color-amber)' }} />
                      Customize
                    </button>

                    <button
                      id={`add-to-cart-${item.id}`}
                      onClick={() => handleAdd(item)}
                      className="btn btn-primary btn-shimmer"
                      style={{
                        padding: '11px 18px',
                        fontSize: '0.86rem',
                        backgroundColor: isAdded ? '#4CAF50' : undefined,
                        backgroundImage: isAdded ? 'none' : undefined,
                        color: isAdded ? '#FFFFFF' : undefined,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          Added
                        </>
                      ) : (
                        <>
                          <Plus size={16} />
                          Quick Add
                        </>
                      )}
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
