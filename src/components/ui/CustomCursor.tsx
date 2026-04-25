import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer:fine devices (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let fx = 0, fy = 0, mx = 0, my = 0, rafId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top  = `${my}px`;
      }
    };

    const tick = () => {
      fx += (mx - fx) * 0.09;
      fy += (my - fy) * 0.09;
      if (ringRef.current) {
        ringRef.current.style.left = `${fx}px`;
        ringRef.current.style.top  = `${fy}px`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      if (dotRef.current)  { dotRef.current.style.width  = "15px"; dotRef.current.style.height  = "15px"; }
      if (ringRef.current) { ringRef.current.style.width = "52px"; ringRef.current.style.height = "52px"; ringRef.current.style.opacity = ".75"; }
    };

    const onLeave = () => {
      if (dotRef.current)  { dotRef.current.style.width  = "9px"; dotRef.current.style.height  = "9px"; }
      if (ringRef.current) { ringRef.current.style.width = "36px"; ringRef.current.style.height = "36px"; ringRef.current.style.opacity = ".45"; }
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    const attach = () => {
      document.querySelectorAll("a, button, [role='button']").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      mo.disconnect();
    };
  }, []);

  const base: React.CSSProperties = {
    position: "fixed", borderRadius: "50%", pointerEvents: "none", zIndex: 9999,
    transform: "translate(-50%, -50%)", transition: "width .2s, height .2s",
  };

  return (
    <>
      <div ref={dotRef} style={{ ...base, width: 9, height: 9, background: "#C9996B", mixBlendMode: "multiply" }} />
      <div ref={ringRef} style={{ ...base, width: 36, height: 36, border: "1px solid #C9996B", opacity: .45, transition: "width .25s, height .25s, opacity .25s" }} />
    </>
  );
};

export default CustomCursor;