import roiPhil from "../../assets/images/roiPhil.jpg";

const impactCards = [
  {
    id: 1,
    title: "Productivity",
    description: "less operational friction, faster problem resolution",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Quality",
    description: "stronger consistency, reduced variation, better process discipline",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Safety",
    description: "improved hazard awareness, stronger procedural compliance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Workforce",
    description: "faster onboarding, less dependency on key individuals",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Leadership",
    description: "greater operational visibility and governance effectiveness",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
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

const RoiPhilosophy = () => {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${roiPhil})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a2e3b]/85" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Impact Cards Row */}
        <div className="rounded-2xl border border-[#00B4D7]/30 bg-[#0a3040]/60 backdrop-blur-md p-6 mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#00B4D7]/20">
            {impactCards.map((card) => (
              <div key={card.id} className="flex flex-col items-center text-center px-4 py-5 gap-3">
                {/* Icon in circle */}
                <div className="w-16 h-16 rounded-full border-2 border-[#00B4D7]/50 flex items-center justify-center text-[#00B4D7]">
                  {card.icon}
                </div>
                {/* Title */}
                <h4 className="text-[14px] font-bold text-[#00B4D7]">{card.title}</h4>
                {/* Description */}
                <p className="text-[12px] text-white/70 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Philosophy */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[14px] text-white/90 leading-relaxed">
            <span className="font-bold text-white">ROI philosophy:</span> Small improvements compound. When knowledge is structured, capability is measurable,
            and execution is standardized, gains accumulate across productivity, quality, safety, and profitability.
            Operational capability is not overhead — it is strategic infrastructure.
          </p>
        </div>

        {/* KPI Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-[14px] text-white mb-8">
          <span className="font-bold">KPI Focus:</span>
          {kpiItems.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span className="text-white/40">·</span>}
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#business-impact"
            className="inline-block px-10 py-4 rounded-full text-white text-[15px] font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#00B4D7" }}
          >
            Explore Business Impact & ROI
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoiPhilosophy;
