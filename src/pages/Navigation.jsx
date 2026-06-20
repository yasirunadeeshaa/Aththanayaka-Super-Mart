import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../LanguageContext.jsx";

const NAV_LINKS = {
  en: [
    { label: "Home", to: "/", type: "route" },
    { label: "Sesame Products", to: "products", type: "scroll" },
    { label: "Jaggery", to: "jaggery", type: "scroll" },
    { label: "Packaging Supplies", to: "packaging", type: "scroll" },
    { label: "Whole Sale", to: "wholesale", type: "scroll" },
    { label: "Delivery & Visit", to: "delivery", type: "scroll" },
    { label: "Location", to: "location", type: "scroll" },
    { label: "Contact", to: "delivery", type: "route" },
    { label: "About Us", to: "about", type: "scroll" },
  ],

  si: [
    { label: "මුල් පිටුව", to: "/", type: "route" },
    { label: "තල නිෂ්පාදන", to: "products", type: "scroll" },
    { label: "හකුරු", to: "jaggery", type: "scroll" },
    { label: "ඇසුරුම් ද්‍රව්‍ය", to: "about", type: "scroll" },
    { label: "තොග ඇණවුම්", to: "wholesale", type: "scroll" },
    { label: "බෙදාහැරීම", to: "delivery", type: "scroll" },
    { label: "අපගේ ස්ථානය", to: "location", type: "scroll" },
    { label: "සම්බන්ධ වන්න", to: "delivery", type: "route" },
    { label: "අප ගැන", to: "about", type: "scroll" },
  ],
};

