// import { Link } from "react-router-dom";

// const footerLinks = {
//   Shop: [
//     { label: "Fresh Produce", to: "/products?cat=produce" },
//     { label: "Dairy & Eggs", to: "/products?cat=dairy" },
//     { label: "Bakery", to: "/products?cat=bakery" },
//     { label: "Beverages", to: "/products?cat=beverages" },
//     { label: "Household", to: "/products?cat=household" },
//   ],
//   Company: [
//     { label: "About Us", to: "/about" },
//     { label: "Careers", to: "/careers" },
//     { label: "Press", to: "/press" },
//     { label: "Blog", to: "/blog" },
//   ],
//   Support: [
//     { label: "Contact Us", to: "/contact" },
//     { label: "FAQs", to: "/faqs" },
//     { label: "Returns Policy", to: "/returns" },
//     { label: "Delivery Info", to: "/delivery" },
//   ],
// };

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');

//         .footer-root {
//           background: #060e06;
//           position: relative;
//           overflow: hidden;
//         }

//         /* Decorative top border */
//         .footer-topline {
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(197,168,74,0.4) 30%, rgba(232,213,163,0.6) 50%, rgba(197,168,74,0.4) 70%, transparent);
//         }

//         /* Background texture */
//         .footer-grain {
//           position: absolute;
//           inset: 0;
//           opacity: 0.03;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//           background-size: 200px;
//           pointer-events: none;
//         }

//         .footer-upper {
//           position: relative;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 72px 32px 56px;
//           display: grid;
//           grid-template-columns: 2fr 1fr 1fr 1fr;
//           gap: 48px;
//         }

//         .footer-brand {}

//         .footer-logo {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           text-decoration: none;
//           margin-bottom: 20px;
//         }

//         .footer-logo-icon {
//           width: 44px;
//           height: 44px;
//           background: linear-gradient(135deg, #c5a84a, #e8d5a3);
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 22px;
//           flex-shrink: 0;
//         }

//         .footer-logo-name {
//           font-family: 'Playfair Display', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #e8d5a3;
//         }

//         .footer-logo-sub {
//           font-family: 'Lato', sans-serif;
//           font-size: 10px;
//           font-weight: 300;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.4);
//           display: block;
//           margin-top: 2px;
//         }

//         .footer-tagline {
//           font-family: 'Lato', sans-serif;
//           font-size: 14px;
//           font-weight: 300;
//           line-height: 1.8;
//           color: rgba(255,255,255,0.4);
//           margin-bottom: 28px;
//           max-width: 280px;
//         }

//         /* Newsletter */
//         .footer-newsletter {
//           display: flex;
//           gap: 0;
//           max-width: 320px;
//         }

//         .footer-newsletter input {
//           flex: 1;
//           font-family: 'Lato', sans-serif;
//           font-size: 13px;
//           padding: 12px 16px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-right: none;
//           color: #fff;
//           outline: none;
//           border-radius: 2px 0 0 2px;
//           transition: border-color 0.3s;
//         }

//         .footer-newsletter input::placeholder {
//           color: rgba(255,255,255,0.25);
//         }

//         .footer-newsletter input:focus {
//           border-color: rgba(197,168,74,0.4);
//         }

//         .footer-newsletter button {
//           font-family: 'Lato', sans-serif;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           padding: 12px 16px;
//           background: linear-gradient(135deg, #c5a84a, #e8d5a3);
//           color: #0a120a;
//           border: none;
//           cursor: pointer;
//           border-radius: 0 2px 2px 0;
//           transition: opacity 0.2s;
//           white-space: nowrap;
//         }

//         .footer-newsletter button:hover { opacity: 0.85; }

//         .footer-nl-label {
//           font-family: 'Lato', sans-serif;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.3);
//           margin-bottom: 10px;
//         }

//         /* Link columns */
//         .footer-col {}

//         .footer-col-title {
//           font-family: 'Lato', sans-serif;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           color: #c5a84a;
//           margin-bottom: 20px;
//         }

//         .footer-col ul {
//           list-style: none;
//           margin: 0;
//           padding: 0;
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }

