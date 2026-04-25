
import GlobalStyles from "./components/ui/GlobalStyles";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import Philosophy from "./components/sections/Philosophy";
import Menu from "./components/sections/Menu";
import Experience from "./components/sections/Experience";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Reservation from "./components/sections/Reservation";
import Footer from "./components/layout/Footer";
import { useSEO } from "./hooks/useSEO";

export default function App() {
  useSEO();
  return (
    <>
      <GlobalStyles />
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Menu />
        <Experience />
        <Services />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
