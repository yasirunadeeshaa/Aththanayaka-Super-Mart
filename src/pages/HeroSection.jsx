import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../LanguageContext.jsx";
import { FaTruck, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp , FaFacebook} from "react-icons/fa";

import blacksesami from "../../src/assets/black-sesame-seeds.webp";
import whiteseasami from "../../src/assets/white.jpg";
import blackwhitesesami from "../../src/assets/blackwhitesesami.webp";
import cleansesami from "../../src/assets/cleansesami.webp";
import jaggery from "../../src/assets/jaggery.avif";
import logoWatermark from "../../src/assets/logo-watermark.png";

import mobileHeroImg  from "../../src/assets/productbackgroundrotate2.png";

const PRODUCTS = {
  en: [
    { image: blackwhitesesami, tag: "Black & White Sesame",  name: "Black & White Sesame Seeds",     desc: "A perfect blend of black and white sesame for a unique, rich taste." },
    { image: blacksesami,      tag: "Black Sesame Seeds",    name: "Premium Black Sesame",            desc: "Rich in nutrients and bold flavor a healthy daily essential." },
    { image: whiteseasami,     tag: "White Sesame Seeds",    name: "White Sesame Seeds",              desc: "High-quality white sesame, rich in nutrients and delicate flavor." },
    { image: cleansesami,      tag: "Cleaned Sesame",        name: "Cleaned Black Sesame Seeds",      desc: "Carefully cleaned and sorted black sesame seeds, ready to use." },
    { image: jaggery,          tag: "Organic Jaggery",       name: "Organic Jaggery",                 desc: "Unrefined jaggery made from fresh sugarcane juice naturally sweet." },
  ],
  si: [
    { image: blackwhitesesami, tag: "කළු සහ සුදු තල",       name: "කළු සහ සුදු තල ඇට",              desc: "අද්විතීය, පොහොසත් රසක් සඳහා කළු සහ සුදු තල වල පරිපූර්ණ මිශ්‍රණයකි." },
    { image: blacksesami,      tag: "කළු තල ඇට",            name: "උසස් කළු තල",                    desc: "පෝෂ්‍ය පදාර්ථ හා ශක්තිමත් රසෙන් පිරුණු දෛනික සෞඛ්‍ය අත්‍යවශ්‍යයකි." },
    { image: whiteseasami,     tag: "සුදු තල ඇට",           name: "සුදු තල ඇට",                     desc: "ඉහළ ගුණාත්මක සුදු තල, පෝෂ්‍ය පදාර්ථ සහ මෘදු රසයෙන් පිරුණු." },
    { image: cleansesami,      tag: "පොත්ත ඉවත් කළ කළු තල",       name: "පොත්ත ඉවත් කළ කළු තල ඇට",         desc: "ප්‍රවේශමෙන් පිරිසිදු කර වර්ග කළ කළු තල ඇට, භාවිතයට සූදානම්." },
    { image: jaggery,          tag: "කාබනික හකුරු",         name: "කාබනික හකුරු",                   desc: "නැවුම් උක් යුෂ වලින් සාදන ලද නොපිරිසිදු හකුරු ස්වාභාවිකව මිහිරිය." },
  ],
};

const TICKER = {
  en: [
    ["🌾", "Black Sesame Seeds",       "Raw & Cleaned"],
    ["⚪", "White Sesame Seeds",        "Hulled & Cleaned"],
    ["✨", "Cleaned Black Sesame",      "99.9% Purity"],
    ["🍯", "Organic Jaggery",           "Block & Granule"],
    ["📦", "Retail Orders",             "From 5 kg"],
    ["🚚", "Wholesale Orders",          "From 50 kg"],
    ["🌿", "100% Natural",              "No Additives"],
    ["🤝", "Direct Supplier Pricing",   "No Middlemen"],
  ],
  si: [
    ["🌾", "කළු තල ඇට",                 "අමු සහ පිරිසිදු"],
    ["⚪", "සුදු තල ඇට",                 "පීල් කළ සහ පිරිසිදු"],
    ["✨", "පොත්ත ඉවත් කළ කළු තල",         "99.9% පිරිසිදුකම"],
    ["🍯", "කාබනික හකුරු",              "කුට්ටි"],
    ["📦", "සිල්ලර ඇණවුම්",            "කි.ග්‍රෑ. 5 සිට"],
    ["🚚", "තොග ඇණවුම්",                "කි.ග්‍රෑ. 50 සිට"],
    ["🌿", "100% ස්වාභාවික",            "රසායනික නොමැත"],
    ["🤝", "කෙළින්ම සැපයුම්කරු මිල",   "මැදිහත්කරුවන් නැත"],
  ],
};

