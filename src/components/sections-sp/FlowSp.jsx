import { useEffect, useRef } from "react";

const flowSteps = [
  {
    number: "01",
    title: "気になる個体を見てみる",
    text: "まずは写真や状態を見ながら、印象に残った子から落ち着いてご覧いただけます。",
    image: "/flow-1.png",
    alt: "個体を見るイメージ",
  },
  {
    number: "02",
    title: "気になる点を相談する",
    text: "状態や飼育のしやすさなど、見ただけではわかりにくいことも、そのままご相談いただけます。",
    image: "/flow-2.png",
    alt: "相談するイメージ",
  },
  {
    number: "03",
    title: "納得したうえでお迎えする",
    text: "急いで決める必要はありません。内容にご納得いただけた場合のみ、お迎えへ進んでいます。",
    image: "/flow-5.png",
    alt: "お迎えするイメージ",
  },
];

export default function Flow() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll("[data-reveal], [data-arrow]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target.hasAttribute("data-arrow")) {
            entry.target.setAttribute("data-arrow-revealed", "true");
          } else {
            entry.target.setAttribute("data-revealed", "true");
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const revealStyle = ({
    delay = 0,
    y = 7,
    scale = 0.99,
    duration = 660,
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

  return (
    <section
      id="flow"
      ref={rootRef}
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32 xl:px-14 xl:py-40"
    >
      <style>{`
        #flow [data-reveal][data-revealed="true"] {
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) scale(1) !important;
        }

        #flow [data-arrow] {
          opacity: 0;
          transition: opacity 0.36s ease;
        }

        #flow [data-arrow][data-arrow-revealed="true"] {
          opacity: 1;
        }

        #flow [data-arrow-line],
        #flow [data-arrow-head] {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
        }

        #flow [data-arrow][data-arrow-revealed="true"] [data-arrow-line] {
          animation: flowArrowDraw 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        #flow [data-arrow][data-arrow-revealed="true"] [data-arrow-head] {
          animation: flowArrowHead 0.58s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.56s;
        }

        #flow [data-arrow="2"][data-arrow-revealed="true"] [data-arrow-line] {
          animation-delay: 0.08s;
        }

        #flow [data-arrow="2"][data-arrow-revealed="true"] [data-arrow-head] {
          animation-delay: 0.64s;
        }

        @keyframes flowArrowDraw {
          0% {
            stroke-dashoffset: 220;
            opacity: 0;
          }
          18% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes flowArrowHead {
          0% {
            stroke-dashoffset: 220;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #flow [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          #flow [data-arrow] {
            opacity: 1 !important;
          }

          #flow [data-arrow-line],
          #flow [data-arrow-head] {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070a08_0%,#0a0f0b_50%,#060907_100%)]" />
        <div className="absolute left-[4%] top-[12%] h-[220px] w-[220px] rounded-full bg-[rgba(119,145,105,0.05)] blur-[90px]" />
        <div className="absolute right-[2%] bottom-[8%] h-[260px] w-[260px] rounded-full bg-[rgba(173,149,109,0.04)] blur-[96px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px]">
        <header
          data-reveal
          style={revealStyle({ delay: 0, y: 4, scale: 0.995, duration: 620 })}
          className="text-center"
        >
          <p className="text-[11px] tracking-[0.24em] text-text-soft/62">
            FLOW
          </p>

          <h2 className="mt-3 font-display text-[32px] leading-[1.12] text-text-main md:text-[48px]">
            お迎えまでの流れ
          </h2>

          <p className="mx-auto mt-6 max-w-[34em] text-[13px] leading-[1.95] text-text-soft/72 md:text-[14px]">
            むずかしく考えすぎなくても大丈夫です。
            <br className="hidden md:block" />
            気になる個体を見ながら、順番に確認していけます。
          </p>
        </header>

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <svg
            data-arrow="1"
            viewBox="0 0 220 150"
            aria-hidden="true"
            className="absolute left-[48.8%] top-[35.6%] w-[118px] -translate-x-1/2 text-[#d3c391]/40"
          >
            <defs>
              <filter
                id="flow-arrow-glow-1"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              data-arrow-line
              d="M24 24 C 58 42, 90 72, 122 102"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              filter="url(#flow-arrow-glow-1)"
            />
            <path
              data-arrow-head
              d="M108 98 L122 102 L116 88"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#flow-arrow-glow-1)"
            />
          </svg>

          <svg
            data-arrow="2"
            viewBox="0 0 220 150"
            aria-hidden="true"
            className="absolute left-[49.4%] top-[62.9%] w-[118px] -translate-x-1/2 text-[#d3c391]/36"
          >
            <defs>
              <filter
                id="flow-arrow-glow-2"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              data-arrow-line
              d="M132 22 C 102 46, 76 74, 46 104"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              filter="url(#flow-arrow-glow-2)"
            />
            <path
              data-arrow-head
              d="M52 90 L46 104 L60 98"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#flow-arrow-glow-2)"
            />
          </svg>
        </div>

        <div className="mt-18 space-y-14 md:mt-24 md:space-y-20">
          {flowSteps.map((step, index) => {
            const reverse = index % 2 === 1;

            const imageDelay = 26 + index * 38;
            const textDelay = imageDelay + 42;

            return (
              <article
                key={step.number}
                className={`
                  grid items-center gap-8 md:gap-14
                  md:grid-cols-[1fr_0.92fr]
                  ${
                    reverse
                      ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                      : ""
                  }
                `}
              >
                <div
                  data-reveal
                  style={revealStyle({
                    delay: imageDelay,
                    y: 7,
                    scale: 0.99,
                    duration: 640,
                  })}
                  className="relative"
                >
                  <div
                    className={`
                      relative
                      ${reverse ? "ml-auto max-w-[560px]" : "max-w-[560px]"}
                    `}
                  >
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,164,119,0.10)_0%,rgba(205,189,143,0.06)_32%,transparent_72%)] blur-[42px]" />

                    <div className="pointer-events-none absolute -right-4 top-[16%] h-[40%] w-[26%] bg-[radial-gradient(circle_at_center,rgba(139,164,119,0.10),transparent_72%)] blur-[26px]" />

                    <div className="relative flex min-h-[220px] items-center justify-center px-2 py-2 md:min-h-[260px]">
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="
                          max-h-[190px] w-auto object-contain
                          opacity-[0.98]
                          drop-shadow-[0_18px_38px_rgba(0,0,0,0.24)]
                          md:max-h-[230px]
                        "
                      />
                    </div>
                  </div>
                </div>

                <div
                  data-reveal
                  style={revealStyle({
                    delay: textDelay,
                    y: 8,
                    scale: 0.993,
                    duration: 620,
                  })}
                  className={`${reverse ? "md:pr-8" : "md:pl-8"}`}
                >
                  <p className="text-[10px] tracking-[0.22em] text-[#cdbd8f]/62">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-3 font-display text-[24px] leading-[1.45] text-text-main md:text-[32px]">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-[30em] text-[13px] leading-[1.95] text-text-soft/74 md:text-[14px]">
                    {step.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div
          data-reveal
          style={revealStyle({ delay: 140, y: 4, scale: 0.996, duration: 600 })}
          className="mx-auto mt-16 max-w-[36em] text-center md:mt-20"
        >
          <p className="text-[13px] leading-[1.95] text-text-soft/64 md:text-[14px]">
            途中で迷うことがあっても、
            <br className="hidden md:block" />
            その段階のままでご相談いただけます。
          </p>
        </div>
      </div>
    </section>
  );
}