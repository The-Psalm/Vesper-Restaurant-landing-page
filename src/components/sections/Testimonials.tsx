import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { C, TESTIMONIALS } from "../../constants/data";
import FadeUp from "../ui/FadeUp";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: "140px 0", background: C.dark, position: "relative", overflow: "hidden" }}>
      {/* Decorative quote mark */}
      <div className="ff-display" style={{ position: "absolute", top: "8%", left: "5%", fontSize: 300, color: "rgba(201,153,107,.05)", fontWeight: 600, lineHeight: 1, userSelect: "none" }}>"</div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 2 }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span className="ff-cinzel" style={{ fontSize: 10, letterSpacing: "0.35em", color: C.gold, textTransform: "uppercase", display: "block", marginBottom: 20 }}>— Guest Voices —</span>
            <h2 className="ff-display" style={{ fontSize: "clamp(40px,4.5vw,64px)", fontWeight: 300, color: C.cream, lineHeight: 1.05 }}>
              What They <em style={{ color: C.gold, fontStyle: "italic" }}>Remember</em>
            </h2>
          </div>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: .6, ease: [.22, .61, .36, 1] }}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
              {Array.from({ length: TESTIMONIALS[active].stars }).map((_, i) => <Star key={i} size={14} fill={C.gold} color={C.gold} />)}
            </div>
            <p className="ff-display" style={{ fontSize: "clamp(20px,2.5vw,32px)", fontStyle: "italic", color: C.cream, lineHeight: 1.6, fontWeight: 300, marginBottom: 36, maxWidth: 740, margin: "0 auto 36px" }}>
              "{TESTIMONIALS[active].text}"
            </p>
            <div>
              <div className="ff-cinzel" style={{ fontSize: 11, letterSpacing: "0.25em", color: C.gold, textTransform: "uppercase", marginBottom: 4 }}>{TESTIMONIALS[active].name}</div>
              <div style={{ fontSize: 13, color: "rgba(237,233,230,.4)", fontWeight: 300 }}>{TESTIMONIALS[active].role}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ width: i === active ? 32 : 8, height: 8, border: "none", background: i === active ? C.gold : "rgba(201,153,107,.25)", borderRadius: 4, transition: "all .35s", padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
