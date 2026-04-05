export default function BusinessInfo() {
  const infoItems = [
    {
      label: "運営名",
      value: "Crescent Gecko",
    },
    {
      label: "拠点",
      value: "沖縄県内を拠点にご案内しています",
    },
    {
      label: "ご連絡",
      value: "Instagram DM / Contact Form より受付",
    },
    {
      label: "ご案内方法",
      value: "個体の状態やご希望を確認しながら、個別にご案内しています",
    },
    {
      label: "動物取扱業登録",
      value: "沖動販 第0000号",
    },
    {
      label: "登録有効期限",
      value: "202X年XX月XX日",
    },
  ];

  return (
    <section
      id="business-info"
      className="
        relative overflow-hidden
        px-6 pt-20 pb-28
        md:px-10 md:pt-24 md:pb-32
        xl:px-14 xl:pt-28 xl:pb-36
      "
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#050705_0%,#060906_36%,#040604_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(116,144,102,0.08)_0%,rgba(116,144,102,0)_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(172,149,108,0.06)_0%,rgba(172,149,108,0)_28%)]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-screen [background-image:radial-gradient(rgba(255,255,255,0.16)_0.6px,transparent_0.6px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        {/* heading */}
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(300px,0.52fr)] xl:items-start xl:gap-14">
          <div className="max-w-[760px]">
            <p className="text-[10px] tracking-[0.24em] text-[#d9ccb0]/46">
              OPERATION INFO
            </p>

            <h2 className="mt-4 font-display text-[34px] leading-[1.08] text-text-main md:text-[48px] xl:text-[56px]">
              運営・登録情報
            </h2>

            <div className="mt-5 max-w-[39em] space-y-4 text-[13px] leading-[2] text-text-soft/64 md:text-[14px]">
              <p>
                個体の見た目だけでなく、状態や相性、
                <br className="hidden sm:block" />
                お迎え後を見据えた案内まで含めて、
                落ち着いて判断できる販売を大切にしています。
              </p>

              <p>
                迎えることを急かすのではなく、
                必要な情報をきちんと確認しながら、
                <br className="hidden sm:block" />
                ご自身のペースで選んでいただけるように。
                この場所では、
                <br className="hidden sm:block" />
                そうした距離感を前提にご案内しています。
              </p>
            </div>
          </div>

          {/* logo unit */}
          <div className="pointer-events-none hidden xl:flex justify-end pt-20">
            <div className="relative flex items-start gap-6 xl:-translate-x-14 animate-[logoFloat_7s_ease-in-out_infinite]">
              {/* subtle moon glow */}
              <span
                className="
                  absolute right-[-8px] top-[6px]
                  h-[168px] w-[168px] rounded-full
                  bg-[radial-gradient(circle,rgba(210,225,196,0.12)_0%,rgba(210,225,196,0.06)_34%,rgba(210,225,196,0.02)_56%,rgba(210,225,196,0)_76%)]
                  blur-[20px]
                "
              />

              {/* tiny dust line */}
              <span
                className="
                  absolute left-[36px] top-[118px]
                  h-px w-[220px]
                  bg-[linear-gradient(90deg,rgba(214,199,154,0)_0%,rgba(214,199,154,0.18)_28%,rgba(214,199,154,0.08)_68%,rgba(214,199,154,0)_100%)]
                  opacity-80
                "
              />

              <img
                src="/crested-gecko-logo2.png"
                alt="Crescent Gecko ロゴ文字"
                draggable="false"
                className="
                  relative z-[1]
                  h-auto w-[290px] select-none
                  opacity-[0.42] saturate-[0.82]
                  drop-shadow-[0_10px_24px_rgba(0,0,0,0.16)]
                  translate-y-[40px]
                  transition-transform duration-[1600ms] ease-out
                "
              />

              <img
                src="/crested-gecko-logo1.png"
                alt="Crescent Gecko トカゲロゴ"
                draggable="false"
                className="
                  relative z-[2]
                  h-auto w-[130px] select-none
                  opacity-[0.76] saturate-[0.92]
                  drop-shadow-[0_12px_28px_rgba(0,0,0,0.18)]
                  translate-y-[10px]
                  animate-[logoBreath_5.8s_ease-in-out_infinite]
                "
              />
            </div>
          </div>
        </div>

        {/* main */}
        <div className="mt-14 grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:gap-16">
          {/* left / info */}
          <div className="border-t border-white/8 pt-5">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-[#d3c391]/56">
                  INFORMATION
                </p>
                <p className="mt-2 text-[13px] leading-[1.9] text-text-soft/54 md:text-[14px]">
                  運営に関する基本情報をまとめています。
                </p>
              </div>
            </div>

            <div className="divide-y divide-white/6 border-b border-white/6">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="
                    grid gap-2 py-5
                    md:grid-cols-[170px_1fr] md:gap-6
                  "
                >
                  <p className="text-[10px] tracking-[0.18em] text-[#d3c391]/58">
                    {item.label}
                  </p>
                  <p className="text-[13px] leading-[1.95] text-text-main/88 md:text-[14px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right / stance */}
          <div className="flex flex-col">
            <div className="border-t border-[#d5c59b]/14 pt-5">
              <p className="text-[10px] tracking-[0.18em] text-[#d3c391]/56">
                STANCE
              </p>

              <div className="mt-4 space-y-4 text-[13px] leading-[2] text-text-soft/70 md:text-[14px]">
                <p>
                  まだ決めきっていない段階でも、
                  <br className="hidden sm:block" />
                  気になることがあれば遠慮なくご相談ください。
                </p>

                <p>
                  状態や飼育環境との相性も含めて、
                  <br className="hidden sm:block" />
                  無理のない形でご案内しています。
                </p>

                <p>
                  はじめての方にもわかりやすいよう、
                  <br className="hidden sm:block" />
                  お迎え前に確認したい点や、
                  飼育を始めるうえで気になりやすいことにも
                  <br className="hidden sm:block" />
                  丁寧にお答えしています。
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-white/6 pt-5">
              <p className="text-[10px] tracking-[0.18em] text-[#d3c391]/56">
                NOTE
              </p>

              <p className="mt-4 max-w-[31em] text-[12px] leading-[1.95] text-text-soft/48 md:text-[13px]">
                情報を並べるだけではなく、
                やり取りしたときの温度まで伝わることを大切にしています。
                <br className="hidden sm:block" />
                個体の魅力だけでなく、
                確認したいことも含めて落ち着いて相談できる場所でありたいと考えています。
              </p>
            </div>
          </div>
        </div>

        {/* bottom note */}
        <div className="mt-8 border-t border-white/6 pt-5">
          <p className="text-[11px] leading-[1.9] text-text-soft/42">
            ※ 表記内容はサンプルです。実際の運営名・登録番号・有効期限などの正式情報に差し替えてご使用ください。
          </p>
        </div>
      </div>
    </section>
  );
}