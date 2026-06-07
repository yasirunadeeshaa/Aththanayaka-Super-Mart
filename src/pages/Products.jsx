import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const WHATSAPP = "94XXXXXXXXX";
const PHONE = "+94 XX XXX XXXX";

/* ─── SESAME PRODUCTS ─── */
const PRODUCTS = [
  {
    id: "black",
    color: "#1a1a2e",
    accent: "#3a3a5e",
    light: "#f0f0f8",
    emoji: "⚫",
    name: "Black Sesame Seeds",
    tagline: "Deep flavor, maximum nutrition",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=80",
    desc: "Our black sesame seeds are carefully sourced and naturally dried. They carry a stronger, slightly bitter-nutty flavor compared to white sesame. Highly prized in Asian confectionery and traditional medicine.",
    uses: ["Sesame oil extraction", "Traditional sweets & brittle", "Health supplements", "Bakery toppings"],
    available: ["Raw / Uncleaned", "Sorted & Cleaned"],
    specs: [
      { label: "Moisture", value: "≤ 7%" },
      { label: "Purity", value: "≥ 99%" },
      { label: "Oil Content", value: "50–55%" },
      { label: "Min. Order", value: "5 kg (retail) / 50 kg (wholesale)" },
    ],
  },
  {
    id: "white",
    color: "#1e4fd8",
    accent: "#2d63f0",
    light: "#e8eeff",
    emoji: "⚪",
    name: "White Sesame Seeds",
    tagline: "Mild taste, premium grade",
    image: "https://images.unsplash.com/photo-1612204103590-b399e5b1a43a?w=600&q=80",
    desc: "High-quality hulled white sesame seeds with a clean, mild, nutty flavor. Ideal for high-volume sesame product manufacturing. Consistent quality ensures reliable production output.",
    uses: ["Sesame confectionery", "Baking & bread toppings", "Tahini production", "Cooking & garnishing"],
    available: ["Raw", "Hulled & Cleaned"],
    specs: [
      { label: "Moisture", value: "≤ 6%" },
      { label: "Purity", value: "≥ 99.5%" },
      { label: "Oil Content", value: "48–52%" },
      { label: "Min. Order", value: "5 kg (retail) / 50 kg (wholesale)" },
    ],
  },
  {
    id: "cleaned",
    color: "#0a7a4a",
    accent: "#0d9a60",
    light: "#e6f7f0",
    emoji: "✨",
    name: "Cleaned Black Sesame",
    tagline: "Ready-to-use, sorted & processed",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    desc: "Thoroughly cleaned and machine-sorted black sesame seeds. Dust-free, stone-free, and ready for immediate use in food production. Saves processing time and reduces waste.",
    uses: ["Direct food production", "High-end confectionery", "Export-quality products", "Sesame oil (cold press)"],
    available: ["Cleaned & Sorted", "Vacuum Packed (on request)"],
    specs: [
      { label: "Moisture", value: "≤ 5.5%" },
      { label: "Purity", value: "≥ 99.9%" },
      { label: "Foreign Matter", value: "< 0.1%" },
      { label: "Min. Order", value: "5 kg (retail) / 50 kg (wholesale)" },
    ],
  },
];

/* ─── JAGGERY DATA ─── */
const JG_SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85",
    caption: "Farm-fresh organic jaggery blocks",
  },
  {
    url: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=900&q=85",
    caption: "Naturally processed, no additives",
  },
  {
    url: "https://images.unsplash.com/photo-1559181567-c3190aa9dbe2?w=900&q=85",
    caption: "Rich golden colour — pure sugarcane",
  },
  {
    url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=85",
    caption: "Available in block and granule form",
  },
];

const JG_USES = [
  { icon: "🍬", title: "Sesame Sweets & Brittle", desc: "The primary binding sweetener for traditional sesame candy and gingelly brittle." },
  { icon: "🍞", title: "Confectionery & Baking", desc: "Adds deep caramel complexity to baked goods, cookies, and artisan breads." },
  { icon: "🥛", title: "Traditional Beverages", desc: "Used in herbal drinks, rice-based porridges, and Ayurvedic preparations." },
  { icon: "🌿", title: "Health & Wellness", desc: "Rich in iron, magnesium and potassium. A preferred alternative to refined sugar." },
];

