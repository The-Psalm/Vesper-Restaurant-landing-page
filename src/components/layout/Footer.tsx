 
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaInstagram as Instagram, FaTwitter as Twitter, FaFacebook as Facebook } from "react-icons/fa";
import { C } from "../../constants/data";

const Footer = () => (
  <footer style={{ background: C.deep, padding: "80px 0 40px", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right,transparent,${C.gold},transparent)` }} />

    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 64, marginBottom: 80 }}>
        {/* Brand */}
        <div>
          <div className="ff-cinzel" style={{ fontSize: 28, letterSpacing: "0.25em", color: C.cream, fontWeight: 500, marginBottom: 20 }}>VESPER</div>
          <p style={{ fontSize: 14, color: "rgba(237,233,230,.4)", lineHeight: 1.85, fontWeight: 300, marginBottom: 28, maxWidth: 260 }}>
            A sanctuary of culinary excellence in the heart of Lagos. Where every meal becomes a memory.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <motion.a key={i} href="#" whileHover={{ y: -3 }}
                style={{ width: 38, height: 38, border: "1px solid rgba(201,153,107,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(237,233,230,.5)", transition: "all .3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.gold; (e.currentTarget as HTMLElement).style.color = C.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,153,107,.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(237,233,230,.5)"; }}
              ><Icon size={15} /></motion.a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <div className="ff-cinzel" style={{ fontSize: 9, letterSpacing: "0.3em", color: C.gold, textTransform: "uppercase", marginBottom: 24 }}>Navigate</div>
          {["Philosophy", "Menu", "Experience", "Events", "Reservations", "Press"].map(l => (
            <a key={l} href="#" style={{ display: "block", fontSize: 14, color: "rgba(237,233,230,.4)", textDecoration: "none", marginBottom: 12, transition: "color .3s", fontWeight: 300 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.gold; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(237,233,230,.4)"; }}>
              {l}
            </a>
          ))}
        </div>

        {/* Hours */}
        <div>
          <div className="ff-cinzel" style={{ fontSize: 9, letterSpacing: "0.3em", color: C.gold, textTransform: "uppercase", marginBottom: 24 }}>Hours</div>
          {[["Monday", "Closed"], ["Tues – Fri", "6 PM – 11 PM"], ["Saturday", "12 PM – 11 PM"], ["Sunday", "12 PM – 10 PM"]].map(([d, t]) => (
            <div key={d} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, color: "rgba(237,233,230,.6)", fontWeight: 300 }}>{d}</div>
              <div style={{ fontSize: 13, color: "rgba(237,233,230,.35)", fontWeight: 300 }}>{t}</div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <div className="ff-cinzel" style={{ fontSize: 9, letterSpacing: "0.3em", color: C.gold, textTransform: "uppercase", marginBottom: 24 }}>Stay Connected</div>
          <p style={{ fontSize: 13, color: "rgba(237,233,230,.4)", lineHeight: 1.75, marginBottom: 24, fontWeight: 300 }}>
            Receive invitations to exclusive events, seasonal menus, and culinary masterclasses.
          </p>
          <div style={{ display: "flex", border: "1px solid rgba(201,153,107,.2)" }}>
            <input placeholder="Your email" style={{ flex: 1, background: "transparent", border: "none", outline: "none", padding: "12px 16px", color: C.cream, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}
              onFocus={e => { (e.currentTarget.parentElement as HTMLElement).style.borderColor = C.gold; }}
              onBlur={e => { (e.currentTarget.parentElement as HTMLElement).style.borderColor = "rgba(201,153,107,.2)"; }}
            />
            <button style={{ background: C.gold, border: "none", padding: "0 18px", color: C.cream, transition: "background .3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.cream; (e.currentTarget as HTMLElement).style.color = C.dark; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.gold; (e.currentTarget as HTMLElement).style.color = C.cream; }}
            ><ArrowRight size={15} /></button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ paddingTop: 32, borderTop: "1px solid rgba(201,153,107,.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontSize: 12, color: "rgba(237,233,230,.25)", fontWeight: 300 }}>
          © 2024 Vesper Lagos. All rights reserved. Crafted with intention.
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {["Privacy Policy", "Terms of Service", "Accessibility"].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: "rgba(237,233,230,.25)", textDecoration: "none", transition: "color .3s", fontWeight: 300 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.gold; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(237,233,230,.25)"; }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
