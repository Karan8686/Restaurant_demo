import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Hero: React.FC = () => {
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    const [isReserveHovered, setIsReserveHovered] = useState(false);

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="hero-title"
                    >
                        Vrindavan<br />Kitchen & Bar
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 0.8, scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hero-divider"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hero-subtitle"
                    >
                        Authentic Indian Flavors • Elegant Dining Experience
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="hero-button-group"
                    >
                        <button
                            className={`hero-button primary ${isMenuHovered ? 'hovered' : ''}`}
                            onMouseEnter={() => setIsMenuHovered(true)}
                            onMouseLeave={() => setIsMenuHovered(false)}
                        >
                            View Menu
                        </button>
                        <button
                            className={`hero-button secondary ${isReserveHovered ? 'hovered' : ''}`}
                            onMouseEnter={() => setIsReserveHovered(true)}
                            onMouseLeave={() => setIsReserveHovered(false)}
                        >
                            Reserve Table
                        </button>
                    </motion.div>
                </div>
            </div>

            <style>{`
        .hero {
          height: 100vh;
          width: 100%;
          position: relative;
        }
        .hero-background {
          height: 100%;
          width: 100%;
          background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 14, 13, 0.4),
            rgba(18, 14, 13, 0.8),
            var(--color-bg)
          );
        }
        .hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 90%;
          text-align: center;
        }
        .hero-title {
          font-size: clamp(3rem, 10vw, 6rem);
          color: var(--color-primary);
          line-height: 1.1;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8);
          margin-bottom: var(--spacing-md);
        }
        .hero-divider {
          width: 80px;
          height: 2px;
          background-color: var(--color-primary);
          margin-bottom: var(--spacing-lg);
        }
        .hero-subtitle {
          font-family: var(--font-body);
          font-size: clamp(0.9rem, 2vw, 1.25rem);
          color: var(--color-text);
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: var(--spacing-xl);
          text-shadow: 0 2px 8px rgba(0,0,0,0.8);
        }
        .hero-button-group {
          display: flex;
          gap: var(--spacing-md);
        }
        @media (max-width: 768px) {
          .hero-button-group {
            flex-direction: column;
            width: 100%;
          }
        }
        .hero-button {
          padding: var(--spacing-md) var(--spacing-xl);
          border-radius: 2px;
          min-width: 180px;
          font-family: var(--font-body);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: var(--transition-smooth);
          font-size: 1rem;
        }
        .hero-button.primary {
          background-color: var(--color-primary);
          color: var(--color-bg);
          box-shadow: 0 4px 15px rgba(229, 192, 88, 0.3);
        }
        .hero-button.primary.hovered {
          background-color: var(--color-primary-hover);
          transform: translateY(-2px) scale(1.02);
        }
        .hero-button.secondary {
          background-color: rgba(18, 14, 13, 0.5);
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
        }
        .hero-button.secondary.hovered {
          background-color: var(--color-primary);
          color: var(--color-bg);
          transform: translateY(-2px) scale(1.02);
        }
      `}</style>
        </section>
    );
};

export default Hero;
