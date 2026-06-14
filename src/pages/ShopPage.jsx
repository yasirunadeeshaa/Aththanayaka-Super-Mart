import { useState, useRef, useEffect } from "react";

/* ─── IMAGE IMPORTS ─── */
// Sesame
import blacksesami      from "../../src/assets/sasemi6.jpg";
import whiteseasami     from "../../src/assets/sasemi15.jpg";
import blackwhitesesami from "../../src/assets/sasemi7.jpg";
// Jaggery
import jaggery          from "../../src/assets/jaggery.avif";
// Packaging
import polytheneImg     from "../../src/assets/polythene.webp";
import tissueImg        from "../../src/assets/tissue.jpg";
import papersImg        from "../../src/assets/pati.webp";
// Hero background
import heroBg           from "../../src/assets/back.png";

/* ─── WHATSAPP / PHONE ─── */
const WHATSAPP = "94XXXXXXXXX";
const PHONE = "+94 XX XXX XXXX";

/* ─── PRODUCT DATA ─── */
const CATEGORIES = [
  { id: "all",       label: "All Products",      icon: "◈" },
  { id: "sesame",    label: "Sesame Seeds",       icon: "🌿" },
  { id: "jaggery",   label: "Organic Jaggery",    icon: "🍯" },
  { id: "packaging", label: "Packaging Supplies", icon: "📦" },
];

