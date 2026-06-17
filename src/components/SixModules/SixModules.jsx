import sixMods from "../../assets/images/sixMods.svg";

const kpiItems = ["MTTR", "First Pass Yield", "Knowledge retention", "Document adoption"];

const modulesData = [
  {
    id: 1,
    name: "OKQ Core™",
    description:
      "controlled, searchable operational knowledge (SOPs, work instructions, version control)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "OKQ Flow™",
    description:
      "standardized execution (standard work, visual guidance, quality gates, abnormal-condition guidance)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "OKQ Academy™",
    description:
      "structured operational learning, onboarding, and role-based skill development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "OKQ Insight™",
    description:
      "competency verification through practical and scenario-based assessment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "OKQ Resolve™",
    description:
      "guided troubleshooting and root-cause learning (5 Why, Fishbone, A3)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "OKQ Guard™",
    description:
      "standards alignment, governance, traceability, and audit-readiness",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 0c.896 0 1.767.105 2.604.303M12 2.25C8.922 2.25 6.138 3.6 4.23 5.748m7.77-3.498v0ZM12 21.75c5.385 0 9.75-4.365 9.75-9.75M12 21.75c-5.385 0-9.75-4.365-9.75-9.75m9.75 9.75v0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

const SixModules = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-[2rem] lg:text-[2.4rem] font-semibold text-[#0d1b2a] text-center mb-14">
          The six modules
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {modulesData.map((mod) => (
            <div
              key={mod.id}
              className="relative rounded-2xl overflow-hidden flex flex-col gap-5 p-8 shadow-xl"
              style={{
                background: "linear-gradient(160deg, #f8fdfe 0%, #eaf8fa 100%)",
                boxShadow: "0 8px 32px 0 rgba(2,102,126,0.18), 0 2px 8px 0 rgba(2,102,126,0.10)",
              }}
            >
              {/* Icon */}
              <div
                className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center shrink-0 bg-[#00A8C9]"
              >
                {mod.icon}
              </div>

              {/* Name */}
              <h3 className="text-[18px] font-extrabold text-[#0d1b2a]">
                {mod.name}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {mod.description}
              </p>

            </div>
          ))}
        </div>

        {/* ── Intelligent Enablement card ── */}
        <div
          className="relative mt-10 rounded-2xl border border-[#b8e6ef] overflow-hidden px-10 py-8 flex flex-col gap-4"
          style={{ background: "linear-gradient(135deg, #f0fbfd 0%, #e0f6fa 100%)" }}
        >
          {/* Decorative background image */}
          <img
            src={sixMods}
            alt=""
            className="absolute right-0 top-0 h-full w-auto opacity-100 pointer-events-none select-none"
          />

          {/* Heading row */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#00677D" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
            <h3 className="text-[20px] font-semibold text-[#00677D]">
              Intelligent enablement, responsibly applied
            </h3>
          </div>

          {/* Body */}
          <p className="text-[14px] text-gray-600 leading-relaxed max-w-5xl">
            Agentic AI accelerates documentation, learning content, knowledge retrieval, and problem-solving — while people, standards, and operational discipline stay at the center. Technology supports execution; it does not replace judgment.
          </p>
        </div>

        {/* ── Quote ── */}
        <div className="mt-14 text-center">
          <p className="text-[18px] lg:text-[20px] font-bold text-[#0d1b2a] max-w-3xl mx-auto leading-snug">
            &ldquo;OKQ does not digitize documentation. It structures operational capability.&rdquo;
          </p>

          {/* KPI row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[14px] text-[#3D494D]">
            <span className="font-bold">KPI Focus:</span>
            {kpiItems.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-400">·</span>}
                <span>{item}</span>
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#competency"
            className="inline-block mt-8 px-10 py-4 text-white text-[15px] font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#00B4D7" }}
          >
            Explore the Competency Framework
          </a>
        </div>

      </div>
    </section>
  );
};

export default SixModules;
