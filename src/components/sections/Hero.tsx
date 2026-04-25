import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { C } from "../../constants/data";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, .6], [1, 0]);

  return (
    <section ref={ref} style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Cinematic letterbox bars */}
      <motion.div initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 1.2, delay: .2, ease: [.76, 0, .24, 1] }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 80, background: C.deep, zIndex: 10, transformOrigin: "top" }} />
      <motion.div initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 1.2, delay: .2, ease: [.76, 0, .24, 1] }}
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: C.deep, zIndex: 10, transformOrigin: "bottom" }} />

      {/* Video */}
      <motion.div style={{ position: "absolute", inset: 0, y }} className="video-wrap">
        <video autoPlay muted loop playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.72)" }}
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
        >
          <source src="https://assets.mixkit.co/videos/29050/29050-720.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, rgba(46,36,32,.45) 0%, rgba(46,36,32,.2) 45%, rgba(46,36,32,.65) 100%)` }} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity: fade, position: "relative", zIndex: 5, textAlign: "center", padding: "0 24px", maxWidth: 900 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .9 }}>
          <span className="ff-cinzel" style={{ color: C.gold, letterSpacing: "0.35em", fontSize: 11, textTransform: "uppercase", display: "block", marginBottom: 28 }}>
            — Lagos, Nigeria —
          </span>
        </motion.div>

        <motion.h1 className="ff-display"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 1.05, ease: [.22, .61, .36, 1] }}
          style={{ fontSize: "clamp(64px,9vw,130px)", color: C.cream, lineHeight: .92, fontWeight: 300, margin: "0 0 24px", letterSpacing: "-0.01em" }}
        >
          Where Every<br /><em style={{ fontStyle: "italic", color: C.goldLight }}>Moment</em><br />is Savoured
        </motion.h1>

        <motion.p className="ff-display"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .9, delay: 1.4 }}
          style={{ color: "rgba(237,233,230,.7)", fontSize: "clamp(18px,2.2vw,24px)", fontStyle: "italic", fontWeight: 300, marginBottom: 52, letterSpacing: "0.02em" }}
        >
          A culinary sanctuary where tradition meets innovation
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1.6 }}
          style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}
        >
          <button
            onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
            style={{ padding: "16px 44px", background: C.gold, border: "none", color: C.cream, fontSize: 12, letterSpacing: "0.2em", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase", fontWeight: 500, transition: "all .35s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.cream; (e.currentTarget as HTMLElement).style.color = C.dark; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.gold; (e.currentTarget as HTMLElement).style.color = C.cream; }}
          >Reserve a Table</button>
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            style={{ padding: "16px 44px", background: "transparent", border: `1px solid rgba(237,233,230,.5)`, color: C.cream, fontSize: 12, letterSpacing: "0.2em", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase", fontWeight: 400, transition: "all .35s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.gold; (e.currentTarget as HTMLElement).style.color = C.gold; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(237,233,230,.5)"; (e.currentTarget as HTMLElement).style.color = C.cream; }}
          >View Menu</button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
      >
        <span style={{ color: "rgba(237,233,230,.4)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ChevronDown size={16} color="rgba(237,233,230,.4)" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