const PRODUCTS = [
  /* ── SESAME ── */
  {
    id: "black-sesame",
    category: "sesame",
    badge: "Best Seller",
    badgeColor: "#1e4fd8",
    emoji: "⚫",
    image: blacksesami,
    name: "Black Sesame Seeds",
    tagline: "Deep flavor · Maximum nutrition",
    shortDesc: "Rich in antioxidants and bold in flavor. Carefully sourced, naturally dried black sesame for oil extraction, sweets, and health supplements.",
    accentColor: "#1a1a2e",
    lightColor: "#f0f0f8",
    price: "Contact for pricing",
    minOrder: "5 kg retail · 50 kg wholesale",
    specs: [
      { label: "Moisture",      value: "≤ 7%" },
      { label: "Purity",        value: "≥ 99%" },
      { label: "Oil Content",   value: "50–55%" },
      { label: "Protein",       value: "~18%" },
      { label: "Shelf Life",    value: "12 months (sealed)" },
      { label: "Origin",        value: "Sri Lanka / India" },
    ],
    variants: ["Raw / Uncleaned", "Sorted & Cleaned"],
    uses: ["Sesame oil extraction", "Traditional sweets & brittle", "Health supplements", "Bakery toppings", "Cold-press oil"],
    highlights: [
      { icon: "🌿", title: "Naturally Dried", desc: "Sun-dried without chemicals or additives." },
      { icon: "🔬", title: "Lab Tested", desc: "Batch-tested for purity and moisture consistency." },
      { icon: "📦", title: "Flexible Packing", desc: "Retail 5 kg bags to 50 kg wholesale sacks." },
    ],
    details: "Our black sesame seeds carry a stronger, slightly bitter-nutty profile compared to white sesame — prized across Asian confectionery and traditional medicine. High oil content makes them ideal for cold-press and commercial oil extraction. Each batch is hand-inspected and machine-sorted to ensure consistent quality across every order.",
  },
  {
    id: "white-sesame",
    category: "sesame",
    badge: "High Demand",
    badgeColor: "#0a7a4a",
    emoji: "⚪",
    image: whiteseasami,
    name: "White Sesame Seeds",
    tagline: "Mild taste · Premium grade",
    shortDesc: "Hulled, clean, and consistent. Ideal for high-volume sesame product manufacturing — tahini, bread, and confectionery.",
    accentColor: "#1e4fd8",
    lightColor: "#e8eeff",
    price: "Contact for pricing",
    minOrder: "5 kg retail · 50 kg wholesale",
    specs: [
      { label: "Moisture",      value: "≤ 6%" },
      { label: "Purity",        value: "≥ 99.5%" },
      { label: "Oil Content",   value: "48–52%" },
      { label: "Protein",       value: "~17%" },
      { label: "Shelf Life",    value: "18 months (sealed)" },
      { label: "Origin",        value: "Sri Lanka / Ethiopia" },
    ],
    variants: ["Raw", "Hulled & Cleaned", "Machine Sorted"],
    uses: ["Tahini production", "Sesame confectionery", "Baking & bread toppings", "Cooking & garnishing", "Export-grade supply"],
    highlights: [
      { icon: "✨", title: "Consistent Grade", desc: "Uniform size and colour for reliable production output." },
      { icon: "🏭", title: "Production Ready", desc: "Hulled varieties go straight into your process line." },
      { icon: "🌍", title: "Export Quality", desc: "Meets international food safety specifications." },
    ],
    details: "High-quality hulled white sesame seeds with a clean, mild, nutty flavour. Consistent quality ensures reliable production output for food manufacturers. Our white sesame is sourced seasonally and stored in climate-controlled conditions to preserve freshness. Both raw and hulled varieties are available — minimum processing to maximum shelf life.",
  },
  {
    id: "cleaned-sesame",
    category: "sesame",
    badge: "Ready to Use",
    badgeColor: "#7a4a00",
    emoji: "✨",
    image: blackwhitesesami,
    name: "Cleaned Black Sesame",
    tagline: "Zero waste · Production-ready",
    shortDesc: "Machine-sorted, dust-free, stone-free black sesame. Saves processing time and reduces production waste.",
    accentColor: "#0a7a4a",
    lightColor: "#e6f7f0",
    price: "Contact for pricing",
    minOrder: "5 kg retail · 50 kg wholesale",
    specs: [
      { label: "Moisture",       value: "≤ 5.5%" },
      { label: "Purity",         value: "≥ 99.9%" },
      { label: "Foreign Matter", value: "< 0.1%" },
      { label: "Oil Content",    value: "52–56%" },
      { label: "Shelf Life",     value: "12 months (sealed)" },
      { label: "Process",        value: "Machine Sorted + Hand Checked" },
    ],
    variants: ["Cleaned & Sorted", "Vacuum Packed (on request)", "Bulk 50 kg sacks"],
    uses: ["Direct food production", "High-end confectionery", "Export-quality products", "Sesame oil (cold press)", "Specialty bakery"],
    highlights: [
      { icon: "🤖", title: "Machine Sorted", desc: "Optical and gravity sorting for zero foreign matter." },
      { icon: "⏱️", title: "Saves Time", desc: "No pre-processing needed — use directly in production." },
      { icon: "💎", title: "Premium Grade", desc: "Highest purity specification we offer." },
    ],
    details: "Thoroughly cleaned and machine-sorted black sesame seeds with a purity specification of ≥ 99.9%. Dust-free, stone-free, and ready for immediate use in food production. Ideal for manufacturers who require the highest consistency without in-house cleaning infrastructure. Vacuum packing available on request for export and long-distance shipments.",
  },

  /* ── JAGGERY ── */
  {
    id: "organic-jaggery",
    category: "jaggery",
    badge: "Organic",
    badgeColor: "#7a4a00",
    emoji: "🍯",
    image: jaggery,
    name: "Organic Block Jaggery",
    tagline: "Unrefined · Naturally sweet",
    shortDesc: "Fresh sugarcane juice boiled and set into golden blocks. The authentic sweetener for sesame brittle, confectionery, and Ayurvedic preparations.",
    accentColor: "#7a4a00",
    lightColor: "#fff4e6",
    price: "Contact for pricing",
    minOrder: "5 kg retail · 50 kg wholesale",
    specs: [
      { label: "Type",           value: "Unrefined / Natural" },
      { label: "Source",         value: "Fresh Sugarcane Juice" },
      { label: "Moisture",       value: "≤ 8%" },
      { label: "Sucrose",        value: "≥ 65%" },
      { label: "Shelf Life",     value: "12 months (sealed)" },
      { label: "Additives",      value: "None — 100% natural" },
    ],
    variants: ["250 g blocks", "500 g blocks", "1 kg blocks", "5 kg packs", "50 kg wholesale sacks"],
    uses: ["Sesame sweets & brittle", "Coconut candy", "Herbal beverages", "Ayurvedic preparations", "Artisan baking"],
    highlights: [
      { icon: "🌿", title: "No Additives", desc: "No chemicals, artificial colour, or preservatives." },
      { icon: "⚖️", title: "Batch Tested", desc: "Moisture and sucrose tested for every batch." },
      { icon: "🤝", title: "Direct Pricing", desc: "Buy direct — no middlemen, best rate guaranteed." },
    ],
    details: "Crafted from freshly pressed sugarcane juice, boiled and set without any chemical processing. Unlike refined sugar, our jaggery retains its natural minerals — iron, magnesium, and potassium — and carries a deep molasses flavour irreplaceable in traditional recipes. The primary sweetener used in sesame brittle, coconut candy, and a wide range of Sri Lankan and South Asian confectionery. Supplied from trusted farm partners who maintain consistent quality across seasons.",
  },

  /* ── PACKAGING ── */
  {
    id: "polythene-rolls",
    category: "packaging",
    badge: "Most Popular",
    badgeColor: "#1e4fd8",
    emoji: "🛍️",
    image: polytheneImg,
    name: "Polythene Rolls",
    tagline: "2\" to 24\" widths · Food-safe",
    shortDesc: "Clear food-grade polythene rolls for sealing sesame products, confectionery, and dry goods. Cut to any length on a heat-sealing machine.",
    accentColor: "#1e4fd8",
    lightColor: "#e8eeff",
    price: "Sold by gram · kg · full roll",
    minOrder: "No minimum — sold by weight",
    specs: [
      { label: "Grade",         value: "Food-safe / FDA-grade" },
      { label: "Gauges",        value: "150 · 300 · Custom" },
      { label: "Widths",        value: "2\" to 24\" (all sizes)" },
      { label: "Sealing",       value: "Heat-seal compatible" },
      { label: "Transparency",  value: "Crystal clear" },
      { label: "Min. Order",    value: "Any weight" },
    ],
    variants: ["2\"", "3\"", "4\"", "6\"", "8\"", "10\"", "12\"", "15\"", "18\"", "24\"", "Gauge 150", "Gauge 300", "Custom width"],
    uses: ["Sesame product sealing", "Confectionery packing", "Dry goods packaging", "Bulk ingredient wrapping", "Retail unit packing"],
    highlights: [
      { icon: "🔒", title: "Airtight Seal", desc: "Compatible with all standard heat-sealing machines." },
      { icon: "📏", title: "All Widths", desc: "2 inch to 24 inch — cut exactly what you need." },
      { icon: "⚖️", title: "Sold by Weight", desc: "No wasteful fixed pack sizes — buy exactly what you use." },
    ],
    details: "Our food-grade polythene rolls are the most-used packaging material in sesame confectionery production. Crystal-clear finish maintains product visibility on retail shelves. Available in Gauge 150 (lighter, flexible) and Gauge 300 (heavier, rigid seals) for different production needs. Custom width rolls available for specialised production lines — contact us with your specifications.",
  },
  {
    id: "tissue-sheets",
    category: "packaging",
    badge: "Food-Grade",
    badgeColor: "#0a7a4a",
    emoji: "🧻",
    image: tissueImg,
    name: "Tissue Sheets",
    tagline: "Soft wrap · Bundle pricing",
    shortDesc: "Food-grade tissue sheets for wrapping sesame sweets, brittle, and traditional confectionery. Plain white, sold in bundles.",
    accentColor: "#0a7a4a",
    lightColor: "#e6f7f0",
    price: "Sold per bundle",
    minOrder: "1 bundle (500 sheets)",
    specs: [
      { label: "Grade",         value: "Food-safe" },
      { label: "Colour",        value: "Plain white" },
      { label: "Bundle sizes",  value: "500 · 1,000 sheets" },
      { label: "Cut",           value: "Standard · Half-sheet · Custom" },
      { label: "Compatible",    value: "All confectionery wrapping" },
      { label: "Min. Order",    value: "1 bundle" },
    ],
    variants: ["Standard sheet", "Half-sheet", "Custom cut (on request)", "Bundle of 500", "Bundle of 1,000"],
    uses: ["Sesame sweet wrapping", "Brittle bar wrapping", "Traditional confectionery", "Gift packaging", "Retail display wrapping"],
    highlights: [
      { icon: "🍬", title: "Sweet-Wrap Ready", desc: "Soft enough for delicate confectionery, strong enough for production." },
      { icon: "📦", title: "Bundle Pricing", desc: "Economical 500 and 1,000 sheet bundles." },
      { icon: "✂️", title: "Custom Cut", desc: "Non-standard sizes cut on request for your line." },
    ],
    details: "Soft food-grade tissue sheets purpose-built for wrapping sesame sweets, brittle, and traditional confectionery. Plain white finish keeps branding consistent. Available in standard and half-sheet sizes — custom cut dimensions available on request for high-volume manufacturers. Sold in bundles of 500 or 1,000 sheets.",
  },
  {
    id: "packaging-papers",
    category: "packaging",
    badge: "Kraft & Wrap",
    badgeColor: "#7a4a00",
    emoji: "📄",
    image: papersImg,
    name: "Packaging Papers",
    tagline: "4\" × 20\" standard · Custom sizes",
    shortDesc: "Kraft and food-wrap papers in multiple sizes. The most popular 4\" × 20\" is ideal for sesame rolls and brittle bars.",
    accentColor: "#7a4a00",
    lightColor: "#fff4e6",
    price: "Sold per bundle",
    minOrder: "1 bundle",
    specs: [
      { label: "Popular size",  value: "4\" × 20\" (most ordered)" },
      { label: "Material",      value: "Kraft / Food-wrap" },
      { label: "Sizes",         value: "6 standard + custom" },
      { label: "Finish",        value: "Uncoated / Natural" },
      { label: "Use",           value: "Wrapping, rolling, sealing" },
      { label: "Min. Order",    value: "1 bundle" },
    ],
    variants: ["4\" × 20\" (Most Popular)", "4\" × 12\"", "6\" × 20\"", "6\" × 30\"", "8\" × 24\"", "Custom sizes on request"],
    uses: ["Sesame roll wrapping", "Brittle bar wrapping", "Product bundling", "Retail presentation", "Kraft gift wrap"],
    highlights: [
      { icon: "📐", title: "6 Standard Sizes", desc: "Ready-to-ship sizes for common production requirements." },
      { icon: "🎁", title: "Retail-Ready", desc: "Clean kraft finish for professional product presentation." },
      { icon: "🔧", title: "Custom Sizes", desc: "Non-standard dimensions available for your specific line." },
    ],
    details: "Kraft and food-wrap papers available in a wide range of width and height combinations. The most popular size is 4 inch wide × 20 inch long — ideal for wrapping sesame rolls and brittle bars as used across Sri Lankan confectionery production. All sizes sold as bundles with wholesale pricing available for large quantity orders.",
  },
];

