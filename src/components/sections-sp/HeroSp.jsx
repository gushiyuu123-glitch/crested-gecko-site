import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

const titleLinesSp = ["CRESTED", "GECKO"];

export default function HeroSp() {
  const rootRefSp = useRef(null);
  const bgRefSp = useRef(null);
  const mistRefSp = useRef(null);
  const rainLayerRefSp = useRef(null);
  const topLabelRefSp = useRef(null);
  const copyRefSp = useRef(null);
  const ctaRefSp = useRef(null);

  const forestParticlesSp = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1.2}px`,
      duration: `${Math.random() * 7 + 10}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.08 + 0.04,
      blur: `${Math.random() * 1.1 + 0.6}px`,
    }));
  }, []);

  const rainParticlesSp = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      height: `${Math.random() * 48 + 24}px`,
      duration: `${Math.random() * 1.05 + 1.7}s`,
      delay: `${Math.random() * 2}s`,
      opacity: Math.random() * 0.08 + 0.04,
      blur: "0.15px",
    }));
  }, []);

  const mistOrbsSp = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 110 + 100}px`,
      duration: `${Math.random() * 8 + 12}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.04 + 0.018,
    }));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const charsSp = gsap.utils.toArray(".hero-char-sp");
      const specialtyItemsSp = gsap.utils.toArray(".hero-specialty-item-sp");
      const ctaItemsSp = gsap.utils.toArray(".hero-cta-sp");
      const dividersSp = gsap.utils.toArray(".hero-divider-sp");

      gsap.set(bgRefSp.current, { scale: 1.04, opacity: 0.72 });
      gsap.set(mistRefSp.current, { opacity: 0 });
      gsap.set(rainLayerRefSp.current, { opacity: 0.82 });
      gsap.set(topLabelRefSp.current, { y: 8, opacity: 0 });
      gsap.set(charsSp, { y: 16, opacity: 0, filter: "blur(1.2px)" });
      gsap.set(copyRefSp.current, { y: 10, opacity: 0, filter: "blur(0.8px)" });
      gsap.set(specialtyItemsSp, { y: 10, opacity: 0 });
      gsap.set(ctaItemsSp, { y: 12, opacity: 0 });
      gsap.set(dividersSp, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });

      const tlSp = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tlSp
        .to(bgRefSp.current, {
          scale: 1,
          opacity: 1,
          duration: 1.12,
        })
        .to(
          mistRefSp.current,
          {
            opacity: 1,
            duration: 0.82,
          },
          "-=0.9"
        )
        .to(
          topLabelRefSp.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.62,
          },
          "-=0.72"
        )
        .to(
          charsSp,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.62,
            stagger: 0.022,
          },
          "-=0.48"
        )
        .to(
          dividersSp,
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.64,
          },
          "-=0.24"
        )
        .to(
          copyRefSp.current,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.66,
          },
          "-=0.28"
        )
        .to(
          specialtyItemsSp,
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            stagger: 0.04,
          },
          "-=0.24"
        )
        .to(
          ctaItemsSp,
          {
            y: 0,
            opacity: 1,
            duration: 0.62,
            stagger: 0.05,
          },
          "-=0.2"
        );

      gsap.to(mistRefSp.current, {
        yPercent: -2,
        xPercent: 1,
        scale: 1.02,
        duration: 8.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-title-breath-sp", {
        y: -1,
        duration: 5.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.14,
      });
    }, rootRefSp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRefSp}
      className="relative min-h-[100svh] overflow-hidden bg-black text-text-main"
    >
      <style>{`
        @keyframes forestFloatSp {
          0% {
            transform: translate3d(0, 6px, 0) scale(0.96);
            opacity: 0;
          }
          12% {
            opacity: var(--particle-opacity-sp);
          }
          50% {
            transform: translate3d(6px, -12px, 0) scale(1.04);
            opacity: calc(var(--particle-opacity-sp) * 0.88);
          }
          100% {
            transform: translate3d(-4px, -24px, 0) scale(0.98);
            opacity: 0;
          }
        }

        @keyframes rainFallSp {
          0% {
            transform: translate3d(0, -18vh, 0);
            opacity: 0;
          }
          16% {
            opacity: var(--rain-opacity-sp);
          }
          100% {
            transform: translate3d(-6px, 110vh, 0);
            opacity: 0;
          }
        }

        @keyframes mistOrbFloatSp {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0;
          }
          14% {
            opacity: var(--mist-opacity-sp);
          }
          50% {
            transform: translate3d(10px, -10px, 0) scale(1.03);
            opacity: calc(var(--mist-opacity-sp) * 0.9);
          }
          100% {
            transform: translate3d(-8px, -18px, 0) scale(0.99);
            opacity: 0;
          }
        }
      `}</style>

      {/* bg image */}
      <div ref={bgRefSp} className="absolute inset-0">
        <img
          src="/hero-gecko1.png"
          alt="Crested gecko"
          className="h-full w-full object-cover object-[60%_center]"
        />
      </div>

      {/* dark / humidity / readability layers */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,10,0.14)_0%,rgba(9,13,11,0.24)_24%,rgba(7,10,8,0.54)_58%,rgba(4,6,5,0.88)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(10,15,12,0.84)_0%,rgba(13,20,16,0.56)_40%,rgba(13,20,16,0.22)_70%,rgba(13,20,16,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(155,129,96,0.10)_0%,rgba(155,129,96,0.03)_20%,transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(98,120,95,0.10)_0%,rgba(98,120,95,0.03)_22%,transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.008)_20%,rgba(255,255,255,0)_42%)]" />

      <div
        ref={mistRefSp}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 72% 18%, rgba(118,132,104,0.10), transparent 24%),
            radial-gradient(circle at 14% 18%, rgba(149,122,89,0.10), transparent 22%),
            radial-gradient(circle at 60% 72%, rgba(88,108,89,0.07), transparent 22%)
          `,
        }}
      />

      <div className="pointer-events-none absolute left-[-14%] top-[10%] h-[180px] w-[180px] rounded-full bg-[rgba(188,160,118,0.06)] blur-[58px]" />
      <div className="pointer-events-none absolute right-[-2%] top-[8%] h-[150px] w-[150px] rounded-full bg-[rgba(118,142,114,0.05)] blur-[52px]" />

      {/* tiny humidity particles */}
      <div className="pointer-events-none absolute inset-0 z-[8] overflow-hidden">
        {forestParticlesSp.map((p) => (
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
              animation: `forestFloatSp ${p.duration} linear infinite`,
              animationDelay: p.delay,
              ["--particle-opacity-sp"]: p.opacity,
            }}
          />
        ))}
      </div>

      {/* rain */}
      <div
        ref={rainLayerRefSp}
        className="pointer-events-none absolute inset-0 z-[9] overflow-hidden"
      >
        {rainParticlesSp.map((p) => (
          <span
            key={p.id}
            className="absolute top-0 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(194,208,199,0.42),rgba(170,186,175,0.28),rgba(255,255,255,0))]"
            style={{
              left: p.left,
              height: p.height,
              filter: `blur(${p.blur})`,
              opacity: 0,
              animation: `rainFallSp ${p.duration} linear infinite`,
              animationDelay: p.delay,
              ["--rain-opacity-sp"]: p.opacity,
            }}
          />
        ))}
      </div>

      {/* mist */}
      <div className="pointer-events-none absolute inset-0 z-[10] overflow-hidden">
        {mistOrbsSp.map((orb) => (
          <span
            key={orb.id}
            className="absolute rounded-full bg-[rgba(148,164,138,0.9)]"
            style={{
              left: orb.left,
              top: orb.top,
              width: orb.size,
              height: orb.size,
              filter: "blur(52px)",
              opacity: 0,
              animation: `mistOrbFloatSp ${orb.duration} ease-in-out infinite`,
              animationDelay: orb.delay,
              ["--mist-opacity-sp"]: orb.opacity,
            }}
          />
        ))}
      </div>

      {/* top label */}
      <div
        ref={topLabelRefSp}
        className="absolute left-5 top-6 z-20"
      >
        <p className="text-[8px] uppercase tracking-[0.24em] text-text-soft/74">
          Carefully Raised in Okinawa
        </p>
      </div>

      {/* main copy */}
      <div className="relative z-20 flex min-h-[100svh] items-start">
        <div className="w-full px-5 pt-[168px] pb-60">
         <div className="relative max-w-[320px] -translate-y-5">
  <p className="mb-3 text-[9px] tracking-[0.18em] text-text-soft/76">
    クレステッドゲッコー専門
  </p>

  <h1 className="font-display text-[36px] leading-[0.94] text-[#ece1cf] drop-shadow-[0_12px_28px_rgba(0,0,0,0.42)]">
    {titleLinesSp.map((line, lineIndex) => (
      <span
        key={line}
        className={`hero-title-breath-sp block ${
          lineIndex === 1 ? "-mt-[1px]" : ""
        } tracking-[0.045em]`}
      >
        {line.split("").map((char, index) => {
          const isAccentKSp = line === "GECKO" && char === "K";
          const isAccentCSp = line === "CRESTED" && char === "C";
          const isAccentOSp = line === "GECKO" && char === "O";

          return (
            <span
              key={`${line}-${char}-${index}`}
              className={[
                "hero-char-sp inline-block",
                isAccentKSp
                  ? "translate-y-[1px] rotate-[0.6deg] text-[#d2b48a]"
                  : "",
                isAccentCSp
                  ? "rotate-[-0.6deg] text-[#d9c19c]"
                  : "",
                isAccentOSp
                  ? "translate-y-[0.5px] scale-y-[0.985] text-[#d8c8aa]"
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

  <div className="hero-divider-sp mt-5 h-px w-16 bg-[linear-gradient(90deg,rgba(214,194,161,0.64),rgba(214,194,161,0))]" />

            <p
              ref={copyRefSp}
              className="mt-80  max-w-[20.5em] text-[12px] leading-[1.78] text-text-soft/88" 
            >
              静かに異様で、目を奪う。
              <br />
              沖縄で丁寧に育てたクレスを、
              <br />
              状態と相性を見ながらご案内しています。
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-[9px] tracking-[0.12em] text-text-soft/74">
              <span className="hero-specialty-item-sp rounded-full border border-white/10 bg-white/[0.03] px-3 py-[7px]">
                沖縄育成
              </span>
              <span className="hero-specialty-item-sp rounded-full border border-white/10 bg-white/[0.03] px-3 py-[7px]">
                状態重視
              </span>
              <span className="hero-specialty-item-sp rounded-full border border-white/10 bg-white/[0.03] px-3 py-[7px]">
                初めての方も相談可
              </span>
            </div>

            <div
              ref={ctaRefSp}
              className="mt-5 flex flex-col gap-2.5"
            >
              <a
                href="#geckos"
                className="
                  hero-cta-sp group relative inline-flex min-h-[52px] items-center justify-between
                  overflow-hidden rounded-[12px]
                  border border-[#cdbd8f]/16
                  bg-[linear-gradient(180deg,rgba(205,189,143,0.045)_0%,rgba(64,82,58,0.04)_100%)]
                  px-4
                  text-[11px] tracking-[0.12em] text-[#e2d6bc]
                "
              >
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(205,189,143,0.03)_38%,rgba(147,170,126,0.02)_58%,rgba(255,255,255,0)_100%)] opacity-0 transition duration-500 group-active:opacity-100" />

                <span className="relative z-10 flex items-center gap-3">
                  <span className="inline-block h-[5px] w-[5px] rounded-full bg-[#b8c88f]/54" />
                  <span>販売個体を見る</span>
                </span>

                <span className="relative z-10 text-[#d3c391]/60">→</span>
              </a>

              <a
                href="#first-guide"
                className="
                  hero-cta-sp group relative inline-flex min-h-[48px] items-center justify-between
                  overflow-hidden rounded-[12px]
                  border border-white/8
                  bg-white/[0.025]
                  px-4
                  text-[11px] tracking-[0.12em] text-[#d5ddcf]
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="inline-block h-[4px] w-[4px] rounded-full bg-[#8fa27e]/52" />
                  <span>はじめての方へ</span>
                </span>

                <span className="relative z-10 text-[#9eb08d]/52">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(3,5,4,0)_0%,rgba(3,5,4,0.84)_100%)]" />
    </section>
  );
}