//         .footer-col ul li a {
//           font-family: 'Lato', sans-serif;
//           font-size: 14px;
//           font-weight: 300;
//           color: rgba(255,255,255,0.45);
//           text-decoration: none;
//           transition: color 0.25s;
//           display: inline-block;
//         }

//         .footer-col ul li a:hover {
//           color: #e8d5a3;
//         }

//         /* Contact strip */
//         .footer-contact-strip {
//           position: relative;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 28px 32px;
//           border-top: 1px solid rgba(255,255,255,0.05);
//           border-bottom: 1px solid rgba(255,255,255,0.05);
//           display: flex;
//           gap: 48px;
//           flex-wrap: wrap;
//         }

//         .contact-item {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//         }

//         .contact-icon {
//           width: 36px;
//           height: 36px;
//           border: 1px solid rgba(197,168,74,0.25);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 14px;
//           flex-shrink: 0;
//         }

//         .contact-label {
//           font-family: 'Lato', sans-serif;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.3);
//           margin-bottom: 2px;
//         }

//         .contact-value {
//           font-family: 'Lato', sans-serif;
//           font-size: 14px;
//           font-weight: 400;
//           color: rgba(255,255,255,0.6);
//         }

//         /* Bottom bar */
//         .footer-bottom {
//           position: relative;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 24px 32px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           flex-wrap: gap;
//           gap: 16px;
//         }

//         .footer-copy {
//           font-family: 'Lato', sans-serif;
//           font-size: 12px;
//           font-weight: 300;
//           color: rgba(255,255,255,0.25);
//           letter-spacing: 0.5px;
//         }

//         .footer-copy strong {
//           font-weight: 700;
//           color: rgba(197,168,74,0.6);
//         }

//         .footer-legal {
//           display: flex;
//           gap: 24px;
//           flex-wrap: wrap;
//         }

//         .footer-legal a {
//           font-family: 'Lato', sans-serif;
//           font-size: 11px;
//           font-weight: 400;
//           letter-spacing: 1px;
//           color: rgba(255,255,255,0.2);
//           text-decoration: none;
//           transition: color 0.2s;
//         }

//         .footer-legal a:hover { color: rgba(255,255,255,0.5); }

//         /* Social icons */
//         .footer-socials {
//           display: flex;
//           gap: 12px;
//           margin-top: 24px;
//         }

//         .social-icon {
//           width: 36px;
//           height: 36px;
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 2px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 15px;
//           color: rgba(255,255,255,0.4);
//           text-decoration: none;
//           transition: all 0.25s;
//         }

//         .social-icon:hover {
//           border-color: rgba(197,168,74,0.4);
//           color: #e8d5a3;
//           background: rgba(197,168,74,0.05);
//         }

//         @media (max-width: 900px) {
//           .footer-upper {
//             grid-template-columns: 1fr 1fr;
//             gap: 40px;
//           }
//           .footer-brand {
//             grid-column: 1 / -1;
//           }
//         }

//         @media (max-width: 540px) {
//           .footer-upper {
//             grid-template-columns: 1fr;
//           }
//           .footer-bottom {
//             flex-direction: column;
//             align-items: flex-start;
//           }
//           .footer-contact-strip {
//             flex-direction: column;
//             gap: 20px;
//           }
//         }
//       `}</style>

//       <footer className="footer-root">
//         <div className="footer-topline" />
//         <div className="footer-grain" />

//         <div className="footer-upper">
//           {/* Brand column */}
//           <div className="footer-brand">
//             <Link to="/" className="footer-logo">
//               <div className="footer-logo-icon">🛒</div>
//               <div>
//                 <div className="footer-logo-name">Aththanayaka</div>
//                 <span className="footer-logo-sub">Supermart</span>
//               </div>
//             </Link>
//             <p className="footer-tagline">
//               Serving the community with quality products and honest prices for over a decade. Your trusted neighbourhood supermart.
//             </p>
//             <div className="footer-nl-label">Stay updated</div>
//             <div className="footer-newsletter">
//               <input type="email" placeholder="Your email address" />
//               <button>Subscribe</button>
//             </div>
//             <div className="footer-socials">
//               {[["📘", "/"], ["📸", "/"], ["🐦", "/"], ["▶️", "/"]].map(([icon, href], i) => (
//                 <a key={i} href={href} className="social-icon">{icon}</a>
//               ))}
//             </div>
//           </div>

