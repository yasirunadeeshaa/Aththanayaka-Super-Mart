import { useRef, useEffect } from "react";

const FOODS = [
  { name: "Sesame Brittle", origin: "Sri Lanka / South Asia", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=340&q=80" },
  { name: "Tahini", origin: "Middle East", img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=340&q=80" },
  { name: "Sesame Oil", origin: "East & South Asia", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=340&q=80" },
  { name: "Til Ladoo", origin: "India", img: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=340&q=80" },
  { name: "Hummus", origin: "Middle East", img: "https://images.unsplash.com/photo-1613987245117-50933bcb3240?w=340&q=80" },
  { name: "Sesame Noodles", origin: "China", img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=340&q=80" },
  { name: "Bagel with Sesame", origin: "Global", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=340&q=80" },
  { name: "Goma Tofu", origin: "Japan", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=340&q=80" },
  { name: "Sesame Cookies", origin: "Global", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=340&q=80" },
  { name: "Black Sesame Soup", origin: "China", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=340&q=80" },
];

/* Duplicate list for seamless infinite loop */
const FOODS_DOUBLED = [...FOODS, ...FOODS];

export default function SesameRecipes() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  const CARD_WIDTH = 186; // card width + gap
  const TOTAL_WIDTH = CARD_WIDTH * FOODS.length;
  const SPEED = 0.6; // px per frame — adjust to taste

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= TOTAL_WIDTH) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .sr-section {
          padding: 64px 0;
          background: #f7f9ff;
          overflow: hidden;
        }

        .sr-header {
          text-align: center;
          padding: 0 48px;
          margin-bottom: 40px;
        }
        .sr-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #1e4fd8; margin-bottom: 12px;
          font-family: 'DM Sans', sans-serif;
        }
        .sr-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 3.5vw, 42px);
          color: #1a1a2e; line-height: 1.1; margin-bottom: 10px;
        }
        .sr-title em { font-style: italic; color: #1e4fd8; }
        .sr-sub {
          font-size: 15px; color: #6a7a9a; font-weight: 300;
          max-width: 480px; margin: 0 auto; line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
        }

        /* Scroll track */
        .sr-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Fade edges */
        .sr-viewport::before,
        .sr-viewport::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .sr-viewport::before {
          left: 0;
          background: linear-gradient(to right, #f7f9ff, transparent);
        }
        .sr-viewport::after {
          right: 0;
          background: linear-gradient(to left, #f7f9ff, transparent);
        }

        .sr-track {
          display: flex;
          gap: 16px;
          width: max-content;
          padding: 8px 0 16px;
          will-change: transform;
        }

        /* Card */
        .sr-card {
          flex: 0 0 170px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #e8eef8;
          background: white;
          box-shadow: 0 4px 16px rgba(30,79,216,0.07);
          transition: transform 0.25s, box-shadow 0.25s;
          cursor: default;
          font-family: 'DM Sans', sans-serif;
        }
        .sr-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(30,79,216,0.13);
        }
        .sr-card-img {
          width: 170px; height: 140px;
          object-fit: cover; display: block;
          background: #e8eef8;
        }
        .sr-card-img-fallback {
          width: 170px; height: 140px;
          display: flex; align-items: center; justify-content: center;
          background: #e8eef8; font-size: 36px;
        }
        .sr-card-info {
          padding: 10px 12px 13px;
        }
        .sr-card-name {
          font-size: 13px; font-weight: 500;
          color: #1a1a2e; line-height: 1.35; margin-bottom: 3px;
        }
        .sr-card-origin {
          font-size: 11px; color: #8a9abf; font-weight: 400;
        }
      `}</style>

      <section className="sr-section">
        <div className="sr-header">
          <div className="sr-eyebrow">From Our Sesame</div>
          <h2 className="sr-title">Foods Made with <em>Sesame</em></h2>
          <p className="sr-sub">From traditional Sri Lankan brittle to global favourites — sesame is at the heart of it all.</p>
        </div>

        <div
          className="sr-viewport"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          <div className="sr-track" ref={trackRef}>
            {FOODS_DOUBLED.map((food, i) => (
              <div className="sr-card" key={i}>
                <img
                  src={food.img}
                  alt={food.name}
                  className="sr-card-img"
                  onError={e => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="sr-card-img-fallback" style={{ display: "none" }}>🌾</div>
                <div className="sr-card-info">
                  <div className="sr-card-name">{food.name}</div>
                  <div className="sr-card-origin">{food.origin}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}