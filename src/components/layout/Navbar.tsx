import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { C, NAV } from "../../constants/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: .8, ease: [.22, .61, .36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? `rgba(237,233,230,.96)` : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid rgba(201,153,107,.15)` : "none",
          transition: "background .4s,backdrop-filter .4s,border .4s",
          padding: "0 48px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", padding: 0 }}>
          <span className="ff-cinzel" style={{ fontSize: 22, letterSpacing: "0.25em", color: scrolled ? C.dark : C.cream, fontWeight: 500, transition: "color .4s" }}>VESPER</span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {NAV.slice(0, -1).map(item => (
            <button key={item} className="nav-link"
              onClick={() => scrollTo(item.toLowerCase())}
              style={{ background: "none", border: "none", padding: 0, fontSize: 13, letterSpacing: "0.15em", fontFamily: "'DM Sans',sans-serif", fontWeight: 400, color: scrolled ? C.dark : C.cream, transition: "color .4s", textTransform: "uppercase" }}
            >{item}</button>
          ))}
          <button
            onClick={() => scrollTo("reserve")}
            style={{ padding: "10px 28px", border: `1px solid ${C.gold}`, background: "transparent", color: scrolled ? C.dark : C.cream, fontSize: 12, letterSpacing: "0.18em", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase", transition: "all .35s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.gold; (e.currentTarget as HTMLElement).style.color = C.cream; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = scrolled ? C.dark : C.cream; }}
          >Reserve</button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(o => !o)} style={{ display: "none", background: "none", border: "none", color: scrolled ? C.dark : C.cream }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{ position: "fixed", inset: 0, zIndex: 999, background: C.deep, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
            {NAV.map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                className="ff-cinzel"
                style={{ background: "none", border: "none", fontSize: 28, color: C.cream, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