//           {/* Link columns */}
//           {Object.entries(footerLinks).map(([heading, links]) => (
//             <div className="footer-col" key={heading}>
//               <div className="footer-col-title">{heading}</div>
//               <ul>
//                 {links.map((link) => (
//                   <li key={link.to}>
//                     <Link to={link.to}>{link.label}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Contact strip */}
//         <div className="footer-contact-strip">
//           {[
//             { icon: "📍", label: "Location", value: "No. 42, Main Street, Colombo 07" },
//             { icon: "📞", label: "Phone", value: "+94 11 234 5678" },
//             { icon: "✉️", label: "Email", value: "hello@aththanayaka.lk" },
//             { icon: "🕐", label: "Hours", value: "Mon–Sat: 7AM – 10PM" },
//           ].map((item) => (
//             <div className="contact-item" key={item.label}>
//               <div className="contact-icon">{item.icon}</div>
//               <div>
//                 <div className="contact-label">{item.label}</div>
//                 <div className="contact-value">{item.value}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom bar */}
//         <div className="footer-bottom">
//           <p className="footer-copy">
//             © {year} <strong>Aththanayaka Supermart</strong>. All rights reserved.
//           </p>
//           <div className="footer-legal">
//             <Link to="/privacy">Privacy Policy</Link>
//             <Link to="/terms">Terms of Service</Link>
//             <Link to="/cookies">Cookie Policy</Link>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }


import { Link } from "react-router-dom";
import { useLang } from "../LanguageContext.jsx";

