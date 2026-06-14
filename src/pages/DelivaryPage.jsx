import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function DeliveryPage() {
  const WHATSAPP = "94XXXXXXXXX";
  const PHONE = "+94 XX XXX XXXX";
  const ADDRESS = "No 48, Horana Road Handapangoda, Sri Lanka";
  const MAPS_URL = "https://maps.app.goo.gl/EeovDF4ANUDnX9gz8";
  const LAT = 6.7902992;
  const LNG = 80.1374571;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .dv-root {
          font-family: 'DM Sans', sans-serif;
          background: #f5f7fa;
          min-height: 100vh;
          padding-top: 105px;
        }

        .dv-hero {
          border-bottom: 1px solid #dde3ef;
          padding: 56px 48px 44px;
          text-align: center;
          background: #fff;
        }
        .dv-hero-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #3a6bc4; margin-bottom: 14px;
        }
        .dv-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(34px, 4.5vw, 52px);
          color: #1a2035; margin-bottom: 14px; line-height: 1.1;
        }
        .dv-hero-title em { font-style: italic; color: #3a6bc4; }
        .dv-hero-sub {
          font-size: 16px; color: #6b7a99; font-weight: 300;
          max-width: 480px; margin: 0 auto; line-height: 1.75;
        }

        .dv-options {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0; max-width: 1100px; margin: 48px auto 0; padding: 0 48px;
        }
        .dv-option {
          background: white; border: 1px solid #e8eef8;
          padding: 48px 44px;
        }
        .dv-option:first-child { border-radius: 16px 0 0 16px; border-right: none; }
        .dv-option:last-child { border-radius: 0 16px 16px 0; background: #1a1a2e; border-color: #1a1a2e; }

        .dv-option-icon { font-size: 48px; margin-bottom: 20px; display: block; }
        .dv-option-title {
          font-family: 'DM Serif Display', serif;
          font-size: 28px; margin-bottom: 12px;
        }
        .dv-option:first-child .dv-option-title { color: #1a1a2e; }
        .dv-option:last-child .dv-option-title { color: white; }

        .dv-option-desc {
          font-size: 14px; line-height: 1.8; font-weight: 300; margin-bottom: 28px;
        }
        .dv-option:first-child .dv-option-desc { color: #5a6a8a; }
        .dv-option:last-child .dv-option-desc { color: rgba(255,255,255,0.65); }

        .dv-details { display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
        .dv-detail {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 16px; border-radius: 10px;
        }
        .dv-option:first-child .dv-detail { background: #f7f9ff; }
        .dv-option:last-child .dv-detail { background: rgba(255,255,255,0.06); }

        .dv-detail-icon { font-size: 18px; flex-shrink: 0; }
        .dv-detail-label {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 3px;
        }
        .dv-option:first-child .dv-detail-label { color: #8a9abf; }
        .dv-option:last-child .dv-detail-label { color: rgba(255,255,255,0.45); }

        .dv-detail-val { font-size: 13.5px; font-weight: 500; }
        .dv-option:first-child .dv-detail-val { color: #1a1a2e; }
        .dv-option:last-child .dv-detail-val { color: white; }

        .dv-btn-wa {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; background: #25D366; color: white;
          font-weight: 600; font-size: 14px; border-radius: 8px; text-decoration: none;
          transition: background 0.2s; margin-right: 10px;
        }
        .dv-btn-wa:hover { background: #1ebe5d; }
        .dv-btn-call {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border: 1.5px solid #dde4f4;
          background: #f7f9ff; color: #1e4fd8;
          font-weight: 600; font-size: 14px; border-radius: 8px; text-decoration: none;
          transition: all 0.2s;
        }
        .dv-btn-call:hover { background: #e8eeff; }
        .dv-btn-map {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.25); color: white;
          font-weight: 600; font-size: 14px; border-radius: 8px; text-decoration: none;
          transition: background 0.2s;
        }
        .dv-btn-map:hover { background: rgba(255,255,255,0.2); }

        .dv-hours {
          max-width: 1100px; margin: 40px auto 0; padding: 0 48px;
        }
        .dv-hours-inner {
          border: 1px solid #e8eef8; border-radius: 16px; padding: 40px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;
          background: white;
        }
        .dv-hours-label {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #1e4fd8; margin-bottom: 10px;
        }
        .dv-hours-title {
          font-family: 'DM Serif Display', serif;
          font-size: 28px; color: #1a1a2e; margin-bottom: 6px;
        }
        .dv-hours-sub { font-size: 14px; color: #5a6a8a; font-weight: 300; line-height: 1.7; }

        .dv-schedule { display: flex; flex-direction: column; }
        .dv-schedule-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 14px;
        }
        .dv-schedule-row:last-child { border-bottom: none; }
        .dv-schedule-day { color: #5a6a8a; font-weight: 400; }
        .dv-schedule-time { color: #1a1a2e; font-weight: 600; }
        .dv-schedule-closed { color: #e74c3c; font-weight: 500; }

        /* ── Elegant Map Section ── */
        .dv-map-section {
          max-width: 1100px;
          margin: 40px auto 60px;
          padding: 0 48px;
        }

        .dv-map-card {
          display: grid;
          grid-template-columns: 320px 1fr;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #dde4f4;
          box-shadow: 0 8px 48px rgba(30, 79, 216, 0.08), 0 1px 4px rgba(0,0,0,0.04);
          min-height: 440px;
        }

        .dv-map-info {
          background: #fff;
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid #eef1f9;
          position: relative;
        }
        .dv-map-info::before {
          content: '';
          position: absolute;
          left: 0; top: 32px; bottom: 32px;
          width: 3px;
          background: #1e4fd8;
          border-radius: 0 3px 3px 0;
        }

        .dv-map-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #1e4fd8; margin-bottom: 10px;
        }
        .dv-map-heading {
          font-family: 'DM Serif Display', serif;
          font-size: 30px; color: #1a1a2e; line-height: 1.15;
          margin-bottom: 6px;
        }
        .dv-map-tagline {
          font-size: 13.5px; color: #7a8aaa; font-weight: 300;
          line-height: 1.7; margin-bottom: 28px;
        }

        .dv-map-rows {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-bottom: 28px;
        }
        .dv-map-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 15px 0;
          border-bottom: 1px solid #f2f5fc;
        }
        .dv-map-row:last-child { border-bottom: none; }

        .dv-map-row-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: #eef2fd; display: flex; align-items: center;
          justify-content: center; font-size: 16px; flex-shrink: 0;
          margin-top: 1px;
        }
        .dv-map-row-label {
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #a0aec0; margin-bottom: 3px;
        }
        .dv-map-row-val {
          font-size: 13.5px; color: #1a1a2e; font-weight: 500; line-height: 1.5;
        }

        .dv-map-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .dv-map-btn-primary {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 20px; background: #1e4fd8; color: white;
          font-weight: 600; font-size: 14px; border-radius: 10px;
          text-decoration: none; transition: background 0.2s;
        }
        .dv-map-btn-primary:hover { background: #1538a8; }
        .dv-map-btn-secondary {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 20px; border: 1.5px solid #dde4f4;
          background: #f7f9ff; color: #1e4fd8;
          font-weight: 600; font-size: 14px; border-radius: 10px;
          text-decoration: none; transition: all 0.2s;
        }
        .dv-map-btn-secondary:hover { background: #eaeffd; }

        .dv-map-frame {
          position: relative;
          min-height: 440px;
        }
        .dv-map-frame .leaflet-container {
          height: 100% !important;
          width: 100% !important;
          min-height: 440px;
        }

        .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          font-family: 'DM Sans', sans-serif !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.14) !important;
          border: 1px solid #e8eef8 !important;
        }
        .leaflet-popup-content {
          font-size: 13px !important;
          line-height: 1.6 !important;
          margin: 14px 18px !important;
        }
        .lf-popup-name {
          font-weight: 700; font-size: 14px; color: #1a1a2e; margin-bottom: 3px;
        }
        .lf-popup-addr { color: #6b7a99; font-size: 12.5px; }
        .lf-popup-badge {
          display: inline-block; margin-top: 8px;
          padding: 3px 10px; background: #eef2fd; color: #1e4fd8;
          border-radius: 20px; font-size: 11px; font-weight: 700;
        }

        @media (max-width: 1000px) {
          .dv-map-card { grid-template-columns: 1fr; }
          .dv-map-info { border-right: none; border-bottom: 1px solid #eef1f9; }
          .dv-map-frame, .dv-map-frame .leaflet-container { min-height: 300px !important; }
        }
        @media (max-width: 900px) {
          .dv-options { grid-template-columns: 1fr; padding: 0 24px; }
          .dv-option:first-child { border-radius: 16px 16px 0 0; border-right: 1px solid #e8eef8; border-bottom: none; }
          .dv-option:last-child { border-radius: 0 0 16px 16px; }
          .dv-hours { padding: 0 24px; }
          .dv-hours-inner { grid-template-columns: 1fr; gap: 24px; }
          .dv-map-section { padding: 0 24px; }
          .dv-hero { padding: 48px 24px 40px; }
        }
      `}</style>

      <div className="dv-root">

        <div className="dv-hero">
          <div className="dv-hero-eyebrow">Delivery & Visit</div>
          <h1 className="dv-hero-title">Get Your Order <em>Your Way</em></h1>
          <p className="dv-hero-sub">We deliver to your door or you're welcome to visit our shop — whichever is more convenient for you.</p>
        </div>

        <div className="dv-options">
          <div className="dv-option">
            <span className="dv-option-icon">🚚</span>
            <div className="dv-option-title">Home Delivery</div>
            <p className="dv-option-desc">We deliver sesame seeds, jaggery and packaging supplies directly to your location. Call or WhatsApp us to arrange delivery after confirming your order.</p>
            <div className="dv-details">
              {[
                { icon: "📍", label: "Coverage", val: "Available — contact us to confirm your area" },
                { icon: "💰", label: "Delivery Charges", val: "Discussed based on location & order size" },
                { icon: "📅", label: "Delivery Time", val: "Agreed upon order confirmation" },
                { icon: "📦", label: "Order Minimum", val: "No strict minimum — contact us" },
              ].map(d => (
                <div key={d.label} className="dv-detail">
                  <span className="dv-detail-icon">{d.icon}</span>
                  <div>
                    <div className="dv-detail-label">{d.label}</div>
                    <div className="dv-detail-val">{d.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi! I'd like to arrange *delivery* for my order. Can you help?")}`} target="_blank" rel="noreferrer" className="dv-btn-wa">💬 Arrange Delivery</a>
            <a href={`tel:${PHONE}`} className="dv-btn-call">📞 Call</a>
          </div>

          <div className="dv-option">
            <span className="dv-option-icon">🏪</span>
            <div className="dv-option-title">Visit Our Shop</div>
            <p className="dv-option-desc">You're always welcome to visit us in person. See the products, pick exactly what you need, and take it with you. No appointment needed.</p>
            <div className="dv-details">
              {[
                { icon: "📍", label: "Address", val: ADDRESS },
                { icon: "🕐", label: "Open Hours", val: "Tue–Sun: 9:00 AM – 6:00 PM" },
                { icon: "☎️", label: "Before You Visit", val: "Call ahead to confirm stock availability" },
                { icon: "💳", label: "Payment", val: "Cash accepted · Bank transfer available" },
              ].map(d => (
                <div key={d.label} className="dv-detail">
                  <span className="dv-detail-icon">{d.icon}</span>
                  <div>
                    <div className="dv-detail-label">{d.label}</div>
                    <div className="dv-detail-val">{d.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="dv-btn-map">📍 Open in Maps</a>
          </div>
        </div>

        <div className="dv-hours">
          <div className="dv-hours-inner">
            <div>
              <div className="dv-hours-label">Shop Hours</div>
              <div className="dv-hours-title">When We're Open</div>
              <p className="dv-hours-sub">Visit us during shop hours or call/WhatsApp us anytime to arrange delivery or place an order in advance.</p>
            </div>
            <div className="dv-schedule">
              {[
                ["Monday", "Closed"],
                ["Tuesday", "9:00 AM – 6:00 PM"],
                ["Wednesday", "9:00 AM – 6:00 PM"],
                ["Thursday", "9:00 AM – 6:00 PM"],
                ["Friday", "9:00 AM – 6:00 PM"],
                ["Saturday", "9:00 AM – 6:00 PM"],
                ["Sunday", "9:00 AM – 6:00 PM"],
                ["Poya Days", "Closed"],
              ].map(([day, time]) => (
                <div key={day} className="dv-schedule-row">
                  <span className="dv-schedule-day">{day}</span>
                  {time === "Closed"
                    ? <span className="dv-schedule-closed">Closed</span>
                    : <span className="dv-schedule-time">{time}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Elegant Map Section ── */}
        <div className="dv-map-section">
          <div className="dv-map-card">

            {/* Info Panel */}
            <div className="dv-map-info">
              <div>
                <div className="dv-map-eyebrow">Find Us</div>
                <div className="dv-map-heading">Our Shop<br />Location</div>
                <p className="dv-map-tagline">Along Horana Road in Handapangoda.<br />Easy to find, always welcoming.</p>

                <div className="dv-map-rows">
                  <div className="dv-map-row">
                    <div className="dv-map-row-icon">📍</div>
                    <div>
                      <div className="dv-map-row-label">Address</div>
                      <div className="dv-map-row-val">{ADDRESS}</div>
                    </div>
                  </div>
                  <div className="dv-map-row">
                    <div className="dv-map-row-icon">🕐</div>
                    <div>
                      <div className="dv-map-row-label">Open Hours</div>
                      <div className="dv-map-row-val">Tue – Sun · 9:00 AM to 6:00 PM</div>
                    </div>
                  </div>
                  <div className="dv-map-row">
                    <div className="dv-map-row-icon">📞</div>
                    <div>
                      <div className="dv-map-row-label">Call Ahead</div>
                      <div className="dv-map-row-val">{PHONE}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dv-map-actions">
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="dv-map-btn-primary">
                  📍 Get Directions
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi! I'd like to visit the shop. Can you confirm your address?")}`}
                  target="_blank" rel="noreferrer"
                  className="dv-map-btn-secondary"
                >
                  💬 Confirm Before Visit
                </a>
              </div>
            </div>

            {/* Map Panel */}
            <div className="dv-map-frame">
              <MapContainer
                center={[LAT, LNG]}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%", minHeight: "440px" }}
              >
                <TileLayer
                  attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <Marker position={[LAT, LNG]}>
                  <Popup>
                    <div className="lf-popup-name">Aththanayaka Supermart</div>
                    <div className="lf-popup-addr">{ADDRESS}</div>
                    <span className="lf-popup-badge">Open Tue – Sun</span>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}