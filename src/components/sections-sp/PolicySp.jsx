import { useEffect, useRef } from "react";

export default function Policy() {
  const rootRef = useRef(null);

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
        threshold: 0.16,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const revealStyle = ({
    delay = 0,
    y = 7,
    scale = 0.993,
    duration = 760,
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

  const revealHeading = (delay = 0) =>
    revealStyle({
      delay,
      y: 5,
      scale: 0.995,
      duration: 780,
    });

  const revealSoft = (delay = 0) =>
    revealStyle({
      delay,
      y: 7,
      scale: 0.993,
      duration: 760,
    });

  const revealMedia = (delay = 0) =>
    revealStyle({
      delay,
      y: 9,
      scale: 0.989,
      duration: 820,
    });

  return (
    <section
      id="about"
      ref={rootRef}
      className="relative overflow-hidden px-6 pt-32 pb-32 md:px-10 md:pt-40 md:pb-40 xl:px-14 xl:pt-48 xl:pb-48"
    >
      <style>{`
        #about [data-reveal][data-revealed="true"] {
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) scale(1) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          #about [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040705_0%,#090e0a_46%,#050806_100%)]" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.34] mix-blend-screen"
          style={{ backgroundImage: "url('/policy-gauge-bg.png')" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,5,0.58)_0%,rgba(8,12,9,0.50)_42%,rgba(5,8,6,0.72)_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(119,145,105,0.14),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(173,149,109,0.12),transparent_26%)]" />

        <div className="absolute left-[-7%] top-[10%] h-[240px] w-[240px] rounded-full bg-[rgba(119,145,105,0.08)] blur-[92px]" />
        <div className="absolute right-[-5%] bottom-[6%] h-[260px] w-[260px] rounded-full bg-[rgba(173,149,109,0.07)] blur-[96px]" />

        <div className="absolute inset-x-[8%] top-[11%] h-px bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.16),rgba(139,164,119,0.14),rgba(205,189,143,0))]" />
        <div className="absolute inset-x-[12%] bottom-[10%] h-px bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.11),rgba(139,164,119,0.10),rgba(205,189,143,0))]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,4,3,0.24)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1360px]">
        {/* section heading */}
        <div
          data-reveal
          style={revealHeading(0)}
          className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[0.9fr_1.1fr] md:items-end"
        >
          <div>
            <p className="text-[11px] tracking-[0.24em] text-text-soft/68">
              POLICY
            </p>

            <h2 className="mt-3 max-w-[760px] font-display text-[34px] leading-[1.08] text-text-main md:text-[58px] md:leading-[1.04]">
              美しさは、模様だけで決まらない。
            </h2>
          </div>

          <div className="max-w-[560px] md:ml-auto">
     <p className="text-[13px] leading-[1.92] text-text-soft/80 md:text-[14px]">
  強い模様や派手さだけで目を引く個体ではなく、  <br />
  見たあとにもしっかりと印象が残ること。
  <br />
  その余韻まで含めて、美しさと全体のまとまりを見ています。
</p>
          </div>
        </div>

        {/* main */}
        <div className="mt-16 grid items-start gap-10 xl:grid-cols-[0.64fr_0.92fr] xl:gap-14">
          {/* left note */}
          <aside
            data-reveal
            style={revealSoft(70)}
            className="relative self-start pl-7 pr-4 xl:pr-8"
          >
            <span className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(205,189,143,0)_0%,rgba(205,189,143,0.88)_12%,rgba(139,164,119,0.34)_56%,rgba(205,189,143,0)_100%)]" />
            <span className="pointer-events-none absolute left-[-3px] top-[6px] h-[7px] w-[7px] rounded-full bg-[#cdbd8f]/65 blur-[0.3px]" />

            <div className="max-w-[420px]">
              <p className="text-[10px] tracking-[0.24em] text-[#d9ccb0]/58">
                SELECTION VIEW
              </p>

            <p className="mt-4 font-display text-[28px] leading-[1.12] text-text-main md:text-[36px]">
  見た瞬間より、
  <br />
  残った印象を信じる。
</p>

              <div className="mt-6 space-y-5">
            <p className="text-[13px] leading-[1.95] text-text-soft/74">
  個体を見るとき、最初に入ってくるのは
  模様や色の強さです。
  ただ、それだけで選んでしまうと、
  あとから全体のバランスに
  違和感が残ることがあります。
</p>
            <p className="text-[13px] leading-[1.95] text-text-soft/74">
  だからこそ、視線の強さ、輪郭の流れ、
  立ち姿の安定感まで含めて、
  “全体としてどう残るか” を
  大切にしています。
</p>

    <p className="text-[13px] leading-[1.95] text-text-soft/74">
  一目で派手に見えることよりも、
  見返したくなること。
  少し時間が経っても印象が残ること。
  その感覚を基準に、
  掲載する順番やご案内の空気も整えています。
</p>
              </div>
            </div>
          </aside>

          {/* right video */}
          <div className="grid gap-8">
            <div
              data-reveal
              style={revealMedia(120)}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.03)]"
            >
              <span className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px bg-[linear-gradient(180deg,rgba(205,189,143,0)_0%,rgba(205,189,143,0.74)_50%,rgba(139,164,119,0)_100%)]" />
              <span className="pointer-events-none absolute left-6 right-6 top-0 z-[2] h-px bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.28),rgba(139,164,119,0.16),rgba(205,189,143,0))]" />

              <div className="relative aspect-[16/8.8] overflow-hidden md:aspect-[16/8.2]">
                <video
                  className="h-full w-full object-cover object-top"
                  src="/policy-gecko.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,4,0.12)_0%,rgba(3,5,4,0.16)_38%,rgba(3,5,4,0.72)_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_56%_34%,rgba(205,189,143,0.12),transparent_34%)] opacity-[0.18]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[24%] bg-[linear-gradient(90deg,rgba(3,5,4,0)_0%,rgba(3,5,4,0.24)_100%)]" />
                <div className="pointer-events-none absolute bottom-0 right-0 z-[3] h-[72px] w-[168px] bg-[linear-gradient(135deg,rgba(3,5,4,0)_0%,rgba(3,5,4,0.92)_42%,rgba(3,5,4,0.98)_100%)]" />

                <div className="absolute left-5 top-5 z-[4] md:left-7 md:top-6">
                  <p className="text-[10px] tracking-[0.22em] text-[#eadfc9]/74">
                    OBSERVATION FILM
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 z-[4] max-w-[340px] md:bottom-7 md:left-7">
                  <p className="text-[10px] tracking-[0.22em] text-text-soft/58">
                    QUIET IMPRESSION
                  </p>
                  <p className="mt-3 font-display text-[22px] leading-[1.24] text-text-main md:text-[30px]">
                    立ち姿まで含めて、
                    <br />
                    印象は決まる。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}