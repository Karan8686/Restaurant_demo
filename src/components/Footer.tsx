import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand">
                        <h2 className="footer-logo">Vrindavan</h2>
                        <p className="footer-tagline">Fine Indian Dining Since 1998</p>
                        <div className="social-links">
                            <a href="#" className="social-icon">IG</a>
                            <a href="#" className="social-icon">FB</a>
                            <a href="#" className="social-icon">TW</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#menu">Our Menu</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#reservation">Reservations</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-heading">Visit Us</h3>
                        <p className="footer-info">123 Culinary Drive, Downtown</p>
                        <p className="footer-info">Opening Hours: 11:00 AM - 11:00 PM</p>
                        <p className="footer-info">Contact: +91 98765 43210</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Vrindavan Kitchen & Bar. All rights reserved.</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-bg);
          padding: var(--spacing-hero) 5% var(--spacing-lg);
          border-top: 1px solid rgba(229, 192, 88, 0.1);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: var(--spacing-xxl);
          margin-bottom: var(--spacing-xxl);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        .footer-logo {
          color: var(--color-primary);
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 2rem;
          margin-bottom: var(--spacing-sm);
        }
        .footer-tagline {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-bottom: var(--spacing-lg);
        }
        .social-links {
          display: flex;
          gap: var(--spacing-md);
        }
        @media (max-width: 768px) {
          .social-links { justify-content: center; }
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 0.75rem;
          transition: var(--transition-smooth);
        }
        .social-icon:hover {
          background-color: var(--color-primary);
          color: var(--color-bg);
        }
        .footer-heading {
          color: var(--color-text);
          font-size: 1.25rem;
          margin-bottom: var(--spacing-xl);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .footer-links {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: var(--spacing-sm);
        }
        .footer-links a {
          color: var(--color-text-muted);
          transition: var(--transition-smooth);
        }
        .footer-links a:hover {
          color: var(--color-primary);
          padding-left: 5px;
        }
        .footer-info {
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-sm);
        }
        .footer-bottom {
          border-top: 1px solid rgba(229, 192, 88, 0.05);
          padding-top: var(--spacing-xl);
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
