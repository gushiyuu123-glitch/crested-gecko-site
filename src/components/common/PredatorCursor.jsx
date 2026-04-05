import { useEffect, useRef, useState } from "react";

export default function PredatorCursor() {
  const cursorRef = useRef(null);
  const tailRef = useRef(null);
  const glowRef = useRef(null);

  const mouse = useRef({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 });
  const tail = useRef({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 });
  const glow = useRef({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 });

  const rafRef = useRef(0);
  const clickTimeoutRef = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mq.matches);
    updateEnabled();

    if (mq.addEventListener) {
      mq.addEventListener("change", updateEnabled);
    } else {
      mq.addListener(updateEnabled);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", updateEnabled);
      } else {
        mq.removeListener(updateEnabled);
      }
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("cursor-none");

    const setOpacity = (value) => {
      if (cursorRef.current) cursorRef.current.style.opacity = value;
      if (tailRef.current) tailRef.current.style.opacity = value;
      if (glowRef.current) glowRef.current.style.opacity = value;
    };

    const setHoverState = (active) => {
      const value = active ? "true" : "false";
      if (cursorRef.current) cursorRef.current.dataset.hover = value;
      if (tailRef.current) tailRef.current.dataset.hover = value;
      if (glowRef.current) glowRef.current.dataset.hover = value;
    };

    const triggerClickState = () => {
      if (!cursorRef.current || !tailRef.current || !glowRef.current) return;

      cursorRef.current.dataset.click = "true";
      tailRef.current.dataset.click = "true";
      glowRef.current.dataset.click = "true";

      window.clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = window.setTimeout(() => {
        if (cursorRef.current) cursorRef.current.dataset.click = "false";
        if (tailRef.current) tailRef.current.dataset.click = "false";
        if (glowRef.current) glowRef.current.dataset.click = "false";
      }, 180);
    };

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleLeave = () => setOpacity("0");
    const handleEnter = () => setOpacity("1");

    const handlePointerOver = (e) => {
      const target = e.target.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      setHoverState(!!target);
    };

    const handlePointerDown = () => {
      triggerClickState();
    };

    tail.current.x = mouse.current.x;
    tail.current.y = mouse.current.y;
    glow.current.x = mouse.current.x;
    glow.current.y = mouse.current.y;

    const animate = () => {
      tail.current.x += (mouse.current.x - tail.current.x) * 0.34;
      tail.current.y += (mouse.current.y - tail.current.y) * 0.34;

      glow.current.x += (mouse.current.x - glow.current.x) * 0.2;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.2;

      if (tailRef.current) {
        tailRef.current.style.transform = `translate3d(${tail.current.x}px, ${tail.current.y}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.current.x}px, ${glow.current.y}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerover", handlePointerOver);

    setOpacity("1");
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      root.classList.remove("cursor-none");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerover", handlePointerOver);
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(clickTimeoutRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        .cursor-none,
        .cursor-none * {
          cursor: none !important;
        }

        .gecko-tail-glow,
        .gecko-tail-trail,
        .gecko-tail-core {
          position: fixed;
          left: 0;
          top: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          transform: translate3d(-100px, -100px, 0);
          transition:
            opacity 180ms ease,
            filter 220ms ease,
            width 220ms ease,
            height 220ms ease;
        }

        .gecko-tail-glow {
          width: 42px;
          height: 42px;
          margin-left: -21px;
          margin-top: -21px;
          border-radius: 999px;
          background:
            radial-gradient(
              circle,
              rgba(139,164,119,0.14) 0%,
              rgba(205,189,143,0.08) 30%,
              rgba(139,164,119,0) 72%
            );
          filter: blur(11px);
        }

        .gecko-tail-trail {
          width: 34px;
          height: 18px;
          margin-left: -17px;
          margin-top: -9px;
          border-radius: 999px;
          background:
            linear-gradient(
              90deg,
              rgba(139,164,119,0.00) 0%,
              rgba(139,164,119,0.08) 20%,
              rgba(205,189,143,0.18) 62%,
              rgba(205,189,143,0.00) 100%
            );
          filter: blur(8px);
        }

        .gecko-tail-core {
          width: 26px;
          height: 18px;
          margin-left: -13px;
          margin-top: -9px;
          transform-origin: 78% 50%;
        }

        .gecko-tail-core svg {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
          transition:
            transform 220ms ease,
            filter 220ms ease,
            opacity 220ms ease;
          filter: drop-shadow(0 0 8px rgba(205,189,143,0.10));
        }

        .gecko-tail-core[data-hover="true"] svg {
          transform: scale(1.04) rotate(-4deg);
          filter: drop-shadow(0 0 10px rgba(205,189,143,0.16));
        }

        .gecko-tail-core[data-click="true"] svg {
          transform: scale(0.96) rotate(-18deg);
        }

        .gecko-tail-trail[data-hover="true"] {
          width: 38px;
          height: 20px;
          margin-left: -19px;
          margin-top: -10px;
          filter: blur(9px);
        }

        .gecko-tail-trail[data-click="true"] {
          transform: scaleX(0.82) rotate(-10deg);
        }

        .gecko-tail-glow[data-hover="true"] {
          width: 46px;
          height: 46px;
          margin-left: -23px;
          margin-top: -23px;
          filter: blur(12px);
        }

        .gecko-tail-glow[data-click="true"] {
          transform: scale(0.88);
        }

        @media (prefers-reduced-motion: reduce) {
          .gecko-tail-glow,
          .gecko-tail-trail,
          .gecko-tail-core {
            transition: opacity 180ms ease;
          }

          .gecko-tail-core svg {
            transition: opacity 180ms ease;
          }
        }
      `}</style>

      <div
        ref={glowRef}
        className="gecko-tail-glow"
        aria-hidden="true"
        data-hover="false"
        data-click="false"
      />
      <div
        ref={tailRef}
        className="gecko-tail-trail"
        aria-hidden="true"
        data-hover="false"
        data-click="false"
      />

      <div
        ref={cursorRef}
        className="gecko-tail-core"
        aria-hidden="true"
        data-hover="false"
        data-click="false"
      >
        <svg viewBox="0 0 52 36" fill="none">
          <path
            d="M6 19
               C 12 10, 22 8, 31 11
               C 39 14, 45 16, 48 11
               C 46 18, 43 23, 36 26
               C 27 30, 16 28, 6 19Z"
            fill="url(#tailFill)"
            opacity="0.96"
          />
          <path
            d="M6 19
               C 12 10, 22 8, 31 11
               C 39 14, 45 16, 48 11"
            stroke="url(#tailStroke)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M22 15 C 27 15, 31 17, 35 20"
            stroke="rgba(18,22,17,0.38)"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="tailFill" x1="8" y1="10" x2="44" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(234,223,201,0.98)" />
              <stop offset="38%" stopColor="rgba(205,189,143,0.94)" />
              <stop offset="100%" stopColor="rgba(116,141,102,0.92)" />
            </linearGradient>
            <linearGradient id="tailStroke" x1="8" y1="10" x2="48" y2="11" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(234,223,201,0.82)" />
              <stop offset="100%" stopColor="rgba(139,164,119,0.52)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}