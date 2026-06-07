import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Offers", to: "/offers" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled ? "rgba(255,255,255,0.97)" : "transparent";
  const shadow = scrolled ? "0 2px 20px rgba(30,79,216,0.1)" : "none";
  const logoColor = scrolled ? "#1a1a2e" : "#1e4fd8";
  const subColor = scrolled ? "#8a9abf" : "#5a6a8a";
  const linkColor = scrolled ? "#5a6a8a" : "#1a1a2e";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* full-width reset */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .nb-announce {
          width: 100%;
          background: #1e4fd8;
          color: #fff;
          text-align: center;
          padding: 9px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.3px;
          position: fixed;
          top: 0; left: 0;
          z-index: 1000;
        }
        .nb-announce strong { font-weight: 700; }

        .nb-root {
          position: fixed;
          top: 37px;
          left: 0;
          width: 100%;
          z-index: 999;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s;
        }

        .nb-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .nb-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0;
        }
        .nb-logo-icon {
          width: 40px; height: 40px;
          background: #1e4fd8; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 12px rgba(30,79,216,0.3);
        }
        .nb-logo-name {
          font-family: 'DM Serif Display', serif;
          font-size: 18px; line-height: 1.1;
        }
        .nb-logo-sub {
          font-size: 10px; font-weight: 600;
          letter-spacing: 2.5px; text-transform: uppercase;
          display: block; margin-top: 1px;
        }

        .nb-links {
          display: flex; align-items: center;
          gap: 32px; list-style: none; flex: 1;
          justify-content: center;
        }
        .nb-links a {
          font-size: 13px; font-weight: 500; letter-spacing: 0.3px;
          text-decoration: none; position: relative;
          transition: color 0.25s;
          padding-bottom: 2px;
        }
        .nb-links a::after {
          content: '';
          position: absolute; bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #1e4fd8; border-radius: 2px;
          transition: width 0.25s;
        }
        .nb-links a:hover::after { width: 100%; }
        .nb-links a:hover { color: #1e4fd8 !important; }

        .nb-actions {
          display: flex; align-items: center; gap: 10px; flex-shrink: 0;
        }

        .nb-icon-btn {
          width: 38px; height: 38px;
          border-radius: 8px;
          border: 1.5px solid #dde4f4;
          background: #f7f9ff;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; cursor: pointer;
          text-decoration: none; position: relative;
          transition: all 0.2s;
        }
        .nb-icon-btn:hover { background: #e8eeff; border-color: #c2d0fa; }

        .nb-badge {
          position: absolute; top: -5px; right: -5px;
          width: 17px; height: 17px;
          background: #1e4fd8; color: white;
          font-size: 9px; font-weight: 700;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid white;
        }

        .nb-cta {
          font-size: 13px; font-weight: 600; letter-spacing: 0.3px;
          color: #fff; background: #1e4fd8;
          border: 2px solid #1e4fd8;
          padding: 10px 22px; border-radius: 6px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 5px;
          transition: background 0.25s, transform 0.2s, box-shadow 0.3s;
          box-shadow: 0 4px 14px rgba(30,79,216,0.28);
          white-space: nowrap;
        }
        .nb-cta:hover {
          background: #1538a8; border-color: #1538a8;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(30,79,216,0.38);
        }

        .nb-ham {
          display: none; flex-direction: column;
          justify-content: center; gap: 5px;
          width: 38px; height: 38px;
          border: 1.5px solid #dde4f4;
          border-radius: 8px; background: #f7f9ff;
          cursor: pointer; padding: 0 10px;
        }
        .nb-ham span {
          display: block; width: 100%; height: 2px;
          background: #1e4fd8; border-radius: 2px;
          transition: all 0.28s;
        }

        .nb-mobile-menu {
          width: 100%;
          background: white;
          border-top: 1px solid #e8eef8;
          box-shadow: 0 8px 24px rgba(30,79,216,0.09);
          padding: 12px 24px 20px;
          display: flex; flex-direction: column;
        }
        .nb-mobile-menu a {
          font-size: 14px; font-weight: 500; color: #5a6a8a;
          text-decoration: none; padding: 13px 0;
          border-bottom: 1px solid #f0f4ff;
          transition: color 0.2s;
        }
        .nb-mobile-menu a:hover { color: #1e4fd8; }
        .nb-mobile-cta {
          margin-top: 14px; text-align: center;
          background: #1e4fd8 !important;
          color: white !important;
          border-radius: 6px; border-bottom: none !important;
          padding: 13px !important; font-weight: 600 !important;
        }

        @media (max-width: 960px) {
          .nb-links { display: none; }
          .nb-cta { display: none; }
          .nb-ham { display: flex; }
        }
        @media (max-width: 540px) {
          .nb-inner { padding: 0 20px; height: 60px; }
          .nb-logo-name { font-size: 16px; }
          .nb-root { top: 34px; }
        }
      `}</style>

      {/* Announcement bar */}
      <div className="nb-announce">
        🎉 <strong>Weekend Sale:</strong> Up to 40% off fresh produce — Today only!
      </div>

      {/* Main navbar */}
      <header
        className="nb-root"
        style={{ background: navBg, boxShadow: shadow, backdropFilter: scrolled ? "blur(14px)" : "none" }}
      >
        <div className="nb-inner">
          {/* Logo */}
          <Link to="/" className="nb-logo">
            <div className="nb-logo-icon">🛒</div>
            <div>
              <div className="nb-logo-name" style={{ color: logoColor }}> Aththanayaka</div>
              <span className="nb-logo-sub" style={{ color: subColor }}>Supermart</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nb-links">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} style={{ color: linkColor }}>{l.label}</Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nb-actions">
            <Link to="/search" className="nb-icon-btn" title="Search">🔍</Link>
            <Link to="/cart" className="nb-icon-btn" title="Cart">
              🛒
              <span className="nb-badge">3</span>
            </Link>
            <Link to="/shop" className="nb-cta">Shop Now →</Link>

            <button
              className="nb-ham"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="nb-mobile-menu">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
            ))}
            <Link to="/shop" className="nb-mobile-cta" onClick={() => setMenuOpen(false)}>
              Shop Now →
            </Link>
          </div>
        )}
      </header>
    </>
  );
}