import { useState } from "react";
import { C, SERVICES } from "../../constants";
import { useReveal } from "../../hooks/useReveal";

const ServiceCard = ({ service }: { service: typeof SERVICES[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "clamp(24px, 4vw, 40px)",
        background: hovered ? C.dark : C.creamMid,
        transition: "background .4s ease, transform .35s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        minHeight: "clamp(180px, 20vw, 230px)",
      }}
    >
      <div className="ff-display" style={{ fontSize: "clamp(52px, 7vw, 70px)", fontWeight: 300, lineHeight: .85, marginBottom: 12, color: hovered ? "rgba(201,153,107,.15)" : "rgba(92,79,74,.08)", transition: "color .4s" }}>
        {service.num}
      </div>
      <h3 className="ff-display" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400, marginBottom: 10, color: hovered ? C.cream : C.dark, transition: "color .4s" }}>
        {service.title}
      </h3>
      <p style={{ fontSize: "clamp(12px, 1.5vw, 13px)", lineHeight: 1.75, fontWeight: 300, margin: 0, color: hovered ? "rgba(237,233,230,.6)" : `${C.dark}99`, transition: "color .4s" }}>
        {service.desc}
      </p>
    </div>
  );
};

const Services = () => {
  const { ref, inView } = useReveal();

  return (
    <>
      <style>{`
        .services-wrapper {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: clamp(36px, 6vw, 80px);
          align-items: start;
        }
        @media (max-width: 900px) {
          .services-wrapper { grid-template-columns: 1fr; gap: 40px; }
          .services-sticky-col { position: static !important; }
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="events" className="v-section" ref={ref} style={{ background: C.cream }}>
        <div className="v-container">
          <div className="services-wrapper">

            {/* Sticky intro */}
            <div className={`services-sticky-col reveal ${inView ? "in-view" : ""}`}
              style={{ position: "sticky", top: "110px" }}>
              <span className="v-eyebrow" style={{ color: C.sage }}>— Private Events —</span>
              <h2 className="v-h2" style={{ color: C.dark }}>
                Your Occasion,<br />
                <em style={{ color: C.gold, fontStyle: "italic" }}>Elevated</em>
              </h2>
              <p className="v-body" style={{ color: `${C.dark}99` }}>
                We create experiences that become the standard against which all others are measured.
              </p>
              <div className="v-divider" />
            </div>

            {/* Cards grid */}
            <div className="services-grid">
              {SERVICES.map((s, i) => (
                <div key={s.num} className={`reveal ${inView ? "in-view" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <ServiceCard service={s} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;