import { C } from "../../constants";

const ITEMS = ["Fine Dining", "·", "Est. 2019", "·", "Lagos", "·", "Chef's Table", "·", "Seasonal Menus", "·", "Private Events", "·", "Wine Cellar", "·"];
const FULL = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

const Marquee = () => (
  <div style={{ background: C.dark, padding: "16px 0", overflow: "hidden" }}>
    <div className="marquee-track">
      {FULL.map((text, i) => (
        <span key={i} className="ff-cinzel" style={{
          fontSize: "clamp(8px, 1.5vw, 10px)", letterSpacing: ".28em", textTransform: "uppercase",
          marginRight: "clamp(16px, 3vw, 28px)", whiteSpace: "nowrap",
          color: i % 2 === 0 ? C.gold : C.goldLight,
        }}>
          {text}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;