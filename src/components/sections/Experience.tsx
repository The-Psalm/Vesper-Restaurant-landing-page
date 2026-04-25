import { useRef, useEffect } from "react";
import { C, COURSES } from "../../constants";
import { useReveal } from "../../hooks/useReveal";

const Experience = () => {
  const { ref, inView } = useReveal();
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const fn = () => {
      const sec = imgRef.current?.closest("section");
      if (!sec || !imgRef.current) return;
      const rect = sec.getBoundingClientRect();
      const pct = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      imgRef.current.style.transform = `translateY(${(pct - .5) * 18}%)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(36px, 6vw, 80px);
          align-items: center;
        }
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr; }
        }

        .exp-hours {
          display: flex;
          gap: clamp(16px, 4vw, 32px);
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .exp-card-inner {
          background: rgba(237,233,230,.06);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(201,153,107,.2);
          padding: clamp(24px, 4vw, 44px);
          transition: transform .4s ease;
        }
        .exp-card-inner:hover { transform: translateY(-6px); }

        .exp-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(201,153,107,.15);
        }
      `}</style>

      <section id="experience" ref={ref}
        style={{ background: C.deep, minHeight: "90vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>

        {/* Parallax bg image */}
        <div ref={imgRef} style={{ position: "absolute", inset: "-15%", transition: "none" }}>
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Vesper interior" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: .3, display: "block" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(46,36,32,.92) 0%, rgba(92,118,109,.35) 100%)" }} />

        <div className="v-container" style={{ position: "relative", zIndex: 2, width: "100%", padding: "80px 48px" }}>
          <div className="exp-grid">

            {/* Left text */}
            <div className={`reveal ${inView ? "in-view" : ""}`}>
              <span className="v-eyebrow" style={{ color: C.gold }}>— The Vesper Experience —</span>
              <h2 className="v-h2" style={{ color: C.cream }}>
                An Evening<br />Transformed into<br />
                <em style={{ color: C.gold, fontStyle: "italic" }}>Memory</em>
              </h2>
              <p className="v-body" style={{ color: "rgba(237,233,230,.6)" }}>
                From the moment you descend into our lantern-lit atrium, Vesper envelops you in warmth that is both architectural and deeply human. Low lighting, soft jazz, the gentle percussion of crystal.
              </p>
              <p className="v-body" style={{ color: "rgba(237,233,230,.6)" }}>
                Our floor plans flow between intimate alcoves and sweeping open rooms, accommodating couples celebrating milestones and tables of twelve alike.
              </p>

              <div className="exp-hours">
                {[["Tues – Fri", "6 PM – 11 PM"], ["Sat – Sun", "12 PM – 11 PM"], ["Monday", "Closed"]].map(([d, t]) => (
                  <div key={d} style={{ borderLeft: `2px solid ${C.gold}`, paddingLeft: 14 }}>
                    <div className="ff-cinzel" style={{ fontSize: 9, letterSpacing: ".2em", color: C.gold, textTransform: "uppercase", marginBottom: 3 }}>{d}</div>
                    <div style={{ fontSize: 13, color: C.cream, fontWeight: 300 }}>{t}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className={`reveal reveal-delay-2 ${inView ? "in-view" : ""}`}>
              <div className="exp-card-inner">
                <div className="ff-display" style={{ fontSize: "clamp(52px, 8vw, 72px)", fontWeight: 300, color: C.gold, lineHeight: .9, marginBottom: 6 }}>10</div>
                <div className="ff-cinzel" style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(237,233,230,.4)", textTransform: "uppercase", marginBottom: 24 }}>Course Tasting Menu</div>
                <div style={{ width: 32, height: 1, background: C.gold, marginBottom: 22, opacity: .5 }} />

                {COURSES.map((course, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 16, height: 1, background: C.gold, opacity: .5, flexShrink: 0 }} />
                    <span style={{ fontSize: "clamp(12px, 1.6vw, 13px)", color: "rgba(237,233,230,.62)", fontWeight: 300 }}>{course}</span>
                  </div>
                ))}

                <div className="exp-card-bottom">
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: ".15em", color: "rgba(237,233,230,.3)", textTransform: "uppercase", marginBottom: 4 }}>Per person</div>
                    <div className="ff-display" style={{ fontSize: "clamp(26px, 4vw, 34px)", color: C.gold, fontWeight: 300 }}>₦185,000</div>
                  </div>
                  <button className="v-btn-gold" onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
                    style={{ padding: "11px 24px" }}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;