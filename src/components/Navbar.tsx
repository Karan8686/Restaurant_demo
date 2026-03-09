import React, { useEffect, useState } from 'react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Menu', 'Gallery', 'About', 'Contact'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => onScrollTo('hero')}>
          Vrindavan
        </div>

        <div className="nav-links">
          {links.map((link) => (
            <button
              key={link}
              className={`nav-link ${hoveredLink === link ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => onScrollTo(link.toLowerCase())}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button className="book-btn" onClick={() => onScrollTo('contact')}>
            Book Table
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 90px;
          display: flex;
          align-items: center;
          z-index: 1000;
          padding: 0 5%;
          background: rgba(18, 14, 13, 0.4);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(229, 192, 88, 0.1);
          transition: var(--transition-smooth);
        }
        .navbar.scrolled {
          height: 70px;
          background: rgba(18, 14, 13, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .navbar-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          color: var(--color-primary);
          font-size: 1.75rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          gap: var(--spacing-xl);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
        .nav-link {
          font-family: var(--font-body);
          color: var(--color-text);
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: var(--transition-smooth);
        }
        .nav-link.hovered {
          color: var(--color-primary);
        }
        .book-btn {
          padding: var(--spacing-sm) var(--spacing-lg);
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          border-radius: 2px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: var(--transition-smooth);
        }
        .book-btn:hover {
          background-color: var(--color-primary);
          color: var(--color-bg);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
