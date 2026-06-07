import { Link } from "react-router-dom";

const WHATSAPP = "94XXXXXXXXX";

const STATS = [
  { icon: "ti-calendar", num: "12", suffix: "+", label: "Years in Business" },
  { icon: "ti-users",    num: "50", suffix: "+", label: "Regular Clients"   },
  { icon: "ti-leaf",     num: "4",  suffix: "",  label: "Sesame Varieties"  },
  { icon: "ti-map-pin",  num: "100",suffix: "%", label: "Sri Lankan Sourced"},
];

const VALUES = [
  { icon: "ti-shield-check", title: "Quality First",         desc: "Every batch of sesame seeds is carefully sourced and checked before supply. We never compromise on product quality." },
  { icon: "ti-handshake",    title: "Trusted Relationships", desc: "We build long-term partnerships with sesame product manufacturers across Sri Lanka — not just one-time transactions." },
  { icon: "ti-truck",        title: "Reliable Supply",       desc: "Consistent stock availability so your production never stops. We understand manufacturing deadlines." },
  { icon: "ti-coin",         title: "Fair Pricing",          desc: "Transparent, competitive pricing for both retail and wholesale. No hidden charges, no surprises." },
];

const FACTS = [
  { emoji: "🌾", label: "Speciality",           val: "Sesame Seeds & Production Supplies" },
  { emoji: "✅", label: "Quality First",         val: "Every batch carefully sourced & checked. No compromise on product quality." },
  { emoji: "🤝", label: "Trusted Relationships", val: "Long-term partnerships with manufacturers across Sri Lanka." },
  { emoji: "🚚", label: "Reliable Supply",       val: "Consistent stock so your production never stops." },
  { emoji: "💰", label: "Fair Pricing",          val: "Transparent, competitive pricing. No hidden charges, no surprises." },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ab-root { font-family: 'DM Sans', sans-serif; background: #f5f7fa; min-height: 100vh; padding-top: 105px; color: #1a2035; }

        /* HERO */
        .ab-hero { border-bottom: 1px solid #dde3ef; padding: 56px 48px 44px; text-align: center; background: #fff; }
        .ab-hero-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #3a6bc4; margin-bottom: 14px; }
        .ab-hero-title { font-family: 'DM Serif Display', serif; font-size: clamp(34px, 4.5vw, 52px); color: #1a2035; margin-bottom: 14px; line-height: 1.1; }
        .ab-hero-title em { font-style: italic; color: #3a6bc4; }
        .ab-hero-sub { font-size: 16px; color: #6b7a99; font-weight: 300; max-width: 520px; margin: 0 auto; line-height: 1.75; }

        /* STATS */
        .ab-stats-wrap { background: #f5f7fa; padding: 40px 48px; border-bottom: 1px solid #dde3ef; }
        .ab-stats-inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .ab-stat-card { background: #fff; border-radius: 16px; border: 1px solid #dde3ef; padding: 28px 24px; display: flex; flex-direction: column; align-items: flex-start; box-shadow: 0 2px 12px rgba(58,107,196,0.05); transition: box-shadow 0.3s, transform 0.3s; position: relative; overflow: hidden; }
        .ab-stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #3a6bc4, #6b9df5); }
        .ab-stat-card:hover { box-shadow: 0 10px 32px rgba(58,107,196,0.13); transform: translateY(-3px); }
        .ab-stat-icon { width: 38px; height: 38px; border-radius: 10px; background: #eef2fb; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
        .ab-stat-icon i { font-size: 18px; color: #3a6bc4; }
        .ab-stat-num { font-family: 'DM Serif Display', serif; font-size: 42px; font-weight: 400; color: #1a2035; line-height: 1; margin-bottom: 6px; }
        .ab-stat-num span { color: #3a6bc4; }
        .ab-stat-label { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #8a9ac0; }

        /* STORY */
        .ab-story-section { max-width: 1180px; margin: 0 auto; padding: 64px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .ab-section-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #3a6bc4; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
        .ab-section-eyebrow::after { content: ''; flex: 1; height: 1px; background: #dde3ef; }
        .ab-story-title { font-family: 'DM Serif Display', serif; font-size: clamp(24px, 2.8vw, 34px); color: #1a2035; margin-bottom: 24px; line-height: 1.2; }
        .ab-story-body p { font-size: 14.5px; color: #5a6a85; line-height: 1.9; font-weight: 300; margin-bottom: 14px; }
        .ab-story-body p:last-child { margin-bottom: 0; }

        /* FACTS PANEL */
        .ab-facts-panel { background: white; border-radius: 16px; border: 1px solid #dde3ef; box-shadow: 0 4px 24px rgba(58,107,196,0.07); overflow: hidden; }
        .ab-facts-panel-header { background: linear-gradient(135deg, #2952a3 0%, #3a6bc4 100%); padding: 18px 24px 16px; }
        .ab-facts-panel-title { font-family: 'DM Serif Display', serif; font-size: 19px; color: white; margin-bottom: 3px; }
        .ab-facts-panel-sub { font-size: 12px; color: rgba(255,255,255,0.72); font-weight: 400; }
        .ab-facts-panel-body { padding: 8px 24px 16px; }
        .ab-facts-row { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid #f0f3fa; }
        .ab-facts-row:last-child { border-bottom: none; }
        .ab-facts-emoji { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
        .ab-facts-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #8a9ac0; margin-bottom: 3px; }
        .ab-facts-val { font-size: 13.5px; color: #2952a3; font-weight: 600; }

        /* VALUES */
        .ab-values-section { padding: 0 48px 64px; max-width: 1180px; margin: 0 auto; }
        .ab-values-title { font-family: 'DM Serif Display', serif; font-size: clamp(24px, 3vw, 36px); color: #1a2035; margin-bottom: 28px; line-height: 1.2; }
        .ab-values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .ab-value-card { background: #fff; border-radius: 16px; border: 1px solid #dde3ef; box-shadow: 0 2px 16px rgba(58,107,196,0.05); padding: 28px; transition: box-shadow 0.3s, transform 0.3s; display: flex; flex-direction: column; }
        .ab-value-card:hover { box-shadow: 0 10px 36px rgba(58,107,196,0.13); transform: translateY(-3px); }
        .ab-value-icon { width: 44px; height: 44px; border-radius: 12px; background: #eef2fb; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .ab-value-icon i { font-size: 22px; color: #3a6bc4; }
        .ab-value-title { font-family: 'DM Serif Display', serif; font-size: 20px; color: #1a2035; margin-bottom: 10px; }
        .ab-value-desc { font-size: 13px; color: #6b7a99; line-height: 1.75; font-weight: 300; }

        /* CTA */
        .ab-cta-bar { background: linear-gradient(135deg, #1d3d87 0%, #3a6bc4 100%); margin: 0 48px 60px; border-radius: 16px; padding: 40px 48px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .ab-cta-text h3 { font-family: 'DM Serif Display', serif; font-size: 26px; color: white; margin-bottom: 6px; }
        .ab-cta-text p { font-size: 14px; color: rgba(255,255,255,0.7); }
        .ab-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .ab-btn-wa { padding: 13px 28px; background: #25D366; color: white; font-weight: 600; font-size: 14px; border-radius: 8px; text-decoration: none; transition: background 0.2s; }
        .ab-btn-wa:hover { background: #1ebe5d; }
        .ab-btn-products { padding: 13px 28px; background: rgba(255,255,255,0.12); border: 1.5px solid rgba(255,255,255,0.3); color: white; font-weight: 600; font-size: 14px; border-radius: 8px; text-decoration: none; transition: background 0.2s; }
        .ab-btn-products:hover { background: rgba(255,255,255,0.22); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .ab-story-section { grid-template-columns: 1fr; gap: 32px; padding: 40px 24px; }
          .ab-stats-wrap { padding: 28px 24px; }
          .ab-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .ab-values-section { padding: 0 24px 48px; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-hero { padding: 40px 24px 36px; }
          .ab-cta-bar { margin: 0 24px 48px; padding: 28px 24px; }
        }
        @media (max-width: 480px) {
          .ab-stats-inner { grid-template-columns: 1fr 1fr; gap: 12px; }
          .ab-stat-card { padding: 20px 18px; }
          .ab-stat-num { font-size: 34px; }
        }
      `}</style>

      <div className="ab-root">

        {/* HERO */}
        <div className="ab-hero">
          <div className="ab-hero-eyebrow">Aththanayaka Supermart</div>
          <h1 className="ab-hero-title">About <em>Us</em></h1>
          <p className="ab-hero-sub">Sri Lanka's trusted supplier of sesame seeds, jaggery, and all packaging materials for sesame product manufacturers — for over a decade.</p>
        </div>

        {/* STATS */}
        <div className="ab-stats-wrap">
          <div className="ab-stats-inner">
            {STATS.map(s => (
              <div className="ab-stat-card" key={s.label}>
                <div className="ab-stat-icon"><i className={`ti ${s.icon}`} aria-hidden="true" /></div>
                <div className="ab-stat-num"><span>{s.num}</span>{s.suffix}</div>
                <div className="ab-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* STORY */}
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
              {FACTS.map(f => (
                <div className="ab-facts-row" key={f.label}>
                  <div className="ab-facts-emoji">{f.emoji}</div>
                  <div>
                    <div className="ab-facts-label">{f.label}</div>
                    <div className="ab-facts-val">{f.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="ab-values-section">
          <div className="ab-section-eyebrow">Our Values</div>
          <h2 className="ab-values-title">What We Stand For</h2>
          <div className="ab-values-grid">
            {VALUES.map(v => (
              <div className="ab-value-card" key={v.title}>
                <div className="ab-value-icon"><i className={`ti ${v.icon}`} aria-hidden="true" /></div>
                <div className="ab-value-title">{v.title}</div>
                <div className="ab-value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="ab-cta-bar">
          <div className="ab-cta-text">
            <h3>Ready to Work With Us?</h3>
            <p>Get in touch for bulk orders, pricing, or any questions about our supply.</p>
          </div>
          <div className="ab-cta-actions">
            <a className="ab-btn-wa" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
            <Link className="ab-btn-products" to="/products">View Products</Link>
          </div>
        </div> */}

      </div>
    </>
  );
}