const JG_VARIANTS = [
  {
    name: "Block Jaggery",
    color: "#7a4a00",//color: "#0a7a4a",
    light: "#fff4e6",
    desc: "Traditional solid blocks. Long shelf life. Easy to portion for production.",
    sizes: ["250 g", "500 g", "1 kg", "5 kg packs", "50 kg Boxes [Include Discount]"],
  },
];

const JG_QUICK = [
  { label: "Type", value: "Unrefined / Natural" },
  { label: "Source", value: "Fresh Sugarcane Juice" },
  { label: "Forms Available", value: "Block & Granule" },
  { label: "Moisture", value: "≤ 8%" },
  { label: "Sucrose Content", value: "≥ 65%" },
  { label: "Min. Order (Retail)", value: "5 kg" },
  { label: "Min. Order (Wholesale)", value: "50 kg" },
  { label: "Shelf Life", value: "12 months (sealed)" },
];

const JG_WHY = [
  { icon: "🌿", title: "100% Natural, No Additives", desc: "No chemicals, no artificial colour, no preservatives. Pure cane goodness from farm to your production line." },
  { icon: "⚖️", title: "Consistent Quality", desc: "Batch-tested for moisture and sucrose content. Every order meets the same standard." },
  { icon: "📦", title: "Flexible Pack Sizes", desc: "Retail 250 g blocks to 50 kg wholesale sacks — we supply what you need at the scale you need." },
  { icon: "🤝", title: "Direct Supplier Pricing", desc: "No middlemen. Buy directly from us for the best rate on both retail and wholesale quantities." },
];