const T = {
  eyebrow:   { en: "Sri Lanka's Trusted Sesame Product Supplier",   si: "ශ්‍රී ලංකාවේ විශ්වාසනීයම තල අමුද්‍රව්‍ය වෙළඳසැල" },
  title1:    { en: "Everything You Need,",             si: "ඔබට අවශ්‍ය සෑම දෙයක්ම," },
  title2:    { en: "All in One Place.",                si: "එකම තැනකින්." },
  desc:      {
    en: "Premium sesame ingredients, raw materials, and production essentials sourced with quality and care. We provide everything you need for sesame-based food production, from carefully selected ingredients to trusted supplies, ensuring freshness, consistency, and excellence in every product.",
    si: "උසස් තත්ත්වයේ තල, හකුරු, මූලික ද්‍රව්‍ය සහ නිෂ්පාදන අවශ්‍යතා ගුණාත්මකභාවය සහ සැලකිල්ල සමඟ ලබාදෙයි. තල ආශ්‍රිත ආහාර නිෂ්පාදනය සඳහා ඔබට අවශ්‍ය සියල්ල තෝරාගත් අමුද්‍රව්‍ය සහ විශ්වාසනීය සැපයුම් සමඟ සෑම නිෂ්පාදනයකම නැවුම් බව, ස්ථාවරත්වය සහ විශිෂ්ටත්වය අප විසින් සහතික කරයි.",
  },
  descShort: {
    en: "Premium sesame ingredients, raw materials, and production essentials — sourced with quality and care.",
    si: "උසස් තත්ත්වයේ තල, හකුරු සහ නිෂ්පාදන අවශ්‍යතා ගුණාත්මකභාවය සමඟ ලබාදෙයි.",
  },
  readMore:  { en: "Read more", si: "තව කියවන්න" },
  readLess:  { en: "Show less", si: "අඩුවෙන් පෙන්වන්න" },
  shopNow:   { en: "Shop Now", si: "දැන් බලන්න" },
  shopNowSub:{ en: "See products", si: "නිෂ්පාදන බලන්න" },
  followUs: { en: "Follow us", si: "අප සමඟ සම්බන්ධ වන්න" },
  ctaReassure: { en: "Free island-wide delivery on orders over Rs. 200,000", si: "රු. 200,000+ ඇණවුම් සඳහා දිවයින පුරා නොමිලේ බෙදාහැරීම" },
  stat1num:  { en: "10+",          si: "10+" },
  stat1lbl:  { en: "Products",     si: "නිෂ්පාදන" },
  stat2num:  { en: "20+",          si: "20+" },
  stat2lbl:  { en: "Years Trusted",si: "විශ්වාසනීය වසර" },
  stat3num:  { en: "99%",          si: "99%" },
  stat3lbl:  { en: "Happy Customers", si: "සතුටු පාරිභෝගිකයන්" },
  qualityLabel:  { en: "Purity Guaranteed",   si: "පිරිසිදුකම සහතිකයි" },
  qualityVal:    { en: "99.9%",               si: "99.9%" },
  qualitySub:    { en: "High quality Production",  si: "උසස් ගුණාත්මක නිෂ්පාදනය" },
  noChemNote:    { en: "No chemicals used in the cleaning process", si: "පිරිසිදු කිරීමේ ක්‍රියාවලියේදී රසායනික ද්‍රව්‍ය භාවිතා නොකරයි" },
  deliveryLabel: { en: "Island-Wide Delivery", si: "දිවයින පුරා බෙදාහැරීම" },
  deliveryVal:   { en: "PickMe & Speed Post",  si: "PickMe & Speed Post" },
  freeDeliveryNote: { en: "Free on orders over Rs. 200,000", si: "රු. 200,000+ ඇණවුම් සඳහා නොමිලේ" },
  revLabel:  { en: "Customer Rating", si: "පාරිභෝගික ඇගයීම" },
  revSub:    { en: "Free delivery Rs. 200,000+", si: "රු. 200,000+ නොමිලේ බෙදාහැරීම" },
  live:      { en: "Live",         si: "සජීවී" },
  // Buyer-type segmented toggle
  buyerLabel:   { en: "I'm here to buy…", si: "මම මෙතැනට පැමිණියේ…" },
  buyerRetail:  { en: "Buying in retail", si: "සිල්ලර මිලදී ගැනීමකට" },
  buyerBulk:    { en: "Buying in bulk", si: "තොග ඇණවුමකට" },
  moqRetail:    { en: "Retail orders from 5 kg", si: "සිල්ලර ඇණවුම් කි.ග්‍රෑ. 5 සිට" },
  moqBulk:      { en: "Wholesale orders from 50 kg, with special offers!", si: "තොග ඇණවුම් කි.ග්‍රෑ. 50 සිට, විශේෂ දීමනා සමඟ!" },
  pauseTicker:  { en: "Pause ticker", si: "ටිකර් නවත්වන්න" },
  playTicker:   { en: "Play ticker", si: "ටිකර් ක්‍රියාත්මක කරන්න" },
  pauseCarousel:{ en: "Pause slideshow", si: "රූප වෙනස් වීම නවත්වන්න" },
  playCarousel: { en: "Play slideshow", si: "රූප වෙනස් වීම ආරම්භ කරන්න" },
  // New "how to reach us" cards
  visitLabel: { en: "Visit Our Store", si: "අපගේ වෙළඳසැල වෙත පැමිණෙන්න" },
  visitVal:   { en: "Handapangoda, Horana", si: "හඳපාන්ගොඩ, හොරණ" },
  visitSub:   { en: "Tue–Sun, 9am–6pm", si: "අඟහ–ඉරිදා, උදේ 9–සවස 6" },
  callLabel:  { en: "Call Us", si: "අමතන්න" },
  callVal:    { en: "078 686 9743", si: "078 686 9743" },
  callSub:    { en: "Quick response guaranteed", si: "ඔබගේ පණිවිඩයට ඉක්මනින් ප්‍රතිචාර දක්වන්නෙමු!" },
    quoteLabel: { en: "Get a Quotation", si: "මිල ගණන් ලබාගන්න" },
  quoteVal:   { en: "Via WhatsApp", si: "WhatsApp හරහා" },
  quoteSub:   { en: "Quick reply, no waiting", si: "අප සමඟ සම්බන්ධ වන්න" },
};

const t = (key, lang) => T[key]?.[lang] ?? T[key]?.en ?? key;

/* ── Reduced motion hook ── */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, []);
  return reduced;
}

