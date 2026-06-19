import operations from "../../assets/images/Operations.png";
import teamCapability from "../../assets/images/team-capability-visibiity.png";
import operationalExcellence from "../../assets/images/operationalExcellance.jpg";
import sectionBG from "../../assets/images/sectionBG.jpg";
import roiPhil from "../../assets/images/roiPhil.jpg";

const imageTiles = [
  {
    src: operations,
    alt: "Industrial automation equipment",
    className: "lg:col-span-4 lg:row-span-3 min-h-[290px] lg:min-h-0 grayscale",
    imageClassName: "object-[52%_center]",
  },
  {
    src: teamCapability,
    alt: "Technical team in operational gear",
    className: "lg:col-span-2 lg:row-span-1 aspect-[1.2/1] rounded-full",
    imageClassName: "object-[72%_48%]",
  },
  {
    src: sectionBG,
    alt: "Process pipework and plant infrastructure",
    className: "lg:col-span-4 lg:row-span-1 min-h-[118px]",
    imageClassName: "object-[54%_center]",
  },
  {
    src: roiPhil,
    alt: "Operators inspecting production equipment",
    className: "lg:col-span-3 lg:row-span-1 min-h-[118px]",
    imageClassName: "object-[center_48%]",
  },
  {
    src: operationalExcellence,
    alt: "Connected enterprise systems",
    className: "lg:col-span-3 lg:row-span-1 min-h-[118px]",
    imageClassName: "object-[center_center]",
  },
  {
    src: roiPhil,
    alt: "Automated production line",
    className: "lg:col-span-6 lg:row-span-1 min-h-[128px]",
    imageClassName: "object-[center_58%]",
  },
];

const kpis = [
  "ROI on capability",
  "Time-to-competence",
  "Cost of Poor Quality (COPQ)",
  "Operational resilience",
];

const ERP = () => {
  return (
    <section id="erp" className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 pt-12 pb-10 lg:pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[30px] font-extrabold leading-[1.08] text-[#092630] sm:text-[40px] lg:text-[44px]">
            Operational capability infrastructure - as strategic as ERP.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[12px] leading-[1.65] text-[#5D6A70]">
            When knowledge, standards, learning, competency, troubleshooting, governance, and improvement run as one
            system, capability compounds. Onboarding accelerates, execution stabilizes, problems resolve faster,
            knowledge stays in the organization, and leadership gains the visibility to invest with confidence. This is
            infrastructure, not overhead.
          </p>

          <p className="mt-7 text-[13px] text-[#5D6A70]">
            OKQ turns fragmented operational activity into connected, measurable, enterprise-grade capability.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] font-semibold text-[#007EA0]">
            <span>KPI Focus:</span>
            {kpis.map((kpi, index) => (
              <span key={kpi}>
                {kpi}
                {index < kpis.length - 1 ? " -" : ""}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-[1000px]">
          <div className="absolute left-0 top-0 z-10 hidden -translate-y-[calc(100%-2px)] lg:block">
            <p className="w-[118px] text-[16px] font-extrabold leading-[1.05] text-[#081F28]">
              Explore our Operations
            </p>
          </div>

          <a
            href="#platform-architecture"
            aria-label="Explore our Operations"
            className="absolute left-[112px] top-[8px] z-20 hidden h-11 w-11 items-center justify-center rounded-full bg-[#00644F] text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#007B63] lg:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>

          <div className="grid grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-10 lg:grid-rows-[136px_136px_136px]">
            {imageTiles.map((tile) => (
              <div key={tile.alt} className={`overflow-hidden rounded-[18px] bg-[#DCE8EA] ${tile.className}`}>
                <img
                  src={tile.src}
                  alt={tile.alt}
                  className={`h-full w-full object-cover ${tile.imageClassName}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pt-14 pb-20 lg:pt-20 lg:pb-24">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#platform-architecture"
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#00A8C8] px-8 text-[12px] font-medium text-white shadow-[0_10px_24px_rgba(0,168,200,0.24)] transition-colors hover:bg-[#058FA3]"
          >
            Explore Platform Architecture
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>

          <a
            href="#discovery"
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#00A8C8] px-8 text-[12px] font-medium text-[#0088A5] transition-colors hover:bg-[#EAFBFE]"
          >
            Book a Discovery Session
          </a>
        </div>

        <div className="mt-20 text-center">
          <a
            href="#assessment"
            className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[#B8E6EF] px-8 text-[11px] font-medium text-[#00A8C8] transition-colors hover:bg-[#F3FCFE]"
          >
            Run the Operational Maturity Assessment
          </a>
        </div>
      </div>

      <div className="bg-[linear-gradient(90deg,#004854_0%,#0093A9_100%)] px-6 py-14 text-center">
        <p className="text-[13px] text-white/86">Where operational knowledge becomes measurable performance.</p>
      </div>
    </section>
  );
};

export default ERP;
