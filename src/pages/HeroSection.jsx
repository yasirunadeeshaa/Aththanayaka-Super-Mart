import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import blacksesami from "../../src/assets/black-sesame-seeds.webp";
import whiteseasami from "../../src/assets/white.jpg";
import blackwhitesesami from "../../src/assets/blackwhitesesami.webp";
import cleansesami from "../../src/assets/cleansesami.webp";
import jaggery from "../../src/assets/jaggery.avif";

const PRODUCTS = [
  {
    image: blackwhitesesami,
    tag: "Black & White Sesame",
    name: "Black & White Sesame Seeds",
    desc: "A perfect blend of black and white sesame for a unique, rich taste.",
  },
  {
    image: blacksesami,
    tag: "Black Sesame Seeds",
    name: "Premium Black Sesame",
    desc: "Rich in nutrients and bold flavor — a healthy daily essential.",
  },
  {
    image: whiteseasami,
    tag: "White Sesame Seeds",
    name: "White Sesame Seeds",
    desc: "High-quality white sesame, rich in nutrients and delicate flavor.",
  },
  {
    image: cleansesami,
    tag: "Cleaned Sesame",
    name: "Cleaned Black Sesame Seeds",
    desc: "Carefully cleaned and sorted black sesame seeds, ready to use.",
  },
  {
    image: jaggery,
    tag: "Organic Jaggery",
    name: "Organic Jaggery",
    desc: "Unrefined jaggery made from fresh sugarcane juice — naturally sweet.",
  },
];

const notifications = [
  { icon: "🛒", label: "New order received",  sub: "Order #2841 · Colombo 5",            color: "#1e4fd8" },
  { icon: "📦", label: "Stock restocked",      sub: "Jaggery 500g · 250 units added",     color: "#10b981" },
  { icon: "🚚", label: "Delivery dispatched",  sub: "Order #2839 · Out for delivery",     color: "#f59e0b" },
  { icon: "⭐", label: "New review",           sub: "Rated 5 stars · \"Great service!\"", color: "#8b5cf6" },
  { icon: "🌾", label: "Special offer live",   sub: "Sesame seeds · 20% off today",       color: "#ef4444" },
];

