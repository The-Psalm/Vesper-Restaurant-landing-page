import { useState } from "react";
import { C, DISHES } from "../../constants";
import { useReveal } from "../../hooks/useReveal";

const DishCard = ({ dish }: { dish: typeof DISHES[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const isMobile = window.innerWidth <= 480;
  const rot = isMobile ? 0 : dish.rot;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.cream,
        transform: hovered ? `rotate(0deg) scale(1.04) translateY(-10px)` : `rotate(${rot}deg)`,
        boxShadow: hovered
          ? `0 28px 60px rgba(46,36,32,.22), 0 4px 12px rgba(46,36,32,.1)`
          : `0 6px 24px rgba(46,36,32,.09)`,
        transition: "transform .5s cubic-bezier(.34,1.56,.64,1), box-shadow .4s ease",
        position: "relative",
        zIndex: hovered ? 10 : 1,
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div style={{ height: "clamp(170px, 22vw, 230px)", overflow: "hidden", position: "relative" }}>
        <img src={dish.img} alt={dish.name} loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .6s ease", transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />
        <div style={{ position: "absolute", top: 11, left: 11, background: "rgba(237,233,230,.92)", padding: "4px 12px" }}>
          <span className="ff-cinzel" style={{ fontSize: 9, letterSpacing: ".25em", color: C.sage, textTransform: "uppercase" }}>{dish.cat}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 20px 22px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <h3 className="ff-display" style={{ fontSize: "clamp(17px, 2.5vw, 21px)", fontWeight: 400, color: C.dark, lineHeight: 1.1, margin: 0 }}>{dish.name}</h3>
          <span className="ff-display" style={{ fontSize: "clamp(14px, 2vw, 17px)", color: C.gold, fontStyle: "italic", whiteSpace: "nowrap", marginLeft: 8 }}>{dish.price}</span>
        </div>
        <p style={{ fontSize: 12, color: `${C.dark}88`, lineHeight: 1.65, margin: 0 }}>{dish.desc}</p>
      </div>

      {/* Hover accent line */}
      <div style={{ height: 2, background: `linear-gradient(to right, ${C.gold}, ${C.sage})`, opacity: hovered ? 1 : 0, transition: "opacity .4s" }} />
    </div>
  );
};

const Menu = () => {
  const { ref, inView } = useReveal();

  return (
    <>
      <style>{`
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2.5vw, 30px);
        }
        @media (max-width: 900px)  { .menu-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  { .menu-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section id="menu" className="v-section" ref={ref}
        style={{ background: `linear-gradient(180deg, ${C.cream} 0%, ${C.creamMid} 100%)`, position: "relative", overflow: "hidden" }}>

        {/* Bg text decoration */}
        <div className="ff-display" style={{
          position: "absolute", left: "-1%", top: "8%",
          fontSize: "clamp(100px, 18vw, 260px)", color: "rgba(92,79,74,.034)",
          fontWeight: 600, lineHeight: 1, userSelect: "none", pointerEvents: "none",
        }}>MENU</div>

        <div className="v-container">
          {/* Header */}
          <div className={`reveal ${inView ? "in-view" : ""}`}
            style={{ textAlign: "center", marginBottom: "clamp(48px, 7vw, 80px)" }}>
            <span className="v-eyebrow" style={{ color: C.gold }}>— Signature Dishes —</span>
            <h2 className="v-h2" style={{ color: C.dark }}>
              Crafted with <em style={{ color: C.gold, fontStyle: "italic" }}>Obsession</em>
            </h2>
            <p style={{ maxWidth: 440, margin: "0 auto", color: `${C.dark}99`, fontSize: "clamp(13px, 1.8vw, 15px)", lineHeight: 1.85, fontWeight: 300 }}>
              Every plate is a canvas. Every ingredient, a considered choice. Our seasonal menu evolves with the harvest.
            </p>
          </div>

          {/* Cards */}
          <div className="menu-grid">
            {DISHES.map((dish, i) => (
              <div key={dish.id} className={`reveal ${inView ? "in-view" : ""}`}
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <DishCard dish={dish} index={i} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`reveal ${inView ? "in-view" : ""}`}
            style={{ textAlign: "center", marginTop: "clamp(40px, 6vw, 64px)", transitionDelay: ".4s" }}>
            <button className="v-btn-outline" style={{ color: C.dark, borderColor: C.dark }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.dark; (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.dark; }}
            >
              Explore Full Menu
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;