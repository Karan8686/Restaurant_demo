import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';
import React from 'react';
import mapVintage from '../assets/map_vintage.png';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-content-grid">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="info-column"
                    >
                        <span className="visit-us">Visit Us</span>
                        <h2 className="location-title">Location & Hours</h2>

                        <div className="info-list">
                            <div className="info-row">
                                <div className="icon-box">
                                    <MapPin size={20} />
                                </div>
                                <div className="text-box">
                                    <h3>Address</h3>
                                    <p>Kabir nagar, Sahar cargo road,</p>
                                    <p>opposite of Hotel Suba International,</p>
                                    <p>Andheri East, Mumbai, 400099</p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="icon-box">
                                    <Clock size={20} />
                                </div>
                                <div className="text-box">
                                    <h3>Opening Hours</h3>
                                    <p>Mon - Thu: 11:30 AM - 10:00 PM</p>
                                    <p>Fri - Sun: 11:30 AM - 11:00 PM</p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="icon-box">
                                    <Phone size={20} />
                                </div>
                                <div className="text-box">
                                    <h3>Contact</h3>
                                    <p>+91 98765 43210</p>
                                    <p>reservations@vrindavankitchen.com</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="directions-btn"
                            onClick={() => window.open('https://maps.app.goo.gl/dTFYvzA7KJ1DorbB9', '_blank')}
                        >
                            Get Directions
                        </button>
                    </motion.div>

                    {/* Right Column: Map Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="map-column"
                    >
                        <div className="map-image-wrapper">
                            <img src={mapVintage} alt="Vintage Map" className="vintage-map" />
                            <div className="map-pin-overlay">
                                <div className="pin-pulse"></div>
                                <div className="pin-dot"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: var(--spacing-hero) 5%;
                    background-color: #120E0D; /* Slightly darker as per screenshot */
                    min-height: 80vh;
                    display: flex;
                    align-items: center;
                }
                .contact-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                }
                .contact-content-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: var(--spacing-xxl);
                    align-items: center;
                }
                @media (max-width: 968px) {
                    .contact-content-grid {
                        grid-template-columns: 1fr;
                        gap: var(--spacing-xl);
                    }
                }

                /* Info Column */
                .info-column {
                    display: flex;
                    flex-direction: column;
                }
                .visit-us {
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: var(--spacing-sm);
                }
                .location-title {
                    font-family: var(--font-heading);
                    font-size: clamp(2.5rem, 4vw, 3.5rem);
                    color: var(--color-text);
                    margin-bottom: var(--spacing-xxl);
                    line-height: 1.1;
                }
                .info-list {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-xl);
                    margin-bottom: var(--spacing-xxl);
                }
                .info-row {
                    display: flex;
                    gap: var(--spacing-lg);
                }
                .icon-box {
                    color: var(--color-primary);
                    margin-top: 4px;
                }
                .text-box h3 {
                    font-family: var(--font-body);
                    color: var(--color-text);
                    font-size: 1.1rem;
                    margin-bottom: var(--spacing-xs);
                    font-weight: 600;
                }
                .text-box p {
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                .directions-btn {
                    width: fit-content;
                    padding: var(--spacing-md) var(--spacing-xl);
                    border: 1px solid var(--color-primary);
                    color: var(--color-primary);
                    background: transparent;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    transition: var(--transition-smooth);
                    cursor: pointer;
                }
                .directions-btn:hover {
                    background: var(--color-primary);
                    color: #120E0D;
                    box-shadow: 0 0 15px rgba(229, 192, 88, 0.2);
                }

                /* Map Column */
                .map-column {
                    width: 100%;
                }
                .map-image-wrapper {
                    position: relative;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                    background-color: #211814;
                }
                .vintage-map {
                    width: 100%;
                    height: auto;
                    display: block;
                    filter: brightness(0.8) contrast(1.1) sepia(0.2);
                    transition: transform 0.5s ease;
                }
                .map-image-wrapper:hover .vintage-map {
                    transform: scale(1.02);
                }

                /* Pin Overlay */
                .map-pin-overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .pin-dot {
                    width: 12px;
                    height: 12px;
                    background-color: #E74C3C;
                    border: 2px solid white;
                    border-radius: 50%;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
                }
                .pin-pulse {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 30px;
                    height: 30px;
                    background-color: rgba(231, 76, 60, 0.4);
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
                }

                /* Subtle glare effect on map */
                .map-image-wrapper::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%);
                    pointer-events: none;
                }
            `}</style>
        </section>
    );
};

export default Contact;
