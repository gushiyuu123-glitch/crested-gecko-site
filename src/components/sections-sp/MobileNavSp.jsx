import { useEffect, useState } from "react";
import gsap from "gsap";

const menuItems = [
  { href: "#top-sp", labelJa: "トップ", labelEn: "TOP" },
  { href: "#geckos-sp", labelJa: "販売個体", labelEn: "GECKOS" },
  { href: "#policy-sp", labelJa: "販売方針", labelEn: "POLICY" },
  { href: "#first-guide-sp", labelJa: "はじめての方へ", labelEn: "FIRST GUIDE" },
  { href: "#flow-sp", labelJa: "ご案内の流れ", labelEn: "FLOW" },
  { href: "#faq-sp", labelJa: "よくある質問", labelEn: "FAQ" },
  { href: "#contact-sp", labelJa: "お問い合わせ", labelEn: "CONTACT" },
  { href: "#info-sp", labelJa: "販売情報", labelEn: "INFO" },
];

export default function MobileNavSp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        ".sp-nav-panel",
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.38, ease: "power3.out" }
      );

      gsap.fromTo(
        ".sp-nav-item",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.46,
          stagger: 0.04,
          ease: "power3.out",
          delay: 0.04,
        }
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[140] md:hidden">
        <div className="relative mx-auto h-[60px] px-4">
          {/* glass base */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,16,0.58)_0%,rgba(15,24,19,0.34)_68%,rgba(15,24,19,0.06)_100%)] backdrop-blur-[10px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(190,210,182,0)_0%,rgba(190,210,182,0.10)_26%,rgba(214,194,161,0.10)_58%,rgba(190,210,182,0)_100%)]" />

          <div className="relative z-10 flex h-full items-center justify-between">
            {/* left brand */}
            <a
              href="#top-sp"
              aria-label="Crescent Gecko トップへ戻る"
              className="flex flex-col items-start leading-none"
            >
              <span className="text-[7px] uppercase tracking-[0.24em] text-text-soft/50">
                Okinawa
              </span>
              <span className="mt-[3px] text-[11px] tracking-[0.14em] text-[#e7ddca]">
                CRESCENT GECKO
              </span>
            </a>

            {/* small hamburger */}
            <button
              type="button"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="relative inline-flex h-[38px] w-[38px] items-center justify-center overflow-hidden rounded-full border border-[#b9c9b4]/12 bg-[linear-gradient(180deg,rgba(145,168,140,0.10)_0%,rgba(92,118,96,0.04)_100%)] backdrop-blur-[10px]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.015)_32%,rgba(255,255,255,0)_70%)]" />

              <span className="relative flex h-[12px] w-[16px] flex-col justify-between">
                <span
                  className={`block h-px w-full origin-center bg-[#dce6d6] transition duration-300 ${
                    open ? "translate-y-[5.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-full origin-center bg-[#c5d3bf] transition duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-px w-full origin-center bg-[#d7ccb3] transition duration-300 ${
                    open ? "-translate-y-[5.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="sp-nav-panel fixed inset-0 z-[135] md:hidden">
          {/* bg */}
          <button
            type="button"
            aria-label="メニューを閉じる"
            onClick={handleClose}
            className="absolute inset-0 h-full w-full bg-[linear-gradient(180deg,rgba(7,12,9,0.90)_0%,rgba(8,14,10,0.94)_38%,rgba(6,10,8,0.97)_100%)]"
          />

          {/* soft atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-14%] top-[10%] h-[160px] w-[160px] rounded-full bg-[rgba(156,181,144,0.08)] blur-[56px]" />
            <div className="absolute right-[-10%] top-[18%] h-[150px] w-[150px] rounded-full bg-[rgba(179,163,118,0.08)] blur-[56px]" />
            <div className="absolute bottom-[10%] left-[8%] h-[120px] w-[120px] rounded-full bg-[rgba(118,142,114,0.08)] blur-[46px]" />
          </div>

          {/* content */}
          <div className="relative z-10 flex min-h-screen flex-col px-5 pb-9 pt-[92px]">
            <div className="mb-7">
              <p className="text-[9px] tracking-[0.24em] text-[#aebda9]/52">
                MOBILE NAVIGATION
              </p>
              <div className="mt-3 h-px w-14 bg-[linear-gradient(90deg,rgba(206,217,200,0.38),rgba(206,217,200,0))]" />
            </div>

            <nav className="flex flex-col gap-2.5">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleClose}
                  className="sp-nav-item group relative overflow-hidden rounded-[16px] border border-white/6 bg-[linear-gradient(180deg,rgba(150,173,145,0.05)_0%,rgba(255,255,255,0.015)_100%)] px-4 py-[13px] backdrop-blur-[8px]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.035)_0%,rgba(181,204,172,0.025)_36%,rgba(214,194,161,0.02)_72%,rgba(255,255,255,0)_100%)] opacity-0 transition duration-500 group-active:opacity-100" />

                  <span className="relative flex items-center justify-between gap-4">
                    <span className="flex flex-col">
                      <span className="text-[12px] tracking-[0.05em] text-[#edf2e8]">
                        {item.labelJa}
                      </span>
                      <span className="mt-1 text-[8px] tracking-[0.22em] text-[#bfcdb9]/46">
                        {item.labelEn}
                      </span>
                    </span>

                    <span className="text-[13px] text-[#d8ccb0]/44">↘</span>
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-9">
              <p className="text-[9px] leading-[1.9] text-[#b8c5b3]/42">
                静かに選べること。
                <br />
                その安心感まで含めて、ひとつの体験に。
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}