import { motion } from 'framer-motion';
import React, { useState } from 'react';

const MENU_CATEGORIES = ['South Indian Special', 'Veg Special', 'Paneer Dishes', 'Starters', 'Tandoori Dishes'];

const MENU_ITEMS = [
  { id: '1', name: 'Butter Chicken', price: '₹450', description: 'Creamy tomato-based curry with tender pieces of grilled chicken.', category: 'Veg Special', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=400&auto=format&fit=crop' },
  { id: '2', name: 'Paneer Tikka', price: '₹350', description: 'Grilled cottage cheese marinated in spiced yogurt and herbs.', category: 'Paneer Dishes', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c175f0?q=80&w=400&auto=format&fit=crop' },
  { id: '3', name: 'Masala Dosa', price: '₹180', description: 'Crispy rice pancake filled with spiced potato mash, served with sambar.', category: 'South Indian Special', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=400&auto=format&fit=crop' },
  { id: '4', name: 'Dal Makhani', price: '₹320', description: 'Slow-cooked black lentils with cream and butter, a Punjabi classic.', category: 'Veg Special', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=400&auto=format&fit=crop' },
  { id: '5', name: 'Tandoori Platter', price: '₹650', description: 'Assortment of grilled kebabs, chicken and lamb, served with mint chutney.', category: 'Tandoori Dishes', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c175f0?q=80&w=400&auto=format&fit=crop' },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  const currentItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Signature Dishes</span>
          <h2 className="title">Experience Our Menu</h2>
        </div>

        <div className="category-scroll">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="menu-card"
            >
              <div className="card-image-wrapper glare-container">
                <img src={item.img} alt={item.name} className="card-img" />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{item.name}</h3>
                  <span className="card-price">{item.price}</span>
                </div>
                <p className="card-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="menu-footer">
          <button className="view-full-btn">View Full Menu</button>
        </div>
      </div>

      <style>{`
        .menu-section {
          padding: var(--spacing-hero) 5%;
          background-color: var(--color-bg);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-xxl);
        }
        .subtitle {
          color: var(--color-primary);
          font-family: var(--font-body);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: var(--spacing-xs);
          display: block;
        }
        .title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: var(--color-text);
        }
        .category-scroll {
          display: flex;
          gap: var(--spacing-md);
          overflow-x: auto;
          padding-bottom: var(--spacing-xl);
          justify-content: center;
          scrollbar-width: none;
        }
        .category-scroll::-webkit-scrollbar { display: none; }
        .cat-btn {
          white-space: nowrap;
          padding: var(--spacing-sm) var(--spacing-xl);
          color: var(--color-text-muted);
          font-size: 0.9rem;
          border-bottom: 2px solid transparent;
          transition: var(--transition-smooth);
        }
        .cat-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
        }
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }
        .menu-card {
          background-color: var(--color-surface);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          border: var(--border-gold);
          transition: var(--transition-smooth);
        }
        .menu-card:hover {
          transform: translateY(-5px);
          border-color: rgba(229, 192, 88, 0.4);
        }
        .card-image-wrapper {
          height: 240px;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-content {
          padding: var(--spacing-lg);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: var(--spacing-md);
        }
        .card-title {
          font-size: 1.5rem;
          color: var(--color-primary);
        }
        .card-price {
          font-family: var(--font-heading);
          color: var(--color-text);
          font-size: 1.25rem;
        }
        .card-description {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .menu-footer {
          margin-top: var(--spacing-xxl);
          display: flex;
          justify-content: center;
        }
        .view-full-btn {
          padding: var(--spacing-md) var(--spacing-xxl);
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: var(--transition-smooth);
        }
        .view-full-btn:hover {
          background-color: var(--color-primary);
          color: var(--color-bg);
          box-shadow: 0 4px 15px rgba(229, 192, 88, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Menu;
