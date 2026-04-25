import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { C } from "../../constants/data";
import FadeUp from "../ui/FadeUp";

const Reservation = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "", notes: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="reserve" style={{ padding: "140px 0", background: "#E8E2DC", position: "relative", overflow: "hidden" }}>
      <div className="ff-display" style={{ position: "absolute", right: "-3%", bottom: "5%", fontSize: "clamp(120px,16vw,240px)", color: "rgba(92,79,74,.04)", fontWeight: 600, lineHeight: 1, userSelect: "none" }}>BOOK</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
        {/* Left */}
        <div>
          <FadeUp>
            <span className="ff-cinzel" style={{ fontSize: 10, letterSpacing: "0.35em", color: C.sage, textTransform: "uppercase", display: "block", marginBottom: 20 }}>— Reservations —</span>
            <h2 className="ff-display" style={{ fontSize: "clamp(42px,5vw,72px)", fontWeight: 300, color: C.dark, lineHeight: 1.05, marginBottom: 28 }}>
              Secure Your<br /><em style={{ color: C.gold }}>Table</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: `${C.dark}99`, fontWeight: 300, marginBottom: 48 }}>
              We recommend booking at least two weeks in advance. For same-week availability or groups above 10, please contact us directly.
            </p>
          </FadeUp>

          <FadeUp delay={.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { icon: <MapPin size={16} color={C.gold} />, label: "Address", value: "14 Waterfront Drive, Eko Atlantic City, Lagos, Nigeria" },
                { icon: <Phone size={16} color={C.gold} />, label: "Telephone", value: "+234 (0) 812 345 6789" },
                { icon: <Mail size={16} color={C.gold} />, label: "Email", value: "reservations@vesperlagos.com" },
                { icon: <Clock size={16} color={C.gold} />, label: "Hours", value: "Tues–Sun · 12 PM – 11 PM" },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ marginTop: 2, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div className="ff-cinzel" style={{ fontSize: 9, letterSpacing: "0.25em", color: C.sage, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 14, color: C.dark, fontWeight: 300 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Form */}
        <FadeUp delay={.15}>
          <div style={{ background: C.cream, padding: "56px 48px", boxShadow: "0 24px 80px rgba(46,36,32,.08)" }}>
            <h3 className="ff-display" style={{ fontSize: 28, fontWeight: 400, color: C.dark, marginBottom: 40, letterSpacing: "0.01em" }}>Make a Reservation</h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
              {[
                { name: "name", label: "Full Name", type: "text", span: 2 },
                { name: "email", label: "Email", type: "email", span: 1 },
                { name: "phone", label: "Phone", type: "tel", span: 1 },
                { name: "date", label: "Date", type: "date", span: 1 },
                { name: "guests", label: "Guests", type: "number", span: 1 },
              ].map(f => (
                <div key={f.name} style={{ gridColumn: `span ${f.span}`, marginBottom: 28 }}>
                  <label style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", color: `${C.dark}88`, textTransform: "uppercase", marginBottom: 8, fontFamily: "'DM Sans',sans-serif" }}>{f.label}</label>
                  <input
                    className="form-field"
                    type={f.type}
                    name={f.name}
                    value={(form as any)[f.name]}
                    onChange={handleChange}
                    min={f.type === "number" ? "1" : undefined}
                    max={f.type === "number" ? "20" : undefined}
                    style={{ display: "block" }}
                  />
                </div>
              ))}

              <div style={{ gridColumn: "span 2", marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", color: `${C.dark}88`, textTransform: "uppercase", marginBottom: 8, fontFamily: "'DM Sans',sans-serif" }}>Special Requests</label>
                <textarea
                  className="form-field"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Dietary requirements, celebrations, allergies..."
                  style={{ resize: "none", display: "block", lineHeight: 1.7 }}
                />
              </div>
            </div>

            <button
              onClick={() => alert("Thank you — your reservation request has been received. We'll confirm within 24 hours.")}
              style={{ width: "100%", padding: "16px", background: C.dark, border: "none", color: C.cream, fontSize: 12, letterSpacing: "0.22em", fontFamily: "'DM Sans',sans-serif", textTransform: "uppercase", fontWeight: 500, marginTop: 8, transition: "all .35s", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.gold; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.dark; }}
            >
              Request Reservation <ArrowRight size={14} />
            </button>

            <p style={{ fontSize: 11, color: `${C.dark}66`, textAlign: "center", marginTop: 16, lineHeight: 1.7 }}>
              Confirmation within 24 hours. A credit card may be required for parties of 6+.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Reservation;
