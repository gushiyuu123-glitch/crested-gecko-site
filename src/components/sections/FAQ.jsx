import { useEffect, useRef, useState } from "react";

const faqItems = [
  {
    question: "初めて飼うのですが、大丈夫ですか？",
    answer:
      "はい、大丈夫です。初めての方にもわかりやすいように、飼いやすさや気をつけたい点を整理しながらご案内しています。まだ決めていない段階でも、そのままご相談いただけます。",
  },
  {
    question: "写真と実際の印象は変わりますか？",
    answer:
      "生体のため、見る環境やタイミングによって色味や印象に多少の差は出ます。掲載時にはできるだけ実際の雰囲気が伝わるように整え、状態もあわせてお伝えしています。",
  },
  {
    question: "取り置きはできますか？",
    answer:
      "状況によってご案内可能です。期間や条件は個体によって異なるため、気になる子がいる場合はまずご相談ください。急いで決めていただくことはありません。",
  },
  {
    question: "お迎え後の相談もできますか？",
    answer:
      "はい。お迎えして終わりではなく、その後に気になることが出た場合もご相談いただけます。初めての飼育では小さな疑問も出やすいため、安心して進められるようにしています。",
  },
  {
    question: "どんな基準で個体を掲載していますか？",
    answer:
      "模様や色の強さだけではなく、視線の印象、輪郭の流れ、体の張り、全体のまとまりまで見ながら掲載しています。写真映えだけでなく、見たあとにどう残るかも大切にしています。",
  },
];