/* ── Particle Canvas ── */
function ParticleCanvas({ reducedMotion }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight * 1.1;
    let raf;
    const COUNT = reducedMotion ? 0 : 450;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2.8 + 0.4,
      rot: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.006,
      speedY: Math.random() * 0.5 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.35 + 0.06,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.012 + 0.004,
    }));
    const draw = (p) => {
      ctx.save(); ctx.globalAlpha = p.opacity;
      ctx.fillStyle = "#1e4fd8";
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r * 1.9, p.r * 0.9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    if (reducedMotion) {
      // Static, single-paint decorative frame — no animation loop, no CPU cost.
      ctx.clearRect(0, 0, W, H);
      return;
    }
    const tick = () => {
      ctx.clearRect(0,0,W,H);
      particles.forEach(p => {
        p.wobble += p.wobbleSpeed; p.rot += p.spin; p.y += p.speedY;
        p.x += Math.sin(p.wobble)*0.4 + p.speedX;
        if (p.y > H+10) { p.y=-10; p.x=Math.random()*W; }
        if (p.x > W+10) p.x=-10;
        if (p.x < -10) p.x=W+10;
        draw(p);
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    const onResize = () => { W=canvas.width=window.innerWidth; H=canvas.height=canvas.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [reducedMotion]);
  return <canvas ref={canvasRef} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:1 }} />;
}

/* ── Product Carousel ── */
function ProductCard({ lang, reducedMotion }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(reducedMotion); // reduced motion starts paused
  const products = PRODUCTS[lang];

  const goTo = (i) => {
    if (animating || i === current) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 320);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setCurrent(prev => (prev+1) % products.length); setAnimating(false); }, 320);
    }, 4200);
    return () => clearInterval(timer);
  }, [products.length, paused]);

  const { image, tag, name, desc } = products[current];

  return (
    <div
      className="pc-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(reducedMotion)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(reducedMotion); }}
    >
      <div className={`pc-img-wrap ${animating ? "pc-fading" : ""}`}>
        <img src={image} alt={name} className="pc-img" />
        <div className="pc-img-overlay" />
      </div>
      <div className="pc-info">
        <span className="pc-badge">{tag}</span>
        <div className="pc-name">{name}</div>
        <div className="pc-desc">{desc}</div>
      </div>
      <div className="pc-dots">
        {products.map((_, i) => (
          <button key={i} className={`pc-dot${i===current?" active":""}`} onClick={() => goTo(i)} aria-label={`Slide ${i+1} of ${products.length}`} aria-current={i===current} />
        ))}
      </div>
      <button
        type="button"
        className="pc-pause"
        onClick={() => setPaused(p => !p)}
        aria-label={paused ? t("playCarousel", lang) : t("pauseCarousel", lang)}
        title={paused ? t("playCarousel", lang) : t("pauseCarousel", lang)}
      >
        {paused ? "▶" : "❚❚"}
      </button>
      <div className="pc-corner" />
    </div>
  );
}

