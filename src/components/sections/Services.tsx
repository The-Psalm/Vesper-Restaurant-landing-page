
import { motion } from "framer-motion";
import { C, SERVICES } from "../../constants/data";
import FadeUp from "../ui/FadeUp";

const Services = () => (
  <section id="events" style={{ padding: "140px 0", background: C.cream }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 120 }}>
          <FadeUp>
            <span className="ff-cinzel" style={{ fontSize: 10, letterSpacing: "0.35em", color: C.sage, textTransform: "uppercase", display: "block", marginBottom: 20 }}>— Private Events —</span>
            <h2 className="ff-display" style={{ fontSize: "clamp(40px,4.5vw,64px)", fontWeight: 300, color: C.dark, lineHeight: 1.05, marginBottom: 24 }}>
              Your Occasion,<br /><em style={{ color: C.gold }}>Elevated</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: `${C.dark}99`, fontWeight: 300, marginBottom: 36 }}>
              We create experiences that become the standard against which all others are measured.
            </p>
            <div style={{ width: 48, height: 1, background: C.gold }} />
          </FadeUp>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          {SERVICES.map((s, i) => (
            <FadeUp key={s.num} delay={i * .1}>
              <motion.div
                whileHover={{ y: -4, background: C.dark }}
                style={{ padding: 40, background: "#E8E2DC", transition: "all .4s ease", minHeight: 240 }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.querySelectorAll("*").forEach((n: any) => {
                    if (n.dataset.goldText) n.style.color = C.goldLight;
                    if (n.dataset.bodyText) n.style.color = "rgba(237,233,230,.65)";
                    if (n.dataset.numText) n.style.color = "rgba(201,153,107,.2)";
                  });
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.querySelectorAll("*").forEach((n: any) => {
                    if (n.dataset.goldText) n.style.color = C.dark;
                    if (n.dataset.bodyText) n.style.color = `${C.dark}99`;
                    if (n.dataset.numText) n.style.color = "rgba(92,79,74,.08)";
                  });
                }}
              >
                <div className="ff-display" data-num-text="1"
                  style={{ fontSize: 72, fontWeight: 300, color: "rgba(92,79,74,.08)", lineHeight: .85, marginBottom: 16, transition: "color .4s" }}>{s.num}</div>
                <h3 className="ff-display" data-gold-text="1"
                  style={{ fontSize: 26, fontWeight: 400, color: C.dark, marginBottom: 12, transition: "color .4s" }}>{s.title}</h3>
                <p data-body-text="1"
                  style={{ fontSize: 14, lineHeight: 1.75, color: `${C.dark}99`, fontWeight: 300, margin: 0, transition: "color .4s" }}>{s.desc}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
