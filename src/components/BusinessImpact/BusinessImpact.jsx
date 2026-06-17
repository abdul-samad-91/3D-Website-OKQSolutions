import roiPhil from "../../assets/images/roiPhil.jpg";

const impactCards = [
  {
    id: 1,
    title: "Productivity",
    description: "less operational friction, faster problem resolution",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4 17 7v6c0 3.5-2.1 6.2-5 7.4-2.9-1.2-5-3.9-5-7.4V7l5-3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6M9.5 12.5 12 15l2.5-2.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Quality",
    description: "stronger consistency, reduced variation, better process discipline",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Safety",
    description: "improved hazard awareness, stronger procedural compliance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4 21 20H3L12 4Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4M12 17h.01" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Workforce",
    description: "faster onboarding, less dependency on key individuals",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 20a5.5 5.5 0 0 1 11 0M14.5 19.5a4.2 4.2 0 0 1 6-3.6" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Leadership",
    description: "greater operational visibility and governance effectiveness",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 17v-4M12 17V8M18 17V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m16 7 2-2 2 2" />
      </svg>
    ),
  },
];

const kpiItems = [
  "Cost of Poor Quality (COPQ)",
  "Cost of repeat issues",
  "Operational resilience",
  "ROI on capability",
];

const BusinessImpact = () => {
  return (
    <section id="business-impact" className="relative overflow-hidden bg-[#217C8C] text-white">
      <div className="px-6 pt-12 pb-[86px] lg:pt-14 lg:pb-[92px]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0A8EA5] text-[10px] font-bold shrink-0">
              5
            </span>
            <div className="h-px w-12 bg-white/70" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white">
              Business Impact &amp; ROI
            </span>
          </div>

          <h2 className="text-[34px] lg:text-[40px] font-bold leading-tight">
            Operational excellence is a performance multiplier.
          </h2>

          <p className="mt-6 text-[12px] leading-[1.75] text-white/82 max-w-[720px] mx-auto">
            Documentation, training, competency, compliance, and operational learning are often treated as support
            activities. In reality they directly influence productivity, quality, safety, workforce capability, and long-term
            profitability. OKQ strengthens the operational foundations that enable consistent execution, faster
            capability development, and improvement at scale.
          </p>
        </div>
      </div>

      <div
        className="relative px-6 pb-16 pt-[136px] lg:pb-[72px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(3,46,58,0.9), rgba(3,46,58,0.93)), url(${roiPhil})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60" />

        <div className="relative z-10 max-w-[1125px] mx-auto">
          <div className="rounded-md border border-[#00B4D7]/35 bg-[#095A6B]/76 px-5 py-5 shadow-[0_18px_46px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-white/45">
              {impactCards.map((card) => (
                <div key={card.id} className="flex min-h-[150px] flex-col items-center px-5 py-3 text-center">
                  <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-md border-2 border-white text-[#00D7FF] shadow-[0_0_18px_rgba(255,255,255,0.85)]">
                    {card.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-[#00D7FF]">{card.title}</h3>
                  <p className="mt-1.5 text-[10px] leading-[1.55] text-white/74">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[110px] text-center">
            <p className="mx-auto max-w-3xl text-[12px] leading-[1.65] text-white/86">
              <span className="font-bold text-white">ROI philosophy:</span> Small improvements compound. When knowledge is structured, capability is measurable,
              and execution is standardized, gains accumulate across productivity, quality, safety, and profitability.
              Operational capability is not overhead - it is strategic infrastructure.
            </p>

            <div className="mt-[58px] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-white/78">
              <span className="font-bold text-white">KPI Focus:</span>
              {kpiItems.map((item, index) => (
                <span key={item} className="flex items-center gap-6">
                  <span>{item}</span>
                  {index < kpiItems.length - 1 && <span className="text-white/38">·</span>}
                </span>
              ))}
            </div>

            <a
              href="#business-impact"
              className="mt-7 inline-flex rounded-md bg-[#00B4D7] px-8 py-3 text-[12px] font-bold text-white transition-colors hover:bg-[#0699B6]"
            >
              Explore Business Impact &amp; ROI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