export default function Hero({ onShopNow }) {
  const heroRef = useRef(null);
  const { lang } = useLang();
  const reducedMotion = usePrefersReducedMotion();
  const [buyerType, setBuyerType] = useState(null); // null | "retail" | "bulk"
  const [descExpanded, setDescExpanded] = useState(false);
  const [tickerPaused, setTickerPaused] = useState(reducedMotion);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-reveal]");
    if (reducedMotion) {
      // Skip the load-in animation entirely — content is present immediately.
      items.forEach((item) => { item.style.opacity = "1"; item.style.transform = "none"; });
      return;
    }
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 120 + i * 120);
    });
  }, [reducedMotion]);

  const handleBuyerChoice = useCallback((type) => {
    setBuyerType(type);
    // Route to a tailored section instead of one generic CTA.
    const targetId = type === "bulk" ? "wholesale-section" : "retail-section";
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  }, [reducedMotion]);

  const tickerItems = [...TICKER[lang], ...TICKER[lang]]; // duplicate for seamless loop
  const moqNote = buyerType === "bulk" ? t("moqBulk", lang) : buyerType === "retail" ? t("moqRetail", lang) : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-root {
          --blue: #1e4fd8; --blue-dark: #1538a8;
          --blue-light: rgba(30,79,216,0.07); --blue-border: rgba(30,79,216,0.12);
          --text: #0f1729; --text-muted: #526080; --text-light: #9aaac8; --surface: #f4f7ff;
          width: 100vw; height: 100vh; background: #ffffff;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          font-family: 'DM Sans', sans-serif;
          margin-left: calc(-50vw + 50%);
        }
          .h-content {
  position: relative;
  flex: 1;                 /* keeps desktop flex layout behaving the same */
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: 100%;
}
          .h-mobile-hero-img { display: none; }
        /* Below desktop the stacked layout needs its natural height back —
           fixed 100vh only applies at web/desktop sizes, per request. */
        @media (max-width:960px) { .hero-root { height:auto; min-height:100vh; } }
        .h-grain { position:absolute; inset:0; pointer-events:none; z-index:2; opacity:0.028;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:180px 180px; }
        .h-mesh { position:absolute; inset:0; pointer-events:none; z-index:0; }
        .h-blob-1 { position:absolute; width:900px; height:900px; top:-280px; right:-150px; border-radius:50%;
          background:radial-gradient(circle at 40% 40%,rgba(30,79,216,0.08) 0%,rgba(30,79,216,0.02) 50%,transparent 75%); }
        .h-blob-2 { position:absolute; width:600px; height:600px; bottom:-180px; left:-100px; border-radius:50%;
          background:radial-gradient(circle at 60% 60%,rgba(30,79,216,0.06) 0%,transparent 70%); }
        .h-blob-3 { position:absolute; width:400px; height:400px; top:30%; left:45%; border-radius:50%;
          background:radial-gradient(circle,rgba(30,79,216,0.035) 0%,transparent 70%); }
        .h-linegrid { position:absolute; inset:0; z-index:0; pointer-events:none; opacity:0.42;
          background-image:linear-gradient(rgba(30,79,216,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,79,216,0.04) 1px,transparent 1px);
          background-size:60px 60px;
          -webkit-mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,0.4) 25%,rgba(0,0,0,0.4) 75%,transparent 100%);
          mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,0.4) 25%,rgba(0,0,0,0.4) 75%,transparent 100%); }
        .h-arc-panel { position:absolute; top:0; right:0; width:52%; height:100%; pointer-events:none; z-index:0; }
        .h-arc-panel svg { width:100%; height:100%; }
        .h-watermarkk {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: clamp(280px, 32vw, 520px);
            height: auto;
            opacity: 0.07;
            pointer-events: none;
            z-index: 0;
            user-select: none;
            filter: grayscale(1);
          }
        .h-watermark { position:absolute; top:40%; align-self:center; width:fit-content;
          font-family:'DM Serif Display',serif; font-size:clamp(56px,10vw,180px);
          color:rgba(30,79,216,0.1); pointer-events:none; z-index:0;
          line-height:0.92; letter-spacing:-1px; user-select:none; text-align:center; }
        .h-watermark span { display:block; white-space:nowrap; }
        .h-inner { position:relative; z-index:3; width:100%; max-width:1640px; margin:0 auto;
          padding:110px 80px 60px 80px; display:grid; grid-template-columns:56% 44%;
          grid-template-areas: "header visual" "body visual" "stats visual";
          column-gap:0; row-gap:0; flex:1; min-height:0; overflow:hidden; align-content:center; }
        .h-area-header { grid-area:header; align-self:end; }
        .h-area-body { grid-area:body; align-self:start; }
        .h-eyebrow { display:inline-flex; align-items:center; gap:10px; margin-bottom:18px; }
        .h-eyebrow-dot { width:7px; height:7px; border-radius:50%; background:#1e4fd8; box-shadow:0 0 0 3px rgba(30,79,216,0.15); flex-shrink:0; }
        .h-eyebrow-text { font-size:11px; font-weight:600; letter-spacing:3.5px; text-transform:uppercase; color:#1e4fd8; }
        /* Sinhala renders noticeably larger/looser at the same px + letter-spacing than Latin;
           :lang() lets both scripts hit a similar visual weight without a layout jump on switch. */
        .hero-root:lang(si) .h-eyebrow-text { letter-spacing:0.5px; font-size:12.5px; }
        .h-title { font-family:'DM Serif Display',serif; font-size:clamp(38px,4.6vw,74px);
          font-weight:400; line-height:1.16; color:#0f1729; margin-bottom:22px; }
        .hero-root:lang(si) .h-title { font-family:'DM Sans',sans-serif; font-weight:500; line-height:1.35; font-size:clamp(30px,3.8vw,56px); }
        .h-title-line { display:block; }
        .h-title em { font-style:italic; color:#1e4fd8; position:relative; }
        .hero-root:lang(si) .h-title em { font-style:normal; }
        .h-title em::after { content:''; position:absolute; left:0; bottom:2px; width:100%; height:2px;
          background:linear-gradient(90deg,#1e4fd8,rgba(30,79,216,0.15)); border-radius:2px; }
        .h-desc { font-size:16.5px; font-weight:500; line-height:1.9; color:#526080; margin-bottom:28px; max-width:540px; }
        .h-desc-toggle { display:none; }
        .h-buyer { margin-bottom:26px; }
        .h-buyer-label { font-size:11px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:#9aaac8; margin-bottom:10px; }
        .h-buyer-row { display:flex; gap:10px; flex-wrap:wrap; }
        .h-buyer-btn { font-size:13.5px; font-weight:600; color:#526080; background:#fff;
          border:1.5px solid rgba(30,79,216,0.18); padding:12px 22px; border-radius:100px;
          cursor:pointer; transition:all 0.2s; min-height:44px; }
        .h-buyer-btn:hover { border-color:#1e4fd8; color:#1e4fd8; }
        .h-buyer-btn.active { background:#1e4fd8; border-color:#1e4fd8; color:#fff; }
        .h-moq-note { font-size:13px; color:#1e4fd8; font-weight:600; margin-top:10px; }
        .h-actions { margin-bottom:22px; }
        .h-actions-row { display:flex; align-items:center; gap:22px; flex-wrap:wrap; margin-bottom:10px; }
        .h-btn-primary { display:inline-flex; flex-direction:column; align-items:flex-start; gap:2px; font-size:13px; font-weight:600;
          letter-spacing:1px; color:#fff; background: linear-gradient(135deg, #0f1729 50%, #1e4fd8 100%); border:none; padding:14px 38px; border-radius:6px;
          cursor:pointer; text-decoration:none; min-height:44px; justify-content:center;
          transition:background 0.25s,transform 0.2s,box-shadow 0.3s;
          box-shadow:0 4px 20px rgba(30,79,216,0.28),inset 0 1px 0 rgba(255,255,255,0.15); }
        .h-btn-primary:hover { background:#1538a8; transform:translateY(-2px); box-shadow:0 8px 30px rgba(30,79,216,0.38); }
        .h-btn-primary-sub { font-size:10.5px; font-weight:400; letter-spacing:0.3px; text-transform:none; opacity:0.8; }
        .h-btn-secondary { display:inline-flex; align-items:center; gap:6px; font-size:13.5px; font-weight:600;
          color:#526080; background:transparent; border:none; padding:8px 2px; min-height:44px;
          cursor:pointer; text-decoration:none; border-bottom:1.5px solid transparent; transition:all 0.2s; }
        .h-btn-secondary:hover { color:#1e4fd8; border-bottom-color:#1e4fd8; }
        .h-btn-follow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: #1877F2;
          background: rgba(24,119,242,0.08);
          border: 1.5px solid rgba(24,119,242,0.25);
          padding: 11px 22px;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          min-height: 44px;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .h-btn-follow:hover {
          background: #1877F2;
          border-color: #1877F2;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(24,119,242,0.28);
        }
        .h-btn-follow:active {
          transform: translateY(0);
        }
        .h-btn-follow-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
        .h-reassure { display:inline-flex; align-items:center; gap:7px; font-size:12.5px; font-weight:700;
          color:#1538a8; background:rgba(30,79,216,0.08); border:1px solid rgba(30,79,216,0.18);
          padding:7px 14px; border-radius:100px; }
        .h-reassure::before { content:'✓'; display:inline-flex; align-items:center; justify-content:center;
          width:16px; height:16px; border-radius:50%; background:#1e4fd8; color:#fff; font-size:10px; flex-shrink:0; }
        .h-stats { grid-area:stats; display:flex; gap:0; flex-wrap:wrap; align-self:start; }
        .h-stat { padding-right:36px; margin-right:36px; border-right:1px solid rgba(30,79,216,0.12); }
        .h-stat:last-child { border-right:none; margin-right:0; padding-right:0; }
        .h-stat-num { font-family:'DM Serif Display',serif; font-size:32px; color:#0f1729; line-height:1; margin-bottom:5px; }
        .hero-root:lang(si) .h-stat-num { font-family:'DM Sans',sans-serif; font-weight:700; }
        .h-stat-num span { color:#1e4fd8; }
        .h-stat-lbl { font-size:11px; font-weight:500; letter-spacing:2px; text-transform:uppercase; color:#9aaac8; }
        .hero-root:lang(si) .h-stat-lbl { letter-spacing:0.3px; }

        .h-right { grid-area:visual; position:relative; display:flex; justify-content:center; align-items:center; }
        .h-floats-area { grid-area:visual; position:relative; pointer-events:none; }
        .h-floats-area .h-float { pointer-events:auto; }
        .h-float { position:absolute; background:#fff; border:1px solid rgba(30,79,216,0.1);
          border-radius:14px; padding:12px 16px;
          box-shadow:0 4px 20px rgba(30,79,216,0.1),0 1px 4px rgba(0,0,0,0.05); z-index:4; max-width:190px; }
        .h-fl-icon { width:17px; height:17px; margin-bottom:5px; display:block; }
        .h-fl-icon-map   { color:#e02424; } /* red — location pin */
        .h-fl-icon-truck { color:#1e4fd8; } /* blue — delivery */
        .h-fl-icon-wa    { color:#25D366; } /* WhatsApp green */
        .h-fl-icon-call  { color:#1e88e5; } /* phone blue */
        .h-float-a { top:-16px; right:-28px; animation:hfloatA 4s ease-in-out infinite; }
        .h-float-a .h-fl-sub-chem { background:rgba(30,79,216,0.08); border-radius:6px;
          padding:4px 7px; margin-top:6px; display:inline-block; }
        /* Rating card: right side of the product image, vertically centered */
        .h-float-b { top:42%; right:-84px; bottom:auto; left:auto; animation:hfloatB 5s ease-in-out infinite; }
        .h-float-c { bottom:-30px; right:-28px; animation:hfloatC 4.5s ease-in-out infinite; }
        /* New "reach us" cards: left side of the product image */
        .h-float-d { top:6%; left:-90px; animation:hfloatD 4.2s ease-in-out infinite; }
        .h-float-e { bottom:10%; left:-90px; animation:hfloatE 4.8s ease-in-out infinite; }
        @keyframes hfloatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes hfloatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes hfloatB { 0%,100%{transform:translateY(-50%)} 50%{transform:translateY(calc(-50% + 6px))} }
        @keyframes hfloatD { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes hfloatE { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @media (prefers-reduced-motion: reduce) {
          .h-float-a, .h-float-b, .h-float-c, .h-float-d, .h-float-e { animation: none; }
        }
        .h-fl-label { font-size:9px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#9aaac8; margin-bottom:3px; }
        .h-fl-val { font-family:'DM Serif Display',serif; font-size:17px; color:#1e4fd8; line-height:1; }
        .hero-root:lang(si) .h-fl-val { font-family:'DM Sans',sans-serif; font-weight:700; }
        .h-fl-sub { font-size:10.5px; color:#9aaac8; margin-top:2px; }
        .h-fl-sub-chem { color:#1e4fd8; font-weight:600; }
        .h-fl-sub-sm { font-size:12px; color:#526080; margin-top:2px; font-family:'DM Sans',sans-serif; font-weight:300; }
        .h-fl-stars { color:#f0a500; font-size:11px; letter-spacing:1px; margin-bottom:2px; }
        .pc-card { position:relative; width:390px; height:510px; border-radius:22px; overflow:hidden;
          box-shadow:0 2px 8px rgba(30,79,216,0.06),0 16px 48px rgba(30,79,216,0.16),0 40px 80px rgba(30,79,216,0.09); z-index:3; }
        .pc-img-wrap { position:absolute; inset:0; transition:opacity 0.32s ease; }
        .pc-img-wrap.pc-fading { opacity:0; }
        .pc-img { width:100%; height:100%; object-fit:cover; display:block; }
        .pc-img-overlay { position:absolute; inset:0;
          background:linear-gradient(to bottom,rgba(15,23,41,0.01) 0%,rgba(15,23,41,0.04) 40%,rgba(15,23,41,0.62) 72%,rgba(15,23,41,0.82) 100%); }
        .pc-info { position:absolute; bottom:0; left:0; right:0; padding:22px 22px 24px; z-index:2; }
        .pc-badge { display:inline-block; font-size:9.5px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase;
          color:rgba(255,255,255,0.75); background:rgba(30,79,216,0.4); border:1px solid rgba(30,79,216,0.5);
          padding:4px 12px; border-radius:100px; margin-bottom:10px; max-width:100%; white-space:normal; }
        .pc-name { font-family:'DM Serif Display',serif; font-size:22px; color:#fff; line-height:1.2; margin-bottom:6px; }
        .hero-root:lang(si) .pc-name { font-family:'DM Sans',sans-serif; font-weight:600; font-size:18px; line-height:1.35; }
        .pc-desc { font-size:12.5px; font-weight:300; color:rgba(255,255,255,0.62); line-height:1.6; }
        .pc-dots { position:absolute; top:50%; right:16px; transform:translateY(-50%);
          display:flex; flex-direction:column; gap:6px; z-index:3; }
        .pc-dot { width:3px; height:18px; border-radius:2px; background:rgba(255,255,255,0.25);
          border:none; cursor:pointer; padding:0; transition:all 0.25s; }
        .pc-dot.active { background:#fff; height:30px; }
        .pc-pause { position:absolute; top:16px; right:16px; z-index:4; width:32px; height:32px; border-radius:50%;
          background:rgba(15,23,41,0.4); border:1px solid rgba(255,255,255,0.35); color:#fff; font-size:10px;
          display:flex; align-items:center; justify-content:center; cursor:pointer; backdrop-filter:blur(4px); }
        .pc-corner { position:absolute; top:16px; left:16px; z-index:3; width:24px; height:24px;
          border-top:2px solid rgba(255,255,255,0.35); border-left:2px solid rgba(255,255,255,0.35);
          border-radius:1px; pointer-events:none; }
        .h-cats { position:relative; z-index:3; border-top:1px solid rgba(30,79,216,0.08);
          background:rgba(255,255,255,0.92); -webkit-backdrop-filter:blur(12px); backdrop-filter:blur(12px);
          padding:18px 80px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; width:100%; }
        .h-cats-lbl { font-size:10px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase;
          color:#9aaac8; margin-right:10px; white-space:nowrap; }
        .h-chip { font-size:12px; font-weight:500; color:#526080; background:#f4f7ff;
          border:1px solid rgba(30,79,216,0.1); padding:7px 16px; border-radius:100px;
          cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:6px;
          transition:all 0.2s; white-space:nowrap; }
        .h-chip:hover { background:rgba(30,79,216,0.06); border-color:rgba(30,79,216,0.25); color:#1e4fd8; }
        .ticker-wrap { position:relative; z-index:3; width:100%; height:38px;
          background:rgba(10,14,40,0.96); border-top:1px solid rgba(255,255,255,0.06);
          display:flex; align-items:center; overflow:hidden; flex-shrink:0;
          backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); }
        .ticker-live-badge { display:flex; align-items:center; gap:7px; padding:0 16px; height:100%;
          background:transparent; border-right:1px solid rgba(255,255,255,0.1); flex-shrink:0; }
        .ticker-live-dot { width:7px; height:7px; border-radius:50%; background:#86efac; animation:tickerPulse 1.4s ease-in-out infinite; }
        @keyframes tickerPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
        .ticker-live-text { font-size:11px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; color:#fff; font-family:monospace; }
        .ticker-toggle { background:none; border:none; color:#94a3b8; font-size:11px; cursor:pointer; padding:0 14px;
          height:100%; display:flex; align-items:center; border-right:1px solid rgba(255,255,255,0.08); flex-shrink:0; }
        .ticker-toggle:hover { color:#fff; }
        .ticker-inner { display:flex; overflow:hidden; flex:1; height:100%; align-items:center; }
        .ticker-track { display:flex; align-items:center; animation:tickerMove 30s linear infinite; white-space:nowrap; }
        .ticker-track.paused { animation-play-state:paused; }
        @keyframes tickerMove { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ticker-item { display:inline-flex; align-items:center; gap:8px; padding:0 28px;
          border-right:1px solid rgba(255,255,255,0.08); font-size:12px; font-family:'DM Sans',system-ui,sans-serif;
          color:#94a3b8; white-space:nowrap; letter-spacing:0.1px; }
        .ticker-icon { font-size:13px; opacity:0.85; }
        .ticker-val { color:#fff; font-weight:700; font-size:12px; }
        .ticker-dot-sep { width:3px; height:3px; border-radius:50%; background:rgba(255,255,255,0.35); display:inline-block; flex-shrink:0; }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
          .h-eyebrow-dot, .ticker-live-dot { animation: none; }
        }

        @media (max-width:1100px) { .h-inner{padding:140px 48px 100px;gap:24px;} .h-cats{padding:18px 48px;} }
        @media (max-width:960px) {
          /* Explicit stacking order per request: header, then the product image,
             then description/CTA, then the floating cards, then the stat cards. */
          .h-inner{grid-template-columns:1fr;
            grid-template-areas: "mobileimg" "header" "visual" "body" "floats" "stats";
            padding-top:24px; row-gap:32px; align-content:start;}

  .h-mobile-hero-img {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 0;
    overflow: hidden;
    /* no aspect-ratio here — remove the guess entirely */
  }
  .h-mobile-hero-img img {
    width: 100%;
    height: auto;           /* ← image sets its own height based on its real ratio */
    display: block;
    object-fit: cover;      /* harmless now since there's no fixed box to crop against */
  }

          .h-arc-panel{display:none;}
          
          .pc-card{width:100%;max-width:390px;height:auto;border-radius:20px;overflow:hidden;
            box-shadow:0 1px 2px rgba(0,0,0,0.04),0 8px 32px rgba(30,79,216,0.1),0 24px 64px rgba(30,79,216,0.06);
            background:#fff;border:1px solid rgba(30,79,216,0.1);padding:24px;}
          .pc-img-wrap{position:relative;height:170px;border-radius:12px;margin-bottom:18px;background:#f4f7ff;}
          .pc-img{border-radius:12px;} .pc-img-overlay{display:none;}
          .pc-info{position:static;padding:0;}
          .pc-badge{color:#1e4fd8;background:rgba(30,79,216,0.07);border:none;}
          .pc-name{color:#0f1729;font-size:20px;} .pc-desc{color:#526080;}
          .pc-dots{position:static;transform:none;flex-direction:row;justify-content:center;margin-top:16px;}
          .pc-dot{width:6px;height:6px;border-radius:50%;background:rgba(30,79,216,0.2);}
          .pc-dot.active{background:#1e4fd8;width:6px;height:6px;transform:scale(1.4);}
          .pc-pause{background:rgba(30,79,216,0.08);border-color:rgba(30,79,216,0.2);color:#1e4fd8;}
          .pc-corner{display:none;} .h-watermark{font-size:44px;}
          /* Floats were absolutely positioned relative to the visual cell, which
             only made sense next to the card at desktop size. On mobile they
             become their own stacked block in the "floats" grid area. */
          .h-floats-area{grid-area:floats;position:static;display:flex;flex-direction:column;gap:12px;pointer-events:auto;}
          .h-float{position:static;width:100%;max-width:none;top:auto;right:auto;bottom:auto;left:auto;
            animation:none;text-align:left;}

          /* Description is shortened on mobile with a Read more/Show less toggle
             instead of always showing the full paragraph. */
          .h-desc{-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:12px;}
          .h-desc.expanded{-webkit-line-clamp:unset;display:block;overflow:visible;}
          .h-desc-toggle{display:inline-block;background:none;border:none;color:#1e4fd8;font-size:13px;font-weight:600;
            padding:6px 0 20px;cursor:pointer;min-height:44px;}
        }
        @media (max-width:640px) {
          .h-inner{padding:2px 20px 48px;} .h-cats{padding:14px 20px;}
          .h-stats{flex-wrap:wrap;gap:16px 20px;}
          .h-stat{border-right:none;padding-right:0;margin-right:0;}
          .h-actions-row{flex-direction:column;align-items:stretch;gap:12px;}
          .h-btn-primary{width:100%;align-items:center;text-align:center;}
          .h-btn-secondary{justify-content:center;}
          .h-buyer-row{flex-direction:column;}
          .h-buyer-btn{width:100%;text-align:center;}
        }
      `}</style>

      <section className="hero-root" lang={lang} ref={heroRef}>
          <div className="h-mobile-hero-img" data-reveal>
    <img src={mobileHeroImg} alt="" aria-hidden="true" />
  </div>
        <div className="h-content">
        <ParticleCanvas reducedMotion={reducedMotion} />
        <div className="h-grain" />
        <div className="h-mesh">
          <div className="h-blob-1" /><div className="h-blob-2" /><div className="h-blob-3" />
        </div>
        <div className="h-linegrid" />

        <div className="h-arc-panel">
          <svg viewBox="0 0 500 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 140 0 Q 60 400 140 800 L 500 800 L 500 0 Z" fill="rgba(30,79,216,0.035)" />
            <path d="M 160 0 Q 80 400 160 800" stroke="rgba(30,79,216,0.12)" strokeWidth="1" fill="none" />
            <path d="M 200 0 Q 120 400 200 800" stroke="rgba(30,79,216,0.055)" strokeWidth="1" fill="none" />
            <circle cx="160" cy="200" r="3" fill="rgba(30,79,216,0.2)" />
            <circle cx="135" cy="400" r="4" fill="rgba(30,79,216,0.25)" />
            <circle cx="160" cy="600" r="3" fill="rgba(30,79,216,0.2)" />
            <circle cx="180" cy="100" r="2" fill="rgba(30,79,216,0.15)" />
            <circle cx="175" cy="700" r="2" fill="rgba(30,79,216,0.15)" />
          </svg>
        </div>

        {/* <img src={logoWatermark} alt="" className="h-watermarkk" aria-hidden="true" /> */}

        <div className="h-watermark"><span>Aththanayaka</span><span>Super Mart</span></div>

        <div className="h-inner">

          
          {/* HEADER — eyebrow + title, its own grid area so it can be reordered on mobile */}
          <div className="h-area-header">
            <div className="h-eyebrow" data-reveal>
              <div className="h-eyebrow-dot" />
              <span className="h-eyebrow-text">{t("eyebrow", lang)}</span>
            </div>

            <h1 className="h-title" data-reveal>
              <span className="h-title-line">{t("title1", lang)}</span>
              <span className="h-title-line"><em>{t("title2", lang)}</em></span>
            </h1>
          </div>

          {/* VISUAL — product carousel; the floating info cards are a separate
              area (h-floats-area) sharing this same grid cell on desktop so they
              still overlay the card, but can be reordered independently on mobile. */}
          <div className="h-right" data-reveal>
            <ProductCard lang={lang} reducedMotion={reducedMotion} />
          </div>

          {/* BODY — description, buyer toggle, CTA */}
          <div className="h-area-body">
            <p className={`h-desc${descExpanded ? " expanded" : ""}`} data-reveal>
              {descExpanded ? t("desc", lang) : t("desc", lang)}
            </p>
            <button
              type="button"
              className="h-desc-toggle"
              onClick={() => setDescExpanded(e => !e)}
              aria-expanded={descExpanded}
            >
              {descExpanded ? t("readLess", lang) : t("readMore", lang)}
            </button>

            {/* Buyer-type toggle: clarifies who the page is for, fast, and routes
                to a tailored section instead of one generic CTA for everyone. */}
            <div className="h-buyer" data-reveal>
              <div className="h-buyer-label">{t("buyerLabel", lang)}</div>
              <div className="h-buyer-row" role="group" aria-label={t("buyerLabel", lang)}>
                <button
                  type="button"
                  className={`h-buyer-btn${buyerType === "retail" ? " active" : ""}`}
                  aria-pressed={buyerType === "retail"}
                  onClick={() => handleBuyerChoice("retail")}
                >
                  {t("buyerRetail", lang)}
                </button>
                <button
                  type="button"
                  className={`h-buyer-btn${buyerType === "bulk" ? " active" : ""}`}
                  aria-pressed={buyerType === "bulk"}
                  onClick={() => handleBuyerChoice("bulk")}
                >
                  {t("buyerBulk", lang)}
                </button>
              </div>
              {moqNote && <div className="h-moq-note">{moqNote}</div>}
            </div>

            {/* CTA hierarchy: one dominant primary action, the other demoted to a text link,
                plus a subtitle for what happens next and a one-line reassurance. */}
            <div className="h-actions" data-reveal>
              <div className="h-actions-row">
                <button className="h-btn-primary" onClick={onShopNow}>
                  <span>{t("shopNow", lang)}</span>
                  <span className="h-btn-primary-sub">{t("shopNowSub", lang)}</span>
                </button>
                <a
                  href="https://facebook.com/aththanayakasupermart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-btn-follow"
                >
                  <FaFacebook className="h-btn-follow-icon" aria-hidden="true" />
                  {t("followUs", lang)}
                </a>
              </div>
              <div className="h-reassure">{t("ctaReassure", lang)}</div>
            </div>
          </div>

          {/* FLOATS — same grid area as the visual on desktop (so they still sit
              over the card), but its own area on mobile so it can be placed
              right before the stat cards, after the description/CTA. */}
          <div className="h-floats-area">
            <div className="h-float h-float-a">
              <div className="h-fl-label">{t("qualityLabel", lang)}</div>
              <div className="h-fl-val">{t("qualityVal", lang)}</div>
              <div className="h-fl-sub">{t("qualitySub", lang)}</div>
              <div className="h-fl-sub h-fl-sub-chem">{t("noChemNote", lang)}</div>
            </div>

            <div className="h-float h-float-b">
              <FaMapMarkerAlt className="h-fl-icon h-fl-icon-map" aria-hidden="true" />
              <div className="h-fl-label">{t("visitLabel", lang)}</div>
              <div className="h-fl-val">{t("visitVal", lang)}</div>
              <div className="h-fl-sub">{t("visitSub", lang)}</div>
            </div>

            <div className="h-float h-float-c">
              <FaTruck className="h-fl-icon h-fl-icon-truck" aria-hidden="true" />
              <div className="h-fl-label">{t("deliveryLabel", lang)}</div>
              <div className="h-fl-val">{t("deliveryVal", lang)}</div>
              <div className="h-fl-sub h-fl-sub-chem">{t("freeDeliveryNote", lang)}</div>
            </div>

            <div className="h-float h-float-d">
              <FaWhatsapp className="h-fl-icon h-fl-icon-wa" aria-hidden="true" />
              <div className="h-fl-label">{t("quoteLabel", lang)}</div>
              <div className="h-fl-val">{t("quoteVal", lang)}</div>
              <div className="h-fl-sub">{t("quoteSub", lang)}</div>
            </div>

            <div className="h-float h-float-e">
              <FaPhoneAlt className="h-fl-icon h-fl-icon-call" aria-hidden="true" />
              <div className="h-fl-label">{t("callLabel", lang)}</div>
              <div className="h-fl-val">{t("callVal", lang)}</div>
              <div className="h-fl-sub">{t("callSub", lang)}</div>
            </div>
          </div>

          <div className="h-stats" data-reveal>
            <div className="h-stat">
              <div className="h-stat-num">{t("stat1num", lang)}</div>
              <div className="h-stat-lbl">{t("stat1lbl", lang)}</div>
            </div>
            <div className="h-stat">
              <div className="h-stat-num">{t("stat2num", lang)}</div>
              <div className="h-stat-lbl">{t("stat2lbl", lang)}</div>
            </div>
            <div className="h-stat">
              <div className="h-stat-num">{t("stat3num", lang)}</div>
              <div className="h-stat-lbl">{t("stat3lbl", lang)}</div>
            </div>
          </div>
        </div>
        </div>

        {/* TICKER */}
        <div className="ticker-wrap">
          <div className="ticker-live-badge">
            <span className="ticker-live-dot" />
            <span className="ticker-live-text">{t("live", lang)}</span>
          </div>
          <button
            type="button"
            className="ticker-toggle"
            onClick={() => setTickerPaused(p => !p)}
            aria-label={tickerPaused ? t("playTicker", lang) : t("pauseTicker", lang)}
            title={tickerPaused ? t("playTicker", lang) : t("pauseTicker", lang)}
          >
            {tickerPaused ? "▶" : "❚❚"}
          </button>
          <div className="ticker-inner">
            <div className={`ticker-track${tickerPaused ? " paused" : ""}`}>
              {tickerItems.map(([icon, label, val], i) => (
                <span className="ticker-item" key={i}>
                  <span className="ticker-icon">{icon}</span>
                  {label}
                  <span className="ticker-dot-sep" />
                  <span className="ticker-val">{val}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}