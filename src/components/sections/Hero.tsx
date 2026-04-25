import { useEffect, useRef, useState } from "react";
import { C } from "../../constants";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [barsOpen, setBarsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBarsOpen(true), 100);
    const t2 = setTimeout(() => setVisible(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const fn = () => {
      const pct = Math.min(window.scrollY / window.innerHeight, 1);
      if (videoRef.current)   videoRef.current.style.transform = `translateY(${pct * 28}%)`;
      if (contentRef.current) contentRef.current.style.opacity = `${Math.max(0, 1 - pct * 1.7)}`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const barStyle = (origin: "top" | "bottom"): React.CSSProperties => ({
    position: "absolute", left: 0, right: 0, height: "clamp(40px, 8vh, 72px)",
    background: C.deep, zIndex: 4,
    ...(origin === "top" ? { top: 0, transformOrigin: "top" } : { bottom: 0, transformOrigin: "bottom" }),
    transform: barsOpen ? "scaleY(0)" : "scaleY(1)",
    transition: "transform 1.2s cubic-bezier(.76, 0, .24, 1)",
  });

  const fadeIn = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(36px)",
    transition: `opacity .9s ${delay}s cubic-bezier(.22,.61,.36,1), transform .9s ${delay}s cubic-bezier(.22,.61,.36,1)`,
  });

  return (
    <>
      <style>{`
        .hero-section {
          position: relative; height: 100svh; min-height: 500px;
          overflow: hidden; display: flex; align-items: center; justify-content: center;
        }
        .hero-video {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; filter: brightness(.68);
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(46,36,32,.5) 0%, rgba(46,36,32,.12) 45%, rgba(46,36,32,.72) 100%);
        }
        .hero-content {
          position: relative; z-index: 3; text-align: center;
          padding: 0 24px; max-width: 920px; width: 100%;
        }
        .hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 10vw, 126px);
          color: #EDE9E6; line-height: .92; font-weight: 300;
          margin: 0 0 18px; letter-spacing: -.01em;
        }
        .hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(15px, 2.2vw, 22px);
          color: rgba(237,233,230,.65); font-style: italic;
          font-weight: 300; margin-bottom: 44px; letter-spacing: .02em;
        }
        .hero-btns {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .hero-h1 { font-size: clamp(38px, 13vw, 56px); line-height: .96; margin-bottom: 14px; }
          .hero-sub { margin-bottom: 32px; }
          .hero-btns { flex-direction: column; align-items: center; }
          .hero-btns button { width: 100%; max-width: 280px; justify-content: center; }
        }
        .hero-scroll-indicator {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .hero-scroll-label {
          color: rgba(237,233,230,.38); font-size: 9px;
          letter-spacing: .25em; text-transform: uppercase;
        }
        .scroll-chevron {
          width: 13px; height: 13px;
          border-right: 1px solid rgba(237,233,230,.35);
          border-bottom: 1px solid rgba(237,233,230,.35);
          transform: rotate(45deg);
          animation: scrollBounce 1.8s ease-in-out infinite;
        }
        @media (max-width: 768px) { .hero-scroll-indicator { bottom: 24px; } }
      `}</style>

      <section className="hero-section">
        <div style={barStyle("top")} />
        <div style={barStyle("bottom")} />

        <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
        >
          <source src="https://assets.mixkit.co/videos/29050/29050-720.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />

        <div className="hero-content" ref={contentRef}>
          <div style={fadeIn(0.2)}>
            <span className="ff-cinzel" style={{ fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: ".35em", color: C.gold, textTransform: "uppercase", display: "block", marginBottom: 22 }}>
              — Lagos, Nigeria —
            </span>
          </div>

          <div style={fadeIn(0.4)}>
            <h1 className="hero-h1">
              Where Every<br />
              <em style={{ fontStyle: "italic", color: C.goldLight }}>Moment</em><br />
              is Savoured
            </h1>
          </div>

          <div style={fadeIn(0.7)}>
            <p className="hero-sub">A culinary sanctuary where tradition meets innovation</p>
          </div>

          <div style={{ ...fadeIn(0.9) }} className="hero-btns">
            <button className="v-btn-gold" onClick={() => scrollTo("reserve")}>
              Reserve a Table
            </button>
            <button className="v-btn-outline" onClick={() => scrollTo("menu")}
              style={{ color: C.cream, borderColor: "rgba(237,233,230,.45)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.gold; (e.currentTarget as HTMLElement).style.color = C.gold; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(237,233,230,.45)"; (e.currentTarget as HTMLElement).style.color = C.cream; }}
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="hero-scroll-indicator" style={fadeIn(1.4)}>
          <span className="hero-scroll-label">Scroll</span>
          <div className="scroll-chevron" />
        </div>
      </section>
    </>
  );
};

export default Hero;