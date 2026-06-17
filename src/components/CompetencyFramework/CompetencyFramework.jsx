const competencyLevels = [
  {
    id: 1,
    number: 1,
    title: "Assisted Operator",
    description: "learning through guided execution",
  },
  {
    id: 2,
    number: 2,
    title: "Autonomous Operator",
    description: "executing work independently and consistently",
  },
  {
    id: 3,
    number: 3,
    title: "Certified Trainer",
    description: "developing capability in others",
  },
  {
    id: 4,
    number: 4,
    title: "Troubleshooting & Line Leader",
    description: "diagnosing problems and restoring performance",
  },
  {
    id: 5,
    number: 5,
    title: "Problem Solving & Team Leader",
    description: "leading improvement and operational excellence",
  },
];

const kpiItems = [
  "Time-to-competence",
  "Training effectiveness",
  "Workforce flexibility",
  "Succession readiness",
];

const CompetencyFramework = () => {
  return (
    <section
      className="py-20 px-6"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FDFEFE 8.33%, #FAFDFE 16.67%, #F8FCFD 25%, #F5FBFC 33.33%, #F3FAFC 41.67%, #F0F9FB 50%, #EEF9FB 62.5%, #ECF8FB 75%, #EAF8FA 87.5%, #E8F7FA 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0"
            style={{ backgroundColor: "#00B4D7" }}
          >
            3
          </span>
          <div className="h-px w-10 bg-gray-300" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00B4D7]">
            The OKQ Competency Framework™
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[2.5rem] lg:text-[3rem] font-extrabold text-[#0d1b2a] text-center mb-5 leading-tight">
          Capability drives performance.
        </h2>

        {/* Subtitle */}
        <p className="text-center text-[16px] font-bold text-[#02667E] mb-5">
          Workforce capability is a competitive advantage.
        </p>

        {/* Body */}
        <p className="text-center text-[14px] text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
          Experience alone does not guarantee competence. The OKQ Competency Framework™ defines capability
          clearly, develops it systematically, and verifies it in practice — a structured progression for every stage of
          workforce maturity.
        </p>

        {/* Competency Levels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
          {competencyLevels.map((level) => (
            <div
              key={level.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Number Circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[18px] font-bold shadow-md"
                style={{ backgroundColor: "#00B4D7" }}
              >
                {level.number}
              </div>

              {/* Title */}
              <h4 className="text-[14px] font-bold text-[#0d1b2a] leading-tight">
                {level.title}
              </h4>

              {/* Description */}
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {level.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-[18px] lg:text-[20px] font-bold text-[#0d1b2a] text-center max-w-3xl mx-auto leading-snug">
          &ldquo;Machines can be purchased. Operational capability must be built.&rdquo;
        </p>

        {/* KPI Row */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[14px] text-[#0d1b2a]">
          <span className="font-bold">KPI Focus:</span>
          {kpiItems.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-400">·</span>}
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a
            href="#standards-compliance"
            className="inline-block px-10 py-4 rounded-full text-white text-[15px] font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#00B4D7" }}
          >
            Explore Standards & Compliance
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompetencyFramework;
