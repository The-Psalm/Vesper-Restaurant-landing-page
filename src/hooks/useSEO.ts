import { useEffect } from "react";

export const useSEO = () => {
  useEffect(() => {
    document.title = "Vesper Lagos — Fine Dining Restaurant | Eko Atlantic";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    const setOG = (prop: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "Vesper is Lagos' premier fine dining restaurant. Michelin-inspired cuisine, private events, chef's table experiences at Eko Atlantic City. Reserve your table today.");
    setMeta("keywords", "fine dining Lagos, luxury restaurant Lagos, Eko Atlantic restaurant, Nigerian fine dining, private dining Lagos, chef's table Lagos, Vesper restaurant");
    setMeta("robots", "index,follow");
    setMeta("author", "Vesper Lagos");
    setOG("og:title", "Vesper Lagos — Fine Dining Restaurant");
    setOG("og:description", "West Africa's most acclaimed fine dining experience. Tasting menus, private events, and chef's table at Eko Atlantic City.");
    setOG("og:type", "restaurant");
    setOG("og:url", "https://www.vesperlagos.com");
    setOG("og:image", "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Vesper Lagos — Fine Dining Restaurant");
    setMeta("twitter:description", "West Africa's most acclaimed fine dining experience.");

    // JSON-LD structured data
    const ld = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Vesper Lagos",
      description: "Premier fine dining restaurant in Lagos, Nigeria",
      url: "https://www.vesperlagos.com",
      telephone: "+234-812-345-6789",
      address: { "@type": "PostalAddress", streetAddress: "14 Waterfront Drive", addressLocality: "Eko Atlantic City", addressRegion: "Lagos", addressCountry: "NG" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "18:00", closes: "23:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "12:00", closes: "23:00" },
      ],
      priceRange: "₦₦₦₦",
      servesCuisine: ["Contemporary", "French", "West African"],
    };
    let existing = document.querySelector("script[type='application/ld+json']");
    if (!existing) { existing = document.createElement("script"); existing.setAttribute("type", "application/ld+json"); document.head.appendChild(existing); }
    existing.textContent = JSON.stringify(ld);
  }, []);
};