export default function FAQ() {
  const rootRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(-1);

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

  return (
    <section
      id="faq"
      ref={rootRef}
      className="relative overflow-hidden px-6 pt-28 pb-18 md:px-10 md:pt-36 md:pb-24 xl:px-14 xl:pt-44 xl:pb-28"
    >
      <style>{`
        #faq [data-reveal][data-revealed="true"] {
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) scale(1) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          #faq [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        @keyframes faqLineFloat {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0.72;
          }
          50% {
            transform: translate3d(10px, -4px, 0);
            opacity: 1;
          }
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.72;
          }
        }

        @keyframes faqDotPulse {
          0% {
            transform: scale(1);
            opacity: 0.42;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.95;
          }
          100% {
            transform: scale(1);
            opacity: 0.42;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050806_0%,#0a0f0b_44%,#060907_100%)]" />
        <div className="absolute left-[-6%] top-[12%] h-[260px] w-[260px] rounded-full bg-[rgba(119,145,105,0.06)] blur-[92px]" />
        <div className="absolute right-[-5%] bottom-[8%] h-[280px] w-[280px] rounded-full bg-[rgba(173,149,109,0.05)] blur-[96px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div
          data-reveal
          style={revealStyle({ delay: 0, y: 6, scale: 0.995, duration: 760 })}
          className="grid gap-8 border-b border-white/8 pb-12 md:grid-cols-[0.9fr_1.1fr] md:items-end"
        >
          <div>
            <p className="text-[11px] tracking-[0.24em] text-text-soft/68">
              FAQ
            </p>

            <h2 className="mt-3 font-display text-[32px] leading-[1.08] text-text-main md:text-[54px]">
              よくある質問
            </h2>
          </div>
        </div>

        <div className="mt-14 grid items-start gap-10 xl:grid-cols-[0.92fr_1fr] xl:gap-10">
          <div
            data-reveal
            style={revealStyle({ delay: 70, y: 8, scale: 0.993, duration: 760 })}
            className="relative"
          >
            <div className="relative aspect-[4/4.85] overflow-hidden md:aspect-[4/4.2] xl:aspect-[4/4.55]">
              <img
                src="/FAQ.png"
                alt="疑問を抱えた方のイメージ"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,4,0.04)_0%,rgba(3,5,4,0.12)_36%,rgba(3,5,4,0.78)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_22%,rgba(205,189,143,0.10),transparent_28%)] opacity-[0.2]" />

              <div className="absolute left-5 top-5 z-[3] md:left-6 md:top-6">
                <span className="inline-flex items-center bg-[rgba(19,23,19,0.18)] px-3 py-[6px] text-[10px] tracking-[0.18em] text-[#eadfc9]/88">
                  FAQ GUIDE
                </span>
              </div>

              <div className="absolute right-5 top-6 z-[3] text-[30px] text-[#ead8ae]/82 md:right-6">
                ?
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-[3] p-5 md:p-6">
                <p className="text-[10px] tracking-[0.22em] text-text-soft/58">
                  BEFORE CONTACT
                </p>

           <p className="mt-3 max-w-[18em] font-display text-[26px] leading-[1.18] text-text-main md:text-[32px]">
  わからないことがあっても、
  <br />
  そのままで大丈夫です。
</p>
                <p className="mt-4 max-w-[30em] text-[13px] leading-[1.86] text-text-soft/74">
                  迷いや疑問がある状態のままでも問題ありません。
                  まずは気になりやすいポイントから、静かに確認できるようにしています。
                </p>
              </div>
            </div>
          </div>

          <div
            data-reveal
            style={revealStyle({ delay: 120, y: 8, scale: 0.992, duration: 760 })}
            className="flex h-full min-h-[760px] flex-col gap-4 md:min-h-[820px] xl:min-h-[860px]"
          >
            <div className="max-w-[560px] py-2 text-center md:mx-auto md:py-3">
              <p className="text-[13px] leading-[1.92] text-text-soft/76 md:text-[14px]">
                気になることを、相談前に少しだけ整理できるように。
                <br className="hidden md:block" />
                初めての方にも多い質問をまとめています。
              </p>
            </div>

            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className="group overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.028)_0%,rgba(255,255,255,0.012)_100%)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="relative flex w-full items-start justify-between gap-6 px-5 py-5 text-left md:px-7 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="pointer-events-none absolute left-5 right-5 top-0 h-px bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.2),rgba(139,164,119,0.14),rgba(205,189,143,0))]" />

                    <div className="flex min-w-0 items-start gap-4 md:gap-5">
                      <span className="mt-[2px] text-[10px] tracking-[0.22em] text-[#cdbd8f]/68">
                        0{index + 1}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[15px] leading-[1.72] text-text-main md:text-[17px]">
                          {item.question}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/8 bg-[rgba(255,255,255,0.02)] text-[15px] leading-none text-[#d8ca9f]/76 transition duration-500 ${
                        isOpen
                          ? "rotate-45 border-[#cdbd8f]/18 text-[#ead8ae]"
                          : "rotate-0"
                      }`}
                    >
                      ＋
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[54px] pr-14 md:px-7 md:pb-6 md:pl-[68px]">
                        <div className="border-t border-white/6 pt-4">
                          <p className="max-w-[46em] text-[13px] leading-[1.92] text-text-soft/72 md:text-[14px]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="mt-6 pl-[18px] pr-3 md:mt-8 md:pl-[24px] md:pr-6">
              <div className="relative h-[132px] w-full overflow-hidden md:h-[148px]">
                <svg
                  viewBox="0 0 720 220"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                  style={{ animation: "faqLineFloat 8.5s ease-in-out infinite" }}
                >
                  <path
                    d="M38 150 C 116 98, 202 84, 304 88 C 418 92, 514 118, 674 74"
                    stroke="rgba(205,189,143,0.34)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M118 184 C 186 150, 258 142, 346 144 C 438 146, 530 160, 646 124"
                    stroke="rgba(139,164,119,0.22)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />

                  <g style={{ animation: "faqDotPulse 4.8s ease-in-out infinite" }}>
                    <circle cx="88" cy="132" r="3.5" fill="rgba(205,189,143,0.62)" />
                  </g>
                  <g style={{ animation: "faqDotPulse 5.6s ease-in-out infinite 0.8s" }}>
                    <circle cx="316" cy="88" r="2.8" fill="rgba(205,189,143,0.48)" />
                  </g>
                  <g style={{ animation: "faqDotPulse 5.1s ease-in-out infinite 1.4s" }}>
                    <circle cx="512" cy="118" r="2.4" fill="rgba(139,164,119,0.52)" />
                  </g>
                  <g style={{ animation: "faqDotPulse 6.2s ease-in-out infinite 1s" }}>
                    <circle cx="652" cy="72" r="3.2" fill="rgba(205,189,143,0.54)" />
                  </g>

                  <text
                    x="208"
                    y="66"
                    fill="rgba(234,223,201,0.42)"
                    fontSize="28"
                    fontFamily="serif"
                  >
                    ?
                  </text>
                  <text
                    x="560"
                    y="96"
                    fill="rgba(234,223,201,0.28)"
                    fontSize="22"
                    fontFamily="serif"
                  >
                    ?
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}