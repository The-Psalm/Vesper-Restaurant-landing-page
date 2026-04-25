const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Cinzel:wght@400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #EDE9E6; color: #5C4F4A; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
    ::selection { background: #C9996B; color: #EDE9E6; }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: #EDE9E6; }
    ::-webkit-scrollbar-thumb { background: #C9996B; }

    .ff-display { font-family: 'Cormorant Garamond', serif; }
    .ff-cinzel  { font-family: 'Cinzel', serif; }

    /* Cursor — only on devices with a fine pointer (mouse) */
    @media (pointer: fine) {
      * { cursor: none !important; }
    }

    /* Grain overlay */
    .grain {
      position: fixed; inset: 0; pointer-events: none; z-index: 9900; opacity: .032;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
    }

    /* Scroll bounce animation */
    @keyframes scrollBounce {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(7px); }
    }

    /* Marquee */
    @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .marquee-track { animation: marqueeScroll 28s linear infinite; display: flex; width: max-content; }

    /* Reveal on scroll */
    .reveal { opacity: 0; transform: translateY(36px); transition: opacity .85s cubic-bezier(.22,.61,.36,1), transform .85s cubic-bezier(.22,.61,.36,1); }
    .reveal.in-view { opacity: 1; transform: translateY(0); }
    .reveal-delay-1 { transition-delay: .1s; }
    .reveal-delay-2 { transition-delay: .2s; }
    .reveal-delay-3 { transition-delay: .3s; }

    /* Nav link underline */
    .nav-underline { position: relative; }
    .nav-underline::after { content: ''; position: absolute; bottom: -3px; left: 0; width: 0; height: 1px; background: #C9996B; transition: width .4s ease; }
    .nav-underline:hover::after { width: 100%; }

    /* Form fields */
    .form-field { border: none; border-bottom: 1px solid rgba(92,79,74,.22); background: transparent; width: 100%; padding: 9px 0; font-family: 'DM Sans', sans-serif; color: #5C4F4A; font-size: 14px; transition: border-color .3s; }
    .form-field:focus { outline: none; border-bottom-color: #C9996B; }
    .form-field::placeholder { color: rgba(92,79,74,.35); }

    /* ── RESPONSIVE UTILITIES ─────────────────────────────── */

    /* Container */
    .v-container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
    @media (max-width: 1024px) { .v-container { padding: 0 32px; } }
    @media (max-width: 768px)  { .v-container { padding: 0 20px; } }
    @media (max-width: 480px)  { .v-container { padding: 0 16px; } }

    /* Section padding */
    .v-section { padding: 120px 0; }
    @media (max-width: 1024px) { .v-section { padding: 90px 0; } }
    @media (max-width: 768px)  { .v-section { padding: 72px 0; } }
    @media (max-width: 480px)  { .v-section { padding: 56px 0; } }

    /* Eyebrow label */
    .v-eyebrow { font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: .35em; text-transform: uppercase; display: block; margin-bottom: 18px; }
    @media (max-width: 480px) { .v-eyebrow { font-size: 9px; letter-spacing: .25em; margin-bottom: 14px; } }

    /* Section heading */
    .v-h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(34px, 5vw, 72px); font-weight: 300; line-height: 1.05; letter-spacing: -.01em; margin-bottom: 24px; }

    /* Body text */
    .v-body { font-size: 15px; line-height: 1.9; font-weight: 300; margin-bottom: 18px; }
    @media (max-width: 480px) { .v-body { font-size: 14px; line-height: 1.8; } }

    /* Gold button */
    .v-btn-gold { display: inline-flex; align-items: center; gap: 10px; padding: 14px 36px; background: #C9996B; border: none; color: #EDE9E6; font-size: 11px; letter-spacing: .2em; font-family: 'DM Sans', sans-serif; text-transform: uppercase; font-weight: 500; transition: background .35s, color .35s; }
    .v-btn-gold:hover { background: #EDE9E6; color: #5C4F4A; }
    @media (max-width: 480px) { .v-btn-gold { padding: 13px 28px; font-size: 10px; } }

    /* Outline button */
    .v-btn-outline { display: inline-flex; align-items: center; gap: 10px; padding: 14px 36px; border: 1px solid currentColor; background: transparent; font-size: 11px; letter-spacing: .2em; font-family: 'DM Sans', sans-serif; text-transform: uppercase; transition: background .35s, color .35s, border-color .35s; }
    @media (max-width: 480px) { .v-btn-outline { padding: 13px 28px; font-size: 10px; } }

    /* Divider line */
    .v-divider { width: 44px; height: 1px; background: #C9996B; }
  `}</style>
);

export default GlobalStyles;