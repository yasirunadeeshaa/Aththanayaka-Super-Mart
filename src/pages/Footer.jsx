import { Link } from "react-router-dom";
import { useLang } from "../LanguageContext.jsx";
import logo from "../assets/circlelogo.png"; // <- change to your logo file name

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
    en: "No. 48, Handapangoda Road, Horana, Sri Lanka",
    si: "අංක 48, හදපන්ගොඩ පාර, හොරණ, ශ්‍රී ලංකාව",
  },
  hours: { en: "Tue – Sun, 9.00 AM – 7.00 PM", si: "අඟහරුවාදා සිට ඉරිදා දක්වා, පෙ.ව. 9.00 – ප.ව. 7.00" },
  rights: { en: "All rights reserved.", si: "සියලු හිමිකම් ඇවිරිණි." },
  madeWith: { en: "Sesame, sourced honestly.", si: "විශ්වාසවන්ත ලෙස ලබාගත් උසස් තත්ත්වයේ තල" },
  privacy:  { en: "Privacy Policy", si: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය" },
  terms:    { en: "Terms of Service", si: "සේවා කොන්දේසි" },
  paymentsHeading: { en: "We Accept", si: "අප පිළිගනිමු" },
  cod:             { en: "Cash on Delivery", si: "ගෙදරටම ගෙවීම" },
  bankTransfer:    { en: "Bank Transfer",    si: "බැංකු මාරුව" },
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
        .ft-main > div { min-width: 0; }

        .ft-brand-block { text-align: center; }
        .ft-logo { display: flex; flex-direction: column; align-items: flex-start; gap: 14px; margin-bottom: 14px; align-items: center;}
        .ft-logo-img { width: 104px; height: 104px; border-radius: 50%; object-fit: cover; display: block;
          background: #fff; border: 3px solid rgba(255,255,255,0.18); box-shadow: 0 8px 24px rgba(0,0,0,0.35); }
        .ft-logo-text { font-family: 'DM Serif Display', serif; font-size: 22px; color: #fff; letter-spacing: 0.2px; line-height: 1.2; }
        .ft-brand-blurb { font-size: 13px; line-height: 1.85; color: #7c87ad; font-weight: 300; max-width: 320px; margin-bottom: 0; }
        .ft-socials { display: flex; gap: 10px; }
        .ft-social-btn { width: 40px; height: 40px; border-radius: 8px; background: #fff;
          border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center;
          text-decoration: none; transition: transform 0.25s, box-shadow 0.25s; }
        .ft-social-btn svg { width: 22px; height: 22px; display: block; }
        .ft-social-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.3); }

        /* SOCIALS + PAYMENTS ROW (two columns under the main grid) */
        .ft-extra { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto;
          padding: 0 80px 36px; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: center; }
        .ft-payments { display: flex; align-items: center; justify-content: flex-end; gap: 16px; flex-wrap: wrap; }
        .ft-payments-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          color: #5d6890; }
        .ft-payments-icons { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .ft-pay-badge { display: inline-flex; align-items: center; justify-content: center;
          background: #fff; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px; height: 44px; width: 55px;
          padding: 0; overflow: hidden; transition: all 0.25s; }
        .ft-pay-badge img { width: 100%; height: 100%; object-fit: contain; padding: 4px; display: block; }

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
        .ft-contact-val a { color: inherit; text-decoration: none; overflow-wrap: anywhere; }
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
          .ft-extra { padding: 0 48px 32px; }
          .ft-bottom { padding: 22px 48px 26px; }
        }
        @media (max-width: 680px) {
          .ft-news-inner { flex-direction: column; align-items: stretch; }
          .ft-news-text { max-width: 100%; }
          .ft-news-form { max-width: 100%; min-width: 0; }
          .ft-news-inner { padding: 36px 24px; }

          /* Brand on top, Shop + Business side by side, Contact full width below */
          .ft-main { grid-template-columns: 1fr 1fr; padding: 44px 24px 28px; gap: 32px 20px; }
          .ft-brand-block { grid-column: 1 / -1; padding-right: 0; }
          .ft-brand-block .ft-brand-blurb { max-width: 100%; }
          .ft-logo-img { width: 88px; height: 88px; }
          .ft-main > div:last-child { grid-column: 1 / -1; }
          .ft-col-heading { margin-bottom: 16px; }
          .ft-link-list { gap: 12px; }

          .ft-strip { padding: 14px 24px; gap: 8px 14px; }
          .ft-extra { grid-template-columns: 1fr; padding: 0 24px 28px; gap: 22px; }
          .ft-payments { justify-content: flex-start; flex-direction: column; align-items: flex-start; gap: 12px; }
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
              <img className="ft-logo-img" src={logo} alt="Aththanayaka Supermart logo" />
              <div className="ft-logo-text">Aththanayaka Supermart</div>
            </div>
            <p className="ft-brand-blurb">{t("blurb", lang)}</p>
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
                <div className="ft-contact-val"><a href="tel:+94342256054">+94 34 225 6054</a></div>
              </div>
              <div className="ft-contact-row">
                <div className="ft-contact-icon"><i className="ti ti-mail" /></div>
                <div className="ft-contact-val"><a href="mailto:aththanayakasupermart@gmail.com">aththanayakasupermart@gmail.com</a></div>
              </div>
              <div className="ft-contact-row">
                <div className="ft-contact-icon"><i className="ti ti-clock" /></div>
                <div className="ft-contact-val">{t("hours", lang)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIALS + PAYMENTS ROW */}
        <div className="ft-extra">
          <div className="ft-socials">
            <a href="#" className="ft-social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#1877F2" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
              </svg>
            </a>
            <a href="#" className="ft-social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <linearGradient id="ft-ig-grad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#FED576" />
                    <stop offset="0.26" stopColor="#F47133" />
                    <stop offset="0.61" stopColor="#BC3081" />
                    <stop offset="1" stopColor="#4C63D2" />
                  </linearGradient>
                </defs>
                <rect x="0.5" y="0.5" width="23" height="23" rx="6.5" fill="url(#ft-ig-grad)" />
                <rect x="5" y="5" width="14" height="14" rx="4.5" fill="none" stroke="#fff" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" strokeWidth="1.8" />
                <circle cx="16.6" cy="7.4" r="1.1" fill="#fff" />
              </svg>
            </a>
            <a href="https://wa.me/94726969743" className="ft-social-btn" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a href="https://www.google.com/maps/place/Aththanayaka+Super+Mart/@6.6549119,80.1042159,54733m/data=!3m1!1e3!4m12!1m5!8m4!1e1!2s110414459283226678910!3m1!1e1!3m5!1s0x3ae3b3aa191b88fb:0x13e05bd0f2230b98!8m2!3d6.790216!4d80.1374214!16s%2Fg%2F11zxdpwdk7?hl=en-GB&entry=ttu" className="ft-social-btn" aria-label="Google">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
            </a>
            <a href="tel:+94786869743" className="ft-social-btn" aria-label="Call us">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#1e4fd8" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>

          <div className="ft-payments">
            <span className="ft-payments-label">{t("paymentsHeading", lang)}</span>
            <div className="ft-payments-icons">
              <span className="ft-pay-badge">
                <img src="/src/assets/payments/VisaLogo.wine.png" alt="Visa" />
              </span>
              <span className="ft-pay-badge">
                <img src="/src/assets/payments/masterlogo.jpg" alt="Mastercard" />
              </span>
              <span className="ft-pay-badge">
                <img src="/src/assets/payments/BankTransfer.png" alt="Bank Transfer" />
              </span>
              <span className="ft-pay-badge">
                <img src="/src/assets/payments/mobileWallet.jpg" alt="Mobile Wallet" />
              </span>
              <span className="ft-pay-badge">
                <img src="/src/assets/payments/cash.png" alt="Cash" />
              </span>
              <span className="ft-pay-badge">
                <img src="/src/assets/payments/cheque.png" alt="Cheque" />
              </span>
              <span className="ft-pay-badge">
                <img src="/src/assets/payments/cashondelivery.png" alt="Cash on Delivery" />
              </span>
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