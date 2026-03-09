import { motion } from 'framer-motion';
import React from 'react';

const GALLERY_IMAGES = [
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop', // Restaurant Interior
    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop', // Spring Rolls
    'https://images.unsplash.com/photo-1551881192-002ab5b497f6?q=80&w=1000&auto=format&fit=crop', // Paneer Dish
    'https://images.unsplash.com/photo-1597289124948-688c1a35cb48?q=80&w=1000&auto=format&fit=crop', // Tandoori Chicken
];

const Gallery: React.FC = () => {
    return (
        <section className="gallery-section" id="gallery">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Moments</span>
                    <h2 className="title">Our Gallery</h2>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-col">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="gallery-item glare-container tall"
                        >
                            <img src={GALLERY_IMAGES[0]} alt="Interior" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="gallery-item glare-container"
                        >
                            <img src={GALLERY_IMAGES[1]} alt="Food" />
                        </motion.div>
                    </div>

                    <div className="gallery-col">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="gallery-item glare-container"
                        >
                            <img src={GALLERY_IMAGES[2]} alt="Food" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="gallery-item glare-container tall"
                        >
                            <img src={GALLERY_IMAGES[3]} alt="Food" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
        .gallery-section {
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
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
        .gallery-col {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .gallery-item {
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          border: var(--border-gold);
          transition: var(--transition-smooth);
        }
        .gallery-item.tall {
          height: 450px;
        }
        .gallery-item:not(.tall) {
          height: 280px;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
        </section>
    );
};

export default Gallery;
