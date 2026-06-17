import sectionBG from "../../assets/images/sectionBG.jpg";

const standardsCards = [
  {
    id: 1,
    title: "ISO 9001",
    description: "quality, competence, documented information, continual improvement.",
  },
  {
    id: 2,
    title: "ISO 45001",
    description: "safety integration, workforce, awareness, risk control",
  },
  {
    id: 3,
    title: "IATF 16949",
    description: "process control, traceability, competency verification",
  },
  {
    id: 4,
    title: "VDA 6.3",
    description: "process-audit rigor and operational consistency",
  },
  {
    id: 5,
    title: "Lean Manufacturing",
    description: "standard work, visual management, waste reduction",
  },
  {
    id: 6,
    title: "Industry 5.0",
    description: "human-centric, resilient, sustainable performance",
  },
];

const kpiItems = [
  "Audit findings",
  "Traceability",
  "Deviation reduction",
  "CAPA effectiveness",
];

const StandardsCompliance = () => {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${sectionBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#02667E]/90" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0 border-2 border-white/40 bg-white/20">
            4
          </span>
          <div className="h-px w-10 bg-white/40" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">
            Standards & Compliance
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[2.2rem] lg:text-[2.8rem] font-extrabold text-white text-center mb-6 leading-tight max-w-4xl mx-auto">
          Built on standards. Designed for compliance. Engineered for performance.
        </h2>

        {/* Body */}
        <p className="text-center text-[14px] text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
          Compliance should strengthen operations, not slow them down. OKQ is designed around globally recognized
          standards and proven operational disciplines, turning requirements into practical systems that strengthen
          execution and consistency. (This is the only section that details standards.)
        </p>

        {/* Standards Grid - 4 columns top row, 2 columns bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {standardsCards.slice(0, 4).map((card) => (
            <div
              key={card.id}
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 flex flex-col gap-3"
            >
              {/* Icon */}
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h4 className="text-[15px] font-bold text-white">{card.title}</h4>
              </div>
              <p className="text-[13px] text-white/70 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {standardsCards.slice(4).map((card) => (
            <div
              key={card.id}
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 flex flex-col gap-3"
            >
              {/* Icon */}
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h4 className="text-[15px] font-bold text-white">{card.title}</h4>
              </div>
              <p className="text-[13px] text-white/70 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Additional standards note */}
        <p className="text-center text-[12px] text-white/60 leading-relaxed max-w-3xl mx-auto mb-10">
          OKQ also aligns with ISO 12100, ISO 14001, ISO/IEC 17025, the EU Machinery Directive 2006/42/EC, and OSHA 1910 — detailed on the Standards & Compliance page.
        </p>

        {/* Quote */}
        <p className="text-[16px] lg:text-[18px] font-bold text-white text-center max-w-4xl mx-auto leading-snug mb-5">
          &ldquo;Compliance should not slow operations. It should strengthen them. OKQ turns standards into operational capability.&rdquo;
        </p>

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
            href="#okq-compliance"
            className="inline-block px-10 py-4 rounded-full text-white text-[15px] font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#00B4D7" }}
          >
            Explore OKQ Compliance & Standards
          </a>
        </div>
      </div>
    </section>
  );
};

export default StandardsCompliance;
