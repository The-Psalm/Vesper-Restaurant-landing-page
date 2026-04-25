 
import { motion } from "framer-motion";
import { C } from "../../constants/data";
import FadeUp from "../ui/FadeUp";

const Philosophy = () => (
  <section id="philosophy" style={{ padding: "140px 0", background: C.cream, position: "relative", overflow: "hidden" }}>
    {/* Large decorative number */}
    <div className="ff-display" style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(180px,22vw,320px)", color: "rgba(92,79,74,.04)", fontWeight: 600, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>01</div>

    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
      {/* Text */}
      <div>
        <FadeUp>
          <span className="ff-cinzel" style={{ fontSize: 10, letterSpacing: "0.35em", color: C.sage, textTransform: "uppercase", display: "block", marginBottom: 20 }}>— Our Philosophy —</span>
        </FadeUp>
        <FadeUp delay={.1}>
          <h2 className="ff-display" style={{ fontSize: "clamp(42px,5vw,72px)", fontWeight: 300, lineHeight: 1.05, color: C.dark, marginBottom: 32, letterSpacing: "-0.01em" }}>
            Cuisine as<br /><em style={{ color: C.gold }}>Living Art</em>
          </h2>
        </FadeUp>
        <FadeUp delay={.2}>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: `${C.dark}cc`, marginBottom: 24, fontWeight: 300 }}>
            At Vesper, we believe a meal transcends sustenance. It is a moment suspended in time — a conversation between the land, the sea, and the hands that shape them into something extraordinary.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: `${C.dark}cc`, marginBottom: 40, fontWeight: 300 }}>
            Executive Chef Emeka Nwosu draws from 18 years across Michelin-starred kitchens in Paris, Tokyo, and Copenhagen — weaving West African heritage with precision French technique to create something entirely, unapologetically his own.
          </p>
        </FadeUp>
        <FadeUp delay={.3}>
          <div style={{ display: "flex", gap: 48 }}>
            {[["18", "Years of Excellence"], ["4", "International Awards"], ["200+", "Curated Wines"]].map(([n, l]) => (
              <div key={l}>
                <div className="ff-display" style={{ fontSize: 48, fontWeight: 300, color: C.gold, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 12, letterSpacing: "0.12em", color: C.dark, textTransform: "uppercase", marginTop: 6, opacity: .6 }}>{l}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Image grid */}
      <FadeUp delay={.15}>
        <div style={{ position: "relative", height: 520 }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{ position: "absolute", top: 0, left: 0, width: "68%", height: "72%", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80" alt="Restaurant ambiance"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .6s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "55%", overflow: "hidden", border: `6px solid ${C.cream}` }}>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" alt="Chef at work"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .6s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            />
          </motion.div>
          {/* Accent */}
          <div style={{ position: "absolute", top: "36%", right: "28%", width: 56, height: 56, border: `1px solid ${C.gold}`, borderRadius: "50%", opacity: .4 }} />
          <div style={{ position: "absolute", bottom: "25%", left: "5%", width: 80, height: 1, background: C.gold, opacity: .3 }} />
        </div>
      </FadeUp>
    </div>
  </section>
);

export default Philosophy;
