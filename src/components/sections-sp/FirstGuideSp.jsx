import { useEffect, useRef } from "react";

const guideIntro = {
  paragraphs: [
    "気になっているけれど、まだよくわからない。\nそんな段階からでも、無理なく見ていけるようにしています。",
    "最初から詳しくなることよりも、まずは安心して見られることを大切にしています。",
  ],
};

const guideMessage = {
  title: "目に留まった個体から、ゆっくり見ていただければ大丈夫です。",
  paragraphs: [
    "最初は、すべてを比較して選ぼうとしなくても大丈夫です。\nまずは印象に残った個体から見ていただければ、少しずつ違いや特徴もつかみやすくなります。",
    "見た目だけではわかりにくい部分については、状態や飼育のしやすさも含めてお伝えしています。気になることがあれば、そのまま聞いていただいて大丈夫です。",
  ],
};

export default function FirstGuide() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translate3d(0,0,0)";
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

  const revealStyle = (delay = 0, y = 14, duration = 680) => ({
    opacity: 0,
    transform: `translate3d(0, ${y}px, 0)`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  });

  return (
    <section
      id="first-guide"
      ref={rootRef}
      className="relative overflow-hidden px-6 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32 xl:px-14 xl:pt-44 xl:pb-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#060907_0%,#0b100c_48%,#070a08_100%)]" />
        <div className="absolute left-[4%] top-[14%] h-[220px] w-[220px] rounded-full bg-[rgba(119,145,105,0.06)] blur-[88px]" />
        <div className="absolute right-[-4%] bottom-[10%] h-[240px] w-[240px] rounded-full bg-[rgba(173,149,109,0.05)] blur-[92px]" />
        <div className="absolute inset-x-[16%] top-[34%] h-px bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.08),rgba(139,164,119,0.08),rgba(205,189,143,0))]" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/gecko-cut-1.png"
          alt=""
          aria-hidden="true"
          className="
            gecko-float-1
            absolute right-[110px] top-[10px]
            hidden w-[230px] rotate-[14deg]
            opacity-[0.15] blur-[0.2px]
            md:block xl:w-[320px]
          "
        />

        <img
          src="/gecko-cut-2.png"
          alt=""
          aria-hidden="true"
          className="
            gecko-float-2
            absolute bottom-[20px] left-[75px]
            w-[220px] -rotate-[11deg]
            opacity-[0.13] blur-[0.35px]
            md:w-[300px] xl:w-[360px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[940px]">
        {/* block 1 */}
        <header
          data-reveal
          style={revealStyle(0, 12, 620)}
          className="text-center"
        >
          <p className="text-[11px] tracking-[0.24em] text-text-soft/62">
            FIRST GUIDE
          </p>

          <h2 className="mx-auto mt-3 max-w-[820px] font-display text-[34px] leading-[1.08] text-text-main md:text-[52px] md:leading-[1.05]">
            はじめてでも、
            <br />
            構えすぎなくて大丈夫です。
          </h2>

          <div className="mx-auto mt-6 max-w-[34em] space-y-3 whitespace-pre-line">
            {guideIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[13px] leading-[1.95] text-text-soft/76 md:text-[14px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </header>

        {/* block 2 */}
        <div className="mx-auto mt-16 max-w-[760px] md:mt-20">
          <div
            data-reveal
            style={revealStyle(100, 16, 660)}
            className="relative mx-auto max-w-[720px] px-6 py-8 md:px-10 md:py-10"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.12),rgba(139,164,119,0.08),rgba(205,189,143,0))]" />
            <span className="pointer-events-none absolute left-0 top-[16px] h-[72%] w-px bg-[linear-gradient(180deg,rgba(205,189,143,0),rgba(205,189,143,0.22),rgba(139,164,119,0.1),rgba(205,189,143,0))]" />
            <span className="pointer-events-none absolute left-[-2px] top-[18px] h-[5px] w-[5px] rounded-full bg-[#cdbd8f]/52" />

            <div className="mx-auto max-w-[560px]">
              <p className="text-[10px] tracking-[0.22em] text-[#cdbd8f]/62">
                GUIDE NOTE
              </p>

              <h3 className="mt-3 max-w-[24em] font-display text-[20px] leading-[1.6] text-text-main md:text-[24px]">
                目に留まった個体から、
                <br />
                ゆっくり見ていただければ大丈夫です。
              </h3>

              <div className="mt-5 space-y-4 whitespace-pre-line">
                {guideMessage.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[13px] leading-[1.95] text-text-soft/74 "
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}