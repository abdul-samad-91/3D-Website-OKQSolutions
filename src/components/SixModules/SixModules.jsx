const kpiItems = ["MTTR", "First Pass Yield", "Knowledge retention", "Document adoption"];

const modulesData = [
  {
    id: 1,
    description: "controlled, searchable operational knowledge (SOPs, work instructions, version control)",
    position: "left-[5%] top-[40%]",
    icon: "book",
  },
  {
    id: 2,
    description: "standardized execution (standard work, visual guidance, quality gates, abnormal-condition guidance)",
    position: "left-[27%] top-[17%]",
    icon: "check",
  },
  {
    id: 3,
    description: "structured operational learning, onboarding, and role-based skill development",
    position: "left-[43%] top-[52%]",
    icon: "check",
  },
  {
    id: 4,
    description: "competency verification through practical and scenario-based assessment",
    position: "left-[60%] top-[72%]",
    icon: "check",
  },
  {
    id: 5,
    description: "guided troubleshooting and root-cause learning (5 Why, Fishbone, A3)",
    position: "left-[78%] top-[65%]",
    icon: "check",
  },
  {
    id: 6,
    description: "standards alignment, governance, traceability, and audit-readiness",
    position: "left-[94%] top-[30%]",
    icon: "check",
  },
];

const ModuleIcon = ({ type }) => {
  if (type === "book") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 0 1 6.5 8H20M8 6v10" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15.5 9.75" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
};

const SixModules = () => {
  return (
    <section className="bg-white px-6 pb-16 lg:pb-20">
      <div className="max-w-[1230px] mx-auto">
        <h2 className="text-center text-[28px] lg:text-[30px] font-bold text-[#0d1b2a] mb-8">
          The six modules
        </h2>

        <div className="relative hidden  overflow-hidden lg:block h-[360px]">
          <svg
            viewBox="0 0 1180 330"
            className="absolute left-[-40px] h-full  w-[1530px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M-10 164C03 06 73 -20 275 94C390 165 438 247 576 258C722 269 855 248 970 118C1018 64 1060 56 "
              stroke="#00A8C8"
              strokeWidth="1.35"
              strokeLinecap="round"
            />
          </svg>

          {modulesData.map((module) => (
            <div
              key={module.id}
              className={`absolute ${module.position} -translate-x-1/2 flex w-[150px] flex-col items-center text-center`}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-[#00A8C8] shadow-[0_8px_18px_rgba(0,168,200,0.22)]">
                <ModuleIcon type={module.icon} />
              </div>
              <p className="text-[12px] leading-[1.45] text-[#4D5A60]">{module.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:hidden">
          {modulesData.map((module) => (
            <div key={module.id} className="flex gap-4 rounded-lg border border-[#D8EEF3] bg-[#F7FCFD] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#00A8C8]">
                <ModuleIcon type={module.icon} />
              </div>
              <p className="text-[13px] leading-6 text-[#4D5A60]">{module.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg bg-[linear-gradient(90deg,#008FA0_50%,#008FA0_100%)] px-8 py-8 text-white lg:px-10">
          <div className="flex gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-5 h-10 w-10 shrink-0" fill="white" viewBox="0 0 24 24">
              <path d="M12 3.5 14.1 9.9 20.5 12 14.1 14.1 12 20.5 9.9 14.1 3.5 12 9.9 9.9 12 3.5Z" />
            </svg>
            <div>
              <h3 className="text-[16px] font-bold">Intelligent enablement, responsibly applied</h3>
              <p className="mt-3 max-w-5xl text-[13px] leading-6 text-white/90">
                Agentic AI accelerates documentation, learning content, knowledge retrieval, and problem-solving - while people,
                standards, and operational discipline stay at the center. Technology supports execution; it does not replace judgment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[18px] lg:text-[20px] font-semibold italic text-[#0D1F3C]">
            “OKQ does not digitize documentation. It structures operational capability.”
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[12px] text-[#59666B]">
            <span className="font-bold text-[#0d1b2a]">KPI Focus:</span>
            {kpiItems.map((item) => (
              <span key={item} className="rounded-full border border-[#D0E4ED]  px-4 py-1.5">
                {item}
              </span>
            ))}
          </div>

          <a
            href="#competency"
            className="mt-6 inline-flex rounded-md bg-[#00B4D7] px-10 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#058FA3]"
          >
            Explore the Competency Framework
          </a>
        </div>
      </div>
    </section>
  );
};

export default SixModules;
