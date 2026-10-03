import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoffeeCollection from './components/CoffeeCollection';
import CoffeeVideoSection from './components/CoffeeVideoSection';
import Story from './components/Story';
import Features from './components/Features';
import Menu from './components/Menu';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import DrinkCustomizerModal from './components/DrinkCustomizerModal';
import { useScrollReveal } from './hooks/useScrollReveal';

import creamyCoffeeImg from './assets/images/coffee-creamy.jpeg';

export default function App() {
  // Initialize scroll animations
  useScrollReveal();

  const [cartItems, setCartItems] = useState([
    {
      id: 'menu-creamy-cold-coffee',
      name: 'Creamy Cold Coffee',
      price: 200,
      quantity: 1,
      image: creamyCoffeeImg,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customizingProduct, setCustomizingProduct] = useState(null);

  // Cart Management
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: newQuantity } : i))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="coffee-house-app">
      {/* 9. Sticky Glassmorphic Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderClick={() => {
          scrollToSection('menu');
        }}
      />

      <main>
        {/* 1 & 2. Full-screen Cinematic Hero & Parallax Transition */}
        <Hero
          onExploreClick={() => scrollToSection('menu')}
          onOrderClick={() => scrollToSection('menu')}
        />

        {/* 3. Coffee Collection ("Discover Your Coffee") */}
        <CoffeeCollection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Full-Width Coffee Video Section ("Taste the Difference") */}
        <CoffeeVideoSection
          onExploreCoffeeClick={() => scrollToSection('collection')}
        />

        {/* 5. Story Section ("Made With Passion") */}
        <Story
          onStoryClick={() => scrollToSection('collection')}
        />

        {/* 6. Feature Section (Premium Beans, Fresh Ingredients, Crafted With Care) */}
        <Features />

        {/* 7. Menu Section with Categories & Add to Cart */}
        <Menu
          onAddToCart={handleAddToCart}
          onOpenCustomizer={(product) => setCustomizingProduct(product)}
        />

        {/* 8. Final CTA with Commercial Video Background */}
        <CTA
          onOrderClick={() => {
            setIsCartOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenCustomizer={(product) => setCustomizingProduct(product)}
      />

      {/* Interactive Drink Customizer Modal */}
      <DrinkCustomizerModal
        product={customizingProduct}
        onClose={() => setCustomizingProduct(null)}
        onAddCustomizedDrink={(customizedDrink) => {
          handleAddToCart(customizedDrink);
          setIsCartOpen(true);
        }}
      />

      {/* Interactive Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