const T = {
  blurb: {
    en: "Sri Lanka's trusted supplier of sesame seeds, jaggery, and production essentials sourced with quality and care, for over a decade.",
    si: "වසර 30කට අධික විශ්වාසනීය අත්දැකීමක් සමඟ, උසස් තත්ත්වයේ තල ඇට, පැණි සහ නිෂ්පාදන අමුද්‍රව්‍ය ලබාදෙන ශ්‍රී ලංකාවේ විශ්වාසනීය සැපයුම්කරුවා.",
  },
  shopHeading:    { en: "Shop",            si: "වෙළඳසැල" },
  companyHeading: { en: "Business",         si: "ව්‍යාපාරය" },
  contactHeading: { en: "Get In Touch",    si: "අප හා සම්බන්ධ වන්න" },
  newsHeading:    { en: "Stay Stocked Up", si: "සෑම විටම ප්‍රමාණවත් තොග සහිතව සිටින්න" },
  newsSub: {
    en: "New stock alerts & seasonal offers no spam, just sesame.",
    si: "නව තොග දැනුම්දීම් සහ සෘතුමය දීමනා spam නැත",
  },
  emailPlaceholder: { en: "Your email address", si: "ඔබේ විද්‍යුත් තැපැල් ලිපිනය" },
  subscribe:        { en: "Subscribe", si: "දායක වන්න" },
  blackSesame:      { en: "Black Sesame Seeds",      si: "කළු තල ඇට" },
  whiteSesame:      { en: "White Sesame Seeds",      si: "සුදු තල ඇට" },
  blackWhite:       { en: "Black & White Sesame",    si: "කළු සහ සුදු තල" },
  cleanedSesame:    { en: "Cleaned Sesame",           si: "පිරිසිදු කළ තල" },
  jaggery:          { en: "Organic Jaggery",          si: "හකුරු" },
  about:            { en: "About Us",                 si: "අප ගැන" },
  offers:           { en: "Offers",                   si: "දීමනා" },
  wholesale:        { en: "Wholesale Orders",          si: "තොග ඇණවුම්" },
  contact:          { en: "Contact",                  si: "සම්බන්ධ වන්න" },
  address: {
    en: "No. 48, Hnadapangoda Road, Horana, Sri Lanka",
    si: "අංක 48, හදපන්ගොඩ පාර, හොරණ, ශ්‍රී ලංකාව",
  },
  hours: { en: "Tue – Sun, 9.00 AM – 7.00 PM", si: "අඟහරුවාදා සිට ඉරිදා දක්වා, පෙ.ව. 9.00 – ප.ව. 7.00" },
  rights: { en: "All rights reserved.", si: "සියලු හිමිකම් ඇවිරිණි." },
  madeWith: { en: "Sesame, sourced honestly.", si: "විශ්වාසවන්ත ලෙස ලබාගත් උසස් තත්ත්වයේ තල" },
  privacy:  { en: "Privacy Policy", si: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය" },
  terms:    { en: "Terms of Service", si: "සේවා කොන්දේසි" },
};

const t = (key, lang) => T[key]?.[lang] ?? T[key]?.en ?? key;

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css');

        .ft-root {
          --blue: #1e4fd8; --blue-dark: #1538a8; --blue-soft: #3a6bc4;
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(135deg, #0f1729 50%, #1e4fd8 150%);
          color: #aab4d4;
          position: relative;
          overflow: hidden;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
        }
        .ft-root *, .ft-root *::before, .ft-root *::after { box-sizing: border-box; }

        .ft-glow-1 { position: absolute; width: 700px; height: 700px; top: -340px; right: -200px;
          border-radius: 50%; background: radial-gradient(circle, rgba(30,79,216,0.16) 0%, transparent 70%);
          pointer-events: none; }
        .ft-glow-2 { position: absolute; width: 500px; height: 500px; bottom: -260px; left: -120px;
          border-radius: 50%; background: radial-gradient(circle, rgba(30,79,216,0.1) 0%, transparent 70%);
          pointer-events: none; }
        .ft-grain { position:absolute; inset:0; pointer-events:none; opacity:0.025;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:180px 180px; }

        /* NEWSLETTER STRIP */
        .ft-news { position: relative; z-index: 2; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .ft-news-inner { max-width: 1280px; margin: 0 auto; padding: 44px 80px;
          display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .ft-news-text { max-width: 420px; }
        .ft-news-heading { font-family: 'DM Serif Display', serif; font-size: 24px; color: #fff; margin-bottom: 6px; line-height: 1.2; }
        .ft-news-sub { font-size: 13.5px; color: #7c87ad; font-weight: 300; line-height: 1.6; }
        .ft-news-form { display: flex; gap: 10px; flex: 1; max-width: 420px; min-width: 280px; }
        .ft-news-input { flex: 1; background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 6px; padding: 13px 18px; font-size: 13.5px; color: #fff; font-family: 'DM Sans', sans-serif;
          outline: none; transition: border-color 0.25s, background 0.25s; }
        .ft-news-input::placeholder { color: #5d6890; }
        .ft-news-input:focus { border-color: var(--blue); background: rgba(255,255,255,0.06); }
        .ft-news-btn { display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 600;
          letter-spacing: 0.8px; color: #fff; background: var(--blue); border: none; padding: 0 26px;
          border-radius: 6px; cursor: pointer; white-space: nowrap;
          transition: background 0.25s, transform 0.2s, box-shadow 0.3s;
          box-shadow: 0 4px 18px rgba(30,79,216,0.35); }
        .ft-news-btn:hover { background: var(--blue-dark); transform: translateY(-1px); }

        /* MAIN GRID */
        .ft-main { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto;
          padding: 64px 80px 48px; display: grid; grid-template-columns: 1.4fr 0.85fr 0.85fr 1fr; gap: 48px; }

        .ft-brand-block { padding-right: 20px; }
        .ft-logo { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 18px; }
        .ft-logo-mark { width: 34px; height: 34px; border-radius: 9px; background: linear-gradient(135deg, var(--blue), var(--blue-dark));
          display: flex; align-items: center; justify-content: center; font-family: 'DM Serif Display', serif;
          font-size: 17px; color: #fff; flex-shrink: 0; }
        .ft-logo-text { font-family: 'DM Serif Display', serif; font-size: 19px; color: #fff; letter-spacing: 0.2px; }
        .ft-brand-blurb { font-size: 13px; line-height: 1.85; color: #7c87ad; font-weight: 300; max-width: 320px; margin-bottom: 22px; }
        .ft-socials { display: flex; gap: 10px; }
        .ft-social-btn { width: 36px; height: 36px; border-radius: 8px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center;
          color: #aab4d4; text-decoration: none; transition: all 0.25s; font-size: 15px; }
        .ft-social-btn:hover { background: var(--blue); border-color: var(--blue); color: #fff; transform: translateY(-2px); }

        .ft-col-heading { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: #fff; margin-bottom: 20px; }
        .ft-link-list { display: flex; flex-direction: column; gap: 13px; list-style: none; }
        .ft-link-list a { font-size: 13.5px; color: #8a93b8; text-decoration: none; font-weight: 400;
          transition: color 0.2s, padding-left 0.2s; display: inline-block; }
        .ft-link-list a:hover { color: #fff; padding-left: 3px; }

        .ft-contact-list { display: flex; flex-direction: column; gap: 16px; }
        .ft-contact-row { display: flex; align-items: flex-start; gap: 11px; }
        .ft-contact-icon { width: 30px; height: 30px; border-radius: 7px; background: rgba(30,79,216,0.15);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
        .ft-contact-icon i { font-size: 14px; color: #6b9df5; }
        .ft-contact-val { font-size: 13px; color: #aab4d4; line-height: 1.55; font-weight: 400; }
        .ft-contact-val a { color: inherit; text-decoration: none; }
        .ft-contact-val a:hover { color: #fff; }

        /* TICKER-STYLE DIVIDER STRIP (echoes hero ticker language) */
        .ft-strip { position: relative; z-index: 2; border-top: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.02);
          padding: 16px 80px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; }
        .ft-strip-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #7c87ad; font-weight: 500; }
        .ft-strip-item i { color: #6b9df5; font-size: 14px; }
        .ft-strip-sep { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.18); }

        /* BOTTOM BAR */
        .ft-bottom { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto;
          padding: 24px 80px 28px; display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap; }
        .ft-bottom-left { font-size: 12.5px; color: #5d6890; }
        .ft-bottom-left strong { color: #8a93b8; font-weight: 600; }
        .ft-bottom-right { display: flex; gap: 26px; }
        .ft-bottom-right a { font-size: 12.5px; color: #5d6890; text-decoration: none; transition: color 0.2s; }
        .ft-bottom-right a:hover { color: #aab4d4; }

        @media (max-width: 1080px) {
          .ft-main { grid-template-columns: 1fr 1fr; gap: 40px 32px; padding: 56px 48px 40px; }
          .ft-brand-block { grid-column: 1 / -1; }
          .ft-news-inner { padding: 40px 48px; }
          .ft-strip { padding: 16px 48px; }
          .ft-bottom { padding: 22px 48px 26px; }
        }
        @media (max-width: 680px) {
          .ft-news-inner { flex-direction: column; align-items: stretch; }
          .ft-news-text { max-width: 100%; }
          .ft-news-form { max-width: 100%; }
          .ft-main { grid-template-columns: 1fr; padding: 48px 24px 32px; gap: 36px; }
          .ft-news-inner { padding: 36px 24px; }
          .ft-strip { padding: 14px 24px; gap: 8px; }
          .ft-bottom { padding: 20px 24px 24px; flex-direction: column; align-items: flex-start; }
          .ft-bottom-right { gap: 18px; flex-wrap: wrap; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-grain" />
        <div className="ft-glow-1" />
        <div className="ft-glow-2" />

        {/* NEWSLETTER */}
        <div className="ft-news">
          <div className="ft-news-inner">
            <div className="ft-news-text">
              <div className="ft-news-heading">{t("newsHeading", lang)}</div>
              <div className="ft-news-sub">{t("newsSub", lang)}</div>
            </div>
            <form
              className="ft-news-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                className="ft-news-input"
                placeholder={t("emailPlaceholder", lang)}
              />
              <button type="submit" className="ft-news-btn">
                {t("subscribe", lang)}
              </button>
            </form>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="ft-main">
          <div className="ft-brand-block">
            <div className="ft-logo">
              <div className="ft-logo-mark">A</div>
              <div className="ft-logo-text">Aththanayaka Supermart</div>
            </div>
            <p className="ft-brand-blurb">{t("blurb", lang)}</p>
            <div className="ft-socials">
              <a href="#" className="ft-social-btn" aria-label="Facebook"><i className="ti ti-brand-facebook" /></a>
              <a href="#" className="ft-social-btn" aria-label="Instagram"><i className="ti ti-brand-instagram" /></a>
              <a href="#" className="ft-social-btn" aria-label="WhatsApp"><i className="ti ti-brand-whatsapp" /></a>
              <a href="#" className="ft-social-btn" aria-label="YouTube"><i className="ti ti-brand-youtube" /></a>
            </div>
          </div>

          <div>
            <div className="ft-col-heading">{t("shopHeading", lang)}</div>
            <ul className="ft-link-list">
              <li><Link to="/products/black-sesame">{t("blackSesame", lang)}</Link></li>
              <li><Link to="/products/white-sesame">{t("whiteSesame", lang)}</Link></li>
              <li><Link to="/products/black-white-sesame">{t("blackWhite", lang)}</Link></li>
              <li><Link to="/products/cleaned-sesame">{t("cleanedSesame", lang)}</Link></li>
              <li><Link to="/products/jaggery">{t("jaggery", lang)}</Link></li>
            </ul>
          </div>

          <div>
            <div className="ft-col-heading">{t("companyHeading", lang)}</div>
            <ul className="ft-link-list">
              <li><Link to="/about">{t("about", lang)}</Link></li>
              <li><Link to="/offers">{t("offers", lang)}</Link></li>
              <li><Link to="/wholesale">{t("wholesale", lang)}</Link></li>
              <li><Link to="/contact">{t("contact", lang)}</Link></li>
            </ul>
          </div>

          <div>
            <div className="ft-col-heading">{t("contactHeading", lang)}</div>
            <div className="ft-contact-list">
              <div className="ft-contact-row">
                <div className="ft-contact-icon"><i className="ti ti-map-pin" /></div>
                <div className="ft-contact-val">{t("address", lang)}</div>
              </div>
              <div className="ft-contact-row">
                <div className="ft-contact-icon"><i className="ti ti-phone" /></div>
                <div className="ft-contact-val"><a href="tel:+94770000000">+94 77 000 0000</a></div>
              </div>
              <div className="ft-contact-row">
                <div className="ft-contact-icon"><i className="ti ti-mail" /></div>
                <div className="ft-contact-val"><a href="mailto:hello@aththanayaka.lk">hello@aththanayaka.lk</a></div>
              </div>
              <div className="ft-contact-row">
                <div className="ft-contact-icon"><i className="ti ti-clock" /></div>
                <div className="ft-contact-val">{t("hours", lang)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* INFO STRIP */}
        <div className="ft-strip">
          <span className="ft-strip-item"><i className="ti ti-truck" />Retail from 5 kg · Wholesale from 50 kg</span>
          <span className="ft-strip-sep" />
          <span className="ft-strip-item"><i className="ti ti-leaf" />100% Natural, No Additives</span>
          <span className="ft-strip-sep" />
          <span className="ft-strip-item"><i className="ti ti-shield-check" />Direct Supplier Pricing</span>
        </div>

        {/* BOTTOM BAR */}
        <div className="ft-bottom">
          <div className="ft-bottom-left">
            © {year} <strong>Aththanayaka Supermart</strong>. {t("rights", lang)}
          </div>
          <div className="ft-bottom-right">
            <a href="#">{t("privacy", lang)}</a>
            <a href="#">{t("terms", lang)}</a>
          </div>
        </div>
      </footer>
    </>
  );
}