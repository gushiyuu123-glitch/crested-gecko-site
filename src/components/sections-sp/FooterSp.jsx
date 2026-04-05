export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/6 px-6 py-10 md:px-10 md:py-12 xl:px-14">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040604_0%,#030403_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(116,144,102,0.05)_0%,rgba(116,144,102,0)_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_72%,rgba(172,149,108,0.04)_0%,rgba(172,149,108,0)_28%)]" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        {/* top */}
        <div className="grid gap-10 border-b border-white/6 pb-8 text-center md:grid-cols-[1.2fr_0.72fr_0.82fr_0.72fr] md:items-end md:gap-8 md:text-left">
          {/* col 1 */}
          <div className="relative flex flex-col items-center md:items-start">
            <p className="text-[10px] tracking-[0.24em] text-[#d9ccb0]/42">
              CRESCENT GECKO
            </p>

            <h2 className="mt-4 font-display text-[22px] leading-[1.18] text-text-main md:text-[30px]">
              静かな環境で、
              <br />
              落ち着いて選べる場所。
            </h2>

            <p className="mt-4 max-w-[24em] text-[12px] leading-[1.95] text-text-soft/56 md:max-w-[28em] md:text-[13px]">
              クレステッドゲッコーの魅力と、
              迎える前に確認したいことの両方に
              きちんと向き合うための販売サイトです。
            </p>

            <div className="pointer-events-none mt-6 hidden opacity-[0.4] md:block">
              <svg
                width="180"
                height="18"
                viewBox="0 0 180 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 9H64C79 9 85 2 96 2C107 2 112 16 128 16H179"
                  stroke="rgba(205,189,143,0.42)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx="64" cy="9" r="1.6" fill="rgba(205,189,143,0.48)" />
                <circle cx="127" cy="16" r="1.6" fill="rgba(205,189,143,0.34)" />
              </svg>
            </div>
          </div>

          {/* col 2 */}
          <div className="flex flex-col items-center md:items-start md:pb-[6px]">
            <p className="text-[10px] tracking-[0.18em] text-[#d3c391]/50">
              EXTERNAL
            </p>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://gushikendesign.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[13px] text-text-soft/64 transition hover:text-text-main"
                >
                  <span>GUSHIKEN DESIGN</span>
                  <span className="text-[#d3c391]/54 transition group-hover:translate-x-[2px] group-hover:text-[#e3d3a8]">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://note.com/noahgushi123"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[13px] text-text-soft/64 transition hover:text-text-main"
                >
                  <span>note profile</span>
                  <span className="text-[#d3c391]/54 transition group-hover:translate-x-[2px] group-hover:text-[#e3d3a8]">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* col 3 */}
          <div className="flex flex-col items-center md:items-start md:pb-[6px]">
            <p className="text-[10px] tracking-[0.18em] text-[#d3c391]/50">
              ABOUT THIS SITE
            </p>

            <p className="mt-4 max-w-[22em] text-[12px] leading-[1.9] text-text-soft/52 md:max-w-[20em]">
              世界観だけで終わらせず、
              個体選び・相談・安心感まで静かにつなぐ
              構成を意識しています。
            </p>
          </div>

          {/* col 4 */}
          <div className="flex flex-col items-center md:items-start md:justify-self-end md:pb-[10px]">
            <p className="text-[10px] tracking-[0.18em] text-[#d3c391]/50">
              SITE NAME
            </p>

            <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
              <img
                src="/crested-gecko-logo1.png"
                alt="Crescent Gecko ロゴ"
                draggable="false"
                className="h-auto w-[34px] select-none opacity-[0.82] saturate-[0.9]"
              />

              <div className="text-center md:text-left">
                <p className="text-[14px] tracking-[0.08em] text-text-main/88">
                  Crescent Gecko
                </p>
                <p className="mt-1 text-[10px] tracking-[0.2em] text-[#d9ccb0]/40">
                  CRESTED GECKO SELECT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col items-center justify-center gap-2 pt-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-[11px] leading-[1.8] text-text-soft/38">
            © {year} Crescent Gecko
          </p>

          <p className="text-[11px] leading-[1.8] text-text-soft/34">
            Designed with quiet structure.
          </p>
        </div>
      </div>
    </footer>
  );
}