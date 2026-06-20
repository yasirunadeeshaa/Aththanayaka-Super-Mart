import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({
  phone = "94770000000",       // country code + number, no + or spaces
  message = "Hi! I'd like to ask about your sesame seeds and jaggery.",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>{`
        .wa-fab {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(37,211,102,0.4), 0 1px 4px rgba(0,0,0,0.15);
          transition: transform 0.25s ease, opacity 0.3s ease, box-shadow 0.25s ease;
          opacity: 0;
          transform: translateY(16px) scale(0.9);
          pointer-events: none;
        }
        .wa-fab.wa-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .wa-fab:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 26px rgba(37,211,102,0.5), 0 2px 6px rgba(0,0,0,0.18);
        }
        .wa-fab:active { transform: translateY(-1px) scale(0.98); }
        .wa-icon { width: 30px; height: 30px; color: #fff; }
        .wa-ping {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          opacity: 0.55;
          animation: waPing 2.2s ease-out infinite;
        }
        @keyframes waPing {
          0%   { transform: scale(1);   opacity: 0.45; }
          70%  { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @media (max-width: 640px) {
          .wa-fab { width: 52px; height: 52px; bottom: 18px; right: 18px; }
          .wa-icon { width: 27px; height: 27px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-ping { animation: none; display: none; }
          .wa-fab { transition: opacity 0.2s ease; }
        }
      `}</style>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`wa-fab${visible ? " wa-visible" : ""}`}
        aria-label="Chat with us on WhatsApp"
      >
        <span className="wa-ping" aria-hidden="true" />
        <FaWhatsapp className="wa-icon" aria-hidden="true" />
      </a>
    </>
  );
}

// import { useEffect, useState } from "react";
// import { FaWhatsapp, FaPhone } from "react-icons/fa";

// /**
//  * Floating contact buttons — bottom-right corner, fixed on screen.
//  * Stacks a WhatsApp button above a Call button.
//  * Mount this once near the root of your app (e.g. in App.jsx, alongside <Footer />)
//  * so it appears on every page.
//  */
// export default function ContactButtons({
//   phone = "94770000000",        // country code + number, no + or spaces (used for WhatsApp link)
//   callNumber = "+94770000000",  // number as you want it dialed (used for tel: link)
//   message = "Hi! I'd like to ask about your sesame seeds and jaggery.",
// }) {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setVisible(window.scrollY > 240);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//   const callHref = `tel:${callNumber}`;

//   return (
//     <>
//       <style>{`
//         .cb-stack {
//           position: fixed;
//           bottom: 26px;
//           right: 26px;
//           z-index: 999;
//           display: flex;
//           flex-direction: column;
//           gap: 14px;
//         }
//         .cb-fab {
//           width: 58px;
//           height: 58px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-decoration: none;
//           position: relative;
//           transition: transform 0.25s ease, opacity 0.3s ease, box-shadow 0.25s ease;
//           opacity: 0;
//           transform: translateY(16px) scale(0.9);
//           pointer-events: none;
//         }
//         .cb-fab.cb-visible {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//           pointer-events: auto;
//         }
//         .cb-fab:hover { transform: translateY(-3px) scale(1.05); }
//         .cb-fab:active { transform: translateY(-1px) scale(0.98); }
//         .cb-wa { background: #25D366; box-shadow: 0 4px 18px rgba(37,211,102,0.4), 0 1px 4px rgba(0,0,0,0.15); }
//         .cb-wa:hover { box-shadow: 0 8px 26px rgba(37,211,102,0.5), 0 2px 6px rgba(0,0,0,0.18); }
//         .cb-call { background: #e0303a; box-shadow: 0 4px 18px rgba(224,48,58,0.4), 0 1px 4px rgba(0,0,0,0.15); }
//         .cb-call:hover { box-shadow: 0 8px 26px rgba(224,48,58,0.5), 0 2px 6px rgba(0,0,0,0.18); }
//         .cb-icon { width: 28px; height: 28px; color: #fff; }
//         .cb-call .cb-icon { transform: rotate(15deg); }
//         .cb-ping {
//           position: absolute;
//           inset: 0;
//           border-radius: 50%;
//           background: inherit;
//           opacity: 0.55;
//           animation: cbPing 2.2s ease-out infinite;
//         }
//         @keyframes cbPing {
//           0%   { transform: scale(1);   opacity: 0.45; }
//           70%  { transform: scale(1.7); opacity: 0; }
//           100% { transform: scale(1.7); opacity: 0; }
//         }
//         .cb-tooltip {
//           position: absolute;
//           right: 70px;
//           top: 50%;
//           transform: translateY(-50%);
//           background: #0f1729;
//           color: #fff;
//           font-size: 12.5px;
//           font-weight: 500;
//           padding: 7px 14px;
//           border-radius: 6px;
//           white-space: nowrap;
//           opacity: 0;
//           pointer-events: none;
//           transition: opacity 0.2s ease;
//         }
//         .cb-fab:hover .cb-tooltip { opacity: 1; }
//         @media (max-width: 640px) {
//           .cb-stack { bottom: 18px; right: 18px; gap: 12px; }
//           .cb-fab { width: 52px; height: 52px; }
//           .cb-icon { width: 25px; height: 25px; }
//           .cb-tooltip { display: none; }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .cb-ping { animation: none; display: none; }
//           .cb-fab { transition: opacity 0.2s ease; }
//         }
//       `}</style>

//       <div className="cb-stack">
//         <a
//           href={waHref}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`cb-fab cb-wa${visible ? " cb-visible" : ""}`}
//           aria-label="Chat with us on WhatsApp"
//         >
//           <span className="cb-ping" aria-hidden="true" />
//           <FaWhatsapp className="cb-icon" aria-hidden="true" />
//           <span className="cb-tooltip">Chat on WhatsApp</span>
//         </a>

//         <a
//           href={callHref}
//           className={`cb-fab cb-call${visible ? " cb-visible" : ""}`}
//           aria-label="Call us"
//         >
//           <FaPhone className="cb-icon" aria-hidden="true" />
//           <span className="cb-tooltip">Call us</span>
//         </a>
//       </div>
//     </>
//   );
// }