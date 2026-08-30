import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";

export default function FacebookButton({
  pageUsername = "yourpagename", // your Facebook Page username (for m.me link)
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://m.me/${pageUsername}`;

  return (
    <>
      <style>{`
        .fb-fab {
          position: fixed;
          bottom: 96px;
          right: 26px;
          z-index: 999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #1877F2;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(24,119,242,0.4), 0 1px 4px rgba(0,0,0,0.15);
          transition: transform 0.25s ease, opacity 0.3s ease, box-shadow 0.25s ease;
          opacity: 0;
          transform: translateY(16px) scale(0.9);
          pointer-events: none;
        }
        .fb-fab.fb-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .fb-fab:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 26px rgba(24,119,242,0.5), 0 2px 6px rgba(0,0,0,0.18);
        }
        .fb-fab:active { transform: translateY(-1px) scale(0.98); }
        .fb-icon { width: 30px; height: 30px; color: #fff; }
        @media (max-width: 640px) {
          .fb-fab { width: 52px; height: 52px; bottom: 78px; right: 18px; }
          .fb-icon { width: 27px; height: 27px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fb-fab { transition: opacity 0.2s ease; }
        }
      `}</style>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`fb-fab${visible ? " fb-visible" : ""}`}
        aria-label="Message us on Facebook"
      >
        <FaFacebook className="fb-icon" aria-hidden="true" />
      </a>
    </>
  );
}