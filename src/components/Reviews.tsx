import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import React from 'react';

const REVIEWS = [
    { id: '1', name: 'Sarah Williams', rating: 5, text: 'Absolutely phenomenal dining experience. The Butter Chicken was the best I have ever had. The ambiance is beautifully designed with a perfect blend of modern and traditional.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop' },
    { id: '2', name: 'James Peterson', rating: 5, text: 'Outstanding service and extremely authentic flavors. Must try the special dosas! Will definitely be coming back with family.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop' },
    { id: '3', name: 'Elena Rodriguez', rating: 4, text: 'Lovely interior and great cocktails at the bar. The Starters were fantastic, highly recommend the Paneer Tikka. Make sure to reserve in advance.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop' },
];

const Reviews: React.FC = () => {
    return (
        <section className="reviews-section" id="reviews">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Testimonials</span>
                    <h2 className="title">What Our Guests Say</h2>
                </div>

                <div className="reviews-grid">
                    {REVIEWS.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="review-card"
                        >
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>

                            <div className="reviewer">
                                <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                                <div className="reviewer-info">
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <div className="google-badge">
                                        <svg viewBox="0 0 24 24" className="google-icon">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.87 0-5.3-1.94-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        <span>Google Review</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .reviews-section {
          padding: var(--spacing-hero) 5%;
          background-color: var(--color-surface);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-xxl);
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }
        .review-card {
          background-color: var(--color-bg);
          padding: var(--spacing-xl);
          border-radius: 4px;
          border: var(--border-gold);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: var(--spacing-lg);
        }
        .review-text {
          font-family: var(--font-body);
          color: var(--color-text-muted);
          line-height: 1.8;
          font-style: italic;
          margin-bottom: var(--spacing-xl);
          flex-grow: 1;
        }
        .reviewer {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          border-top: 1px solid rgba(229, 192, 88, 0.1);
          padding-top: var(--spacing-lg);
        }
        .reviewer-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid var(--color-primary);
        }
        .reviewer-name {
          font-size: 1.1rem;
          color: var(--color-text);
          margin-bottom: 2px;
        }
        .google-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          letter-spacing: 0.5px;
        }
        .google-icon {
          width: 14px;
          height: 14px;
        }
      `}</style>
        </section>
    );
};

export default Reviews;
