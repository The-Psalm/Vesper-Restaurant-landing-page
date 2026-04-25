import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { C } from "../../constants/data";
import FadeUp from "../ui/FadeUp";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="experience" ref={ref} style={{ position: "relative", overflow: "hidden", background: C.deep, minHeight: "90vh", display: "flex", alignItems: "center" }}>
      {/* Parallax bg */}
      <motion.div style={{ position: "absolute", inset: "-15%", y: imgY }}>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" alt="Vesper interior"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .35 }} />
      </motion.div>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(46,36,32,.9) 0%, rgba(92,118,109,.4) 100%)` }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "120px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <FadeUp>
            <span className="ff-cinzel" style={{ fontSize: 10, letterSpacing: "0.35em", color: C.gold, textTransform: "uppercase", display: "block", marginBottom: 20 }}>— The Vesper Experience —</span>
          </FadeUp>
          <FadeUp delay={.1}>
            <h2 className="ff-display" style={{ fontSize: "clamp(42px,5vw,72px)", fontWeight: 300, color: C.cream, lineHeight: 1.05, marginBottom: 28 }}>
              An Evening<br />Transformed into<br /><em style={{ color: C.gold }}>Memory</em>
            </h2>
          </FadeUp>
          <FadeUp delay={.2}>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(237,233,230,.65)", marginBottom: 16, fontWeight: 300 }}>
              From the moment you descend into our lantern-lit atrium, Vesper envelops you in warmth that is both architectural and deeply human. The room breathes — low lighting, soft jazz, the gentle percussion of crystal.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(237,233,230,.65)", marginBottom: 44, fontWeight: 300 }}>
              Our floor plans flow between intimate alcoves and sweeping open rooms, accommodating couples celebrating milestones and tables of twelve alike.
            </p>
          </FadeUp>
          <FadeUp delay={.3}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[["Tues – Fri", "6 PM – 11 PM"], ["Sat – Sun", "12 PM – 11 PM"], ["Mon", "Closed"]].map(([d, t]) => (
                <div key={d} style={{ borderLeft: `2px solid ${C.gold}`, paddingLeft: 16 }}>
                  <div className="ff-cinzel" style={{ fontSize: 10, letterSpacing: "0.2em", color: C.gold, textTransform: "uppercase", marginBottom: 4 }}>{d}</div>
                  <div style={{ fontSize: 14, color: C.cream, fontWeight: 300 }}>{t}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Floating info card */}
        <FadeUp delay={.2}>
          <motion.div whileHover={{ y: -6 }} style={{ background: "rgba(237,233,230,.06)", backdropFilter: "blur(16px)", border: "1px solid rgba(201,153,107,.2)", padding: 48 }}>
            <div className="ff-display" style={{ fontSize: 72, fontWeight: 300, color: C.gold, lineHeight: .9, marginBottom: 8 }}>10</div>
            <div className="ff-cinzel" style={{ fontSize: 10, letterSpacing: "0.3em", color: C.cream, opacity: .5, textTransform: "uppercase", marginBottom: 32 }}>Course Tasting Menu</div>
            <div style={{ width: 40, height: 1, background: C.gold, marginBottom: 32, opacity: .5 }} />

            {[
              "Amuse-bouche & bread service",
              "4 starter compositions",
              "Palate cleanser",
              "Signature main",
              "Pre-dessert interlude",
              "Dessert & mignardises",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 20, height: 1, background: C.gold, opacity: .5, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "rgba(237,233,230,.7)", fontWeight: 300 }}>{item}</span>
              </div>
            ))}

            <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(201,153,107,.15)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "rgba(237,233,230,.4)", textTransform: "uppercase", marginBottom: 4 }}>Per person</div>
                <div className="ff-display" style={{ fontSize: 36, color: C.gold, fontWeight: 300 }}>₦185,000</div>
              </div>
              <button onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
                style={{ padding: "12px 28px", background: C.gold, border: "none", color: C.cream, fontSize: 11, letterSpacing: "0.18em", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase", transition: "all .3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.cream; (e.currentTarget as HTMLElement).style.color = C.dark; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.gold; (e.currentTarget as HTMLElement).style.color = C.cream; }}
              >Book</button>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Experience;
