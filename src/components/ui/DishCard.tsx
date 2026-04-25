import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { C, DISHES } from "../../constants/data";

const DishCard = ({ dish, index }: { dish: typeof DISHES[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="dish-card-wrap"
      initial={{ opacity: 0, y: 60, rotate: dish.rot }}
      whileInView={{ opacity: 1, y: 0, rotate: dish.rot }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: .8, ease: [.22, .61, .36, 1], delay: index * .1 }}
      whileHover={{ rotate: 0, y: -12, scale: 1.04, zIndex: 10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ position: "relative", zIndex: hovered ? 10 : 1 }}
    >
      <div className="dish-inner" style={{
        background: C.cream,
        boxShadow: `0 8px 32px rgba(46,36,32,.12), 0 2px 8px rgba(46,36,32,.06)`,
        overflow: "hidden",
        transition: "box-shadow .4s ease",
      }}>
        {/* Image */}
        <div style={{ height: 240, overflow: "hidden", position: "relative" }}>
          <img className="dish-img-el" src={dish.img} alt={dish.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          {/* Category pill */}
          <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(237,233,230,.92)", padding: "5px 14px" }}>
            <span className="ff-cinzel" style={{ fontSize: 9, letterSpacing: "0.25em", color: C.sage, textTransform: "uppercase" }}>{dish.cat}</span>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: "22px 24px 26px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <h3 className="ff-display" style={{ fontSize: 22, fontWeight: 400, color: C.dark, margin: 0, lineHeight: 1.1 }}>{dish.name}</h3>
            <span className="ff-display" style={{ fontSize: 18, color: C.gold, fontStyle: "italic", whiteSpace: "nowrap", marginLeft: 12 }}>{dish.price}</span>
          </div>
          <div className="dish-meta">
            <p style={{ fontSize: 13, color: `${C.dark}aa`, lineHeight: 1.6, margin: 0 }}>{dish.desc}</p>
            <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 10, letterSpacing: "0.2em", color: C.sage, textTransform: "uppercase" }}>Discover Pairing</span>
              <ArrowRight size={11} color={C.sage} />
            </div>
          </div>
          <div className="dish-label-default" style={{ marginTop: 8 }}>
            <p style={{ fontSize: 12, color: `${C.dark}66`, margin: 0, lineHeight: 1.5 }}>{dish.desc.substring(0, 42)}…</p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{ height: 2, background: `linear-gradient(to right,${C.gold},${C.sage})`, opacity: hovered ? 1 : 0, transition: "opacity .4s" }} />
      </div>
    </motion.div>
  );
};

export default DishCard;