export default function Navbar({ onShopNow }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  const location = useLocation();
  const navigate = useNavigate();

  const trackRef = useRef(null);
  const linkRefs = useRef([]);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const [pillReady, setPillReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.2)";
  const shadow = scrolled ? "0 2px 20px rgba(30,79,216,0.1)" : "none";
  const logoColor = scrolled ? "#1a1a2e" : "#1e4fd8";
  const subColor = scrolled ? "#8a9abf" : "#5a6a8a";
  const linkColor = scrolled ? "#5a6a8a" : "#1a1a2e";

  const links = NAV_LINKS[lang];

  const activeIndex = links.findIndex((l) =>
    l.type === "scroll"
      ? false
      : location.pathname === l.to || (l.to === "/" && location.pathname === "/")
  );

  const movePill = (index) => {
    const el = linkRefs.current[index];
    const track = trackRef.current;
    if (!el || !track) return;
    const elRect = el.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    setPill({ left: elRect.left - trackRect.left, width: elRect.width, opacity: 1 });
    setPillReady(true);
  };

  const resetPill = () => {
    if (activeIndex >= 0) movePill(activeIndex);
    else setPill((p) => ({ ...p, opacity: 0 }));
  };

  // Position synchronously after layout, so the pill never flashes
  // in the wrong spot before paint.
  useLayoutEffect(() => {
    resetPill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, location.pathname, scrolled]);

  // Webfonts (DM Sans) often finish loading after first layout, which
  // silently changes link widths. Re-measure once fonts are actually ready.
  useEffect(() => {
    if (document?.fonts?.ready) {
      document.fonts.ready.then(resetPill);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // Track size changes on the nav itself (e.g. container resize, zoom,
  // dynamic content) rather than only the window — more reliable than resize.
  useEffect(() => {
    if (!trackRef.current || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => resetPill());
    ro.observe(trackRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, location.pathname]);

  const handleScrollLink = (sectionId, e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .nb-root {
          position: fixed;
          left: 0;
          width: 100%;
          z-index: 999;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s;
        }

        .nb-inner {
          width: 100%;
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

        /* ── Middle nav: sliding pill indicator ── */
        .nb-links-track {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .nb-pill {
          position: absolute;
          top: 50%;
          height: 32px;
          transform: translateY(-50%);
          background: linear-gradient(180deg, rgba(30, 79, 216, 0.09), rgba(30, 79, 216, 0.045));
          border: 1px solid rgba(30, 79, 216, 0.14);
          border-radius: 9px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.65),
            0 1px 3px rgba(30, 79, 216, 0.07);
          transition: left 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.25s ease;
          pointer-events: none;
        }

        .nb-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          position: relative;
          z-index: 1;
        }

        .nb-links a {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: inherit;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 8px;
          transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      letter-spacing 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nb-links a:hover { color: #1e4fd8 !important; letter-spacing: 0.6px; }

        .nb-links a:focus-visible {
          outline: 2px solid rgba(30, 79, 216, 0.45);
          outline-offset: 2px;
        }

        /* current page: a soft gradient bar reads calmer than a hard dot */
        .nb-links a.nb-link-active {
          color: #1e4fd8 !important;
          font-weight: 600;
        }
        .nb-links a.nb-link-active::after {
          content: '';
          display: block;
          width: 18px;
          height: 2px;
          margin: 6px auto 0;
          border-radius: 2px;
          background: linear-gradient(90deg, transparent, #1e4fd8 50%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .nb-pill { transition: opacity 0.2s ease; }
          .nb-links a { transition: color 0.2s ease; }
        }

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

        /* ── Language Toggle ── */
        .nb-lang {
          display: flex;
          align-items: center;
          background: #f0f4ff;
          border: 1.5px solid #dde4f4;
          border-radius: 8px;
          padding: 3px;
          gap: 2px;
          flex-shrink: 0;
        }
        .nb-lang-btn {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 5px 11px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background 0.18s, color 0.18s;
          font-family: 'DM Sans', sans-serif;
          line-height: 1;
        }
        .nb-lang-btn.active {
          background: #1e4fd8;
          color: #fff;
          box-shadow: 0 2px 8px rgba(30,79,216,0.25);
        }
        .nb-lang-btn.inactive {
          background: transparent;
          color: #7a8aaa;
        }
        .nb-lang-btn.inactive:hover {
          background: #e4ebff;
          color: #1e4fd8;
        }
        .nb-lang-si {
          font-size: 13px;
          letter-spacing: 0;
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
          text-align: center;
          background: #1e4fd8 !important;
          color: white !important;
          border-radius: 6px; border-bottom: none !important;
          padding: 13px !important; font-weight: 600 !important;
        }

        /* Mobile lang row inside mobile menu */
        .nb-mobile-lang {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 0;
          border-bottom: 1px solid #f0f4ff;
        }
        .nb-mobile-lang-label {
          font-size: 12px; color: #a0aec0; font-weight: 500;
          text-transform: uppercase; letter-spacing: 1px;
          flex-shrink: 0;
        }

        @media (max-width: 960px) {
          .nb-links-track { display: none; }
          .nb-cta { display: none; }
          .nb-lang { display: none; }
          .nb-ham { display: flex; }
        }
        @media (max-width: 540px) {
          .nb-inner { padding: 0 20px; height: 60px; }
          .nb-logo-name { font-size: 16px; }
        }
      `}</style>

      <header
        className="nb-root"
        style={{ background: navBg, boxShadow: shadow, backdropFilter: scrolled ? "blur(14px)" : "none" }}
      >
        <div className="nb-inner">
          {/* Logo */}
          <Link to="/" className="nb-logo">
            <div className="nb-logo-icon">🛒</div>
            <div>
              <div className="nb-logo-name" style={{ color: logoColor }}>Aththanayaka</div>
              <span className="nb-logo-sub" style={{ color: subColor }}>Supermart</span>
            </div>
          </Link>

          {/* Desktop links with sliding pill indicator */}
          <div className="nb-links-track" ref={trackRef} onMouseLeave={resetPill}>
            <span
              className="nb-pill"
              style={{
                left: pill.left,
                width: pill.width,
                opacity: pill.opacity,
                transition: pillReady
                  ? "left 0.5s cubic-bezier(0.16, 1, 0.3, 1), width 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease"
                  : "none",
              }}
            />
            <ul className="nb-links">
              {links.map((l, i) =>
                l.type === "scroll" ? (
                  <li key={l.label} ref={(el) => (linkRefs.current[i] = el)} onMouseEnter={() => movePill(i)}>
                    <a
                      href={`#${l.to}`}
                      onClick={(e) => handleScrollLink(l.to, e)}
                      style={{ color: linkColor }}
                    >
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.to} ref={(el) => (linkRefs.current[i] = el)} onMouseEnter={() => movePill(i)}>
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) => (isActive ? "nb-link-active" : "")}
                      style={{ color: linkColor }}
                    >
                      {l.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Actions */}
          <div className="nb-actions">
            {/* Language toggle */}
            <div className="nb-lang" role="group" aria-label="Language switcher">
              <button
                className={`nb-lang-btn ${lang === "en" ? "active" : "inactive"}`}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                className={`nb-lang-btn nb-lang-si ${lang === "si" ? "active" : "inactive"}`}
                onClick={() => setLang("si")}
                aria-pressed={lang === "si"}
              >
                සි
              </button>
            </div>

            <Link to="/search" className="nb-icon-btn" title="Search">🔍</Link>
            <Link to="/cart" className="nb-icon-btn" title="Cart">
              🛒
              <span className="nb-badge">3</span>
            </Link>
            <button className="nb-cta" onClick={onShopNow}>{lang === "en" ? "Shop Now →" : "බලන්න →"}</button>

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
            {/* Language toggle in mobile menu */}
            <div className="nb-mobile-lang">
              <span className="nb-mobile-lang-label">
                {lang === "en" ? "Language" : "භාෂාව"}
              </span>
              <div className="nb-lang" role="group" aria-label="Language switcher">
                <button
                  className={`nb-lang-btn ${lang === "en" ? "active" : "inactive"}`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <button
                  className={`nb-lang-btn nb-lang-si ${lang === "si" ? "active" : "inactive"}`}
                  onClick={() => setLang("si")}
                >
                  සි
                </button>
              </div>
            </div>

            {links.map((l) =>
              l.type === "scroll" ? (
                <a
                  key={l.label}
                  href={`#${l.to}`}
                  onClick={(e) => {
                    setMenuOpen(false);
                    handleScrollLink(l.to, e);
                  }}
                >
                  {l.label}
                </a>
              ) : (
                <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
              )
            )}
            <Link to="/shop" className="nb-mobile-cta" onClick={() => setMenuOpen(false)}>
              {lang === "en" ? "Shop Now →" : "බලන්න →"}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}