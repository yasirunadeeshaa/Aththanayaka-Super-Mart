import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "0762873746";
const PHONE = "+94 78 686 9743";

const HOW_IT_WORKS = [
  { step: "01", title: "Contact Us", desc: "Call or WhatsApp us with the product name, quantity needed, and your delivery preference." },
  { step: "02", title: "Get a Quote", desc: "We'll confirm stock availability and share wholesale pricing based on your order quantity." },
  { step: "03", title: "Confirm Order", desc: "Agree on price and delivery date. Advance payment or COD options available." },
  { step: "04", title: "Receive Your Order", desc: "We deliver to your location or you collect from our shop — whichever suits you best." },
];

const PRODUCTS_LIST = [
  { name: "Black Sesame Seeds", min: "50 kg", unit: "kg / bag" },
  { name: "White Sesame Seeds", min: "50 kg", unit: "kg / bag" },
  { name: "Cleaned Black Sesame", min: "25 kg", unit: "kg / bag" },
  { name: "Black & White Mixed", min: "50 kg", unit: "kg / bag" },
  { name: "Organic Jaggery", min: "25 kg", unit: "kg / block" },
  { name: "Polythene Covers", min: "500 pcs", unit: "packs" },
  { name: "Tissue Paper", min: "10 rolls", unit: "rolls" },
  { name: "Sealing Rolls", min: "5 rolls", unit: "rolls" },
  { name: "Paper Bags", min: "200 pcs", unit: "packs" },
];

export default function WholesalePage() {
  const waMsg = encodeURIComponent("Hi! I'm interested in placing a *wholesale order*. Please share pricing details.");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ws-root {
          font-family: 'DM Sans', sans-serif;
          background: #f7f9ff; min-height: 100vh; padding-top: 5px;
        }

        .ws-hero {
          background: #1a1a2e; padding: 70px 48px 60px;
          position: relative; overflow: hidden;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center; max-width: 100%;
        }
        .ws-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(30,79,216,0.25) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .ws-hero-left { position: relative; }
        .ws-hero-eyebrow {
          font-size: 11px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 16px;
        }
        .ws-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(34px, 4vw, 56px); color: white;
          margin-bottom: 18px; line-height: 1.1;
        }
        .ws-hero-title em { font-style: italic; color: #7aa3ff; }
        .ws-hero-sub {
          font-size: 16px; color: rgba(255,255,255,0.65);
          font-weight: 300; line-height: 1.8; margin-bottom: 28px;
        }
        .ws-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .ws-btn-wa {
          padding: 13px 28px; background: #25D366; color: white;
          font-weight: 600; font-size:16px; border-radius: 8px; text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .ws-btn-wa:hover { background: #1ebe5d; }
        .ws-btn-call {
          padding: 13px 28px; border: 1.5px solid rgba(255,255,255,0.3);
          background: transparent; color: white;
          font-weight: 600; font-size: 16px; border-radius: 8px; text-decoration: none;
        }
        .ws-btn-call:hover { background: rgba(255,255,255,0.1); }

        .ws-hero-right { position: relative; }
        .ws-hero-card {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px; padding: 32px;
        }
        .ws-hero-card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 18px; color: white; margin-bottom: 20px;
        }
        .ws-benefit {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ws-benefit:last-child { border-bottom: none; }
        .ws-benefit-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
        .ws-benefit-title { font-size: 14px; font-weight: 600; color: white; margin-bottom: 3px; }
        .ws-benefit-desc { font-size: 12.5px; color: rgba(255,255,255,0.6); line-height: 1.6; }

        .ws-how {
          max-width: 1100px; margin: 0 auto; padding: 64px 48px;
        }
        .ws-section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #1e4fd8; margin-bottom: 10px; text-align: center;
        }
        .ws-section-title {
          font-family: 'DM Serif Display', serif;
          font-size: 34px; color: #1a1a2e; text-align: center; margin-bottom: 48px;
        }
        .ws-steps {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 24px;
        }
        .ws-step {
          background: white; border-radius: 14px; padding: 28px;
          border: 1px solid #e8eef8;
          box-shadow: 0 2px 12px rgba(30,79,216,0.05);
        }
        .ws-step-num {
          font-family: 'DM Serif Display', serif;
          font-size: 42px; color: #e8eeff; line-height: 1; margin-bottom: 14px;
        }
        .ws-step-title {
          font-family: 'DM Serif Display', serif;
          font-size: 18px; color: #1a1a2e; margin-bottom: 10px;
        }
        .ws-step-desc { font-size: 13.5px; color: #5a6a8a; line-height: 1.7; font-weight: 300; }
        @media (max-width: 900px) {
          .ws-hero { grid-template-columns: 1fr; padding: 48px 24px 44px; }
          .ws-how { padding: 48px 24px; }
          .ws-cta { padding: 0 24px; margin: 48px auto; }
        }
      `}</style>

      <div id="wholesale" className="ws-root">
        <div className="ws-hero">
          <div className="ws-hero-left">
            <div className="ws-hero-eyebrow">Wholesale Ordering</div>
            <h1 className="ws-hero-title">Buy in Bulk,<br /><em>Save More</em></h1>
            <p className="ws-hero-sub">We supply sesame seeds, jaggery, and packaging materials in wholesale quantities to manufacturers, retailers and businesses across Sri Lanka.</p>
            <div className="ws-hero-btns">
              {/* <a href={`https://wa.me/${WHATSAPP}?text=${waMsg}`} target="_blank" rel="noreferrer" className="ws-btn-wa">💬 WhatsApp for Quote</a> */}
              <a
                href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="ws-btn-wa"
              >
                <FaWhatsapp size={26}/>
                <span>WhatsApp for Quote</span>
              </a>
              <a href={`tel:${PHONE}`} className="ws-btn-call">📞 Call Us</a>
            </div>
          </div>
          <div className="ws-hero-right">
            <div className="ws-hero-card">
              <div className="ws-hero-card-title">Wholesale Benefits</div>
              {[
                { icon: "💰", title: "Better Pricing", desc: "Wholesale rates significantly lower than retail for qualifying quantities." },
                { icon: "📦", title: "Bulk Stock Available", desc: "Large quantities ready for immediate dispatch or scheduled delivery." },
                { icon: "🚚", title: "Delivery Available", desc: "We deliver large orders to your location anywhere in Sri Lanka." },
                { icon: "🔄", title: "Repeat Orders", desc: "Regular customers get priority service and consistent supply." },
              ].map(b => (
                <div key={b.title} className="ws-benefit">
                  <span className="ws-benefit-icon">{b.icon}</span>
                  <div>
                    <div className="ws-benefit-title">{b.title}</div>
                    <div className="ws-benefit-desc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ws-how">
          <div className="ws-section-label">Process</div>
          <h2 className="ws-section-title">How to Place a Wholesale Order</h2>
          <div className="ws-steps">
            {HOW_IT_WORKS.map(s => (
              <div key={s.step} className="ws-step">
                <div className="ws-step-num">{s.step}</div>
                <div className="ws-step-title">{s.title}</div>
                <p className="ws-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}