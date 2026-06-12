import { Link } from "react-router-dom";
import polytheneImg from "../assets/polythene.webp";
import tissueImg from "../assets/tissue.jpg";
import papersImg from "../assets/pati.webp";

// Fallback placeholder colors used until real images are added
const MAIN_ITEMS = [
  {
    id: "polythene",
    emoji: "🛍️",
    name: "Polythene Rolls",
    tagline: "Food-safe sealing rolls for sesame packaging",
    color: "#1e4fd8",
    accent: "#2d63f0",
    light: "#e8eeff",
    image: polytheneImg,
    desc: "Clear food-grade polythene rolls used for packing sesame products, confectionery, and dry goods. Available in a wide range of widths from 2 inch to 24 inch — cut and sealed to any length on a heat-sealing machine. Sold by weight or as full rolls.",
    variants: [
      "2\" width", "3\" width", "4\" width", "6\" width",
      "8\" width", "10\" width", "12\" width", "15\" width",
      "18\" width", "24\" width","Gauge 150","Gauge 300", "Custom width on request"
    ],
    unit: "Sold by grams · kilograms · full rolls",
  },
  {
    id: "tissue",
    emoji: "🧻",
    name: "Tissue Sheets",
    tagline: "Food-grade wrapping sheets, sold by bundle",
    color: "#0a7a4a",
    accent: "#0d9a60",
    light: "#e6f7f0",
    // image: tissueImg,
    image: tissueImg,
    desc: "Soft food-grade tissue sheets for wrapping sesame sweets, brittle, and traditional confectionery. Available in plain white. Sold as bundles — ideal for both small producers and high-volume manufacturing.",
    variants: ["Standard sheet size", "Half-sheet", "Custom cut (on request)", "Bundle of 500 sheets", "Bundle of 1,000 sheets"],
    unit: "Per bundle · Custom bundle sizes on request",
  },
  {
    id: "papers",
    emoji: "📄",
    name: "Packaging Papers",
    tagline: "Multi-size kraft & wrap papers",
    color: "#7a4a00",
    accent: "#a06010",
    light: "#fff4e6",
    // image: papersImg,
    image: papersImg,
    desc: "Kraft and food-wrap papers available in a wide range of width and height combinations. The most popular size is 4 inch wide × 20 inch long — ideal for wrapping sesame rolls and brittle bars. All sizes sold as bundles.",
    variants: [
      "4\" × 20\" (Most Popular)",
      "4\" × 12\"",
      "6\" × 20\"",
      "6\" × 30\"",
      "8\" × 24\"",
      "Custom sizes on request",
    ],
    unit: "Per bundle · Wholesale pricing available",
  },
];

const SECONDARY_ITEMS = [
  {
    emoji: "🖨️",
    name: "Printed Covers",
    desc: "Pre-printed polythene or laminated covers for branded packaging. Plain printed, logo printed, or multi-colour custom prints.",
    variants: ["Plain printed", "Logo printed", "Multi-colour custom"],
    unit: "Per pack / Custom order",
  },
  {
    emoji: "🔩",
    name: "Sealing Rolls",
    desc: "Polythene sealing rolls for heat-sealing machines. Food-safe, consistent thickness for reliable seals on any production line.",
    variants: ["6 cm width", "10 cm width", "15 cm width", "Custom width"],
    unit: "Per roll",
  },
  {
    emoji: "🏷️",
    name: "Labels & Stickers",
    desc: "Blank and pre-printed self-adhesive label sheets for product identification and branding. Compatible with standard label printers.",
    variants: ["Blank white", "Pre-printed", "Custom designed"],
    unit: "Per sheet / Per pack",
  },
  {
    emoji: "📦",
    name: "Paper Bags",
    desc: "Kraft paper bags for retail gifting and eco-friendly product packaging. Brown or white kraft, with or without handles.",
    variants: ["Small", "Medium", "Large", "Handle bags"],
    unit: "Per pack (50 pcs) / Bulk",
  },
];

/* ─── MAIN ITEM CARD (hero style, like sesame product card) ─── */
function MainItemCard({ item }) {
  return (
    <div className="pkg-main-card" style={{ "--pkg-accent": item.color, "--pkg-light": item.light }}>
      {/* Image area */}
      <div className="pkg-main-img-wrap">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="pkg-main-img"
            onError={e => { e.target.style.display = "none"; }}
          />
        ) : (
          <div className="pkg-main-img-placeholder" style={{ background: item.color }}>
            <span className="pkg-main-placeholder-emoji">{item.emoji}</span>
            <span className="pkg-main-placeholder-hint">Add image: src/assets/{item.id}.jpg</span>
          </div>
        )}
        <div className="pkg-main-img-badge">
          <span>{item.emoji}</span>
        </div>
      </div>

      {/* Coloured header */}
      <div className="pkg-main-header" style={{ background: item.color }}>
        <div className="pkg-main-name">{item.name}</div>
        <div className="pkg-main-tagline">{item.tagline}</div>
      </div>

      {/* Body */}
      <div className="pkg-main-body">
        <p className="pkg-main-desc">{item.desc}</p>

        <div className="pkg-section-label">Available Sizes / Variants</div>
        <div className="pkg-main-variants">
          {item.variants.map(v => (
            <span
              key={v}
              className="pkg-main-chip"
              style={{ background: item.light, color: item.color }}
            >
              {v}
            </span>
          ))}
        </div>

        <div className="pkg-section-label" style={{ marginTop: 16 }}>Sold As</div>
        <div className="pkg-main-unit">{item.unit}</div>
      </div>
    </div>
  );
}

