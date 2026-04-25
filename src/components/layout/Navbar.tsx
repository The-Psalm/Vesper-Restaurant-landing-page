import { useState, useEffect } from "react";
import { C, NAV_ITEMS } from "../../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navBg = scrolled ? `rgba(237,233,230,.97)` : "transparent";
  const textColor = scrolled ? C.dark : C.cream;

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: 68px; display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; transition: background .4s, backdrop-filter .4s, border-color .4s;
        }
        @media (max-width: 1024px) { .nav-root { padding: 0 32px; } }
        @media (max-width: 768px)  { .nav-root { padding: 0 20px; height: 60px; } }

        .nav-desktop-links { display: flex; gap: 36px; align-items: center; }
        @media (max-width: 768px) { .nav-desktop-links { display: none; } }

        .hamburger-btn {
          display: none; flex-direction: column; gap: 5px; background: none; border: none;
          padding: 6px; z-index: 1001;
        }
        .hamburger-btn span { display: block; width: 22px; height: 1.5px; transition: all .35s; }
        .hamburger-btn.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger-btn.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger-btn.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
        @media (max-width: 768px) { .hamburger-btn { display: flex; } }

        .mobile-overlay {
          position: fixed; inset: 0; z-index: 999; background: #2E2420;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0;
          opacity: 0; pointer-events: none; transition: opacity .4s ease;
        }
        .mobile-overlay.open { opacity: 1; pointer-events: all; }

        .mobile-nav-item {
          font-family: 'Cinzel', serif; font-size: clamp(26px, 8vw, 42px); letter-spacing: .2em;
          text-transform: uppercase; color: #EDE9E6; background: none; border: none;
          padding: 16px 0; width: 100%; text-align: center;
          transition: color .3s; position: relative;
          border-bottom: 1px solid rgba(201,153,107,.08);
        }
        .mobile-nav-item:last-child { border-bottom: none; }
        .mobile-nav-item:hover { color: #C9996B; }
        .mobile-nav-item.gold { color: #C9996B; }

        .nav-cta-btn {
          padding: 9px 24px; border: 1px solid #C9996B; background: transparent;
          font-size: 11px; letter-spacing: .18em; font-family: 'DM Sans', sans-serif;
          text-transform: uppercase; transition: all .3s;
        }
        .nav-cta-btn:hover { background: #C9996B !important; color: #EDE9E6 !important; }

        .nav-link-btn {
          background: none; border: none; padding: 0; font-size: 11px;
          letter-spacing: .15em; font-family: 'DM Sans', sans-serif; text-transform: uppercase;
          transition: color .3s;
        }

        .mobile-close-x {
          position: absolute; top: 20px; right: 20px;
          background: none; border: none; color: rgba(237,233,230,.5);
          font-size: 28px; line-height: 1; transition: color .3s;
        }
        .mobile-close-x:hover { color: #C9996B; }

        .mobile-contact-bar {
          position: absolute; bottom: 40px; left: 0; right: 0; text-align: center;
        }
      `}</style>

      <nav className="nav-root" style={{
        background: menuOpen ? "transparent" : navBg,
        backdropFilter: scrolled && !menuOpen ? "blur(14px)" : "none",
        borderBottom: scrolled && !menuOpen ? `1px solid rgba(201,153,107,.15)` : "none",
      }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", fontFamily: "'Cinzel',serif", fontSize: 20, letterSpacing: ".25em", color: menuOpen ? C.cream : textColor, fontWeight: 500, transition: "color .4s" }}
        >
          VESPER
        </button>

        {/* Desktop links */}
        <div className="nav-desktop-links">
          {NAV_ITEMS.map(item => (
            <button key={item} className="nav-link-btn nav-underline"
              onClick={() => scrollTo(item)}
              style={{ color: textColor }}
            >{item}</button>
          ))}
          <button className="nav-cta-btn" onClick={() => scrollTo("reserve")} style={{ color: textColor }}>
            Reserve
          </button>
        </div>

        {/* Hamburger */}
        <button className={`hamburger-btn ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span style={{ background: menuOpen ? C.cream : textColor }} />
          <span style={{ background: menuOpen ? C.cream : textColor }} />
          <span style={{ background: menuOpen ? C.cream : textColor }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map(item => (
          <button key={item} className="mobile-nav-item" onClick={() => scrollTo(item)}>{item}</button>
        ))}
        <button className="mobile-nav-item gold" onClick={() => scrollTo("reserve")}>Reserve</button>

        <div className="mobile-contact-bar">
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: ".3em", color: "rgba(201,153,107,.5)", textTransform: "uppercase" }}>
            14 Waterfront Drive, Eko Atlantic · Lagos
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;