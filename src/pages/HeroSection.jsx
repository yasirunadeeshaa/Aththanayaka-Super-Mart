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
    tag: "Black & White Sesame Seeds",
    name: "Black & White Sesame Seeds",
    desc: "A perfect blend of black and white sesame seeds for a unique taste.",
  },
  {
    image: blacksesami,
    tag: "Black Sesame Seeds",
    name: "Black Sesame Seeds",
    desc: "Rich in nutrients and flavor, these black sesame seeds are a healthy addition to your diet.",
  },
  {
    image: whiteseasami,
    tag: "White Sesame Seeds",
    name: "White Sesame Seeds",
    desc: "High-quality white sesame seeds, rich in nutrients and flavor.",
  },
  {
    image: cleansesami,
    tag: "Fresh & cleaned sesami",
    name: "Cleaned black Sesame Seeds",
    desc: "A perfect blend of black and white sesame seeds for a unique taste.",
  },
  {
    image: jaggery,
    tag: "Sugar Gaggery",
    name: "Organic Jaggery",
    desc: "Unrefined jaggery made from fresh sugarcane juice.",
  },
];

function ProductCard() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % PRODUCTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { image, tag, name, desc } = PRODUCTS[current];

  return (
    <div className="h-card">
      <div className="h-card-img-wrap">
        <img key={current} src={image} alt={name} className="h-card-img h-card-img-fade" />
      </div>
      <div className="h-card-tag">{tag}</div>
      <div className="h-card-name">{name}</div>
      <div className="h-card-desc">{desc}</div>
      <div className="h-card-dots">
        {PRODUCTS.map((_, i) => (
          <button
            key={i}
            className={`h-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-reveal]");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(28px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.75s ease, transform 0.75s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 150 + i * 130);
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .hero-root {
          --white: #ffffff;
          --off-white: #f7f9ff;
          --blue: #1e4fd8;
          --blue-dark: #1538a8;
          --blue-light: #e8eeff;
          --blue-mid: #c2d0fa;
          --text: #1a1a2e;
          --text-muted: #5a6a8a;
          --text-light: #8a9abf;

          min-height: 100vh;
          background: var(--white);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          font-family: 'DM Sans', sans-serif;
        }

        .h-shape-1 {
          position: absolute; top: -120px; right: -80px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, #dce8ff 0%, transparent 70%);
          pointer-events: none;
        }
        .h-shape-2 {
          position: absolute; bottom: -200px; left: -100px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, #eef2ff 0%, transparent 70%);
          pointer-events: none;
        }
        .h-dotgrid {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, #c2d0fa 1px, transparent 1px);
          background-size: 36px 36px; opacity: 0.35; pointer-events: none;
        }
        .h-diagonal {
          position: absolute; top: 0; right: 0;
          width: 46%; height: 100%;
          background: linear-gradient(160deg, #1e4fd8 0%, #2d63f0 60%, #1538a8 100%);
          clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%);
          pointer-events: none;
        }
        .h-diagonal-dots {
          position: absolute; top: 0; right: 0;
          width: 46%; height: 100%;
          clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%);
          background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
          background-size: 28px 28px; pointer-events: none;
        }

        .h-inner {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 130px 48px 80px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center;
          width: 100%; flex: 1;
        }

        .h-eyebrow {
          display: inline-flex; align-items: center; gap: 10px; margin-bottom: 24px;
        }
        .h-eyebrow-line {
          width: 32px; height: 2px;
          background: #1e4fd8; border-radius: 2px;
        }
        .h-eyebrow-text {
          font-size: 12px; font-weight: 600;
          letter-spacing: 3px; text-transform: uppercase; color: #1e4fd8;
        }

        .h-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(40px, 4.5vw, 66px);
          font-weight: 400; line-height: 1.08;
          color: #1a1a2e; margin-bottom: 20px;
        }
        .h-title em { font-style: italic; color: #1e4fd8; }
        .h-title-block { display: block; }

        .h-desc {
          font-size: 17px; font-weight: 300; line-height: 1.85;
          color: #5a6a8a; margin-bottom: 40px; max-width: 440px;
        }

        .h-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 52px; }

        .h-btn-primary {
          font-size: 13px; font-weight: 600; letter-spacing: 1px;
          color: #fff; background: #1e4fd8;
          border: 2px solid #1e4fd8;
          padding: 15px 36px; border-radius: 4px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          transition: background 0.25s, transform 0.2s, box-shadow 0.3s;
          box-shadow: 0 6px 24px rgba(30,79,216,0.3);
        }
        .h-btn-primary:hover {
          background: #1538a8; border-color: #1538a8;
          transform: translateY(-2px); box-shadow: 0 10px 32px rgba(30,79,216,0.4);
        }

        .h-btn-secondary {
          font-size: 13px; font-weight: 600; letter-spacing: 1px;
          color: #1e4fd8; background: transparent;
          border: 2px solid #c2d0fa;
          padding: 15px 36px; border-radius: 4px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.25s;
        }
        .h-btn-secondary:hover { border-color: #1e4fd8; background: #e8eeff; }

        .h-stats { display: flex; gap: 0; }
        .h-stat {
          padding-right: 36px; margin-right: 36px;
          border-right: 1px solid #dde4f4;
        }
        .h-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }
        .h-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 34px; color: #1e4fd8; line-height: 1; margin-bottom: 4px;
        }
        .h-stat-lbl {
          font-size: 12px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase; color: #8a9abf;
        }

        .h-right {
          position: relative; display: flex;
          justify-content: center; align-items: center;
        }

        .h-card {
          background: rgba(255,255,255,0.93);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 16px; padding: 36px; width: 300px;
          box-shadow: 0 20px 60px rgba(30,79,216,0.15), 0 4px 16px rgba(0,0,0,0.06);
          backdrop-filter: blur(12px);
          position: relative; z-index: 3;
        }
        .h-card-emoji {
          font-size: 72px; display: block;
          text-align: center; margin-bottom: 20px;
          animation: hFloatEmoji 3s ease-in-out infinite;
        }
        @keyframes hFloatEmoji {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)}
        }
        .h-card-tag {
          font-size: 10px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #1e4fd8; background: #e8eeff;
          padding: 4px 12px; border-radius: 100px;
          display: inline-block; margin-bottom: 10px;
        }
        .h-card-name {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; color: #1a1a2e; margin-bottom: 6px;
        }
        .h-card-desc {
          font-size: 13px; font-weight: 300;
          color: #5a6a8a; line-height: 1.6; margin-bottom: 20px;
        }
        .h-card-footer {
          display: flex; align-items: center; justify-content: space-between;
        }
        .h-card-price {
          font-family: 'DM Serif Display', serif;
          font-size: 26px; color: #1a1a2e;
        }
        .h-card-price span {
          font-size: 13px; font-weight: 400;
          color: #8a9abf; text-decoration: line-through; margin-left: 6px;
        }
        .h-add-btn {
          width: 40px; height: 40px; background: #1e4fd8;
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; color: white; font-size: 22px;
          cursor: pointer; border: none;
          transition: transform 0.2s, background 0.2s; line-height: 1;
        }
        .h-add-btn:hover { transform: scale(1.1); background: #1538a8; }

        .h-card-img-wrap {
        width: 100%; height: 180px; border-radius: 10px;
        overflow: hidden; margin-bottom: 18px;
        }
        .h-card-img {
        width: 100%; height: 100%; object-fit: cover;
        transition: transform 0.6s ease;
        }
        .h-card-img:hover { transform: scale(1.04); }

        .h-card-dots {
        display: flex; justify-content: center; gap: 6px; margin-top: 16px;
        }
        .h-dot {
        width: 7px; height: 7px; border-radius: 50%;
        background: #c2d0fa; border: none; cursor: pointer;
        padding: 0; transition: background 0.2s, transform 0.2s;
        }
        .h-dot.active { background: #1e4fd8; transform: scale(1.3); }

        .h-float {
          position: absolute; background: white; border-radius: 12px;
          padding: 14px 18px;
          box-shadow: 0 8px 32px rgba(30,79,216,0.12), 0 2px 8px rgba(0,0,0,0.06);
          z-index: 4;
        }
        .h-float-a { top: -10px; right: -20px; animation: hfa 4s ease-in-out infinite; }
        .h-float-b { bottom: 20px; left: -40px; animation: hfb 5s ease-in-out infinite; }
        .h-float-c { top: 50%; right: -50px; transform: translateY(-50%); animation: hfc 4.5s ease-in-out infinite; }

        @keyframes hfa{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes hfb{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
        @keyframes hfc{0%,100%{transform:translateY(-50%) translateX(0)}50%{transform:translateY(-50%) translateX(5px)}}

        .h-fl-label {
          font-size: 10px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #8a9abf; margin-bottom: 3px;
        }
        .h-fl-val { font-family: 'DM Serif Display', serif; font-size: 18px; color: #1e4fd8; }
        .h-fl-sub { font-size: 11px; color: #5a6a8a; margin-top: 2px; }
        .h-fl-stars { color: #f5a623; font-size: 13px; letter-spacing: 1px; margin-bottom: 2px; }

        .h-cats {
          position: relative; z-index: 2;
          background: white; border-top: 1px solid #e8eef8;
          padding: 20px 48px;
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          width: 100%;
        }
        .h-cats-lbl {
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #8a9abf; margin-right: 8px; white-space: nowrap;
        }
        .h-chip {
          font-size: 12px; font-weight: 500;
          color: #5a6a8a; background: #f7f9ff;
          border: 1px solid #dde4f4;
          padding: 7px 18px; border-radius: 100px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.2s; white-space: nowrap;
        }
        .h-chip:hover { background: #e8eeff; border-color: #c2d0fa; color: #1e4fd8; }

        @media (max-width: 960px) {
          .h-inner { grid-template-columns: 1fr; padding-top: 130px; gap: 60px; }
          .h-diagonal, .h-diagonal-dots { display: none; }
          .h-right { order: -1; }
          .h-card { width: 280px; }
          .h-float-c { display: none; }
        }
        @media (max-width: 540px) {
          .h-inner { padding: 110px 24px 60px; }
          .h-cats { padding: 16px 24px; }
          .h-stats { flex-wrap: wrap; gap: 20px; }
          .h-stat { border-right: none; padding-right: 0; margin-right: 0; }
          .h-actions { flex-direction: column; }
          .h-btn-primary, .h-btn-secondary { justify-content: center; }
          .h-float-b { left: -10px; }
        }

        @keyframes hFadeIn {
        from { opacity: 0; transform: scale(1.04); }
        to   { opacity: 1; transform: scale(1); }
        }
        .h-card-img-fade {
        animation: hFadeIn 0.5s ease forwards;
        }
      `}</style>

      <section className="hero-root" ref={heroRef}>
        <div className="h-shape-1" />
        <div className="h-shape-2" />
        <div className="h-dotgrid" />
        <div className="h-diagonal" />
        <div className="h-diagonal-dots" />

        <div className="h-inner">
          {/* Left */}
          <div>
            <div className="h-eyebrow" data-reveal>
              <div className="h-eyebrow-line" />
              <span className="h-eyebrow-text">Sri Lanka's Trusted Supermart</span>
            </div>

            <h1 className="h-title" data-reveal>
              <span className="h-title-block">Everything</span>
              <span className="h-title-block">You Need,</span>
              <span className="h-title-block"><em>All in One Place.</em></span>
            </h1>

            <p className="h-desc" data-reveal>
              Fresh produce, daily essentials, household goods and more — delivered with quality and care, right to your doorstep.
            </p>

            <div className="h-actions" data-reveal>
              <Link to="/shop" className="h-btn-primary">Shop Now →</Link>
              <Link to="/offers" className="h-btn-secondary">View Offers</Link>
            </div>

            <div className="h-stats" data-reveal>
              <div className="h-stat">
                <div className="h-stat-num">5K+</div>
                <div className="h-stat-lbl">Products</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-num">12+</div>
                <div className="h-stat-lbl">Years Trusted</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-num">99%</div>
                <div className="h-stat-lbl">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="h-right" data-reveal>
                <ProductCard />

            <div className="h-float h-float-a">
              <div className="h-fl-label">Today's Deal</div>
              <div className="h-fl-val">Up to 40%</div>
              <div className="h-fl-sub">on fresh produce</div>
            </div>

            <div className="h-float h-float-b">
              <div className="h-fl-label">Free Delivery</div>
              <div className="h-fl-val">Rs. 2000+</div>
              <div className="h-fl-sub">orders qualify</div>
            </div>

            <div className="h-float h-float-c">
              <div className="h-fl-stars">★★★★★</div>
              <div className="h-fl-label">4.9 · 2,400+ reviews</div>
            </div>
          </div>
        </div>

        {/* Categories bar */}
        <div className="h-cats" data-reveal>
          <span className="h-cats-lbl">Browse:</span>
          {[
            ["🥬","Fresh Produce"],["🥛","Dairy & Eggs"],["🍞","Bakery"],
            ["🧴","Personal Care"],["🧹","Household"],["🥤","Beverages"],["🍫","Snacks"],
          ].map(([emoji, label]) => (
            <Link
              key={label}
              to={`/products?cat=${label.toLowerCase().replace(/ /g,"-")}`}
              className="h-chip"
            >
              {emoji} {label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}