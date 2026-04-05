import { useEffect, useRef } from "react";

const geckoItems = [
  {
    id: 1,
    name: "Harlequin",
    meta: "2025.11 / CB",
    price: "¥32,000",
    status: "Available",
    image: "/gecko-1.png",
    note: "目の状態良好 / 立ち上がり安定",
    caption: "まず目が合う一匹。",
  },
  {
    id: 2,
    name: "Lily White",
    meta: "2025.12 / CB",
    price: "¥46,000",
    status: "Available",
    image: "/gecko-2.png",
    note: "白抜けがきれい / 給餌確認済",
    caption: "白さと静けさが際立つ個体。",
  },
  {
    id: 3,
    name: "Flame",
    meta: "2025.10 / CB",
    price: "SOLD",
    status: "Hold / Sold",
    image: "/gecko-3.png",
    note: "体の張り良好 / 仕上がり安定",
    caption: "輪郭の強さが残る個体。",
  },
];

const selectionPoints = [
  {
    label: "Eyes",
    text: "目の抜け感と、視線の強さ。",
  },
  {
    label: "Crest",
    text: "クレストの立ち方と輪郭の美しさ。",
  },
  {
    label: "Body",
    text: "体の張り、安定感、全体のまとまり。",
  },
];

export default function FeaturedGeckos() {
  const rootRef = useRef(null);
  const mainItem = geckoItems[0];
  const subItems = geckoItems.slice(1);

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
    y = 8,
    scale = 0.992,
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

  const revealCard = (delay = 0) =>
    revealStyle({
      delay,
      y: 10,
      scale: 0.988,
      duration: 820,
    });

  const revealFooter = (delay = 0) =>
    revealStyle({
      delay,
      y: 6,
      scale: 0.995,
      duration: 760,
    });

  return (
    <section
      id="geckos"
      ref={rootRef}
      className="relative overflow-hidden px-6 pt-34 pb-36 md:px-10 md:pt-40 md:pb-40 xl:px-14 xl:pt-46 xl:pb-44"
    >
      <style>{`
        #geckos [data-reveal][data-revealed="true"] {
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) scale(1) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          #geckos [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07100c_0%,#0b120d_38%,#070b08_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(4,7,6,0.9)_0%,rgba(4,7,6,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(5,7,5,0)_0%,rgba(3,5,4,0.54)_100%)]" />

        <div className="absolute left-[-8%] top-[8%] h-[280px] w-[280px] rounded-full bg-[rgba(119,145,105,0.10)] blur-[88px]" />
        <div className="absolute right-[-4%] top-[18%] h-[300px] w-[300px] rounded-full bg-[rgba(160,136,97,0.09)] blur-[96px]" />
        <div className="absolute left-[28%] bottom-[-8%] h-[240px] w-[240px] rounded-full bg-[rgba(95,118,88,0.08)] blur-[82px]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.028)_0%,rgba(255,255,255,0.008)_26%,rgba(255,255,255,0)_46%)]" />
        <div className="absolute inset-0 opacity-[0.032] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        {/* heading */}
        <div
          data-reveal
          style={revealHeading(0)}
          className="grid gap-8 border-b border-white/8 pb-12 md:grid-cols-[0.94fr_1.06fr] md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.74))]" />
              <p className="text-[10px] tracking-[0.28em] text-text-soft/64 md:text-[11px]">
                FEATURED GECKOS
              </p>
            </div>

            <h2 className="mt-3 max-w-[760px] font-display text-[34px] leading-[1.04] text-text-main md:text-[58px]">
              目が合った瞬間で、
              <br />
              残る個体は変わる。
            </h2>
          </div>

          <div className="max-w-[540px] md:ml-auto">
            <p className="text-[13px] leading-[1.92] text-text-soft/82 md:text-[14px]">
              ただ在庫として並べるのではなく、
              目・クレスト・体の張りまで見ながら、
              <br className="hidden md:block" />
              今ご案内できる個体を、状態重視で選んでいます。
            </p>
          </div>
        </div>

        {/* main layout */}
        <div className="mt-18 grid items-start gap-8 xl:grid-cols-[0.5fr_1fr_0.95fr] xl:items-stretch xl:gap-8">
          {/* left notes */}
          <aside
            data-reveal
            style={revealSoft(70)}
            className="relative self-start pl-7 pr-4 xl:pr-7"
          >
            <span className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(205,189,143,0)_0%,rgba(205,189,143,0.82)_14%,rgba(139,164,119,0.34)_58%,rgba(205,189,143,0)_100%)]" />
            <span className="pointer-events-none absolute left-[-3px] top-[6px] h-[7px] w-[7px] rounded-full bg-[#cdbd8f]/55 blur-[0.3px]" />

            <div className="w-full max-w-[340px] space-y-6">
              <div className="w-full max-w-[308px] border-t border-white/10 pt-5">
                <p className="text-[10px] tracking-[0.24em] text-text-soft/54">
                  SELECTION NOTES
                </p>

                <p className="mt-4 font-display text-[22px] leading-[1.24] text-text-main md:text-[24px]">
                  見た瞬間だけで
                  <br />
                  決めないために。
                </p>

                <p className="mt-4 max-w-[286px] text-[12px] leading-[1.84] text-text-soft/70">
                  写真映えだけではなく、
                  実際のコンディションや全体のまとまりまで見ながら、
                  ご案内する順番を整えています。
                </p>
              </div>

              <div className="w-full max-w-[328px] border-t border-white/8 pt-4">
                {selectionPoints.map((point, index) => (
                  <div
                    key={point.label}
                    className="grid grid-cols-[20px_1fr] gap-3 border-b border-white/6 py-3"
                  >
                    <span className="pt-[2px] text-[10px] tracking-[0.22em] text-[#cdbd8f]/72">
                      0{index + 1}
                    </span>

                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-text-main/86">
                        {point.label}
                      </p>
                      <p className="mt-1 text-[11px] leading-[1.68] text-text-soft/66">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full max-w-[292px] border-t border-white/8 pt-4">
                <p className="text-[10px] tracking-[0.2em] text-text-soft/50">
                  CURATOR’S VIEW
                </p>

                <p className="mt-3 font-display text-[17px] leading-[1.58] text-[#e7dcc7]">
                  「{mainItem.caption}」
                </p>

                <p className="mt-3 text-[11px] leading-[1.7] text-text-soft/60">
                  一覧としてではなく、
                  まず視線が止まり、
                  そのあと印象が残る個体からご案内しています。
                </p>
              </div>
            </div>
          </aside>

          {/* center main specimen */}
          <article
            data-reveal
            style={revealCard(120)}
            className="
              group relative overflow-hidden rounded-[24px]
              border border-white/8
              bg-[linear-gradient(180deg,rgba(255,255,255,0.034)_0%,rgba(255,255,255,0.014)_100%)]
              transition duration-500 ease-organic
              hover:border-[#cdbd8f]/28
            "
          >
            <span className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-[1px] bg-[linear-gradient(180deg,rgba(205,189,143,0)_0%,rgba(205,189,143,0.88)_50%,rgba(139,164,119,0)_100%)]" />
            <span className="pointer-events-none absolute left-6 right-6 top-0 z-[2] h-px bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.38),rgba(139,164,119,0.24),rgba(205,189,143,0))]" />

            <div className="relative aspect-[4/4.72] overflow-hidden xl:aspect-[4/4.52]">
              <img
                src={mainItem.image}
                alt={mainItem.name}
                className="h-full w-full object-cover object-center transition duration-700 ease-organic group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,4,0.04)_0%,rgba(3,5,4,0.12)_36%,rgba(3,5,4,0.66)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_38%,rgba(205,189,143,0.12),transparent_34%)] opacity-[0.18] transition duration-700 ease-organic group-hover:opacity-[0.3]" />
              <div className="absolute inset-y-0 right-0 w-[24%] bg-[linear-gradient(90deg,rgba(3,5,4,0)_0%,rgba(3,5,4,0.18)_100%)]" />

              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-[#cdbd8f]/28 bg-[rgba(25,28,23,0.42)] px-3 py-[6px] text-[10px] tracking-[0.16em] text-[#eadfc9] backdrop-blur-[2px]">
                  PRIMARY
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/18 px-3 py-[6px] text-[10px] tracking-[0.14em] text-text-soft/74 backdrop-blur-[2px]">
                  {mainItem.meta}
                </span>
              </div>

              <div className="absolute right-5 top-5">
                <span className="inline-flex items-center rounded-full border border-[#cdbd8f]/26 bg-[rgba(18,21,18,0.38)] px-3 py-[6px] text-[10px] tracking-[0.16em] text-[#d9cca9] backdrop-blur-[2px]">
                  {mainItem.status}
                </span>
              </div>

              <div className="absolute left-5 bottom-5 md:left-7 md:bottom-7">
                <p className="mb-3 text-[10px] tracking-[0.24em] text-text-soft/60">
                  FEATURE 01
                </p>

                <h3 className="font-display text-[42px] leading-none text-text-main md:text-[64px]">
                  {mainItem.name}
                </h3>

                <p className="mt-4 max-w-[260px] text-[12px] leading-[1.84] text-text-soft/78 md:max-w-[320px] md:text-[13px]">
                  {mainItem.note}
                </p>
              </div>

              <div className="absolute bottom-5 right-5 md:right-7 md:bottom-7">
                <div className="rounded-[16px] border border-white/10 bg-[rgba(8,12,10,0.4)] px-4 py-3 backdrop-blur-[2px] transition duration-500 ease-organic group-hover:border-[#d8c99a]/18 group-hover:bg-[rgba(8,12,10,0.46)]">
                  <p className="text-[10px] tracking-[0.18em] text-text-soft/58">
                    PRICE
                  </p>
                  <p className="mt-1 text-[18px] tracking-[0.08em] text-[#ead8a8] md:text-[20px]">
                    {mainItem.price}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative grid gap-4 px-6 py-5 md:grid-cols-[1fr_auto] md:items-center md:px-7">
              <div className="max-w-[430px]">
                <p className="text-[10px] tracking-[0.18em] text-text-soft/54">
                  IMPRESSION
                </p>
                <p className="mt-2 text-[13px] leading-[1.84] text-text-soft/76 md:text-[14px]">
                  まず目が止まり、そのあと全体のまとまりが残る。
                  <br />
                  写真の強さだけで終わらない一匹です。
                </p>
              </div>

              <div className="flex items-center gap-3 text-[#c9d5b6]/84 transition duration-500 group-hover:translate-x-[4px] group-hover:text-[#dfe8ce]">
                <span className="text-[11px] tracking-[0.16em]">詳細を見る</span>
                <span className="h-[1px] w-8 bg-[linear-gradient(90deg,rgba(184,200,143,0.16),rgba(184,200,143,0.82))]" />
                <span>→</span>
              </div>

              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="absolute inset-0 z-[3] cursor-default"
                aria-label={`${mainItem.name} の詳細を見る`}
              />
            </div>
          </article>

          {/* right sub specimens */}
          <div className="grid auto-rows-max content-start gap-4 self-start xl:h-full xl:grid-rows-2 xl:self-stretch xl:gap-5">
            {subItems.map((item, index) => {
              const isSold = item.price === "SOLD";
              const reverse = index % 2 === 1;

              return (
                <article
                  key={item.id}
                  data-reveal
                  style={revealCard(180 + index * 70)}
                  className="
                    group relative h-fit overflow-hidden rounded-[20px]
                    border border-white/8
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.014)_100%)]
                    transition duration-500 ease-organic
                    hover:border-[#cdbd8f]/24
                    xl:h-full
                  "
                >
                  <span className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-[1px] bg-[linear-gradient(180deg,rgba(205,189,143,0)_0%,rgba(205,189,143,0.78)_50%,rgba(139,164,119,0)_100%)]" />
                  <span className="pointer-events-none absolute left-5 right-5 top-0 z-[2] h-px bg-[linear-gradient(90deg,rgba(205,189,143,0),rgba(205,189,143,0.28),rgba(139,164,119,0.16),rgba(205,189,143,0))]" />

                  <div
                    className={`grid h-full gap-0 md:grid-cols-[1.04fr_0.96fr] ${
                      reverse ? "md:grid-cols-[0.96fr_1.04fr]" : ""
                    }`}
                  >
                    <div className={reverse ? "md:order-2" : ""}>
                      <div className="relative aspect-[4/2.58] overflow-hidden md:h-full md:aspect-auto">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center transition duration-700 ease-organic group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,4,0.03)_0%,rgba(3,5,4,0.08)_36%,rgba(3,5,4,0.52)_100%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,rgba(205,189,143,0.10),transparent_36%)] opacity-0 transition duration-700 ease-organic group-hover:opacity-[0.24]" />

                        <div className="absolute left-4 top-4">
                          <span
                            className={`inline-flex items-center rounded-full border px-3 py-[6px] text-[10px] tracking-[0.16em] backdrop-blur-[2px] ${
                              isSold
                                ? "border-white/12 bg-black/20 text-text-soft/66"
                                : "border-[#cdbd8f]/26 bg-[rgba(25,28,23,0.4)] text-[#eadfc9]"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4">
                          <p className="text-[10px] tracking-[0.18em] text-[#d9ccb2]/78">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative flex h-full flex-col p-4 xl:px-[18px] xl:py-4 ${
                        reverse ? "md:order-1" : ""
                      }`}
                    >
                      <div className="flex flex-1 flex-col justify-center">
                        <p className="text-[10px] tracking-[0.18em] text-text-soft/56">
                          FEATURE 0{index + 2}
                        </p>

                        <h3 className="mt-2 font-display text-[22px] leading-none text-text-main xl:text-[24px]">
                          {item.name}
                        </h3>

                        <p className="mt-2.5 text-[11px] tracking-[0.16em] text-text-soft/66">
                          {item.meta}
                        </p>

                        <p
                          className={`mt-3 text-[15px] tracking-[0.12em] ${
                            isSold ? "text-text-soft/46" : "text-[#e0cc9d]"
                          }`}
                        >
                          {item.price}
                        </p>

                        <p className="mt-3 text-[11px] leading-[1.64] text-text-soft/70">
                          {item.note}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3">
                        <p className="text-[11px] tracking-[0.16em] text-text-soft/64">
                          詳細を見る
                        </p>

                        <span className="flex items-center gap-2 text-[#c7d3b3]/8૦ transition duration-500 group-hover:translate-x-[4px] group-hover:text-[#dfe8ce]">
                          <span className="h-[1px] w-6 bg-[linear-gradient(90deg,rgba(184,200,143,0.14),rgba(184,200,143,0.76))]" />
                          <span>→</span>
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="absolute inset-0 z-[3] cursor-default"
                        aria-label={`${item.name} の詳細を見る`}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* footer */}
        <div
          data-reveal
          style={revealFooter(260)}
          className="mt-16 flex flex-col gap-5 border-t border-white/8 pt-10 md:mt-20 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-[11px] leading-[1.9] tracking-[0.16em] text-text-soft/60">
            その時点で状態の良い個体から、順にご案内しています。
          </p>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="
              group inline-flex items-center gap-4 self-start
              rounded-[14px]
              border border-[#cdbd8f]/20
              bg-[linear-gradient(180deg,rgba(205,189,143,0.065)_0%,rgba(64,82,58,0.05)_100%)]
              px-5 py-3 text-[12px] tracking-[0.18em] text-[#eadfc9]
              transition duration-500 ease-organic
              hover:border-[#d9c897]/36
              hover:bg-[linear-gradient(180deg,rgba(205,189,143,0.11)_0%,rgba(86,112,78,0.07)_100%)]
            "
          >
            <span>一覧を見る</span>
            <span className="flex items-center gap-2 text-[#d3c391]/84 transition duration-500 group-hover:translate-x-[4px] group-hover:text-[#eadcae]">
              <span className="h-[1px] w-5 bg-[linear-gradient(90deg,rgba(205,189,143,0.18),rgba(205,189,143,0.82))]" />
              <span>→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}