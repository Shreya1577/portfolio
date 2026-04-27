import { NavLink } from 'react-router-dom';
import './Footer.css';

const socials = [
  { label: 'GitHub',   href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Twitter',  href: 'https://twitter.com/yourusername' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__left">
          <span className="footer__logo">✦ dev.portfolio</span>
          <p className="footer__tagline">
            Crafting thoughtful digital experiences.
          </p>
        </div>

        <div className="footer__center">
          <NavLink to="/"        className="footer__link">Home</NavLink>
          <NavLink to="/about"   className="footer__link">About</NavLink>
          <NavLink to="/projects"className="footer__link">Projects</NavLink>
          <NavLink to="/contact" className="footer__link">Contact</NavLink>
        </div>

        <div className="footer__right">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Your Name. Built with React & Node.js</span>
      </div>
    </footer>
  );
}