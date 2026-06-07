import { Link } from "react-router-dom";

const WHATSAPP = "94XXXXXXXXX";
const PHONE = "+94 XX XXX XXXX";

const PACKAGING = [
  {
    emoji: "🧻",
    name: "Tissue Paper",
    desc: "Food-grade tissue paper for wrapping sesame sweets, brittle, and traditional confectionery. Available in plain white and customizable sizes.",
    variants: ["Standard Roll", "Cut Sheets", "Custom Size (on request)"],
    unit: "Per roll / Per pack",
  },
  {
    emoji: "🛍️",
    name: "Polythene Covers",
    desc: "Clear polythene bags in multiple sizes, suitable for retail packaging of sesame products. Heat-sealable, food-safe grade.",
    variants: ["Small (50g–100g)", "Medium (250g–500g)", "Large (1kg)", "Bulk sizes"],
    unit: "Per pack (100 pcs) / Bulk",
  },
  {
    emoji: "🖨️",
    name: "Printed Covers",
    desc: "Pre-printed polythene or laminated covers for branded sesame product packaging. Ideal for labelled retail products.",
    variants: ["Plain printed", "Logo printed (custom)", "Multi-colour prints"],
    unit: "Per pack / Custom order",
  },
  {
    emoji: "📄",
    name: "Paper Bags",
    desc: "Kraft paper bags suitable for retail gifting and eco-friendly packaging of sesame products. Brown or white kraft available.",
    variants: ["Small", "Medium", "Large", "Handle bags"],
    unit: "Per pack (50 pcs) / Bulk",
  },
  {
    emoji: "🔩",
    name: "Sealing Rolls",
    desc: "Polythene sealing rolls for heat-sealing machines. Food-safe, consistent thickness for reliable seals.",
    variants: ["6cm width", "10cm width", "15cm width", "Custom width"],
    unit: "Per roll",
  },
  {
    emoji: "🏷️",
    name: "Labels & Stickers",
    desc: "Plain and printed label sheets for product identification and branding. Self-adhesive, compatible with standard label printers.",
    variants: ["Blank white labels", "Pre-printed labels", "Custom designed"],
    unit: "Per sheet / Per pack",
  },
];

export default function PackagingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pkg-root { font-family: 'DM Sans', sans-serif; background: #f5f7fa; min-height: 100vh; padding-top: 105px; color: #1a2035; }

        /* HERO */
        .pkg-hero { border-bottom: 1px solid #dde3ef; padding: 56px 48px 44px; text-align: center; background: #fff; }
        .pkg-hero-back { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; letter-spacing: 1px; color: #8a9ac0; text-decoration: none; margin-bottom: 20px; text-transform: uppercase; transition: color 0.2s; }
        .pkg-hero-back:hover { color: #3a6bc4; }
        .pkg-hero-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #3a6bc4; margin-bottom: 14px; }
        .pkg-hero-title { font-family: 'DM Serif Display', serif; font-size: clamp(34px, 4.5vw, 52px); color: #1a2035; margin-bottom: 14px; line-height: 1.1; }
        .pkg-hero-title em { font-style: italic; color: #3a6bc4; }
        .pkg-hero-sub { font-size: 16px; color: #6b7a99; font-weight: 300; max-width: 520px; margin: 0 auto; line-height: 1.75; }

        /* BANNER */
        .pkg-banner { background: #eef2fb; border-left: 4px solid #3a6bc4; margin: 40px 48px 0; border-radius: 10px; padding: 18px 24px; font-size: 14px; color: #1a2035; display: flex; align-items: center; gap: 12px; max-width: 1184px; }
        .pkg-banner strong { font-weight: 600; }

        /* GRID */
        .pkg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 22px; padding: 36px 48px 60px; max-width: 1280px; margin: 0 auto; }
        .pkg-card { background: white; border-radius: 14px; border: 1px solid #dde3ef; padding: 28px; box-shadow: 0 2px 12px rgba(58,107,196,0.05); transition: box-shadow 0.25s, transform 0.25s; }
        .pkg-card:hover { box-shadow: 0 10px 36px rgba(58,107,196,0.12); transform: translateY(-3px); }
        .pkg-card-icon { font-size: 38px; margin-bottom: 16px; display: block; }
        .pkg-card-name { font-family: 'DM Serif Display', serif; font-size: 20px; color: #1a2035; margin-bottom: 10px; }
        .pkg-card-desc { font-size: 13.5px; color: #5a6a85; line-height: 1.7; font-weight: 300; margin-bottom: 16px; }
        .pkg-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #8a9ac0; margin-bottom: 8px; }
        .pkg-variants { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .pkg-variant { font-size: 11px; font-weight: 500; background: #eef2fb; color: #2952a3; border: 1px solid #c2d0f5; padding: 4px 10px; border-radius: 100px; }
        .pkg-unit { font-size: 12px; color: #8a9ac0; }
        .pkg-unit span { color: #3a6bc4; font-weight: 500; }

        @media (max-width: 768px) {
          .pkg-hero { padding: 40px 24px 36px; }
          .pkg-banner { margin: 28px 24px 0; }
          .pkg-grid { padding: 28px 24px 48px; }
        }
      `}</style>

      <div className="pkg-root">

        {/* HERO */}
        <div className="pkg-hero">
          <Link to="/products" className="pkg-hero-back">← Back to Products</Link>
          <div className="pkg-hero-eyebrow">Aththanayaka Supermart</div>
          <h1 className="pkg-hero-title">Packaging <em>Supplies</em></h1>
          <p className="pkg-hero-sub">Everything you need to package, brand, and deliver your sesame products — tissue, covers, bags, sealing rolls and more.</p>
        </div>

        <div className="pkg-banner">
          <span>💡</span>
          <div><strong>Custom sizes & bulk orders available.</strong> Contact us directly for pricing on large quantities or custom printing requirements.</div>
        </div>

        <div className="pkg-grid">
          {PACKAGING.map(item => (
            <div className="pkg-card" key={item.name}>
              <span className="pkg-card-icon">{item.emoji}</span>
              <div className="pkg-card-name">{item.name}</div>
              <p className="pkg-card-desc">{item.desc}</p>
              <div className="pkg-label">Available Variants</div>
              <div className="pkg-variants">
                {item.variants.map(v => <span key={v} className="pkg-variant">{v}</span>)}
              </div>
              <div className="pkg-unit">Unit: <span>{item.unit}</span></div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}