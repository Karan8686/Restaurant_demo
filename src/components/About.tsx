import { motion } from 'framer-motion';
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-image-wrapper glare-container">
                    <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                        alt="Authentic Cuisine"
                        className="about-img"
                    />
                    <div className="gold-accent-box"></div>
                </div>

                <div className="about-text-content">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="subtitle">Our Story</span>
                        <h2 className="about-title">A Tradition of Culinary Excellence</h2>
                        <p className="about-description">
                            At Vrindavan Kitchen & Bar, we bring you the soul of Indian flavors refined for the modern palate. Our journey began with a simple vision: to create a space where tradition meets elegance, where every spice tells a story of centuries-old heritage.
                        </p>
                        <p className="about-description">
                            From our slow-cooked Dal Makhani to our perfectly charred Tandoori specialties, every dish is crafted with the finest ingredients and a passion for perfection. We believe dining is an art, and every plate we serve is a masterpiece.
                        </p>
                        <div className="signature-wrapper">
                            <span className="signature">Vrindavan Signature</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        .about-section {
          padding: var(--spacing-hero) 5%;
          background-color: var(--color-surface);
        }
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
          align-items: center;
        }
        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr;
          }
        }
        .about-image-wrapper {
          position: relative;
          padding: var(--spacing-md);
        }
        .about-img {
          width: 100%;
          border-radius: 4px;
          box-shadow: var(--shadow-premium);
          display: block;
        }
        .gold-accent-box {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 150px;
          height: 150px;
          border: 2px solid var(--color-primary);
          z-index: -1;
          opacity: 0.3;
        }
        .about-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-lg);
          line-height: 1.2;
        }
        .about-description {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: var(--spacing-md);
        }
        .signature-wrapper {
          margin-top: var(--spacing-xl);
        }
        .signature {
          font-family: var(--font-heading);
          color: var(--color-primary);
          font-size: 1.5rem;
          font-style: italic;
        }
      `}</style>
        </section>
    );
};

export default About;
