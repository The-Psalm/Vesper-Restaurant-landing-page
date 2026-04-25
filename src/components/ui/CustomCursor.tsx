import { useState, useEffect, useRef } from "react";
import { C } from "../../constants/data";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    let fx = 0, fy = 0, mx = 0, my = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };
    const tick = () => {
      fx += (mx - fx) * .09; fy += (my - fy) * .09;
      if (ringRef.current) {
        ringRef.current.style.left = `${fx}px`;
        ringRef.current.style.top = `${fy}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    const onEnter = () => setBig(true);
    const onLeave = () => setBig(false);
    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,[role='button']").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    raf = requestAnimationFrame(tick);
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const dot = { position: "fixed" as const, borderRadius: "50%", pointerEvents: "none" as const, zIndex: 9999, transform: "translate(-50%,-50%)" };
  const ring = { position: "fixed" as const, borderRadius: "50%", pointerEvents: "none" as const, zIndex: 9998, transform: "translate(-50%,-50%)", transition: "width .25s,height .25s,opacity .25s" };

  return (
    <>
      <div ref={dotRef} style={{ ...dot, width: big ? 16 : 9, height: big ? 16 : 9, background: C.gold, transition: "width .2s,height .2s" }} />
      <div ref={ringRef} style={{ ...ring, width: big ? 56 : 36, height: big ? 56 : 36, border: `1px solid ${C.gold}`, opacity: big ? .8 : .5 }} />
    </>
  );
};

export default CustomCursor;
