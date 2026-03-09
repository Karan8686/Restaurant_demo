import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';
import React from 'react';
import mapWorld from '../assets/map_world_dots.png';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-content-grid">
                    {/* Left Column: Info (40%) */}
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
                                    <MapPin size={24} />
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
                                    <Clock size={24} />
                                </div>
                                <div className="text-box">
                                    <h3>Opening Hours</h3>
                                    <p>Mon - Thu: 11:30 AM - 10:00 PM</p>
                                    <p>Fri - Sun: 11:30 AM - 11:00 PM</p>
                                </div>
                            </div>

                            <div className="info-row">
                                <div className="icon-box">
                                    <Phone size={24} />
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

                    {/* Right Column: Map Image (60%) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="map-column"
                    >
                        <div className="map-image-container">
                            <img src={mapWorld} alt="World Map" className="world-map-img" />
                            <div
                                className="map-overlay-v2"
                                onClick={() => window.open('https://maps.app.goo.gl/dTFYvzA7KJ1DorbB9', '_blank')}
                                style={{ cursor: 'pointer' }}
                                title="Open in Google Maps"
                            >
                                <div className="pin-pulse-v2"></div>
                                <div className="pin-circle-v2">
                                    <div className="pin-marker-inner"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: 100px 5%;
                    background-color: #1A1412; /* Exact color from ref */
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    min-height: 90vh;
                }
                .contact-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                }
                .contact-content-grid {
                    display: grid;
                    grid-template-columns: 0.4fr 0.6fr; /* 40/60 ratio */
                    gap: 80px;
                    align-items: center;
                }
                @media (max-width: 1100px) {
                    .contact-content-grid {
                        grid-template-columns: 1fr;
                        gap: 60px;
                    }
                    .contact-section {
                        padding: 60px 5%;
                    }
                }

                /* Info Sidebar */
                .info-column {
                    display: flex;
                    flex-direction: column;
                }
                .visit-us {
                    color: #E5C058;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                }
                .location-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    color: #FFFFFF;
                    margin-bottom: 48px;
                    line-height: 1.1;
                    font-weight: 700;
                }
                .info-list {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    margin-bottom: 48px;
                }
                .info-row {
                    display: flex;
                    gap: 20px;
                }
                .icon-box {
                    color: #E5C058;
                    display: flex;
                    align-items: flex-start;
                    padding-top: 4px;
                }
                .text-box h3 {
                    color: #FFFFFF;
                    font-size: 1.25rem;
                    margin-bottom: 8px;
                    font-family: 'Playfair Display', serif;
                    font-weight: 600;
                }
                .text-box p {
                    color: rgba(255,255,255,0.7);
                    font-size: 1rem;
                    line-height: 1.6;
                    font-family: 'Inter', sans-serif;
                }

                .directions-btn {
                    width: fit-content;
                    padding: 14px 36px;
                    border: 1px solid #E5C058;
                    color: #E5C058;
                    background: transparent;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    transition: all 0.4s ease;
                    cursor: pointer;
                    border-radius: 4px;
                }
                .directions-btn:hover {
                    background: #E5C058;
                    color: #1A1412;
                    box-shadow: 0 10px 20px rgba(229, 192, 88, 0.15);
                }

                /* Map Area */
                .map-column {
                    position: relative;
                }
                .map-image-container {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 1.5;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    background-color: #1A1412;
                }
                .world-map-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.9;
                    filter: saturate(0.8) contrast(1.1);
                }

                /* Modern Pin Overlay */
                .map-overlay-v2 {
                    position: absolute;
                    top: 55%; /* Adjusted for Mumbai approx position */
                    left: 65%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10;
                }
                .pin-circle-v2 {
                    width: 60px;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
                    position: relative;
                    z-index: 2;
                }
                .pin-marker-inner {
                    width: 28px;
                    height: 28px;
                    background-color: #B22222; /* Deep red marker */
                    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E") no-repeat center;
                    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E") no-repeat center;
                    background-size: contain;
                }
                .pin-pulse-v2 {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background: rgba(178, 34, 34, 0.4);
                    border-radius: 50%;
                    animation: pulse-ring 2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.3); opacity: 0.8; }
                    100% { transform: scale(1.5); opacity: 0; }
                }

                /* Dark Overlay for map */
                .map-image-container::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, transparent 30%, rgba(26, 20, 18, 0.3) 100%);
                    pointer-events: none;
                }
            `}</style>
        </section>
    );
};

export default Contact;
