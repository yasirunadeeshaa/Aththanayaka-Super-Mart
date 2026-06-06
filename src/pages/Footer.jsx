import { Link } from "react-router-dom";

const footerLinks = {
  Shop: [
    { label: "Fresh Produce", to: "/products?cat=produce" },
    { label: "Dairy & Eggs", to: "/products?cat=dairy" },
    { label: "Bakery", to: "/products?cat=bakery" },
    { label: "Beverages", to: "/products?cat=beverages" },
    { label: "Household", to: "/products?cat=household" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Press", to: "/press" },
    { label: "Blog", to: "/blog" },
  ],
  Support: [
    { label: "Contact Us", to: "/contact" },
    { label: "FAQs", to: "/faqs" },
    { label: "Returns Policy", to: "/returns" },
    { label: "Delivery Info", to: "/delivery" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');

        .footer-root {
          background: #060e06;
          position: relative;
          overflow: hidden;
        }

        /* Decorative top border */
        .footer-topline {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(197,168,74,0.4) 30%, rgba(232,213,163,0.6) 50%, rgba(197,168,74,0.4) 70%, transparent);
        }

        /* Background texture */
        .footer-grain {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
          pointer-events: none;
        }

        .footer-upper {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 32px 56px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
        }

        .footer-brand {}

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .footer-logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #c5a84a, #e8d5a3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .footer-logo-name {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #e8d5a3;
        }

        .footer-logo-sub {
          font-family: 'Lato', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          display: block;
          margin-top: 2px;
        }

        .footer-tagline {
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.4);
          margin-bottom: 28px;
          max-width: 280px;
        }

        /* Newsletter */
        .footer-newsletter {
          display: flex;
          gap: 0;
          max-width: 320px;
        }

        .footer-newsletter input {
          flex: 1;
          font-family: 'Lato', sans-serif;
          font-size: 13px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-right: none;
          color: #fff;
          outline: none;
          border-radius: 2px 0 0 2px;
          transition: border-color 0.3s;
        }

        .footer-newsletter input::placeholder {
          color: rgba(255,255,255,0.25);
        }

        .footer-newsletter input:focus {
          border-color: rgba(197,168,74,0.4);
        }

        .footer-newsletter button {
          font-family: 'Lato', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 12px 16px;
          background: linear-gradient(135deg, #c5a84a, #e8d5a3);
          color: #0a120a;
          border: none;
          cursor: pointer;
          border-radius: 0 2px 2px 0;
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .footer-newsletter button:hover { opacity: 0.85; }

        .footer-nl-label {
          font-family: 'Lato', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 10px;
        }

        /* Link columns */
        .footer-col {}

        .footer-col-title {
          font-family: 'Lato', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #c5a84a;
          margin-bottom: 20px;
        }

        .footer-col ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col ul li a {
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.25s;
          display: inline-block;
        }

        .footer-col ul li a:hover {
          color: #e8d5a3;
        }

        /* Contact strip */
        .footer-contact-strip {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(197,168,74,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .contact-label {
          font-family: 'Lato', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 2px;
        }

        .contact-value {
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
        }

        /* Bottom bar */
        .footer-bottom {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: gap;
          gap: 16px;
        }

        .footer-copy {
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.5px;
        }

        .footer-copy strong {
          font-weight: 700;
          color: rgba(197,168,74,0.6);
        }

        .footer-legal {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-legal a {
          font-family: 'Lato', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.2);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal a:hover { color: rgba(255,255,255,0.5); }

        /* Social icons */
        .footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: all 0.25s;
        }

        .social-icon:hover {
          border-color: rgba(197,168,74,0.4);
          color: #e8d5a3;
          background: rgba(197,168,74,0.05);
        }

        @media (max-width: 900px) {
          .footer-upper {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 540px) {
          .footer-upper {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-contact-strip {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-topline" />
        <div className="footer-grain" />

        <div className="footer-upper">
          {/* Brand column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">🛒</div>
              <div>
                <div className="footer-logo-name">Aththanayaka</div>
                <span className="footer-logo-sub">Supermart</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Serving the community with quality products and honest prices for over a decade. Your trusted neighbourhood supermart.
            </p>
            <div className="footer-nl-label">Stay updated</div>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <div className="footer-socials">
              {[["📘", "/"], ["📸", "/"], ["🐦", "/"], ["▶️", "/"]].map(([icon, href], i) => (
                <a key={i} href={href} className="social-icon">{icon}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div className="footer-col" key={heading}>
              <div className="footer-col-title">{heading}</div>
              <ul>
                {links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="footer-contact-strip">
          {[
            { icon: "📍", label: "Location", value: "No. 42, Main Street, Colombo 07" },
            { icon: "📞", label: "Phone", value: "+94 11 234 5678" },
            { icon: "✉️", label: "Email", value: "hello@aththanayaka.lk" },
            { icon: "🕐", label: "Hours", value: "Mon–Sat: 7AM – 10PM" },
          ].map((item) => (
            <div className="contact-item" key={item.label}>
              <div className="contact-icon">{item.icon}</div>
              <div>
                <div className="contact-label">{item.label}</div>
                <div className="contact-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <strong>Aththanayaka Supermart</strong>. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}