import sectionBG from "../../assets/images/sectionBG.jpg";

const tabs = [
  "Manufacturing",
  "Automotive",
  "Aerospace",
  "Pharma",
  "Energy",
  "Logistics",
  "Food & Bev",
  "Adv. Mfg",
];

const focusAreas = [
  {
    id: "01",
    title: "Standardised Work Instructions",
    description:
      "Every operator executes to the same proven standard, reducing variation and accelerating productivity across all shifts.",
  },
  {
    id: "02",
    title: "Operator Competency Tracking",
    description:
      "Traceable qualification records ensure every shift runs with verified capability - not assumed knowledge.",
  },
  {
    id: "03",
    title: "Continuous Improvement Loop",
    description:
      "Problems get solved faster when knowledge is structured and lessons are captured systematically at source.",
  },
];

const metrics = [
  { value: "38%", label: "Faster takt close" },
  { value: "24%", label: "Efficiency gain" },
  { value: "2x", label: "Faster onboarding" },
];

const Industries = () => {
  return (
    <section className="bg-white px-6 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00A8C8] text-[10px] font-bold text-white">
            6
          </span>
          <div className="h-px w-12 bg-[#00A8C8]" />
          <span className="text-[13px] font-medium uppercase tracking-[0.16em] text-[#00A8C8]">
            Designed for Industries
          </span>
        </div>

        <h1 className="mx-auto max-w-5xl text-center text-[38px] font-bold leading-tight text-[#0d1b2a] lg:text-[46px]">
          Built for complex operations across industries.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-6 text-[#4D5A60]">
          OKQ combines operations-specific domain knowledge with capability-building
          technology to address performance within industries.
        </p>

        <div className="mt-12 flex items-center justify-between gap-6 overflow-x-auto border-b border-[#D5E8ED] text-[11px] text-[#698188] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`shrink-0 pb-3 ${
                index === 0
                  ? "border-b-2 border-[#00A8C8] font-semibold text-[#00A8C8]"
                  : "hover:text-[#00A8C8]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-[#BFEAF1] shadow-[0_18px_42px_rgba(2,102,126,0.12)] lg:grid-cols-[1.05fr_1fr]">
          <div
            className="relative min-h-[390px] bg-cover bg-center"
            style={{ backgroundImage: `url(${sectionBG})` }}
          >
            <div className="absolute inset-0 bg-[#073A54]/72" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00D7FF]">
                O-MFG-01
              </p>
              <h2 className="text-[30px] font-bold">Manufacturing</h2>
              <p className="mt-5 max-w-2xl text-[12px] leading-6 text-white/84">
                Turn floor experience into standardised work instructions and structured operator training.
                When every shift executes to the same proven standard, variation drops, problems get solved
                faster, and productivity climbs.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <p className="text-[24px] font-bold text-[#00D7FF]">{metric.value}</p>
                    <p className="mt-1 text-[10px] text-white/70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F8FCFD] p-8 lg:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5E8088]">
              Strategic Focus Areas
            </p>

            <div className="mt-6 space-y-6">
              {focusAreas.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00A8C8] text-[10px] font-bold text-white">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#0d1b2a]">{item.title}</h3>
                    <p className="mt-2 text-[12px] leading-5 text-[#6A7A80]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-[#D2E8ED] bg-white p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-[14px] font-bold text-[#0d1b2a]">Industrial Fit Assessment</h3>
                  <p className="mt-2 max-w-md text-[12px] leading-5 text-[#6A7A80]">
                    Benchmark your current operational maturity against sector leaders.
                  </p>
                </div>
                <button className="rounded-md bg-[#00A8C8] px-5 py-3 text-[12px] font-bold text-white transition-colors hover:bg-[#058FA3]">
                  Start Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[15px] font-medium text-[#0d1b2a]">
          &quot;Different industries. Common operational challenge. Knowledge → Capability → Performance.&quot;
        </p>

        <div className="mt-8 text-center">
          <a
            href="/contactUs"
            className="inline-flex rounded-md bg-[#00A8C8] px-9 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#058FA3]"
          >
            Explore Industry Applications
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
