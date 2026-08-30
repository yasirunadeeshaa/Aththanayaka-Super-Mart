import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton({
  phone = "+94726969743", // include + and country code
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `tel:${phone}`;

  return (
    <>
      <style>{`
        .call-fab {
          position: fixed;
          bottom: 166px;
          right: 26px;
          z-index: 999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.12);
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.25s ease, opacity 0.3s ease, box-shadow 0.25s ease;
          opacity: 0;
          transform: translateY(16px) scale(0.9);
          pointer-events: none;
        }
        .call-fab.call-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .call-fab:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 26px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.15);
        }
        .call-fab:active { transform: translateY(-1px) scale(0.98); }
        .call-icon { width: 26px; height: 26px; color: #e02424; }
        @media (max-width: 640px) {
          .call-fab { width: 52px; height: 52px; bottom: 138px; right: 18px; }
          .call-icon { width: 23px; height: 23px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .call-fab { transition: opacity 0.2s ease; }
        }
      `}</style>

      <a
        href={href}
        className={`call-fab${visible ? " call-visible" : ""}`}
        aria-label="Call us"
      >
        <FaPhoneAlt className="call-icon" aria-hidden="true" />
      </a>
    </>
  );
}