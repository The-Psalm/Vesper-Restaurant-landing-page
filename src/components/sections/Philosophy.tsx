import { C } from "../../constants";
import { useReveal } from "../../hooks/useReveal";

const Philosophy = () => {
  const { ref, inView } = useReveal();

  return (
    <>
      <style>{`
        .phil-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .phil-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        .phil-img-grid {
          position: relative;
          height: clamp(300px, 45vw, 500px);
        }
        @media (max-width: 900px) {
          .phil-img-grid { height: clamp(240px, 55vw, 380px); }
        }
        @media (max-width: 480px) {
          .phil-img-grid { height: 260px; }
        }

        .phil-img-main {
          position: absolute; top: 0; left: 0; width: 68%; height: 72%; overflow: hidden;
        }
        .phil-img-accent {
          position: absolute; bottom: 0; right: 0; width: 54%; height: 54%;
          overflow: hidden; border: 6px solid #EDE9E6;
        }
        @media (max-width: 480px) {
          .phil-img-accent { border-width: 4px; }
        }
        .phil-img-main img, .phil-img-accent img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .6s ease;
        }
        .phil-img-main:hover img, .phil-img-accent:hover img { transform: scale(1.05); }

        .phil-stats {
          display: flex; gap: clamp(20px, 5vw, 48px);
          margin-top: 32px; flex-wrap: wrap;
        }
        .phil-ring {
          position: absolute; top: 36%; right: 28%; width: 50px; height: 50px;
          border: 1px solid #C9996B; border-radius: 50%; opacity: .4;
          pointer-events: none;
        }
        @media (max-width: 480px) { .phil-ring { display: none; } }
      `}</style>

      <section id="philosophy" className="v-section" ref={ref}
        style={{ background: C.cream, position: "relative", overflow: "hidden" }}>

        {/* Decorative background numeral */}
        <div className="ff-display" style={{
          position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)",
          fontSize: "clamp(120px, 22vw, 320px)", color: "rgba(92,79,74,.038)",
          fontWeight: 600, lineHeight: 1, userSelect: "none", pointerEvents: "none",
        }}>01</div>

        <div className="v-container">
          <div className="phil-grid">

            {/* Text side */}
            <div className={`reveal ${inView ? "in-view" : ""}`}>
              <span className="v-eyebrow" style={{ color: C.sage }}>— Our Philosophy —</span>
              <h2 className="v-h2" style={{ color: C.dark }}>
                Cuisine as<br />
                <em style={{ color: C.gold, fontStyle: "italic" }}>Living Art</em>
              </h2>
              <p className="v-body" style={{ color: `${C.dark}cc` }}>
                At Vesper, we believe a meal transcends sustenance. It is a moment suspended in time — a conversation between the land, the sea, and the hands that shape them into something extraordinary.
              </p>
              <p className="v-body" style={{ color: `${C.dark}cc` }}>
                Executive Chef Emeka Nwosu draws from 18 years across Michelin-starred kitchens in Paris, Tokyo, and Copenhagen — weaving West African heritage with precision French technique.
              </p>

              <div className="phil-stats">
                {[["18", "Years of Excellence"], ["4", "International Awards"], ["200+", "Curated Wines"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="ff-display" style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 300, color: C.gold, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "clamp(9px, 1.5vw, 11px)", letterSpacing: ".12em", color: C.dark, textTransform: "uppercase", marginTop: 5, opacity: .6 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image grid side */}
            <div className={`phil-img-grid reveal reveal-delay-2 ${inView ? "in-view" : ""}`}>
              <div className="phil-img-main">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80" alt="Vesper dining room" loading="lazy" />
              </div>
              <div className="phil-img-accent">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80" alt="Chef at work" loading="lazy" />
              </div>
              <div className="phil-ring" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;