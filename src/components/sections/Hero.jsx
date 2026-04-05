import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

const sideMenu = [
  { label: "GECKOS", href: "#geckos" },
  { label: "POLICY", href: "#about" },
  { label: "FIRST", href: "#first-guide" },
  { label: "FLOW", href: "#flow" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
  { label: "INFO", href: "#business-info" },
];

const titleLines = ["CRESTED", "GECKO"];

export default function Hero() {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const mistRef = useRef(null);
  const rainLayerRef = useRef(null);
  const topLabelRef = useRef(null);
  const copyRef = useRef(null);
  const ctaRef = useRef(null);
  const menuRef = useRef(null);

  const forestParticles = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2.8 + 1.5}px`,
      duration: `${Math.random() * 8 + 11}s`,
      delay: `${Math.random() * 6}s`,
      opacity: Math.random() * 0.12 + 0.05,
      blur: `${Math.random() * 1.6 + 0.8}px`,
    }));
  }, []);

const rainParticles = useMemo(() => {
  return Array.from({ length: 52 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    height: `${Math.random() * 76 + 30}px`,
    duration: `${Math.random() * 1.45 + 1.75}s`,
    delay: `${Math.random() * 2.2}s`,
    opacity: Math.random() * 0.12 + 0.05,
    blur: "0.2px",
  }));
}, []);

  const mistOrbs = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 170 + 120}px`,
      duration: `${Math.random() * 10 + 14}s`,
      delay: `${Math.random() * 6}s`,
      opacity: Math.random() * 0.055 + 0.02,
    }));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray(".hero-char");
      const specialtyItems = gsap.utils.toArray(".hero-specialty-item");
      const ctaItems = gsap.utils.toArray(".hero-cta");
      const menuItems = gsap.utils.toArray(".hero-menu-item");
      const dividers = gsap.utils.toArray(".hero-divider");

      gsap.set(bgRef.current, { scale: 1.045, opacity: 0.7 });
      gsap.set(mistRef.current, { opacity: 0 });
      gsap.set(rainLayerRef.current, { opacity: 0.88 });
      gsap.set(topLabelRef.current, { y: 10, opacity: 0 });
      gsap.set(chars, { y: 18, opacity: 0, filter: "blur(1.6px)" });
      gsap.set(copyRef.current, { y: 12, opacity: 0, filter: "blur(1px)" });
      gsap.set(specialtyItems, { y: 12, opacity: 0 });
      gsap.set(ctaItems, { y: 14, opacity: 0 });
      gsap.set(dividers, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });
      gsap.set(menuRef.current, { opacity: 0 });
      gsap.set(menuItems, { opacity: 0, x: 4 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(bgRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.45,
      })
        .to(
          mistRef.current,
          {
            opacity: 1,
            duration: 0.95,
          },
          "-=1.14"
        )
        .to(
          topLabelRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.76,
          },
          "-=0.9"
        )
        .to(
          chars,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.72,
            stagger: 0.028,
          },
          "-=0.64"
        )
        .to(
          dividers,
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.4"
        )
        .to(
          copyRef.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
          },
          "-=0.48"
        )
        .to(
          specialtyItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.72,
            stagger: 0.05,
          },
          "-=0.4"
        )
        .to(
          ctaItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.78,
            stagger: 0.06,
          },
          "-=0.42"
        )
        .to(
          menuRef.current,
          {
            opacity: 1,
            duration: 0.68,
          },
          "-=0.72"
        )
        .to(
          menuItems,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.04,
          },
          "-=0.46"
        );

      gsap.to(mistRef.current, {
        yPercent: -2,
        xPercent: 1,
        scale: 1.02,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-title-breath", {
        y: -1,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.16,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-screen overflow-hidden bg-black text-text-main"
    >
      <style>{`
        @keyframes forestFloat {
          0% {
            transform: translate3d(0, 8px, 0) scale(0.96);
            opacity: 0;
          }
          12% {
            opacity: var(--particle-opacity);
          }
          50% {
            transform: translate3d(8px, -16px, 0) scale(1.05);
            opacity: calc(var(--particle-opacity) * 0.88);
          }
          100% {
            transform: translate3d(-5px, -34px, 0) scale(0.98);
            opacity: 0;
          }
        }

        @keyframes rainFall {
          0% {
            transform: translate3d(0, -18vh, 0);
            opacity: 0;
          }
          14% {
            opacity: var(--rain-opacity);
          }
          100% {
            transform: translate3d(-8px, 110vh, 0);
            opacity: 0;
          }
        }

        @keyframes mistOrbFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0;
          }
          12% {
            opacity: var(--mist-opacity);
          }
          50% {
            transform: translate3d(14px, -12px, 0) scale(1.04);
            opacity: calc(var(--mist-opacity) * 0.9);
          }
          100% {
            transform: translate3d(-10px, -24px, 0) scale(0.99);
            opacity: 0;
          }
        }
      `}</style>

      {/* bg image */}
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/hero-gecko.png"
          alt="Crested gecko"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* dark / humidity / readability layers */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,10,0.08)_0%,rgba(9,13,11,0.17)_28%,rgba(7,10,8,0.46)_66%,rgba(4,6,5,0.82)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[54%] bg-[linear-gradient(90deg,rgba(10,15,12,0.7)_0%,rgba(13,20,16,0.44)_44%,rgba(13,20,16,0.15)_72%,rgba(13,20,16,0)_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[20%] bg-[linear-gradient(270deg,rgba(5,8,6,0.52)_0%,rgba(5,8,6,0.12)_60%,rgba(5,8,6,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(155,129,96,0.11)_0%,rgba(155,129,96,0.04)_18%,transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(98,120,95,0.13)_0%,rgba(98,120,95,0.04)_20%,transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.01)_22%,rgba(255,255,255,0)_46%)]" />

      <div
        ref={mistRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 74% 20%, rgba(118,132,104,0.12), transparent 22%),
            radial-gradient(circle at 16% 18%, rgba(149,122,89,0.12), transparent 20%),
            radial-gradient(circle at 62% 70%, rgba(88,108,89,0.08), transparent 22%)
          `,
        }}
      />

      <div className="pointer-events-none absolute left-[-8%] top-[12%] h-[300px] w-[300px] rounded-full bg-[rgba(188,160,118,0.08)] blur-[84px]" />
      <div className="pointer-events-none absolute right-[8%] top-[10%] h-[220px] w-[220px] rounded-full bg-[rgba(118,142,114,0.055)] blur-[74px]" />

      {/* tiny humidity particles */}
      <div className="pointer-events-none absolute inset-0 z-[8] overflow-hidden">
        {forestParticles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[rgba(182,198,160,0.9)]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              filter: `blur(${p.blur})`,
              opacity: 0,
              animation: `forestFloat ${p.duration} linear infinite`,
              animationDelay: p.delay,
              ["--particle-opacity"]: p.opacity,
            }}
          />
        ))}
      </div>

      {/* rain */}
      <div
        ref={rainLayerRef}
        className="pointer-events-none absolute inset-0 z-[9] overflow-hidden"
      >
        {rainParticles.map((p) => (
          <span
            key={p.id}
            className="absolute top-0 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(194,208,199,0.58),rgba(170,186,175,0.38),rgba(255,255,255,0))]"
            style={{
              left: p.left,
              height: p.height,
              filter: `blur(${p.blur})`,
              opacity: 0,
              animation: `rainFall ${p.duration} linear infinite`,
              animationDelay: p.delay,
              ["--rain-opacity"]: p.opacity,
            }}
          />
        ))}
      </div>

      {/* mist */}
      <div className="pointer-events-none absolute inset-0 z-[10] overflow-hidden">
        {mistOrbs.map((orb) => (
          <span
            key={orb.id}
            className="absolute rounded-full bg-[rgba(148,164,138,0.9)]"
            style={{
              left: orb.left,
              top: orb.top,
              width: orb.size,
              height: orb.size,
              filter: "blur(68px)",
              opacity: 0,
              animation: `mistOrbFloat ${orb.duration} ease-in-out infinite`,
              animationDelay: orb.delay,
              ["--mist-opacity"]: orb.opacity,
            }}
          />
        ))}
      </div>

      {/* top label */}
      <div
        ref={topLabelRef}
        className="absolute left-6 top-6 z-20 md:left-10 md:top-8 xl:left-14 xl:top-10"
      >
        <p className="text-[10px] uppercase tracking-[0.32em] text-text-soft/82 md:text-[11px]">
          Carefully Raised in Okinawa
        </p>
      </div>

      {/* side menu */}
      <nav
        ref={menuRef}
        className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 md:flex md:flex-col md:items-center md:gap-[18px] xl:right-6"
      >
        <div className="pointer-events-none absolute inset-y-[-18px] left-1/2 w-[44px] -translate-x-1/2 rounded-[22px] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(255,255,255,0.014)_0%,rgba(255,255,255,0.006)_100%)] backdrop-blur-[4px]" />

        <span className="relative z-10 mb-2 text-[9px] tracking-[0.38em] text-text-soft/34 [writing-mode:vertical-rl]">
          MENU
        </span>

        <div className="relative z-10 h-16 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.10),rgba(255,255,255,0))]" />

        {sideMenu.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="
              hero-menu-item group relative z-10 pointer-events-auto
              px-[6px] py-[2px]
              text-[10px] tracking-[0.3em] text-text-soft/50
              transition duration-500 ease-organic
              hover:text-[#ebe2cf]
              [writing-mode:vertical-rl]
            "
          >
            <span className="absolute -left-[7px] top-1/2 h-6 w-px -translate-y-1/2 bg-white/0 transition duration-500 group-hover:bg-[#d6c2a1]/28" />
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(205,189,143,0.06),transparent_72%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <span className="relative z-10">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* main copy */}
      <div className="relative z-20 flex min-h-screen items-end">
        <div className="w-full px-6 pb-8 pt-28 md:px-10 md:pb-10 xl:px-14 xl:pb-14">
          <div className="relative max-w-[920px]">
            <p className="mb-3 text-[10px] tracking-[0.24em] text-text-soft/76 md:mb-4 md:text-[11px]">
              クレステッドゲッコー専門
            </p>

            <h1 className="font-display text-[48px] leading-[0.84] text-[#ece1cf] drop-shadow-[0_14px_34px_rgba(0,0,0,0.44)] md:text-[92px] xl:text-[132px]">
              {titleLines.map((line, lineIndex) => (
                <span
                  key={line}
                  className={`hero-title-breath block ${
                    lineIndex === 1 ? "-mt-2" : ""
                  } tracking-[0.1em]`}
                >
                  {line.split("").map((char, index) => {
                    const isAccentK = line === "GECKO" && char === "K";
                    const isAccentC = line === "CRESTED" && char === "C";
                    const isAccentO = line === "GECKO" && char === "O";

                    return (
                      <span
                        key={`${line}-${char}-${index}`}
                        className={[
                          "hero-char inline-block",
                          isAccentK
                            ? "translate-y-[4px] rotate-[1.5deg] text-[#d2b48a]"
                            : "",
                          isAccentC
                            ? "rotate-[-1.2deg] text-[#d9c19c]"
                            : "",
                          isAccentO
                            ? "translate-y-[2px] scale-y-[0.96] text-[#d8c8aa]"
                            : "",
                        ].join(" ")}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>

            <div className="hero-divider mt-4 h-px w-24 bg-[linear-gradient(90deg,rgba(214,194,161,0.7),rgba(214,194,161,0))] md:mt-5" />

            <p
              ref={copyRef}
              className="mt-5 max-w-[460px] text-[13px] leading-[1.9] text-text-soft/88 md:text-[14px]"
            >
              静かに異様で、目を奪う。
              <br />
              沖縄で丁寧に育てたクレスを、
              <br className="hidden md:block" />
              状態と相性を見ながらご案内しています。
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] tracking-[0.16em] text-text-soft/74 md:text-[11px]">
              <span className="hero-specialty-item">沖縄育成</span>
              <span className="hero-specialty-item">状態重視</span>
              <span className="hero-specialty-item">初めての方も相談可</span>
            </div>

            <div
              ref={ctaRef}
              className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9"
            >
              <a
                href="#geckos"
                className="
                  hero-cta group relative inline-flex min-w-[232px] items-center gap-4
                  overflow-hidden rounded-[12px]
                  border border-[#cdbd8f]/14
                  bg-[linear-gradient(180deg,rgba(205,189,143,0.038)_0%,rgba(64,82,58,0.04)_100%)]
                  px-5 py-[13px]
                  text-[12px] tracking-[0.15em] text-[#e2d6bc]
                  backdrop-blur-[2.5px]
                  transition duration-500 ease-organic
                  hover:border-[#d8c99a]/24
                  hover:bg-[linear-gradient(180deg,rgba(205,189,143,0.055)_0%,rgba(86,112,78,0.05)_100%)]
                  hover:text-[#f0e4c8]
                "
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(205,189,143,0.04)_36%,rgba(147,170,126,0.03)_58%,rgba(255,255,255,0)_100%)] opacity-0 transition duration-700 group-hover:translate-x-2 group-hover:opacity-100" />

                <span className="pointer-events-none absolute left-0 top-[22%] h-[56%] w-[1px] bg-[linear-gradient(180deg,rgba(205,189,143,0)_0%,rgba(205,189,143,0.56)_28%,rgba(139,164,119,0.40)_72%,rgba(205,189,143,0)_100%)]" />

                <span className="pointer-events-none absolute inset-x-4 bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.16),rgba(139,164,119,0.12),rgba(205,189,143,0))]" />

                <span className="relative z-10 flex items-center gap-3">
                  <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#b8c88f]/54" />
                  <span>販売個体を見る</span>
                </span>

                <span className="relative z-10 text-[#d3c391]/56 transition duration-500 group-hover:translate-x-[4px] group-hover:text-[#e6d7ab]/78">
                  →
                </span>
              </a>

              <a
                href="#first-guide"
                className="
                  hero-cta group relative inline-flex min-w-[220px] items-center gap-3
                  overflow-hidden rounded-[10px]
                  px-4 py-[12px]
                  text-[12px] tracking-[0.145em] text-[#c4ccbb]
                  transition duration-500 ease-organic
                  hover:text-[#e0e7d7]
                "
              >
                <span className="pointer-events-none absolute left-0 top-[24%] h-[52%] w-[1px] bg-[linear-gradient(180deg,rgba(139,164,119,0),rgba(139,164,119,0.34),rgba(205,189,143,0.12),rgba(139,164,119,0))] opacity-70 transition duration-500 group-hover:opacity-100" />

                <span className="pointer-events-none absolute inset-x-3 bottom-0 h-[1px] bg-[linear-gradient(90deg,rgba(139,164,119,0),rgba(139,164,119,0.18),rgba(205,189,143,0.08),rgba(139,164,119,0))] opacity-70 transition duration-500 group-hover:opacity-100" />

                <span className="relative z-10 flex items-center gap-3">
                  <span className="inline-block h-[4px] w-[4px] rounded-full bg-[#8fa27e]/48" />
                  <span>はじめての方へ</span>
                </span>

                <span className="relative z-10 text-[#9eb08d]/46 transition duration-500 group-hover:translate-x-[3px] group-hover:text-[#c9d8b6]/68">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(3,5,4,0)_0%,rgba(3,5,4,0.82)_100%)]" />
    </section>
  );
}