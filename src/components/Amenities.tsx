import { motion } from 'framer-motion';
import {
    Utensils,
    ShoppingBag,
    Bike,
    Calendar,
    Wine,
    Car,
    Users,
    Accessibility
} from 'lucide-react';
import React from 'react';

const AMENITIES = [
    { icon: <Utensils size={32} />, label: 'Dine-in' },
    { icon: <ShoppingBag size={32} />, label: 'Takeaway' },
    { icon: <Bike size={32} />, label: 'Delivery' },
    { icon: <Calendar size={32} />, label: 'Reservations' },
    { icon: <Wine size={32} />, label: 'Bar on Site' },
    { icon: <Car size={32} />, label: 'Free Parking' },
    { icon: <Users size={32} />, label: 'Good for Groups' },
    { icon: <Accessibility size={32} />, label: 'Wheelchair Accessible' },
];

const Amenities: React.FC = () => {
    return (
        <section id="amenities" className="amenities-section">
            <div className="amenities-container">
                <div className="amenities-header">
                    <span className="subtitle">Amenities</span>
                    <h2 className="title">What We Offer</h2>
                </div>

                <div className="amenities-grid">
                    {AMENITIES.map((amenity, index) => (
                        <motion.div
                            key={index}
                            className="amenity-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: '#E5C058' }}
                        >
                            <div className="amenity-icon">{amenity.icon}</div>
                            <span className="amenity-label">{amenity.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .amenities-section {
                    padding: 80px 5%;
                    background-color: #0E0A09; /* Deep dark background */
                }
                .amenities-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .amenities-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .amenities-header .subtitle {
                    color: #E5C058;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 12px;
                }
                .amenities-header .title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2rem, 4vw, 3rem);
                    color: #FFFFFF;
                    font-weight: 700;
                }

                .amenities-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 24px;
                    justify-content: center;
                }

                .amenity-card {
                    background: rgba(26, 20, 18, 0.4);
                    border: 1px solid rgba(229, 192, 88, 0.1);
                    padding: 40px 20px;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    text-align: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: default;
                }

                .amenity-icon {
                    color: #E5C058;
                    transition: transform 0.4s ease;
                }

                .amenity-card:hover .amenity-icon {
                    transform: scale(1.1);
                }

                .amenity-label {
                    color: #FFFFFF;
                    font-size: 0.95rem;
                    font-weight: 500;
                    font-family: 'Inter', sans-serif;
                }

                @media (max-width: 768px) {
                    .amenities-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 16px;
                    }
                    .amenity-card {
                        padding: 30px 15px;
                    }
                }
                @media (max-width: 480px) {
                    .amenities-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Amenities;
