 
import { C } from "../../constants/data";

const Marquee = () => {
  const items = ["Fine Dining", "·", "Est. 2019", "·", "Lagos", "·", "Chef's Table", "·", "Seasonal Menus", "·", "Private Events", "·", "Wine Cellar", "·"];
  const full = [...items, ...items, ...items, ...items];
  return (
    <div style={{ background: C.dark, padding: "18px 0", overflow: "hidden", position: "relative", zIndex: 2 }}>
      <div className="marquee-track">
        {full.map((t, i) => (
          <span key={i} className="ff-cinzel" style={{ fontSize: 11, letterSpacing: "0.28em", color: i % 2 === 0 ? C.gold : C.goldLight, marginRight: 28, textTransform: "uppercase", whiteSpace: "nowrap" }}>{t}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
