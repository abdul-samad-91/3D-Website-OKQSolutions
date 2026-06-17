import operationalExcellence from "../../assets/images/operationalExcellance.jpg";
import roiPhil from "../../assets/images/roiPhil.jpg";
import sectionBG from "../../assets/images/sectionBG.jpg";

const standardsCards = [
  {
    id: 1,
    title: "ISO 9001",
    description: "quality, competence, documented information, continual improvement",
    image: roiPhil,
    imagePosition: "center",
  },
  {
    id: 2,
    title: "ISO 45001",
    description: "safety integration, workforce awareness, risk control",
    image: operationalExcellence,
    imagePosition: "center",
  },
  {
    id: 3,
    title: "IATF 16949",
    description: "process control, traceability, competency verification",
    image: sectionBG,
    imagePosition: "center 42%",
  },
  {
    id: 4,
    title: "VDA 6.3",
    description: "process-audit rigor and operational consistency",
    image: roiPhil,
    imagePosition: "right center",
  },
  {
    id: 5,
    title: "Lean Manufacturing",
    description: "standard work, visual management, waste reduction",
    image: operationalExcellence,
    imagePosition: "center 34%",
    wide: true,
  },
  {
    id: 6,
    title: "Industry 5.0",
    description: "human-centric, resilient, sustainable performance",
    image: sectionBG,
    imagePosition: "center",
    wide: true,
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
    <section id="standards-compliance" className="relative overflow-hidden bg-[#0A4B5B] px-6 py-16 lg:py-20">
      <div className="absolute -left-48 -top-48 h-[520px] w-[620px] rounded-full border-[120px] border-[#17697A]/35" />
      <div className="absolute -right-56 -top-16 h-[560px] w-[640px] rounded-full border-[120px] border-[#17697A]/30" />
      <div className="absolute -bottom-64 left-1/3 h-[520px] w-[620px] rounded-full border-[120px] border-[#17697A]/25" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0A8EA5] text-[10px] font-bold shrink-0">
            4
          </span>
          <div className="h-px w-12 bg-white/70" />
          <span className="text-[13px] font-medium tracking-[0.16em] uppercase text-white">
            Standards &amp; Compliance
          </span>
        </div>

        <h2 className="text-[32px] lg:text-[40px] font-bold text-white text-center leading-tight max-w-4xl mx-auto">
          Built on standards. Designed for compliance.
          <br />
          Engineered for performance.
        </h2>

        <p className="mt-6 text-center text-[13px] text-white/72 leading-6 max-w-2xl mx-auto">
          Compliance should strengthen operations, not slow them down. OKQ is designed around
          globally recognized standards and proven operational disciplines, turning requirements
          into practical systems that strengthen execution and consistency.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {standardsCards.map((card) => (
            <article
              key={card.id}
              className={`overflow-hidden rounded-lg border border-white/10 bg-[#125D6D] shadow-[0_18px_42px_rgba(0,0,0,0.18)] ${
                card.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className="h-[86px] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(10,75,91,0.05), rgba(10,75,91,0.15)), url(${card.image})`,
                  backgroundPosition: card.imagePosition,
                }}
              />
              <div className="min-h-[86px] bg-[#155F70]/95 px-5 py-4">
                <h3 className="text-[15px] font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-white/72">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-3xl text-[16px] lg:text-[17px] font-medium leading-7 text-white">
            "Compliance should not slow operations. It should strengthen them. OKQ turns standards
            into operational capability."
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-[12px] text-white/72">
            <span className="font-bold text-white">KPI Focus:</span>
            {kpiItems.map((item) => (
              <span key={item} className="rounded-full border border-white/18 bg-white/5 px-4 py-1.5">
                {item}
              </span>
            ))}
          </div>

          <a
            href="#okq-compliance"
            className="mt-8 inline-flex rounded-md border border-white/35 bg-white/5 px-10 py-4 text-[14px] font-bold text-white transition-colors hover:bg-white/12"
          >
            Explore OKQ Compliance &amp; Standards
          </a>
        </div>
      </div>
    </section>
  );
};

export default StandardsCompliance;
