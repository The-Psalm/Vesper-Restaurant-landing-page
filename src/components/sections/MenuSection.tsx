
import { C, DISHES } from "../../constants/data";
import FadeUp from "../ui/FadeUp";
import DishCard from "../ui/DishCard";

const MenuSection = () => (
  <section id="menu" style={{ padding: "130px 0 160px", background: `linear-gradient(180deg, ${C.cream} 0%, #E8E2DC 100%)`, position: "relative" }}>
    {/* Bg text */}
    <div className="ff-display" style={{ position: "absolute", left: "-1%", top: "8%", fontSize: "clamp(140px,18vw,260px)", color: "rgba(92,79,74,.035)", fontWeight: 600, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>MENU</div>

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <FadeUp>
          <span className="ff-cinzel" style={{ fontSize: 10, letterSpacing: "0.35em", color: C.gold, textTransform: "uppercase", display: "block", marginBottom: 18 }}>— Signature Dishes —</span>
          <h2 className="ff-display" style={{ fontSize: "clamp(44px,5.5vw,80px)", fontWeight: 300, color: C.dark, lineHeight: 1.05, marginBottom: 20 }}>
            Crafted with <em style={{ color: C.gold, fontStyle: "italic" }}>Obsession</em>
          </h2>
          <p style={{ maxWidth: 480, margin: "0 auto", color: `${C.dark}99`, fontSize: 16, lineHeight: 1.8, fontWeight: 300 }}>
            Every plate is a canvas. Every ingredient, a considered choice. Our seasonal menu evolves with the harvest.
          </p>
        </FadeUp>
      </div>

      {/* Cards grid — scattered polaroid style */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px 28px" }}>
        {DISHES.map((d, i) => <DishCard key={d.id} dish={d} index={i} />)}
      </div>

      {/* CTA */}
      <FadeUp delay={.3}>
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <button
            style={{ padding: "15px 48px", border: `1px solid ${C.dark}`, background: "transparent", color: C.dark, fontSize: 11, letterSpacing: "0.22em", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase", transition: "all .35s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.dark; (e.currentTarget as HTMLElement).style.color = C.cream; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.dark; }}
          >Explore Full Menu</button>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default MenuSection;
