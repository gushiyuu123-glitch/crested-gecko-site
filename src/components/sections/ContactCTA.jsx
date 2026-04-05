import { useEffect, useRef, useState } from "react";

export default function ContactCTA() {
  const rootRef = useRef(null);
  const visualRef = useRef(null);

  const [pointer, setPointer] = useState({
    x: 0.5,
    y: 0.5,
    active: false,
  });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.revealed = "true";
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    const handleMove = (e) => {
      const rect = visual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setPointer({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
        active: true,
      });
    };

    const handleLeave = () => {
      setPointer({
        x: 0.5,
        y: 0.5,
        active: false,
      });
    };

    visual.addEventListener("mousemove", handleMove);
    visual.addEventListener("mouseleave", handleLeave);

    return () => {
      visual.removeEventListener("mousemove", handleMove);
      visual.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const revealStyle = ({
    delay = 0,
    y = 8,
    scale = 0.992,
    duration = 720,
    opacity = 0,
  } = {}) => ({
    opacity,
    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  });

  const pointerX = pointer.active ? (pointer.x - 0.5) * 16 : 0;
  const pointerY = pointer.active ? (pointer.y - 0.5) * 10 : 0;

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative overflow-hidden px-6 pt-30 pb-30 md:px-10 md:pt-36 md:pb-36 xl:px-14 xl:pt-40 xl:pb-40"
    >
      <style>{`
        #contact [data-reveal][data-revealed="true"] {
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) scale(1) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          #contact [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          #contact .gecko-float,
          #contact .gecko-glow,
          #contact .gecko-shadow,
          #contact .mist-float,
          #contact .branch-drift {
            animation: none !important;
            transform: none !important;
          }
        }

        @keyframes geckoFloat {
          0% {
            transform: translate3d(0px, 0px, 0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translate3d(3px, -4px, 0px) rotate(0.35deg) scale(1.005);
          }
          50% {
            transform: translate3d(1px, -7px, 0px) rotate(0deg) scale(1.008);
          }
          75% {
            transform: translate3d(-3px, -3px, 0px) rotate(-0.3deg) scale(1.004);
          }
          100% {
            transform: translate3d(0px, 0px, 0px) rotate(0deg) scale(1);
          }
        }

        @keyframes geckoGlow {
          0% {
            opacity: 0.08;
            transform: scale(0.985);
          }
          50% {
            opacity: 0.14;
            transform: scale(1.02);
          }
          100% {
            opacity: 0.08;
            transform: scale(0.985);
          }
        }

        @keyframes geckoShadow {
          0% {
            opacity: 0.18;
            transform: translateX(0px) scaleX(1) scaleY(1);
          }
          50% {
            opacity: 0.12;
            transform: translateX(4px) scaleX(1.04) scaleY(0.96);
          }
          100% {
            opacity: 0.18;
            transform: translateX(0px) scaleX(1) scaleY(1);
          }
        }

        @keyframes mistFloat {
          0% {
            transform: translate3d(0px, 0px, 0px) scale(1);
            opacity: 0.28;
          }
          50% {
            transform: translate3d(8px, -6px, 0px) scale(1.03);
            opacity: 0.38;
          }
          100% {
            transform: translate3d(0px, 0px, 0px) scale(1);
            opacity: 0.28;
          }
        }

        @keyframes branchDrift {
          0% {
            transform: translate3d(0px, 0px, 0px) rotate(0deg);
            opacity: 0.22;
          }
          50% {
            transform: translate3d(4px, -2px, 0px) rotate(0.35deg);
            opacity: 0.28;
          }
          100% {
            transform: translate3d(0px, 0px, 0px) rotate(0deg);
            opacity: 0.22;
          }
        }
      `}</style>

      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        {/* base darkness */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040705_0%,#08100b_34%,#07100b_68%,#040604_100%)]" />

        {/* damp atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(122,150,108,0.10)_0%,rgba(122,150,108,0)_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_72%,rgba(167,143,103,0.08)_0%,rgba(167,143,103,0)_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.032)_0%,rgba(255,255,255,0)_52%)]" />

        {/* mist layers */}
        <div className="mist-float absolute left-[-6%] top-[12%] h-[240px] w-[340px] rounded-full bg-[rgba(110,138,96,0.06)] blur-[80px]" style={{ animation: "mistFloat 9s ease-in-out infinite" }} />
        <div className="mist-float absolute right-[-4%] bottom-[8%] h-[260px] w-[360px] rounded-full bg-[rgba(171,151,110,0.05)] blur-[92px]" style={{ animation: "mistFloat 11s ease-in-out infinite" }} />
        <div className="mist-float absolute left-[34%] top-[8%] h-[180px] w-[280px] rounded-full bg-[rgba(255,255,255,0.028)] blur-[72px]" style={{ animation: "mistFloat 12s ease-in-out infinite" }} />

        {/* branch / foliage silhouettes */}
        <div
          className="branch-drift absolute right-[-2%] top-[10%] h-[420px] w-[420px] rounded-full opacity-25 blur-[0.2px]"
          style={{
            animation: "branchDrift 10s ease-in-out infinite",
            background:
              "radial-gradient(circle at 60% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.28) 49%, rgba(0,0,0,0) 56%), linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(42,55,42,0.0) 34%, rgba(42,55,42,0.32) 49%, rgba(0,0,0,0) 64%)",
          }}
        />
        <div
          className="branch-drift absolute left-[-4%] bottom-[2%] h-[360px] w-[460px] opacity-20 blur-[0.2px]"
          style={{
            animation: "branchDrift 12s ease-in-out infinite",
            background:
              "linear-gradient(24deg, rgba(0,0,0,0) 0%, rgba(55,67,54,0.0) 38%, rgba(55,67,54,0.34) 50%, rgba(0,0,0,0) 61%)",
          }}
        />

        {/* soft grain veil */}
        <div className="absolute inset-0 opacity-[0.12] mix-blend-screen [background-image:radial-gradient(rgba(255,255,255,0.18)_0.6px,transparent_0.6px)] [background-size:18px_18px]" />
      </div>

      {/* readability fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[58%] bg-[linear-gradient(90deg,rgba(4,6,4,0.78)_0%,rgba(4,6,4,0.44)_40%,rgba(4,6,4,0.10)_72%,rgba(4,6,4,0)_100%)]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid min-h-[540px] items-center gap-10 xl:grid-cols-[0.98fr_1.02fr] xl:gap-2">
          {/* text */}
          <div
            data-reveal
            style={revealStyle({ delay: 0, y: 10, scale: 0.994, duration: 760 })}
            className="relative z-20 xl:pr-8"
          >
            <p className="text-[10px] tracking-[0.24em] text-[#d9ccb0]/46">
              CONTACT
            </p>

        <h2 className="mt-4 max-w-[8.8em] font-display text-[34px] leading-[1.04] text-text-main md:text-[52px] xl:text-[62px]">
  <span className="whitespace-nowrap">気になった時点で、</span>
  <br />
  ご相談ください。
</h2>

            <p className="mt-6 max-w-[32em] text-[13px] leading-[2] text-text-soft/64 md:text-[14px]">
              個体選びのこと、飼育環境のこと、お迎え前の不安まで。
              <br className="hidden sm:block" />
              まだ決めきっていない段階でも、落ち着いてご相談いただけます。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="
                  group inline-flex min-w-[236px] items-center justify-between gap-4
                  rounded-[16px]
                  border border-[#d5c59b]/12
                  bg-[linear-gradient(180deg,rgba(205,189,143,0.08)_0%,rgba(70,92,64,0.06)_100%)]
                  px-5 py-[15px]
                  text-[12px] tracking-[0.15em] text-[#eadfc9]
                  shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                  transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:translate-y-[-1px]
                  hover:border-[#d5c59b]/18
                  hover:bg-[linear-gradient(180deg,rgba(205,189,143,0.11)_0%,rgba(92,120,82,0.08)_100%)]
                "
              >
                <span className="flex items-center gap-3">
                  <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#b8c88f]/58" />
                  <span>お問い合わせはこちら</span>
                </span>

                <span className="text-[#d3c391]/72 transition duration-500 group-hover:translate-x-[4px] group-hover:text-[#eadcae]">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* visual */}
          <div
            ref={visualRef}
            data-reveal
            style={revealStyle({ delay: 90, y: 12, scale: 0.992, duration: 820 })}
            className="relative min-h-[320px] xl:min-h-[520px]"
          >
            {/* back habitat glow */}
            <div
              className="gecko-glow pointer-events-none absolute right-[28%] top-[24%] z-0 h-[180px] w-[180px] rounded-full bg-[rgba(171,150,103,0.06)] blur-[60px] md:h-[210px] md:w-[210px] xl:h-[240px] xl:w-[240px]"
              style={{
                animation: "geckoGlow 6.4s ease-in-out infinite",
                transform: `translate3d(${pointerX * 0.35}px, ${pointerY * 0.35}px, 0)`,
              }}
            />

            {/* soft foliage haze behind gecko */}
            <div
              className="pointer-events-none absolute right-[12%] top-[18%] z-[1] h-[58%] w-[58%] rounded-[40%] blur-[22px]"
              style={{
                transform: `translate3d(${pointerX * 0.45}px, ${pointerY * 0.45}px, 0)`,
                background:
                  "radial-gradient(circle at 40% 40%, rgba(106,132,88,0.14) 0%, rgba(106,132,88,0.06) 32%, rgba(106,132,88,0) 68%)",
              }}
            />

            {/* shadow */}
            <div
              className="gecko-shadow pointer-events-none absolute bottom-[18%] right-[25%] z-0 h-[54px] w-[230px] rounded-full bg-black/26 blur-[22px] md:h-[60px] md:w-[278px] xl:h-[66px] xl:w-[320px]"
              style={{
                animation: "geckoShadow 6.2s ease-in-out infinite",
              }}
            />

            {/* image */}
            <div
              className="pointer-events-none absolute right-[15%] top-[14%] z-30 flex h-full w-full items-center justify-center md:right-[10%] xl:right-[8%]"
              style={{
                transform: `translate3d(${pointerX}px, ${pointerY}px, 0)`,
                transition: pointer.active
                  ? "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)"
                  : "transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <img
                src="/gecko-contact1.png"
                alt=""
                draggable="false"
                className="
                  gecko-float
                  select-none object-contain
                  h-[54%] w-auto max-w-none
                  translate-x-20 translate-y-[14%]
                  opacity-[0.62] saturate-[0.94]
                  md:h-[58%]
                  xl:h-[62%] xl:opacity-[0.66]
                "
                style={{
                  animation: "geckoFloat 6.2s ease-in-out infinite",
                  filter: "drop-shadow(0 14px 28px rgba(0,0,0,0.2))",
                }}
              />
            </div>

            {/* front mist */}
            <div
              className="mist-float pointer-events-none absolute bottom-[16%] right-[18%] z-40 h-[120px] w-[220px] rounded-full bg-[rgba(255,255,255,0.025)] blur-[44px]"
              style={{
                animation: "mistFloat 9.5s ease-in-out infinite",
                transform: `translate3d(${pointerX * 0.3}px, ${pointerY * 0.3}px, 0)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}