/* ─── SLIDESHOW ─── */
function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (idx === current) return;
    setFading(true);
    setTimeout(() => { setCurrent(idx); setFading(false); }, 350);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => { setCurrent(c => (c + 1) % JG_SLIDES.length); setFading(false); }, 350);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const prev = () => { clearInterval(timerRef.current); goTo((current - 1 + JG_SLIDES.length) % JG_SLIDES.length); };
  const next = () => { clearInterval(timerRef.current); goTo((current + 1) % JG_SLIDES.length); };

  return (
    <div className="jg-slideshow">
      <div className="jg-slide-img-wrap">
        <img
          src={JG_SLIDES[current].url}
          alt={JG_SLIDES[current].caption}
          className={`jg-slide-img${fading ? " fading" : ""}`}
          onError={e => { e.target.src = JG_SLIDES[0].url; }}
        />
        <div className="jg-slide-overlay" />
        <button className="jg-slide-arrow jg-slide-arrow-left" onClick={prev} aria-label="Previous">‹</button>
        <button className="jg-slide-arrow jg-slide-arrow-right" onClick={next} aria-label="Next">›</button>
        <div className="jg-slide-caption">{JG_SLIDES[current].caption}</div>
      </div>
      <div className="jg-slide-dots">
        {JG_SLIDES.map((_, i) => (
          <button key={i} className={`jg-dot${i === current ? " active" : ""}`}
            onClick={() => { clearInterval(timerRef.current); goTo(i); }}
            aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

/* ─── SESAME CARD ─── */
function ProductCard({ product }) {
  return (
    <div className="ss-card" style={{ "--accent": product.color, "--light": product.light }}>
      <div className="ss-card-image-wrap">
        <img src={product.image} alt={product.name} className="ss-card-image"
          onError={e => { e.target.style.display = "none"; }} />
        <div className="ss-card-image-overlay" style={{ background: product.color }} />
        <div className="ss-card-image-badge"><span className="ss-card-emoji">{product.emoji}</span></div>
      </div>
      <div className="ss-card-header" style={{ background: product.color }}>
        <div>
          <div className="ss-card-name">{product.name}</div>
          <div className="ss-card-tagline">{product.tagline}</div>
        </div>
      </div>
      <div className="ss-card-body">
        <p className="ss-card-desc">{product.desc}</p>
        <div className="ss-card-section-label">Common Uses</div>
        <ul className="ss-uses">{product.uses.map(u => <li key={u}>{u}</li>)}</ul>
        <div className="ss-card-section-label">Available As</div>
        <div className="ss-available">
          {product.available.map(a => (
            <span key={a} className="ss-avail-chip" style={{ background: product.light, color: product.color }}>{a}</span>
          ))}
        </div>
        <div className="ss-card-section-label">Specifications</div>
        <div className="ss-specs">
          {product.specs.map(s => (
            <div key={s.label} className="ss-spec-row">
              <span>{s.label}</span><strong style={{ color: product.color }}>{s.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function ProductsPage() {
  const waMsg = encodeURIComponent("Hi! I'm interested in *Organic Jaggery*. Please share pricing and availability.");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ss-root {
          font-family: 'DM Sans', sans-serif;
          background: #f7f9ff;
          min-height: 100vh;
          padding-top: 105px;
        }

        /* ── HERO ── */
        .ss-hero {
          border-bottom: 1px solid #e8eef8;
          padding: 56px 48px 44px;
          text-align: center;
        }
        .ss-hero-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #1e4fd8; margin-bottom: 14px;
        }
        .ss-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(34px, 4.5vw, 56px);
          color: #1a1a2e; margin-bottom: 14px; line-height: 1.1;
        }
        .ss-hero-title em { font-style: italic; color: #1e4fd8; }
        .ss-hero-sub {
          font-size: 16px; color: #6a7a9a;
          font-weight: 300; max-width: 520px;
          margin: 0 auto; line-height: 1.75;
        }

        /* ── INTRO ── */
        .ss-intro {
          max-width: 800px; margin: 48px auto 0; padding: 0 48px;
          text-align: center;
        }
        .ss-intro p { font-size: 16px; color: #5a6a8a; line-height: 1.85; font-weight: 300; }

        /* ── SESAME GRID ── */
        .ss-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
          padding: 40px 48px 48px;
          max-width: 1280px; margin: 0 auto;
        }

        /* ── SESAME CARD ── */
        .ss-card {
          background: white; border-radius: 16px; overflow: hidden;
          border: 1px solid #e8eef8;
          box-shadow: 0 4px 20px rgba(30,79,216,0.06);
          transition: box-shadow 0.3s, transform 0.3s;
          display: flex; flex-direction: column;
        }
        .ss-card:hover { box-shadow: 0 12px 40px rgba(30,79,216,0.14); transform: translateY(-4px); }
        .ss-card-image-wrap { position: relative; height: 190px; overflow: hidden; }
        .ss-card-image { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .ss-card:hover .ss-card-image { transform: scale(1.05); }
        .ss-card-image-overlay { position: absolute; inset: 0; opacity: 0.45; mix-blend-mode: multiply; }
        .ss-card-image-badge {
          position: absolute; bottom: 14px; right: 16px;
          background: white; border-radius: 50%;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.18); font-size: 22px;
        }
        .ss-card-header { padding: 16px 24px 14px; }
        .ss-card-name { font-family: 'DM Serif Display', serif; font-size: 19px; color: white; margin-bottom: 3px; }
        .ss-card-tagline { font-size: 12px; color: rgba(255,255,255,0.75); font-weight: 400; }
        .ss-card-body { padding: 20px 24px 24px; flex: 1; display: flex; flex-direction: column; }
        .ss-card-desc { font-size: 13px; color: #5a6a8a; line-height: 1.7; font-weight: 300; margin-bottom: 16px; }
        .ss-card-section-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #8a9abf;
          margin-bottom: 7px; margin-top: 14px;
        }
        .ss-uses { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 4px; }
        .ss-uses li { font-size: 12.5px; color: #3a4a6a; padding-left: 16px; position: relative; }
        .ss-uses li::before { content: '→'; position: absolute; left: 0; color: var(--accent); font-size: 11px; }
        .ss-available { display: flex; flex-wrap: wrap; gap: 7px; }
        .ss-avail-chip { font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 100px; letter-spacing: 0.3px; }
        .ss-specs { display: flex; flex-direction: column; gap: 0; }
        .ss-spec-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 7px 0; border-bottom: 1px solid #f0f4ff;
          font-size: 12.5px; color: #5a6a8a;
        }
        .ss-spec-row:last-child { border-bottom: none; }
        .ss-spec-row strong { font-weight: 600; font-size: 12.5px; }

        /* ══════════════════════════════════════
           JAGGERY SECTION
        ══════════════════════════════════════ */
        .jg-section-wrapper {
          background: #fffaf4;
          border-top: 1px solid #f0e8d8;
          border-bottom: 1px solid #f0e8d8;
          padding: 64px 48px;
        }

        /* Section header */
        .jg-section-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .jg-section-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #7a4a00; margin-bottom: 12px;
        }
        .jg-section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 3.5vw, 44px);
          color: #1a1a2e; line-height: 1.1; margin-bottom: 10px;
        }
        .jg-section-title em { font-style: italic; color: #7a4a00; }
        .jg-section-sub {
          font-size: 15px; color: #6a7a9a; font-weight: 300;
          max-width: 520px; margin: 0 auto; line-height: 1.7;
        }

        /* Divider */
        .jg-divider {
          display: flex; align-items: center; gap: 16px;
          max-width: 300px; margin: 0 auto 48px;
        }
        .jg-divider-line { flex: 1; height: 1px; background: #e8d5b0; }
        .jg-divider-icon { font-size: 20px; }

        /* Two-column layout */
        .jg-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 1180px;
          margin: 0 auto;
          align-items: start;
        }

        /* LEFT */
        .jg-left {
          position: sticky;
          top: 120px;
          padding-right: 36px;
        }
        .jg-slideshow { width: 100%; }
        .jg-slide-img-wrap {
          position: relative; width: 100%;
          border-radius: 16px; overflow: hidden;
          aspect-ratio: 4/3;
          background: #e8d5b0;
          box-shadow: 0 8px 40px rgba(122,74,0,0.15);
        }
        .jg-slide-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: opacity 0.35s ease; }
        .jg-slide-img.fading { opacity: 0; }
        .jg-slide-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(122,74,0,0.55) 0%, transparent 50%);
          pointer-events: none;
        }
        .jg-slide-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.85); border: none; border-radius: 50%;
          width: 38px; height: 38px; font-size: 22px; line-height: 1;
          cursor: pointer; color: #7a4a00; transition: background 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .jg-slide-arrow:hover { background: white; }
        .jg-slide-arrow-left { left: 12px; }
        .jg-slide-arrow-right { right: 12px; }
        .jg-slide-caption {
          position: absolute; bottom: 14px; left: 16px; right: 16px;
          font-size: 12px; color: rgba(255,255,255,0.9); font-weight: 400; letter-spacing: 0.3px;
        }
        .jg-slide-dots { display: flex; justify-content: center; gap: 8px; margin-top: 14px; }
        .jg-dot { width: 8px; height: 8px; border-radius: 50%; border: none; background: #d4c4a8; cursor: pointer; transition: background 0.25s, transform 0.25s; padding: 0; }
        .jg-dot.active { background: #7a4a00; transform: scale(1.3); }

        .jg-quick-info {
          margin-top: 28px; background: white; border-radius: 14px;
          border: 1px solid #e8eef8; padding: 22px 24px;
          box-shadow: 0 2px 12px rgba(122,74,0,0.06);
        }
        .jg-quick-info-title { font-family: 'DM Serif Display', serif; font-size: 18px; color: #1a1a2e; margin-bottom: 16px; }
        .jg-quick-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 8px 0; border-bottom: 1px solid #f0f4ff;
          font-size: 13px; color: #5a6a8a;
        }
        .jg-quick-row:last-child { border-bottom: none; }
        .jg-quick-row strong { color: #7a4a00; font-weight: 600; font-size: 13px; }

        .jg-left-actions { display: flex; gap: 10px; margin-top: 20px; }
        .jg-btn-wa {
          flex: 1; padding: 13px 0; background: #25D366; color: white;
          font-size: 13px; font-weight: 600; border-radius: 10px;
          text-decoration: none; text-align: center; transition: background 0.2s;
        }
        .jg-btn-wa:hover { background: #1ebe5d; }
        .jg-btn-call {
          padding: 13px 20px; border: 1.5px solid #e8d5b0;
          background: #fff8f0; border-radius: 10px; font-size: 13px;
          font-weight: 600; color: #7a4a00; text-decoration: none;
          transition: all 0.2s; white-space: nowrap;
        }
        .jg-btn-call:hover { background: #fff4e6; }

        /* RIGHT */
        .jg-right { padding-left: 36px; border-left: 1px solid #e8eef8; }
        .jg-info-section { margin-bottom: 32px; }
        .jg-info-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #a06010;
          margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .jg-info-label::after { content: ''; flex: 1; height: 1px; background: #f0e8d8; }
        .jg-desc { font-size: 15px; color: #4a5a7a; line-height: 1.85; font-weight: 300; }
        .jg-desc + .jg-desc { margin-top: 12px; }

        .jg-uses-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .jg-use-card {
          background: white; border-radius: 12px;
          border: 1px solid #e8eef8; padding: 16px;
          box-shadow: 0 2px 8px rgba(122,74,0,0.04);
        }
        .jg-use-icon { font-size: 24px; margin-bottom: 8px; }
        .jg-use-title { font-size: 13px; font-weight: 600; color: #1a1a2e; margin-bottom: 5px; }
        .jg-use-desc { font-size: 12px; color: #6a7a9a; line-height: 1.6; font-weight: 300; }

        .jg-variants { display: flex; flex-direction: column; gap: 14px; }
        .jg-variant-card { border-radius: 12px; overflow: hidden; border: 1px solid #e8eef8; box-shadow: 0 2px 8px rgba(122,74,0,0.04); }
        .jg-variant-header { padding: 12px 18px; display: flex; align-items: center; justify-content: space-between; }
        .jg-variant-name { font-family: 'DM Serif Display', serif; font-size: 16px; color: white; }
        .jg-variant-body { background: white; padding: 14px 18px; }
        .jg-variant-desc { font-size: 13px; color: #5a6a8a; line-height: 1.6; font-weight: 300; margin-bottom: 12px; }
        .jg-variant-sizes { display: flex; flex-wrap: wrap; gap: 7px; }
        .jg-variant-size { font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 100px; border: 1.5px solid; }

        .jg-why-list { display: flex; flex-direction: column; gap: 12px; }
        .jg-why-item {
          display: flex; align-items: flex-start; gap: 12px;
          background: white; border-radius: 10px;
          border: 1px solid #e8eef8; padding: 14px 16px;
        }
        .jg-why-icon {
          width: 32px; height: 32px; border-radius: 8px;
          background: #fff4e6; display: flex; align-items: center;
          justify-content: center; font-size: 16px; flex-shrink: 0;
        }
        .jg-why-text-title { font-size: 13px; font-weight: 600; color: #1a1a2e; margin-bottom: 3px; }
        .jg-why-text-desc { font-size: 12px; color: #6a7a9a; line-height: 1.55; font-weight: 300; }

        /* ── CTA BAR ── */
        .prods-cta-bar {
          background: linear-gradient(135deg, #1a1a2e 0%, #1e4fd8 100%);
          margin: 0 48px 60px; border-radius: 16px;
          padding: 40px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
        }
        .prods-cta-text h3 { font-family: 'DM Serif Display', serif; font-size: 26px; color: white; margin-bottom: 6px; }
        .prods-cta-text p { font-size: 14px; color: rgba(255,255,255,0.7); }
        .prods-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .prods-cta-wa {
          padding: 13px 28px; background: #25D366; color: white;
          font-weight: 600; font-size: 14px; border-radius: 8px;
          text-decoration: none; transition: background 0.2s;
        }
        .prods-cta-wa:hover { background: #1ebe5d; }
        .prods-cta-call {
          padding: 13px 28px;
          background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.3);
          color: white; font-weight: 600; font-size: 14px;
          border-radius: 8px; text-decoration: none;
          transition: background 0.2s;
        }
        .prods-cta-call:hover { background: rgba(255,255,255,0.2); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .jg-section-wrapper { padding: 48px 24px; }
          .jg-body { grid-template-columns: 1fr; }
          .jg-left { position: static; padding-right: 0; margin-bottom: 40px; }
          .jg-right { padding-left: 0; border-left: none; border-top: 1px solid #e8eef8; padding-top: 36px; }
          .ss-hero { padding: 40px 24px 36px; }
          .ss-intro { padding: 0 24px; }
          .ss-grid { padding: 32px 24px 40px; }
          .prods-cta-bar { margin: 0 24px 48px; padding: 28px 24px; }
        }
        @media (max-width: 520px) {
          .jg-uses-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ss-root">

        {/* ── SESAME HERO ── */}
        <div className="ss-hero">
          <div className="ss-hero-eyebrow">Aththanayaka Supermart</div>
          <h1 className="ss-hero-title">Our <em>Products</em></h1>
          <p className="ss-hero-sub">Premium sesame seeds and natural sweeteners — sourced and supplied for food manufacturers and retailers.</p>
        </div>

        <div className="ss-intro">
          <p>Whether you're producing sesame sweets, extracting oil, or supplying retail — we offer the right product for your exact need. All varieties available in retail and wholesale quantities.</p>
        </div>

        {/* ── SESAME CARDS ── */}
        <div className="ss-grid">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* ══════════════════════════════════════
            JAGGERY SECTION
        ══════════════════════════════════════ */}
        <div className="jg-section-wrapper">

          <div className="jg-section-header">
            <div className="jg-section-eyebrow">Aththanayaka Supermart</div>
            <h2 className="jg-section-title">Organic <em>Jaggery</em></h2>
            <p className="jg-section-sub">Natural, unrefined sweetener made from fresh sugarcane juice — the heart of authentic sesame confectionery.</p>
          </div>

          <div className="jg-divider">
            <div className="jg-divider-line" />
            <div className="jg-divider-icon">🍯</div>
            <div className="jg-divider-line" />
          </div>

          <div className="jg-body">

            {/* LEFT */}
            <div className="jg-left">
              <Slideshow />

              <div className="jg-quick-info">
                <div className="jg-quick-info-title">At a Glance</div>
                {JG_QUICK.map(r => (
                  <div key={r.label} className="jg-quick-row">
                    <span>{r.label}</span>
                    <strong>{r.value}</strong>
                  </div>
                ))}
              </div>

              {/* Variants */}
              <div className="jg-info-section" style={{ marginTop: 28 }}>
                <div className="jg-info-label">Available Variants</div>
                <div className="jg-variants">
                  {JG_VARIANTS.map(v => (
                    <div key={v.name} className="jg-variant-card">
                      <div className="jg-variant-header" style={{ background: v.color }}>
                        <div className="jg-variant-name">{v.name}</div>
                      </div>
                      <div className="jg-variant-body">
                        <p className="jg-variant-desc">{v.desc}</p>
                        <div className="jg-variant-sizes">
                          {v.sizes.map(s => (
                            <span key={s} className="jg-variant-size" style={{ color: v.color, borderColor: v.color, background: v.light }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="jg-right">

              <div className="jg-info-section">
                <div className="jg-info-label">About This Product</div>
                <p className="jg-desc">
                  Our Organic Jaggery is crafted from freshly pressed sugarcane juice, boiled and set without any chemical processing. Unlike refined sugar, jaggery retains its natural minerals and carries a deep, rich molasses flavour that is irreplaceable in traditional recipes.
                </p>
                <p className="jg-desc" style={{ marginTop: 12 }}>
                  It is the primary sweetener used in sesame brittle, coconut candy, and a wide range of Sri Lankan and South Asian confectionery. We supply both block and granule forms suitable for artisan producers and large-scale food manufacturers.
                </p>
              </div>

              <div className="jg-info-section">
                <div className="jg-info-label">Common Uses</div>
                <div className="jg-uses-grid">
                  {JG_USES.map(u => (
                    <div key={u.title} className="jg-use-card">
                      <div className="jg-use-icon">{u.icon}</div>
                      <div className="jg-use-title">{u.title}</div>
                      <div className="jg-use-desc">{u.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="jg-info-section">
                <div className="jg-info-label">Why Choose Ours</div>
                <div className="jg-why-list">
                  {JG_WHY.map(w => (
                    <div key={w.title} className="jg-why-item">
                      <div className="jg-why-icon">{w.icon}</div>
                      <div>
                        <div className="jg-why-text-title">{w.title}</div>
                        <div className="jg-why-text-desc">{w.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── CTA BAR ── */}
        <div style={{ paddingTop: 60 }}>
          <div className="prods-cta-bar">
            <div className="prods-cta-text">
              <h3>Need a bulk order or custom quote?</h3>
              <p>Contact us directly — we handle wholesale, retail and special requirements.</p>
            </div>
            <div className="prods-cta-actions">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="prods-cta-wa">💬 WhatsApp Us</a>
              <a href={`tel:${PHONE}`} className="prods-cta-call">📞 Call Now</a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}