/* ── Particle Snow Canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight * 1.1;
    let raf;

    // Create particles
    const COUNT = 90;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.8 + 0.4,
      speedY: Math.random() * 0.5 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.35 + 0.06,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.012 + 0.004,
    }));

    // Occasionally draw a tiny cross/snowflake instead of circle
    const draw = (p) => {
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = "#1e4fd8";
      ctx.strokeStyle = "#1e4fd8";
      ctx.lineWidth = p.r * 0.7;

      if (p.r > 2) {
        // Small snowflake cross
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        ctx.moveTo(-p.r * 2, 0); ctx.lineTo(p.r * 2, 0);
        ctx.moveTo(0, -p.r * 2); ctx.lineTo(0, p.r * 2);
        // diagonals
        ctx.moveTo(-p.r * 1.4, -p.r * 1.4); ctx.lineTo(p.r * 1.4, p.r * 1.4);
        ctx.moveTo(p.r * 1.4, -p.r * 1.4); ctx.lineTo(-p.r * 1.4, p.r * 1.4);
        ctx.stroke();
        // center dot
        ctx.beginPath();
        ctx.arc(0, 0, p.r * 0.6, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Simple dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.wobble += p.wobbleSpeed;
        p.y += p.speedY;
        p.x += Math.sin(p.wobble) * 0.4 + p.speedX;
        if (p.y > H + 10) { p.y = -10; p.x = Math.random() * W; }
        if (p.x > W + 10) p.x = -10;
        if (p.x < -10) p.x = W + 10;
        draw(p);
      });
      raf = requestAnimationFrame(tick);
    };

    tick();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}

/* ── Product Carousel ── */
function ProductCard() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (i) => {
    if (animating || i === current) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 320);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % PRODUCTS.length);
        setAnimating(false);
      }, 320);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const { image, tag, name, desc } = PRODUCTS[current];

  return (
    <div className="pc-card">
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
        {PRODUCTS.map((_, i) => (
          <button
            key={i}
            className={`pc-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="pc-corner" />
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const [activeNotif, setActiveNotif] = useState(0);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-reveal]");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 120 + i * 120);
    });
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveNotif((n) => (n + 1) % notifications.length);
    }, 3500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        /* ─── RESET for full-width ─── */
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ─── ROOT ─── */
        .hero-root {
          --blue: #1e4fd8;
          --blue-dark: #1538a8;
          --blue-light: rgba(30,79,216,0.07);
          --blue-border: rgba(30,79,216,0.12);
          --text: #0f1729;
          --text-muted: #526080;
          --text-light: #9aaac8;
          --surface: #f4f7ff;

          width: 100vw;
          min-height: 100vh;
          background: #ffffff;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          font-family: 'DM Sans', sans-serif;
          /* Kill any external margin/padding inherited */
          margin-left: calc(-50vw + 50%);
        }

        /* ─── GRAIN TEXTURE ─── */
        .h-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 2;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        /* ─── MESH BLOBS ─── */
        .h-mesh { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .h-blob-1 {
          position: absolute; width: 900px; height: 900px;
          top: -280px; right: -150px; border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, rgba(30,79,216,0.08) 0%, rgba(30,79,216,0.02) 50%, transparent 75%);
        }
        .h-blob-2 {
          position: absolute; width: 600px; height: 600px;
          bottom: -180px; left: -100px; border-radius: 50%;
          background: radial-gradient(circle at 60% 60%, rgba(30,79,216,0.06) 0%, transparent 70%);
        }
        .h-blob-3 {
          position: absolute; width: 400px; height: 400px;
          top: 30%; left: 45%; border-radius: 50%;
          background: radial-gradient(circle, rgba(30,79,216,0.035) 0%, transparent 70%);
        }

        /* ─── LINE GRID ─── */
        .h-linegrid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          opacity: 0.42;
          background-image:
            linear-gradient(rgba(30,79,216,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,79,216,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.4) 75%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.4) 75%, transparent 100%);
        }

        /* ─── ARC PANEL ─── */
        .h-arc-panel {
          position: absolute; top: 0; right: 0;
          width: 52%; height: 100%;
          pointer-events: none; z-index: 0;
        }
        .h-arc-panel svg { width: 100%; height: 100%; }

        /* ─── WATERMARK ─── */
        .h-watermark {
          position: absolute;
          bottom: 8%; left: -1%;
          font-family: 'DM Serif Display', serif;
          font-size: clamp(80px, 13vw, 200px);
          color: rgba(30,79,216,0.028);
          pointer-events: none; z-index: 0;
          white-space: nowrap; letter-spacing: -3px;
          user-select: none;
        }

        /* ─── LAYOUT ─── */
        .h-inner {
          position: relative; z-index: 3;
          width: 100%;
          max-width: 1640px;
          margin: 0 auto;
          padding: 140px 80px 100px 80px;
          display: grid;
          grid-template-columns: 56% 44%;
          gap: 0px;
          align-items: center;
          flex: 1;
        }

        /* ─── EYEBROW ─── */
        .h-eyebrow { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 28px; }
        .h-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #1e4fd8;
          box-shadow: 0 0 0 3px rgba(30,79,216,0.15);
        }
        .h-eyebrow-text {
          font-size: 11px; font-weight: 600;
          letter-spacing: 3.5px; text-transform: uppercase; color: #1e4fd8;
        }

        /* ─── TITLE ─── */
        .h-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(44px, 4.6vw, 74px);
          font-weight: 400; line-height: 1.06;
          color: #0f1729; margin-bottom: 24px;
        }
        .h-title-line { display: block; }
        .h-title em {
          font-style: italic; color: #1e4fd8;
          position: relative;
        }
        .h-title em::after {
          content: '';
          position: absolute; left: 0; bottom: 2px;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, #1e4fd8, rgba(30,79,216,0.15));
          border-radius: 2px;
        }

        /* ─── DESC ─── */
        .h-desc {
          font-size: 16.5px; font-weight: 500; line-height: 1.9;
          color: #526080; margin-bottom: 44px; max-width: 540px;
        }

        /* ─── BUTTONS ─── */
        .h-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }
        .h-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 13px; font-weight: 600; letter-spacing: 1px;
          color: #fff; background: #1e4fd8;
          border: none; padding: 16px 38px; border-radius: 6px;
          cursor: pointer; text-decoration: none;
          transition: background 0.25s, transform 0.2s, box-shadow 0.3s;
          box-shadow: 0 4px 20px rgba(30,79,216,0.28), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .h-btn-primary:hover {
          background: #1538a8; transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(30,79,216,0.38);
        }
        .h-btn-secondary {
          display: inline-flex; align-items: center; gap: 9px;
          font-size: 13px; font-weight: 600; letter-spacing: 1px;
          color: #526080; background: transparent;
          border: 1.5px solid rgba(30,79,216,0.2);
          padding: 16px 38px; border-radius: 6px;
          cursor: pointer; text-decoration: none; transition: all 0.25s;
        }
        .h-btn-secondary:hover { border-color: #1e4fd8; color: #1e4fd8; background: rgba(30,79,216,0.04); }

        /* ─── STATS ─── */
        .h-stats { display: flex; gap: 0; }
        .h-stat {
          padding-right: 36px; margin-right: 36px;
          border-right: 1px solid rgba(30,79,216,0.12);
        }
        .h-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }
        .h-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 32px; color: #0f1729; line-height: 1; margin-bottom: 5px;
        }
        .h-stat-num span { color: #1e4fd8; }
        .h-stat-lbl {
          font-size: 11px; font-weight: 500;
          letter-spacing: 2px; text-transform: uppercase; color: #9aaac8;
        }

        /* ─── RIGHT COLUMN ─── */
        .h-right {
          position: relative;
          display: flex; justify-content: center; align-items: center;
        }

        /* ─── PRODUCT CARD ─── */
        .pc-card {
          position: relative;
          width: 390px; height: 510px;
          border-radius: 22px; overflow: hidden;
          box-shadow:
            0 2px 8px rgba(30,79,216,0.06),
            0 16px 48px rgba(30,79,216,0.16),
            0 40px 80px rgba(30,79,216,0.09);
          z-index: 3;
        }
        .pc-img-wrap {
          position: absolute; inset: 0;
          transition: opacity 0.32s ease;
        }
        .pc-img-wrap.pc-fading { opacity: 0; }
        .pc-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pc-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15,23,41,0.01) 0%,
            rgba(15,23,41,0.04) 40%,
            rgba(15,23,41,0.62) 72%,
            rgba(15,23,41,0.82) 100%
          );
        }
        .pc-info {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 22px 22px 24px; z-index: 2;
        }
        .pc-badge {
          display: inline-block;
          font-size: 9.5px; font-weight: 600; letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          background: rgba(30,79,216,0.4);
          border: 1px solid rgba(30,79,216,0.5);
          padding: 4px 12px; border-radius: 100px; margin-bottom: 10px;
        }
        .pc-name {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; color: #fff; line-height: 1.15; margin-bottom: 6px;
        }
        .pc-desc { font-size: 12.5px; font-weight: 300; color: rgba(255,255,255,0.62); line-height: 1.6; }
        .pc-dots {
          position: absolute; top: 50%; right: 16px;
          transform: translateY(-50%);
          display: flex; flex-direction: column; gap: 6px; z-index: 3;
        }
        .pc-dot {
          width: 3px; height: 18px; border-radius: 2px;
          background: rgba(255,255,255,0.25);
          border: none; cursor: pointer; padding: 0; transition: all 0.25s;
        }
        .pc-dot.active { background: #fff; height: 30px; }
        .pc-corner {
          position: absolute; top: 16px; left: 16px; z-index: 3;
          width: 24px; height: 24px;
          border-top: 2px solid rgba(255,255,255,0.35);
          border-left: 2px solid rgba(255,255,255,0.35);
          border-radius: 1px; pointer-events: none;
        }

        /* ─── FLOATING BADGES ─── */
        .h-float {
          position: absolute;
          background: #fff;
          border: 1px solid rgba(30,79,216,0.1);
          border-radius: 14px; padding: 12px 16px;
          box-shadow: 0 4px 20px rgba(30,79,216,0.1), 0 1px 4px rgba(0,0,0,0.05);
          z-index: 4;
        }
        .h-float-a { top: -16px; right: -28px; animation: hfloatA 4s ease-in-out infinite; }
        .h-float-b { bottom: 5px; left: -84px; animation: hfloatB 5s ease-in-out infinite; }
        @keyframes hfloatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes hfloatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .h-fl-label { font-size: 9px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #9aaac8; margin-bottom: 3px; }
        .h-fl-val { font-family: 'DM Serif Display', serif; font-size: 17px; color: #1e4fd8; line-height: 1; }
        .h-fl-sub { font-size: 10.5px; color: #9aaac8; margin-top: 2px; }
        .h-fl-sub-sm { font-size: 12px; color: #526080; margin-top: 2px; font-family: 'DM Sans', sans-serif; font-weight: 300; }
        .h-fl-stars { color: #f0a500; font-size: 11px; letter-spacing: 1px; margin-bottom: 2px; }

        /* ─── NOTIFICATION STACK ─── */
        .notif-stack {
          position: absolute; right: -210px; bottom: -50px;
          display: flex; flex-direction: column; gap: 10px; z-index: 6;
        }
        .notif {
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(30,79,216,0.12);
          border-radius: 14px; padding: 12px 16px;
          min-width: 230px;
          display: flex; align-items: flex-start; gap: 12px;
          box-shadow: 0 8px 32px rgba(30,79,216,0.10);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          opacity: 0.5; scale: 0.96; filter: blur(1.5px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), scale 0.6s ease, filter 0.6s ease;
        }
        .notif.visible { opacity: 1; scale: 1; filter: blur(0px); }
        .notif-icon-ring {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; flex-shrink: 0;
        }
        .notif-body { display: flex; flex-direction: column; gap: 3px; }
        .notif-title { font-size: 13px; font-weight: 700; color: #1a1a2e; font-family: 'DM Sans', sans-serif; }
        .notif-sub { font-size: 11px; color: #64748b; font-family: 'DM Sans', sans-serif; letter-spacing: 0.1px; }

        /* ─── CATEGORIES BAR ─── */
        .h-cats {
          position: relative; z-index: 3;
          border-top: 1px solid rgba(30,79,216,0.08);
          background: rgba(255,255,255,0.92);
          -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
          padding: 18px 80px;
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          width: 100%;
        }
        .h-cats-lbl {
          font-size: 10px; font-weight: 600; letter-spacing: 2.5px;
          text-transform: uppercase; color: #9aaac8; margin-right: 10px; white-space: nowrap;
        }
        .h-chip {
          font-size: 12px; font-weight: 500;
          color: #526080; background: #f4f7ff;
          border: 1px solid rgba(30,79,216,0.1);
          padding: 7px 16px; border-radius: 100px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.2s; white-space: nowrap;
        }
        .h-chip:hover { background: rgba(30,79,216,0.06); border-color: rgba(30,79,216,0.25); color: #1e4fd8; }

        /* ─── TICKER BAR ─── */
        .ticker-wrap {
          position: relative; z-index: 3;
          width: 100%; height: 38px;
          background: rgba(10, 14, 40, 0.96);
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center;
          overflow: hidden;
          flex-shrink: 0;
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
        }
        .ticker-live-badge {
          display: flex; align-items: center; gap: 7px;
          padding: 0 20px; height: 100%;
          background: transparent;
          border-right: 1px solid rgba(255,255,255,0.1);
          flex-shrink: 0;
        }
        .ticker-live-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #86efac;
          animation: tickerPulse 1.4s ease-in-out infinite;
        }
        @keyframes tickerPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
        .ticker-live-text { font-size: 11px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #fff; font-family: monospace; }
        .ticker-inner { display: flex; overflow: hidden; flex: 1; height: 100%; align-items: center; }
        .ticker-track { display: flex; align-items: center; animation: tickerMove 30s linear infinite; white-space: nowrap; }
        @keyframes tickerMove { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ticker-item {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 0 28px; border-right: 1px solid rgba(255,255,255,0.08);
          font-size: 12px; font-family: 'DM Sans', system-ui, sans-serif;
          color: #94a3b8; white-space: nowrap; letter-spacing: 0.1px;
        }
        .ticker-icon { font-size: 13px; opacity: 0.85; }
        .ticker-val { color: #fff; font-weight: 700; font-size: 12px; }
        .ticker-dot-sep { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.35); display: inline-block; flex-shrink: 0; }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1100px) {
          .h-inner { padding: 140px 48px 100px; gap: 24px; }
          .h-cats { padding: 18px 48px; }
        }

        @media (max-width: 960px) {
          .h-inner { grid-template-columns: 1fr; padding-top: 120px; gap: 60px; }
          .h-arc-panel { display: none; }
          .h-right { order: -1; }
          .pc-card {
            width: 280px; height: auto;
            border-radius: 20px; overflow: hidden;
            box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 8px 32px rgba(30,79,216,0.1), 0 24px 64px rgba(30,79,216,0.06);
            background: #fff; border: 1px solid rgba(30,79,216,0.1); padding: 28px;
          }
          .pc-img-wrap { position: relative; height: 170px; border-radius: 12px; margin-bottom: 20px; background: #f4f7ff; }
          .pc-img { border-radius: 12px; }
          .pc-img-overlay { display: none; }
          .pc-info { position: static; padding: 0; }
          .pc-badge { color: #1e4fd8; background: rgba(30,79,216,0.07); border: none; }
          .pc-name { color: #0f1729; font-size: 20px; }
          .pc-desc { color: #526080; }
          .pc-dots { position: static; transform: none; flex-direction: row; justify-content: center; margin-top: 18px; }
          .pc-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(30,79,216,0.2); }
          .pc-dot.active { background: #1e4fd8; width: 6px; height: 6px; transform: scale(1.4); }
          .pc-corner { display: none; }
          .h-watermark { font-size: 80px; }
          .notif-stack { display: none; }
          .h-float-b { left: -20px; bottom: -20px; }
        }

        @media (max-width: 640px) {
          .h-inner { padding: 100px 24px 60px; }
          .h-cats { padding: 14px 24px; }
          .h-stats { flex-wrap: wrap; gap: 20px; }
          .h-stat { border-right: none; padding-right: 0; margin-right: 0; }
          .h-actions { flex-direction: column; }
          .h-btn-primary, .h-btn-secondary { justify-content: center; }
        }
      `}</style>

      <section className="hero-root" ref={heroRef}>

        {/* Snow / Particle layer */}
        <ParticleCanvas />

        <div className="h-grain" />

        <div className="h-mesh">
          <div className="h-blob-1" />
          <div className="h-blob-2" />
          <div className="h-blob-3" />
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

        <div className="h-watermark">SUPERMART</div>

        <div className="h-inner">

          {/* ── LEFT ── */}
          <div>
            <div className="h-eyebrow" data-reveal>
              <div className="h-eyebrow-dot" />
              <span className="h-eyebrow-text">Sri Lanka's Trusted Supermart</span>
            </div>

            <h1 className="h-title" data-reveal>
              <span className="h-title-line">Everything You Need,</span>
              <span className="h-title-line"><em>All in One Place.</em></span>
            </h1>

            <p className="h-desc" data-reveal>
              Premium sesame ingredients, raw materials, and production essentials sourced with quality and care. We provide everything you need for sesame-based food production, from carefully selected ingredients to trusted supplies, ensuring freshness, consistency, and excellence in every product.
            </p>

            <div className="h-actions" data-reveal>
              <Link to="/shop" className="h-btn-primary">Shop Now &nbsp;→</Link>
              <Link to="/offers" className="h-btn-secondary">View Offers</Link>
            </div>

            <div className="h-stats" data-reveal>
              <div className="h-stat">
                <div className="h-stat-num">5<span>K+</span></div>
                <div className="h-stat-lbl">Products</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-num">20<span>+</span></div>
                <div className="h-stat-lbl">Years Trusted</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-num">99<span>%</span></div>
                <div className="h-stat-lbl">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="h-right" data-reveal>
            <ProductCard />

            <div className="h-float h-float-a">
              <div className="h-fl-label">Today's Deal</div>
              <div className="h-fl-val">Up to 40%</div>
              <div className="h-fl-sub">on fresh produce</div>
            </div>

            <div className="h-float h-float-b">
              <div className="h-fl-stars">★★★★★</div>
              <div className="h-fl-label">4.9 · 2,400+ reviews</div>
              <div className="h-fl-sub-sm">Free delivery Rs. 2000+</div>
            </div>

            {/* Notification Stack */}
            {/* <div className="notif-stack">
              {notifications.map((n, i) => (
                <div key={i} className={`notif ${i === activeNotif ? "visible" : ""}`}>
                  <div className="notif-icon-ring" style={{ background: `${n.color}22` }}>
                    <span style={{ color: n.color }}>{n.icon}</span>
                  </div>
                  <div className="notif-body">
                    <div className="notif-title">{n.label}</div>
                    <div className="notif-sub">{n.sub}</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* ── TICKER BAR ── */}
        <div className="ticker-wrap">
          <div className="ticker-live-badge">
            <span className="ticker-live-dot" />
            <span className="ticker-live-text">Live</span>
          </div>
          <div className="ticker-inner">
            <div className="ticker-track">
              {[
                ["🛒", "New order placed",       "Colombo 5"],
                ["📦", "Jaggery 500g restocked", "250 units"],
                ["⭐", "Customer rating",         "4.9 / 5.0"],
                ["🚚", "Delivery dispatched",     "Order #2841"],
                ["🌾", "Sesame seeds",            "20% off today"],
                ["💳", "Payment received",        "LKR 3,450"],
                ["📦", "Basmati rice added",      "5 kg packs"],
                ["🛒", "Orders today",            "+18% vs yesterday"],
                // duplicate for seamless loop
                ["🛒", "New order placed",       "Colombo 5"],
                ["📦", "Jaggery 500g restocked", "250 units"],
                ["⭐", "Customer rating",         "4.9 / 5.0"],
                ["🚚", "Delivery dispatched",     "Order #2841"],
                ["🌾", "Sesame seeds",            "20% off today"],
                ["💳", "Payment received",        "LKR 3,450"],
                ["📦", "Basmati rice added",      "5 kg packs"],
                ["🛒", "Orders today",            "+18% vs yesterday"],
              ].map(([icon, label, val], i) => (
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