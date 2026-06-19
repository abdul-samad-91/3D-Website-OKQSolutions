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
      id="competency"
      className="px-6 py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #EAF8FA 0%, #F5FBFC 34%, #FFFFFF 62%, #EEF9FB 100%)",
      }}
    >
      <div className="max-w-[1230px] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-7">
          <span className="w-5 h-5 rounded-full bg-[#00B4D7] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
            3
          </span>
          <div className="h-px w-12 bg-[#00B4D7]" />
          <span className="text-[18px] font-medium tracking-[1.3px] uppercase text-[#00A8C8]">
            The OKQ Competency Framework&trade;
          </span>
        </div>

        <h2 className="text-[38px] lg:text-[44px] font-bold text-[#0d1b2a] text-center leading-8">
          Capability drives performance.
        </h2>

        <p className="mt-8 text-center text-[16px] font-bold text-[#02667E]">
          Workforce capability is a competitive advantage.
        </p>

        <p className="mt-5 text-center text-[14px] text-[#4D5A60] leading-6 max-w-3xl mx-auto">
          Experience alone does not guarantee competence. The OKQ Competency Framework&trade; defines capability
          clearly, develops it systematically, and verifies it in practice - a structured progression for every stage of
          workforce maturity.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {competencyLevels.map((level) => (
            <article
              key={level.id}
              className="min-h-[188px] rounded-xl border border-[#00B4D733] bg-[linear-gradient(135deg,#FFFFFF_0%,#FDFEFE_25%,#F5FBFC_50%,#F3FAFC_75%,#F0F9FB_95%)] bg-white/80 p-6 shadow-[0px_4px_8px_#0000001A] "
            >
              <div className="w-14 h-14 p-1 rounded-md bg-[#f8fcfd] flex items-center justify-center text-white text-[18px] font-bold shadow-[2px_4px_8px_#0000001A]">
                <p className="bg-[#00A8C8] rounded-md w-full h-full flex items-center justify-center">
                  {level.number}
                </p>
              </div>
              <h3 className="mt-5 text-[16px] font-semibold text-[##001F27] leading-snug">
                {level.title}
              </h3>
              <p className="mt-3 text-[14px] text-[#001F27] leading-5">
                {level.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[18px] lg:text-[20px] font-semibold text-[#001F27]">
            &ldquo;Machines can be purchased. Operational capability must be built.&rdquo;
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[#4D5A60]">
            <span className="font-bold text-[#3D494D]">KPI Focus:</span>
            {kpiItems.map((item, index) => (
              <span key={item} className="flex items-center gap-6">
                <span>{item}</span>
                {index < kpiItems.length - 1 && <span className="text-[#9CA7AB]">·</span>}
              </span>
            ))}
          </div>

          <a
            href="#standards-compliance"
            className="mt-8 inline-flex rounded-md bg-[#00A8C8] px-10 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-[#058FA3]"
          >
            Explore Standards &amp; Compliance
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompetencyFramework;