/* ─── PRODUCT MODAL ─── */
function ProductModal({ product, onClose }) {
  const waMsg = encodeURIComponent(
    `Hi! I'm interested in *${product.name}*. Please share pricing and availability.`
  );

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {/* Header strip */}
        <div className="modal-header" style={{ background: product.accentColor }}>
          <div className="modal-header-emoji">{product.emoji}</div>
          <div>
            {product.badge && (
              <span className="modal-badge" style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)" }}>
                {product.badge}
              </span>
            )}
            <div className="modal-title">{product.name}</div>
            <div className="modal-tagline">{product.tagline}</div>
          </div>
        </div>

        <div className="modal-body">
          {/* About */}
          <div className="modal-section">
            <div className="modal-section-label">About This Product</div>
            <p className="modal-desc">{product.details}</p>
          </div>

          {/* Highlights */}
          <div className="modal-section">
            <div className="modal-section-label">Why Choose Ours</div>
            <div className="modal-highlights">
              {product.highlights.map(h => (
                <div key={h.title} className="modal-highlight-card">
                  <div className="modal-highlight-icon" style={{ background: product.lightColor, color: product.accentColor }}>
                    {h.icon}
                  </div>
                  <div>
                    <div className="modal-highlight-title">{h.title}</div>
                    <div className="modal-highlight-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-cols">
            {/* Specs */}
            <div className="modal-section">
              <div className="modal-section-label">Specifications</div>
              <div className="modal-specs">
                {product.specs.map(s => (
                  <div key={s.label} className="modal-spec-row">
                    <span className="modal-spec-label">{s.label}</span>
                    <strong className="modal-spec-val" style={{ color: product.accentColor }}>{s.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Variants & Uses */}
            <div>
              <div className="modal-section">
                <div className="modal-section-label">Available As</div>
                <div className="modal-chips">
                  {product.variants.map(v => (
                    <span key={v} className="modal-chip" style={{ background: product.lightColor, color: product.accentColor }}>{v}</span>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <div className="modal-section-label">Common Uses</div>
                <ul className="modal-uses">
                  {product.uses.map(u => (
                    <li key={u} style={{ "--bullet": product.accentColor }}>{u}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <div className="modal-section-label">Ordering</div>
                <div className="modal-order-info">
                  <div className="modal-order-row">
                    <span>Price</span><strong style={{ color: product.accentColor }}>{product.price}</strong>
                  </div>
                  <div className="modal-order-row">
                    <span>Min. Order</span><strong style={{ color: product.accentColor }}>{product.minOrder}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="modal-cta">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
              target="_blank" rel="noreferrer"
              className="modal-btn-wa"
            >💬 Order via WhatsApp</a>
            <a href={`tel:${PHONE}`} className="modal-btn-call">📞 Call to Order</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PRODUCT CARD ─── */
function ProductCard({ product, onOpen }) {
  return (
    <article
      className="shop-card"
      style={{ "--card-accent": product.accentColor, "--card-light": product.lightColor }}
      onClick={() => onOpen(product)}
      tabIndex={0}
      onKeyDown={e => { if (e.key === "Enter") onOpen(product); }}
      aria-label={`View details for ${product.name}`}
    >
      <div className="shop-card-top" style={{ background: product.accentColor }}>
        {product.image && (
          <img src={product.image} alt={product.name} className="shop-card-img" />
        )}
        <div className="shop-card-img-overlay" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, ${product.accentColor}ee 100%)` }} />
        <div className="shop-card-top-content">
          <div className="shop-card-emoji">{product.emoji}</div>
          {product.badge && (
            <span className="shop-card-badge" style={{ background: product.badgeColor }}>
              {product.badge}
            </span>
          )}
          <div className="shop-card-name">{product.name}</div>
          <div className="shop-card-tagline">{product.tagline}</div>
        </div>
      </div>

      <div className="shop-card-body">
        <p className="shop-card-desc">{product.shortDesc}</p>

        <div className="shop-card-chips">
          {product.variants.slice(0, 3).map(v => (
            <span key={v} className="shop-card-chip">{v}</span>
          ))}
          {product.variants.length > 3 && (
            <span className="shop-card-chip shop-card-chip-more">+{product.variants.length - 3} more</span>
          )}
        </div>

        <div className="shop-card-specs-preview">
          {product.specs.slice(0, 2).map(s => (
            <div key={s.label} className="shop-card-spec-mini">
              <span>{s.label}</span>
              <strong style={{ color: product.accentColor }}>{s.value}</strong>
            </div>
          ))}
        </div>

        <div className="shop-card-footer">
          <div className="shop-card-order">
            <span className="shop-card-moq-label">Min. Order</span>
            <span className="shop-card-moq">{product.minOrder.split("·")[0].trim()}</span>
          </div>
          <button className="shop-card-btn" style={{ background: product.accentColor }}>
            View Details →
          </button>
        </div>
      </div>
    </article>
  );
}

/* ─── MAIN SHOP PAGE ─── */
export default function ShopPage({ onBack }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const waGeneral = encodeURIComponent("Hi! I'd like to enquire about your products and pricing.");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .shop-root {
          font-family: 'DM Sans', sans-serif;
          background: #f4f7ff;
          min-height: 100vh;
          color: #0f1729;
        }

        /* ══════════════════════════════
           HERO — FIXED
        ══════════════════════════════ */
        .shop-hero {
          position: relative;
          isolation: isolate;               /* NEW: creates stacking context */
          min-height: 920px;               /* NEW: guarantees height even if content is sparse */
          padding: 80px 48px 64px;
          overflow: hidden;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Background image — truly fills the hero */
        .shop-hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        //   filter: brightness(0.30) saturate(1.1) blur(1px);
          transform: scale(1.06);   /* prevents blur edge bleed */
          z-index: -2;              /* below overlay and content */
          pointer-events: none;
          display: block;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
        }

        /* Dark overlay on top of bg image */
        .shop-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(8, 12, 36, 0.45) 0%,
            rgba(8, 12, 36, 0.72) 100%
          );
          z-index: -1;              /* above bg image, below content */
          pointer-events: none;
        }

        /* All direct children of hero are content — no need for z-index hacks */
        .shop-hero-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
          margin-bottom: 28px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .shop-hero-back:hover { color: rgba(255,255,255,0.9); }

        .shop-hero-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 16px;
        }

        .shop-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 5vw, 64px);
          color: #fff;
          line-height: 1.05;
          margin-bottom: 18px;
        }
        .shop-hero-title em { font-style: italic; color: #93b4ff; }

        .shop-hero-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.62);
          font-weight: 300;
          max-width: 560px;
          margin: 0 auto 48px;
          line-height: 1.8;
        }

        /* Stats row */
        .shop-hero-stats {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 0;
          flex-wrap: nowrap;             /* keep on one line on desktop */
        }

        .shop-hero-stat {
          padding: 0 36px;
          border-right: 1px solid rgba(255,255,255,0.15);
          flex-shrink: 0;
        }
        .shop-hero-stat:last-child { border-right: none; }

        .shop-hero-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 30px;
          color: #fff;
          line-height: 1;
          margin-bottom: 5px;
        }
        .shop-hero-stat-lbl {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* ── FILTER BAR ── */
        .shop-filter-bar {
          background: #fff;
          border-bottom: 1px solid #e0e8f8;
          padding: 0 48px;
          display: flex;
          align-items: center;
          gap: 0;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 2px 12px rgba(30,79,216,0.06);
        }
        .shop-filter-tabs {
          display: flex;
          gap: 0;
          flex: 1;
        }
        .shop-filter-tab {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 18px 22px;
          font-size: 13px; font-weight: 500;
          color: #8a9abf; background: none; border: none;
          cursor: pointer; border-bottom: 2px solid transparent;
          transition: all 0.2s; white-space: nowrap; letter-spacing: 0.2px;
        }
        .shop-filter-tab:hover { color: #1e4fd8; }
        .shop-filter-tab.active { color: #1e4fd8; border-bottom-color: #1e4fd8; font-weight: 600; }
        .shop-filter-tab-icon { font-size: 15px; }
        .shop-search-wrap {
          padding: 10px 0 10px 20px;
          border-left: 1px solid #e8eef8;
        }
        .shop-search {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 400;
          background: #f4f7ff; border: 1px solid #e0e8f8;
          border-radius: 8px; padding: 9px 16px 9px 36px;
          color: #0f1729; outline: none; width: 220px;
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='4.5' stroke='%238a9abf' stroke-width='1.3'/%3E%3Cpath d='m9.5 9.5 2.5 2.5' stroke='%238a9abf' stroke-width='1.3' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: 12px center;
          transition: border-color 0.2s;
        }
        .shop-search:focus { border-color: #1e4fd8; }
        .shop-search::placeholder { color: #9aaac8; }

        /* ── GRID ── */
        .shop-section-label {
          padding: 40px 48px 0;
          max-width: 1400px; margin: 0 auto;
        }
        .shop-section-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #9aaac8;
        }
        .shop-section-count {
          font-size: 13px; color: #9aaac8; margin-top: 4px;
        }
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          padding: 24px 48px 64px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .shop-empty {
          grid-column: 1 / -1;
          text-align: center; padding: 80px 24px;
          color: #9aaac8;
        }
        .shop-empty-icon { font-size: 48px; margin-bottom: 16px; }
        .shop-empty-text { font-size: 16px; }

        /* ── PRODUCT CARD ── */
        .shop-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e0e8f8;
          box-shadow: 0 4px 20px rgba(30,79,216,0.05);
          transition: box-shadow 0.3s, transform 0.3s;
          cursor: pointer;
          display: flex; flex-direction: column;
          outline: none;
        }
        .shop-card:hover, .shop-card:focus-visible {
          box-shadow: 0 16px 48px rgba(30,79,216,0.14);
          transform: translateY(-5px);
        }
        .shop-card:focus-visible { outline: 2px solid #1e4fd8; outline-offset: 2px; }

        .shop-card-top {
          padding: 0;
          position: relative;
          min-height: 190px;
          overflow: hidden;
        }
        .shop-card-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .shop-card:hover .shop-card-img { transform: scale(1.06); }
        .shop-card-img-overlay {
          position: absolute; inset: 0; z-index: 1;
        }
        .shop-card-top-content {
          position: relative; z-index: 2;
          padding: 20px 22px 22px;
          display: flex; flex-direction: column; justify-content: flex-end;
          height: 190px;
        }
        .shop-card-emoji {
          font-size: 32px; margin-bottom: 10px; display: block;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.2));
        }
        .shop-card-badge {
          display: inline-block; font-size: 9px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: #fff; padding: 3px 10px; border-radius: 100px;
          margin-bottom: 8px;
        }
        .shop-card-name {
          font-family: 'DM Serif Display', serif;
          font-size: 21px; color: #fff; line-height: 1.1; margin-bottom: 5px;
        }
        .shop-card-tagline {
          font-size: 11.5px; color: rgba(255,255,255,0.65); font-weight: 400;
          letter-spacing: 0.2px;
        }

        .shop-card-body {
          padding: 20px 22px 22px;
          flex: 1; display: flex; flex-direction: column; gap: 14px;
        }
        .shop-card-desc {
          font-size: 13px; color: #526080; line-height: 1.7; font-weight: 300;
        }
        .shop-card-chips {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .shop-card-chip {
          font-size: 10.5px; font-weight: 600;
          padding: 3px 10px; border-radius: 100px; letter-spacing: 0.2px;
          background: var(--card-light); color: var(--card-accent);
        }
        .shop-card-chip-more {
          background: #f4f7ff; color: #9aaac8;
        }
        .shop-card-specs-preview {
          display: flex; flex-direction: column; gap: 0;
          border-top: 1px solid #f0f4ff; border-bottom: 1px solid #f0f4ff;
          padding: 10px 0;
        }
        .shop-card-spec-mini {
          display: flex; justify-content: space-between; align-items: center;
          padding: 5px 0; font-size: 12px; color: #7a8aab;
        }
        .shop-card-spec-mini strong { font-size: 12px; font-weight: 600; }

        .shop-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: auto;
        }
        .shop-card-moq-label {
          font-size: 9px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #9aaac8; display: block; margin-bottom: 2px;
        }
        .shop-card-moq { font-size: 12px; font-weight: 600; color: #0f1729; }
        .shop-card-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 0.5px;
          color: #fff; border: none; border-radius: 8px;
          padding: 9px 18px; cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
        }
        .shop-card-btn:hover { opacity: 0.88; transform: translateX(2px); }

        /* ── MODAL ── */
        .modal-backdrop {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(10,14,40,0.72);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          animation: backdropIn 0.2s ease;
        }
        @keyframes backdropIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-panel {
          background: #fff;
          border-radius: 20px;
          width: 100%; max-width: 820px;
          max-height: 90vh; overflow-y: auto;
          position: relative;
          animation: panelIn 0.25s cubic-bezier(0.34,1.4,0.64,1);
          box-shadow: 0 32px 80px rgba(10,14,40,0.35);
        }
        @keyframes panelIn { from { opacity: 0; transform: scale(0.94) translateY(16px); } to { opacity: 1; transform: none; } }
        .modal-close {
          position: absolute; top: 16px; right: 16px; z-index: 10;
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.3);
          color: #fff; font-size: 14px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.3); }
        .modal-header {
          padding: 32px 32px 28px;
          display: flex; align-items: flex-start; gap: 20px;
          border-radius: 20px 20px 0 0;
        }
        .modal-header-emoji { font-size: 48px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2)); flex-shrink: 0; }
        .modal-badge {
          display: inline-block; font-size: 9px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.85); padding: 3px 10px; border-radius: 100px; margin-bottom: 8px;
        }
        .modal-title {
          font-family: 'DM Serif Display', serif;
          font-size: 30px; color: #fff; line-height: 1.05; margin-bottom: 6px;
        }
        .modal-tagline { font-size: 13px; color: rgba(255,255,255,0.65); font-weight: 400; }
        .modal-body { padding: 28px 32px 32px; }
        .modal-section { margin-bottom: 24px; }
        .modal-section-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #9aaac8;
          margin-bottom: 12px; display: flex; align-items: center; gap: 8px;
        }
        .modal-section-label::after { content: ''; flex: 1; height: 1px; background: #f0f4ff; }
        .modal-desc { font-size: 14px; color: #526080; line-height: 1.85; font-weight: 300; }
        .modal-highlights { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .modal-highlight-card {
          background: #f8faff; border: 1px solid #e8eef8; border-radius: 12px;
          padding: 14px; display: flex; flex-direction: column; gap: 8px;
        }
        .modal-highlight-icon {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
        }
        .modal-highlight-title { font-size: 13px; font-weight: 600; color: #0f1729; margin-bottom: 2px; }
        .modal-highlight-desc { font-size: 12px; color: #7a8aab; line-height: 1.55; font-weight: 300; }
        .modal-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .modal-specs { display: flex; flex-direction: column; }
        .modal-spec-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 8px 0; border-bottom: 1px solid #f4f7ff;
          font-size: 13px; color: #526080;
        }
        .modal-spec-row:last-child { border-bottom: none; }
        .modal-spec-val { font-weight: 600; font-size: 13px; }
        .modal-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .modal-chip {
          font-size: 11px; font-weight: 600;
          padding: 4px 12px; border-radius: 100px;
        }
        .modal-uses { list-style: none; display: flex; flex-direction: column; gap: 5px; }
        .modal-uses li {
          font-size: 13px; color: #526080; padding-left: 16px; position: relative;
          font-weight: 300;
        }
        .modal-uses li::before {
          content: '→'; position: absolute; left: 0;
          color: var(--bullet, #1e4fd8); font-size: 11px; top: 1px;
        }
        .modal-order-info { display: flex; flex-direction: column; gap: 0; }
        .modal-order-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 8px 0; border-bottom: 1px solid #f4f7ff;
          font-size: 13px; color: #526080;
        }
        .modal-order-row:last-child { border-bottom: none; }
        .modal-order-row strong { font-weight: 600; font-size: 13px; }
        .modal-cta {
          display: flex; gap: 12px; margin-top: 28px; padding-top: 24px;
          border-top: 1px solid #f0f4ff;
        }
        .modal-btn-wa {
          flex: 1; padding: 14px 0; background: #25D366; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          border-radius: 10px; text-decoration: none; text-align: center;
          transition: background 0.2s;
        }
        .modal-btn-wa:hover { background: #1ebe5d; }
        .modal-btn-call {
          padding: 14px 28px; border: 1.5px solid #e0e8f8; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          color: #526080; text-decoration: none; background: #f8faff;
          transition: all 0.2s; white-space: nowrap;
        }
        .modal-btn-call:hover { border-color: #1e4fd8; color: #1e4fd8; }

        /* ── BOTTOM CTA ── */
        .shop-cta {
          margin: 0 48px 60px;
          background: linear-gradient(135deg, #0f1729 0%, #1e4fd8 100%);
          border-radius: 20px; padding: 48px 56px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 28px; flex-wrap: wrap;
          position: relative; overflow: hidden;
        }
        .shop-cta::before {
          content: '';
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .shop-cta-text { position: relative; }
        .shop-cta-text h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 28px; color: #fff; margin-bottom: 8px;
        }
        .shop-cta-text p { font-size: 14px; color: rgba(255,255,255,0.6); }
        .shop-cta-actions { display: flex; gap: 12px; position: relative; flex-wrap: wrap; }
        .shop-cta-wa {
          padding: 14px 32px; background: #25D366; color: #fff;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
          border-radius: 10px; text-decoration: none; transition: background 0.2s;
        }
        .shop-cta-wa:hover { background: #1ebe5d; }
        .shop-cta-call {
          padding: 14px 32px;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.25);
          color: #fff; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
          border-radius: 10px; text-decoration: none; transition: background 0.2s;
        }
        .shop-cta-call:hover { background: rgba(255,255,255,0.18); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .shop-hero {
            padding: 52px 24px 48px;
            min-height: 460px;
          }
          .shop-hero-stats {
            flex-wrap: wrap;
            gap: 20px 0;
            justify-content: center;
          }
          .shop-hero-stat {
            padding: 0 24px;
            /* Remove right border when wrapping — use bottom divider feel */
            border-right: 1px solid rgba(255,255,255,0.12);
          }
          /* Every 2nd item on wrap loses its right border to avoid orphan dividers */
          .shop-hero-stat:nth-child(2n) { border-right: none; }
          .shop-hero-stat:last-child { border-right: none; }
          .shop-filter-bar { padding: 0 24px; overflow-x: auto; }
          .shop-filter-tab { padding: 16px 14px; font-size: 12px; }
          .shop-search-wrap { display: none; }
          .shop-grid { padding: 20px 24px 48px; gap: 18px; }
          .shop-section-label { padding: 32px 24px 0; }
          .shop-cta { margin: 0 24px 48px; padding: 32px 28px; }
          .modal-highlights { grid-template-columns: 1fr; }
          .modal-cols { grid-template-columns: 1fr; }
          .modal-panel { border-radius: 16px; }
          .modal-header { padding: 24px 24px 20px; }
          .modal-body { padding: 20px 24px 24px; }
        }
        @media (max-width: 560px) {
          .shop-hero { padding: 40px 20px 40px; min-height: 400px; }
          .shop-hero-title { font-size: 32px; }
          .shop-hero-sub { font-size: 14px; margin-bottom: 36px; }
          .shop-hero-stat { padding: 0 18px; }
          .shop-hero-stat-num { font-size: 24px; }
          .shop-grid { grid-template-columns: 1fr; }
          .modal-cta { flex-direction: column; }
        }
      `}</style>

      <div className="shop-root">

        {/* ══ HERO ══ */}
        <div className="shop-hero">
          {/* Layer 1: background photo */}
          <img src={heroBg} alt="" className="shop-hero-bg" aria-hidden="true" />

          {/* Layer 2: dark overlay (separate element, not ::after pseudo) */}
          {/* <div className="shop-hero-overlay" aria-hidden="true" /> */}

          {/* Layer 3: all content — naturally stacks above layers 1 & 2 via isolation */}
        {onBack && (
        <button className="shop-hero-back" onClick={onBack}>← Back to Home</button>
        )}

        <div style={{
        background: "rgba(0,0,0,0.62)",
        borderRadius: "18px",
        padding: "40px 48px",
        backdropFilter: "blur(2px)",
        width: "100%",
        maxWidth: "720px",
        }}>
        <div className="shop-hero-eyebrow">Aththanayaka Supermart</div>

        <h1 className="shop-hero-title">
            Our <em>Products</em>
        </h1>

        <p className="shop-hero-sub">
            Premium sesame seeds, natural jaggery, and packaging supplies
            sourced with care, supplied for every scale of production.
            Trusted by manufacturers, confectioners, and retailers across Sri Lanka.
        </p>

        {/* ── FEATURE PILLS ── */}
        <div style={{
            display: "flex", flexWrap: "wrap", gap: "10px",
            justifyContent: "center", marginBottom: "40px"
        }}>
            {[
            "🌿 Sun-Dried & Natural",
            "🔬 Batch Lab Tested",
            "📦 Retail to Wholesale",
            "🇱🇰 Sourced from Sri Lanka",
            "✅ No Additives",
            "🚚 Island-wide Supply",
            ].map(pill => (
            <span key={pill} style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.82)",
                borderRadius: "100px",
                padding: "6px 16px",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.3px",
                backdropFilter: "blur(4px)",
            }}>{pill}</span>
            ))}
        </div>

        <div className="shop-hero-stats">
            <div className="shop-hero-stat">
            <div className="shop-hero-stat-num">3</div>
            <div className="shop-hero-stat-lbl">Sesame Grades</div>
            </div>
            <div className="shop-hero-stat">
            <div className="shop-hero-stat-num">99%</div>
            <div className="shop-hero-stat-lbl">Purity Rated</div>
            </div>
            <div className="shop-hero-stat">
            <div className="shop-hero-stat-num">30+</div>
            <div className="shop-hero-stat-lbl">Years Trusted</div>
            </div>
            <div className="shop-hero-stat">
            <div className="shop-hero-stat-num">1000 kg</div>
            <div className="shop-hero-stat-lbl">Max Bulk Order</div>
            </div>
        </div>
        </div>
        </div>

        {/* ── FILTER BAR ── */}
        <div className="shop-filter-bar">
          <div className="shop-filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`shop-filter-tab${activeCategory === cat.id ? " active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="shop-filter-tab-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="shop-search-wrap">
            <input
              className="shop-search"
              type="search"
              placeholder="Search products…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search products"
            />
          </div>
        </div>

        {/* ── GRID ── */}
        <div className="shop-section-label">
          <div className="shop-section-eyebrow">
            {activeCategory === "all" ? "All Products" : CATEGORIES.find(c => c.id === activeCategory)?.label}
          </div>
          <div className="shop-section-count">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</div>
        </div>

        <div className="shop-grid">
          {filtered.length === 0 ? (
            <div className="shop-empty">
              <div className="shop-empty-icon">🔍</div>
              <div className="shop-empty-text">No products match your search.</div>
            </div>
          ) : (
            filtered.map(p => (
              <ProductCard key={p.id} product={p} onOpen={setSelectedProduct} />
            ))
          )}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="shop-cta">
          <div className="shop-cta-text">
            <h3>Need bulk pricing or a custom order?</h3>
            <p>We supply retail to wholesale. Contact us directly for quotes, samples, and custom requirements.</p>
          </div>
          <div className="shop-cta-actions">
            <a href={`https://wa.me/${WHATSAPP}?text=${waGeneral}`} target="_blank" rel="noreferrer" className="shop-cta-wa">
              💬 WhatsApp Us
            </a>
            <a href={`tel:${PHONE}`} className="shop-cta-call">
              📞 Call Now
            </a>
          </div>
        </div>

      </div>

      {/* ── MODAL ── */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}