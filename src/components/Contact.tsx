import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <span className="section-subtitle">Get In Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <div className="section-underline"></div>
                </motion.div>

                <div className="contact-grid">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="contact-info"
                    >
                        <div className="info-item">
                            <div className="info-icon">
                                <MapPin size={24} />
                            </div>
                            <div className="info-content">
                                <h3>Location</h3>
                                <p>123 Culinary Drive, Downtown<br />London, UK 12345</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <Phone size={24} />
                            </div>
                            <div className="info-content">
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                                <p>+91 98765 43211</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <Mail size={24} />
                            </div>
                            <div className="info-content">
                                <h3>Email</h3>
                                <p>info@vrindavan.com</p>
                                <p>reservations@vrindavan.com</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="contact-form-container"
                    >
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows={5} required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .contact-section {
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
                .section-subtitle {
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    font-size: 0.9rem;
                    display: block;
                    margin-bottom: var(--spacing-sm);
                }
                .section-title {
                    font-size: 3rem;
                    color: var(--color-text);
                }
                .section-underline {
                    width: 80px;
                    height: 2px;
                    background-color: var(--color-primary);
                    margin: var(--spacing-md) auto 0;
                }
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: var(--spacing-xxl);
                    align-items: start;
                }
                @media (max-width: 968px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-xl);
                }
                .info-item {
                    display: flex;
                    gap: var(--spacing-lg);
                    align-items: flex-start;
                }
                .info-icon {
                    width: 50px;
                    height: 50px;
                    background: rgba(229, 192, 88, 0.1);
                    border: 1px solid rgba(229, 192, 88, 0.2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--color-primary);
                    border-radius: 2px;
                }
                .info-content h3 {
                    font-family: var(--font-heading);
                    color: var(--color-primary);
                    font-size: 1.5rem;
                    margin-bottom: var(--spacing-xs);
                }
                .info-content p {
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                }
                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                }
                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: var(--spacing-lg);
                    background: var(--color-surface);
                    border: 1px solid rgba(229, 192, 88, 0.1);
                    color: var(--color-text);
                    font-family: var(--font-body);
                    border-radius: 2px;
                    transition: var(--transition-smooth);
                }
                .form-group input:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-primary);
                    box-shadow: 0 0 10px rgba(229, 192, 88, 0.1);
                }
                .submit-btn {
                    padding: var(--spacing-lg) var(--spacing-xxl);
                    background: transparent;
                    border: 1px solid var(--color-primary);
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 600;
                    transition: var(--transition-smooth);
                    border-radius: 2px;
                    align-self: flex-start;
                }
                .submit-btn:hover {
                    background: var(--color-primary);
                    color: var(--color-bg);
                }
            `}</style>
        </section>
    );
};

export default Contact;
