import { Link } from "react-router-dom";

const WHATSAPP = "94XXXXXXXXX";

const VALUES = [
  { emoji: "🌾", title: "Quality First", desc: "Every batch of sesame seeds is carefully sourced and checked before supply. We never compromise on product quality." },
  { emoji: "🤝", title: "Trusted Relationships", desc: "We build long-term partnerships with sesame product manufacturers across Sri Lanka — not just one-time transactions." },
  { emoji: "🚚", title: "Reliable Supply", desc: "Consistent stock availability so your production never stops. We understand manufacturing deadlines." },
  { emoji: "💰", title: "Fair Pricing", desc: "Transparent, competitive pricing for both retail and wholesale. No hidden charges, no surprises." },
];

const STATS = [
  { num: "12+", label: "Years in Business" },
  { num: "50+", label: "Regular Clients" },
  { num: "4", label: "Sesame Varieties" },
  { num: "100%", label: "Sri Lankan Sourced" },
];

const QUICK_FACTS = [
  { emoji: "🌾", label: "Speciality", val: "Sesame Seeds & Production Supplies" },
  { emoji: "🌾", label: "Quality First", val: "Every batch of sesame seeds is carefully sourced and checked before supply. We never compromise on product quality." },
  { emoji: "🤝", label: "Trusted Relationships", val: "We build long-term partnerships with sesame product manufacturers across Sri Lanka — not just one-time transactions." },
  { emoji: "🚚", label: "Reliable Supply", val: "Consistent stock availability so your production never stops. We understand manufacturing deadlines." },
  { emoji: "💰", label: "Fair Pricing", val: "Transparent, competitive pricing for both retail and wholesale. No hidden charges, no surprises." },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ab-root {
          font-family: 'DM Sans', sans-serif;
          background: #f7f9f4;
          min-height: 100vh;
          padding-top: 105px;
          color: #1a1a2e;
        }

        /* ── HERO ── */
        .ab-hero {
          border-bottom: 1px solid #e8eee0;
          padding: 56px 48px 44px;
          text-align: center;
          background: #f7f9f4;
        }
        .ab-hero-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #7a4a00; margin-bottom: 14px;
        }
        .ab-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(34px, 4.5vw, 56px);
          color: #1a1a2e; margin-bottom: 14px; line-height: 1.1;
        }
        .ab-hero-title em { font-style: italic; color: #7a4a00; }
        .ab-hero-sub {
          font-size: 16px; color: #6a7a6a;
          font-weight: 300; max-width: 520px;
          margin: 0 auto; line-height: 1.75;
        }

        /* ── STATS ── */
        .ab-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #fff8f0;
          border-bottom: 1px solid #e8d5b0;
        }
        .ab-stat {
          padding: 40px 32px;
          border-right: 1px solid #e8d5b0;
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 48px; font-weight: 400;
          color: #7a4a00; line-height: 1;
          margin-bottom: 8px;
        }
        .ab-stat-label {
          font-size: 11px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: #9a8a72;
        }

        /* ── STORY ── */
        .ab-story-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 64px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .ab-section-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #a06010;
          margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .ab-section-eyebrow::after { content: ''; flex: 1; height: 1px; background: #e8d5b0; }

        .ab-story-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(26px, 2.8vw, 36px);
          color: #1a1a2e;
          margin-bottom: 24px;
          line-height: 1.2;
        }
        .ab-story-body p {
          font-size: 14.5px; color: #5a6a5a;
          line-height: 1.9; font-weight: 300;
          margin-bottom: 14px;
        }
        .ab-story-body p:last-child { margin-bottom: 0; }

        /* Quick facts panel — matches product card style */
        .ab-facts-panel {
          background: white;
          border-radius: 16px;
          border: 1px solid #e8eee0;
          box-shadow: 0 4px 20px rgba(122,74,0,0.07);
          overflow: hidden;
        }
        .ab-facts-panel-header {
          background: #7a4a00;
          padding: 16px 24px 14px;
        }
        .ab-facts-panel-title {
          font-family: 'DM Serif Display', serif;
          font-size: 19px; color: white; margin-bottom: 3px;
        }
        .ab-facts-panel-sub {
          font-size: 12px; color: rgba(255,255,255,0.75); font-weight: 400;
        }
        .ab-facts-panel-body { padding: 8px 24px 16px; }
        .ab-facts-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #f0f4f0;
        }
        .ab-facts-row:last-child { border-bottom: none; }
        .ab-facts-emoji { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
        .ab-facts-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #8a9abf;
          margin-bottom: 3px;
        }
        .ab-facts-val {
          font-size: 13.5px; color: #7a4a00; font-weight: 600;
        }

        /* ── DIVIDER ── */
        .ab-divider {
          display: flex; align-items: center; gap: 16px;
          max-width: 320px; margin: 0 auto 0;
          padding: 0 48px;
        }
        .ab-divider-line { flex: 1; height: 1px; background: #e8d5b0; }
        .ab-divider-icon { font-size: 20px; }

        /* ── VALUES ── */
        .ab-values-section {
          padding: 64px 48px 72px;
          max-width: 1180px;
          margin: 0 auto;
        }
        .ab-values-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(26px, 3vw, 38px);
          color: #1a1a2e; margin-bottom: 32px;
          line-height: 1.2;
        }
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .ab-value-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #e8eee0;
          box-shadow: 0 4px 20px rgba(122,74,0,0.05);
          padding: 28px;
          transition: box-shadow 0.3s, transform 0.3s;
          display: flex; flex-direction: column;
        }
        .ab-value-card:hover {
          box-shadow: 0 12px 40px rgba(122,74,0,0.12);
          transform: translateY(-3px);
        }
        .ab-value-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: #fff4e6; display: flex; align-items: center;
          justify-content: center; font-size: 22px; margin-bottom: 16px;
        }
        .ab-value-title {
          font-family: 'DM Serif Display', serif;
          font-size: 20px; color: #1a1a2e; margin-bottom: 10px;
        }
        .ab-value-desc {
          font-size: 13px; color: #6a7a6a;
          line-height: 1.75; font-weight: 300;
        }

        /* ── CTA BAR (matches products page) ── */
        .ab-cta-bar {
          background: linear-gradient(135deg, #5a3200 0%, #7a4a00 100%);
          margin: 0 48px 60px;
          border-radius: 16px;
          padding: 40px 48px;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
        }
        .ab-cta-text h3 {
          font-family: 'DM Serif Display', serif;
          font-size: 26px; color: white; margin-bottom: 6px;
        }
        .ab-cta-text p { font-size: 14px; color: rgba(255,255,255,0.7); }
        .ab-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .ab-btn-wa {
          padding: 13px 28px; background: #25D366; color: white;
          font-weight: 600; font-size: 14px; border-radius: 8px;
          text-decoration: none; transition: background 0.2s;
        }
        .ab-btn-wa:hover { background: #1ebe5d; }
        .ab-btn-products {
          padding: 13px 28px;
          background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.3);
          color: white; font-weight: 600; font-size: 14px;
          border-radius: 8px; text-decoration: none;
          transition: background 0.2s;
        }
        .ab-btn-products:hover { background: rgba(255,255,255,0.2); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ab-story-section { grid-template-columns: 1fr; gap: 36px; padding: 48px 24px; }
          .ab-stats { grid-template-columns: repeat(2, 1fr); }
          .ab-stat:nth-child(2) { border-right: none; }
          .ab-stat:nth-child(3) { border-top: 1px solid #e8d5b0; }
          .ab-stat:nth-child(4) { border-top: 1px solid #e8d5b0; border-right: none; }
          .ab-values-section { padding: 48px 24px 56px; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-hero { padding: 40px 24px 36px; }
          .ab-cta-bar { margin: 0 24px 48px; padding: 28px 24px; }
        }
        @media (max-width: 520px) {
          .ab-stat { padding: 24px 20px; }
          .ab-stat-num { font-size: 38px; }
        }
      `}</style>

      <div className="ab-root">

        {/* ── HERO ── */}
        <div className="ab-hero">
          <div className="ab-hero-eyebrow">Aththanayaka Supermart</div>
          <h1 className="ab-hero-title">About <em>Us</em></h1>
          <p className="ab-hero-sub">Sri Lanka's trusted supplier of sesame seeds, jaggery, and all packaging materials for sesame product manufacturers — for over a decade.</p>
        </div>

        {/* ── STATS ── */}
        <div className="ab-stats">
          {STATS.map(s => (
            <div className="ab-stat" key={s.label}>
              <div className="ab-stat-num">{s.num}</div>
              <div className="ab-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── STORY ── */}
        <div className="ab-story-section">
          <div>
            <div className="ab-section-eyebrow">Our Story</div>
            <h2 className="ab-story-title">Supplying the People Who Make Sri Lanka's Sesame Products</h2>
            <div className="ab-story-body">
              <p>Aththanayaka Supermart was founded with one clear purpose: to be the most reliable source of sesame seeds and production materials for Sri Lankan sesame product manufacturers.</p>
              <p>For over 12 years, we have built our reputation by keeping shelves stocked, prices honest, and quality consistent. From small home-based sesame sweet producers to larger manufacturing businesses, we serve them all.</p>
              <p>We supply everything needed in the sesame production chain — black sesame, white sesame, cleaned sesame, jaggery, tissue paper, polythene covers, sealing rolls, and more. You get everything in one place, saving you time and effort.</p>
              <p>Whether you walk into our shop or call us for a delivery, you'll get the same honest service we've always provided.</p>
            </div>
          </div>

          <div className="ab-facts-panel">
            <div className="ab-facts-panel-header">
              <div className="ab-facts-panel-title">Why Choose Us</div>
              <div className="ab-facts-panel-sub">Four Principles We Never Compromise</div>
            </div>
            <div className="ab-facts-panel-body">
              {QUICK_FACTS.map(item => (
                <div key={item.label} className="ab-facts-row">
                  <div className="ab-facts-emoji">{item.emoji}</div>
                  <div>
                    <div className="ab-facts-label">{item.label}</div>
                    <div className="ab-facts-val">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}