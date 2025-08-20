// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const footerLinks = {
  About: ["About Us", "Careers", "Contact Us", "Investor Relations", "Legal", "Trust Center"],
  Support: ["Product Support", "Report Abuse", "Resources"],
  Resources: ["Webmail", "Designers & Developers", "Customer Testimonials", "Product Catalog"],
  Account: ["Login", "Renewals & Billing", "Create Account"],
  Shopping: ["Buy a Domain", "Websites", "Business Email", "WordPress", "Hosting", "Web Security"]
};

const SocialIcon = ({ d, title }) => (
  <a href="#" aria-label={title} className="social-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d={d}></path>
    </svg>
  </a>
);

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* --- NEW BRAND AND CONTACT COLUMN --- */}
          <div className="footer-column brand-column">
              <h3 className="footer-brand-name">Nextera</h3>
              <ul className="contact-info">
                  <li><a href="mailto:nexteradigi@gmail.com">nexteradigi@gmail.com</a></li>
                  <li><a href="tel:+1234567890">+91 93452 83475</a></li>
              </ul>
          </div>

          {/* Other link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-column" key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map((link, index) => (
                  <li key={index}><Link to="#">{link}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            <SocialIcon title="Facebook" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            <SocialIcon title="Instagram" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0 1.802c-3.156 0-3.51.012-4.73.068-2.693.122-3.996 1.424-4.118 4.118-.056 1.22-.067 1.574-.067 4.73s.011 3.51.067 4.73c.122 2.693 1.425 3.996 4.118 4.118 1.22.056 1.574.067 4.73.067s3.51-.011 4.73-.067c2.693-.122 3.996-1.425 4.118-4.118.056-1.22.067-1.574.067-4.73s-.011-3.51-.067-4.73c-.122-2.693-1.425-3.996-4.118-4.118-1.22-.056-1.574-.068-4.73-.068zm0 4.135a4.096 4.096 0 1 0 0 8.192 4.096 4.096 0 0 0 0-8.192zm0 1.802a2.294 2.294 0 1 1 0 4.588 2.294 2.294 0 0 1 0-4.588zm4.965-3.266a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
            <SocialIcon title="Twitter" d="m23 3.01.2 1.5c-2.1.8-4.4 1.3-6.8 1.4-2.4.1-4.9-.4-7.1-1.4-2.3-1-4.3-2.6-6-4.6l-.3-1.6L2 3h-.5c2.1 2.4 4.8 4.2 7.8 5.2.2.1.2.3.1.5-1.2 2.3-1.8 4.8-1.6 7.3.3 2.5 1.4 4.8 3.3 6.5.2.2.5.1.7-.1 1.9-1.8 3.2-4.2 3.6-6.7.4-2.5-.2-5.1-1.6-7.3v-.1c.3 0 .5-.1.8-.2.2-.1.3-.3.2-.5-2.1-.9-4-2.2-5.7-3.8l-1-1 .7.1c1.2.2 2.4.1 3.6-.2 1.2-.3 2.3-.8 3.4-1.5l1.4-.9.7.1c.6.1 1.3.1 1.9 0z"/>
            <SocialIcon title="YouTube" d="M21.582 7.072a2.49 2.49 0 0 0-1.756-1.756C18.25 5 12 5 12 5s-6.25 0-7.826.316a2.49 2.49 0 0 0-1.756 1.756C2 8.647 2 12 2 12s0 3.353.418 4.928a2.49 2.49 0 0 0 1.756 1.756C5.75 19 12 19 12 19s6.25 0 7.826-.316a2.49 2.49 0 0 0 1.756-1.756C22 15.353 22 12 22 12s0-3.353-.418-4.928zM9.95 14.545V9.455l4.553 2.545-4.553 2.545z"/>
            <SocialIcon title="TikTok" d="M12.53.02c.07.01 1.44.25 2.14 1.05 1.1 1.26 1.03 3.2.14 4.91-.77 1.48-2.02 2.56-3.8 2.6V12a6.54 6.54 0 0 1-2.91 5.92 5.14 5.14 0 0 1-6.19-1.2 5.18 5.18 0 0 1-1.37-3.89 2.3 2.3 0 0 1 .1-.65C.85 10.5 2.21 8.35 4.5 7.23v-.02c.07-.03.14-.07.2-.1.2-.09.38-.17.56-.25.07-.03.13-.06.2-.08.28-.13.57-.25.86-.36a23.95 23.95 0 0 1 2.48-.6V.02zm0 2.6v4.61c-1.31 0-2.6-.08-3.8.3-1.6.5-2.83 1.75-3.1 3.42a2.82 2.82 0 0 0 .34 2.13c.48.9 1.4 1.43 2.43 1.2 1.2-.27 1.95-1.2 2.13-2.3.1-.55.1-1.1.18-1.63v-5.83c.96 0 1.9-.06 2.83.21z"/>
          </div>
          <div className="footer-legal">
            <p>© 2025 Nextera. All Rights Reserved.</p>
            <div className="legal-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;