export default function PackagingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pkg-root {
          font-family: 'DM Sans', sans-serif;
          background: #f5f7fa;
          min-height: 100vh;
          color: #1a2035;
        }

        /* ── HERO ── */
        .pkg-hero {
          border-bottom: 1px solid #dde3ef;
          padding: 6px 4px 44px;
          text-align: center;
          background: #fff;
        }
        .pkg-hero-back {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600; letter-spacing: 1px;
          color: #8a9ac0; text-decoration: none; margin-bottom: 20px;
          text-transform: uppercase; transition: color 0.2s;
        }
        .pkg-hero-back:hover { color: #1e4fd8; }
        .pkg-hero-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #1e4fd8; margin-bottom: 14px;
        }
        .pkg-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(34px, 4.5vw, 52px);
          color: #1a2035; margin-bottom: 14px; line-height: 1.1;
        }
        .pkg-hero-title em { font-style: italic; color: #1e4fd8; }
        .pkg-hero-sub {
          font-size: 16px; color: #6b7a99; font-weight: 300;
          max-width: 520px; margin: 0 auto; line-height: 1.75;
        }

        /* ── BANNER ── */
        .pkg-banner {
          background: #eef2fb; border-left: 4px solid #1e4fd8;
          margin: 40px 48px 0; border-radius: 10px; padding: 18px 24px;
          font-size: 14px; color: #1a2035;
          display: flex; align-items: center; gap: 12px;
          max-width: 1280px;
        }
        .pkg-banner strong { font-weight: 600; }

        /* ── SECTION LABEL ── */
        .pkg-section-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #8a9ac0;
          padding: 48px 48px 0;
          max-width: 1280px; margin: 0 auto;
        }

        /* ══ MAIN ITEMS ROW ══ */
        .pkg-main-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding: 20px 48px 0;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── MAIN CARD ── */
        .pkg-main-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e8eef8;
          box-shadow: 0 4px 20px rgba(30,79,216,0.06);
          transition: box-shadow 0.3s, transform 0.3s;
          display: flex;
          flex-direction: column;
        }
        .pkg-main-card:hover {
          box-shadow: 0 12px 40px rgba(30,79,216,0.14);
          transform: translateY(-4px);
        }

        /* Image */
        .pkg-main-img-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .pkg-main-img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; transition: transform 0.5s ease;
        }
        .pkg-main-card:hover .pkg-main-img { transform: scale(1.05); }
        .pkg-main-img-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 8px;
        }
        .pkg-main-placeholder-emoji { font-size: 48px; opacity: 0.5; }
        .pkg-main-placeholder-hint {
          font-size: 11px; color: rgba(255,255,255,0.6);
          font-family: monospace; letter-spacing: 0.3px;
        }
        .pkg-main-img-badge {
          position: absolute; bottom: 14px; right: 16px;
          background: white; border-radius: 50%;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.18); font-size: 22px;
        }

        /* Header */
        .pkg-main-header { padding: 16px 24px 14px; }
        .pkg-main-name {
          font-family: 'DM Serif Display', serif;
          font-size: 19px; color: white; margin-bottom: 3px;
        }
        .pkg-main-tagline {
          font-size: 12px; color: rgba(255,255,255,0.75); font-weight: 400;
        }

        /* Body */
        .pkg-main-body { padding: 20px 24px 24px; flex: 1; display: flex; flex-direction: column; }
        .pkg-main-desc {
          font-size: 13px; color: #5a6a8a; line-height: 1.7;
          font-weight: 300; margin-bottom: 4px;
        }
        .pkg-section-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #8a9abf;
          margin-bottom: 8px; margin-top: 14px;
        }
        .pkg-main-variants { display: flex; flex-wrap: wrap; gap: 7px; }
        .pkg-main-chip {
          font-size: 11px; font-weight: 600;
          padding: 4px 12px; border-radius: 100px; letter-spacing: 0.3px;
        }
        .pkg-main-unit {
          font-size: 12.5px; color: #5a6a8a; font-weight: 400;
          padding: 8px 0 0;
        }

        /* ══ SECONDARY ITEMS ROW ══ */
        .pkg-secondary-wrap {
          padding: 48px 48px 60px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .pkg-secondary-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #8a9ac0; margin-bottom: 20px;
        }
        .pkg-secondary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        /* Secondary card */
        .pkg-sec-card {
          background: white; border-radius: 14px;
          border: 1px solid #dde3ef; padding: 24px;
          box-shadow: 0 2px 12px rgba(30,79,216,0.05);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .pkg-sec-card:hover {
          box-shadow: 0 10px 36px rgba(30,79,216,0.12);
          transform: translateY(-3px);
        }
        .pkg-sec-icon { font-size: 34px; margin-bottom: 14px; display: block; }
        .pkg-sec-name {
          font-family: 'DM Serif Display', serif;
          font-size: 18px; color: #1a2035; margin-bottom: 8px;
        }
        .pkg-sec-desc {
          font-size: 12.5px; color: #5a6a85; line-height: 1.65;
          font-weight: 300; margin-bottom: 14px;
        }
        .pkg-sec-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #8a9ac0; margin-bottom: 7px;
        }
        .pkg-sec-variants { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
        .pkg-sec-chip {
          font-size: 11px; font-weight: 500;
          background: #eef2fb; color: #1e4fd8;
          border: 1px solid #c2d0f5;
          padding: 3px 10px; border-radius: 100px;
        }
        .pkg-sec-unit { font-size: 11.5px; color: #8a9ac0; }
        .pkg-sec-unit span { color: #1e4fd8; font-weight: 500; }

        /* ── CTA BAR ── */
        .pkg-cta-bar {
          background: linear-gradient(135deg, #1a1a2e 0%, #1e4fd8 100%);
          margin: 0 48px 60px; border-radius: 16px;
          padding: 40px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
        }
        .pkg-cta-text h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 26px; color: white; margin-bottom: 6px;
        }
        .pkg-cta-text p { font-size: 14px; color: rgba(255,255,255,0.7); }
        .pkg-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .pkg-cta-wa {
          padding: 13px 28px; background: #25D366; color: white;
          font-weight: 600; font-size: 14px; border-radius: 8px;
          text-decoration: none; transition: background 0.2s;
        }
        .pkg-cta-wa:hover { background: #1ebe5d; }
        .pkg-cta-call {
          padding: 13px 28px;
          background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.3);
          color: white; font-weight: 600; font-size: 14px;
          border-radius: 8px; text-decoration: none;
          transition: background 0.2s;
        }
        .pkg-cta-call:hover { background: rgba(255,255,255,0.2); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .pkg-secondary-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .pkg-main-grid { grid-template-columns: 1fr; }
          .pkg-secondary-grid { grid-template-columns: repeat(2, 1fr); }
          .pkg-hero { padding: 40px 24px 36px; }
          .pkg-banner { margin: 28px 24px 0; }
          .pkg-section-eyebrow { padding: 36px 24px 0; }
          .pkg-main-grid { padding: 16px 24px 0; }
          .pkg-secondary-wrap { padding: 36px 24px 48px; }
          .pkg-cta-bar { margin: 0 24px 48px; padding: 28px 24px; }
        }
        @media (max-width: 560px) {
          .pkg-secondary-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="pkg-root">

        {/* ── HERO ── */}
        <div className="pkg-hero">
          <Link to="/products" className="pkg-hero-back">← Back to Products</Link>
          <div className="pkg-hero-eyebrow">Aththanayaka Supermart</div>
          <h1 className="pkg-hero-title">Packaging <em>Supplies</em></h1>
          <p className="pkg-hero-sub">Everything you need to package, brand, and deliver your sesame products — tissue sheets, polythene covers, papers, sealing rolls and more.</p>
        </div>

        {/* ── BANNER ── */}
        <div className="pkg-banner">
          <span>💡</span>
          <div><strong>Custom sizes & bulk orders available.</strong> Contact us directly for pricing on large quantities or custom printing requirements.</div>
        </div>

        {/* ══ MAIN ITEMS ══ */}
        <div className="pkg-section-eyebrow">Main Products</div>
        <div className="pkg-main-grid">
          {MAIN_ITEMS.map(item => (
            <MainItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* ══ SECONDARY ITEMS ══ */}
        <div className="pkg-secondary-wrap">
          <div className="pkg-secondary-eyebrow">Also Available</div>
          <div className="pkg-secondary-grid">
            {SECONDARY_ITEMS.map(item => (
              <div className="pkg-sec-card" key={item.name}>
                <span className="pkg-sec-icon">{item.emoji}</span>
                <div className="pkg-sec-name">{item.name}</div>
                <p className="pkg-sec-desc">{item.desc}</p>
                <div className="pkg-sec-label">Variants</div>
                <div className="pkg-sec-variants">
                  {item.variants.map(v => (
                    <span key={v} className="pkg-sec-chip">{v}</span>
                  ))}
                </div>
                <div className="pkg-sec-unit">Unit: <span>{item.unit}</span></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}