import SolutionButton from "./SolutionButton";
import SolutionIcon from "./SolutionIcons";

const stages = [
  ["01", "Assess", "Understand current maturity, capability gaps, and operational risks", "search"],
  ["02", "Design", "Create systems aligned with business reality and operational needs", "list"],
  ["03", "Implement", "Deploy standards, learning systems, governance, and capability frameworks", "sync"],
  ["04", "Validate", "Confirm adoption, readiness, and measurable operational impact", "shield"],
  ["05", "Scale", "Extend proven systems across teams, sites, and functions", "expand"],
  ["06", "Sustain", "Embed ownership, governance, and continuous improvement", "link"],
];

const SolutionDeliveryStages = () => (
  <section className="bg-[#F5F6F7] px-5 py-24 lg:py-[96px]">
    <div className="mx-auto max-w-[1340px] text-center">
      <h2 className="text-[34px] font-extrabold leading-[1.15] text-[#121A21] sm:text-[52px]">
        Assess <span className="text-[#00A8C8]">-&gt;</span> Design <span className="text-[#00A8C8]">-&gt;</span> Implement{" "}
        <span className="text-[#00A8C8]">-&gt;</span> Validate <span className="text-[#00A8C8]">-&gt;</span> Scale{" "}
        <span className="text-[#00A8C8]">-&gt;</span>Sustain
      </h2>
      <p className="mx-auto mt-7 max-w-[760px] text-[16px] leading-[1.55] text-[#5E6970]">
        Every OKQ engagement follows a structured delivery model built to create sustainable operational capability -
        not temporary improvement activity.
      </p>
      <div className="mt-12 inline-flex rounded-full bg-[#D7E7EA] px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#02667E]">
        The six stages
      </div>

      <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
        <div className="absolute left-10 right-10 top-1/2 hidden h-px bg-[#C9E5EA] lg:block" />
        {stages.map(([number, title, text, icon], index) => (
          <article
            key={number}
            className={`relative z-10 mx-auto flex min-h-[250px] w-full max-w-[214px] flex-col items-center justify-center rounded-[4px] bg-white px-7 py-8 shadow-[0_12px_28px_rgba(22,36,46,0.06)] ${
              index % 2 === 0 ? "lg:mt-[70px]" : ""
            }`}
          >
            <span
              className={`absolute flex h-[48px] w-[48px] items-center justify-center rounded-full border-2 border-[#00B4D7] bg-white text-[13px] font-bold text-[#00A8C8] ${
                index % 2 === 0 ? "-top-6" : "-bottom-6"
              }`}
            >
              {number}
            </span>
            <SolutionIcon name={icon} className="h-6 w-6 text-[#00A8C8]" />
            <div className="mt-7 flex items-center gap-4">
              <span className="h-32 w-[4px] bg-[#00B4D7]" />
              <div>
                <h3 className="text-[19px] font-extrabold text-[#20282E]">{title}</h3>
                <p className="mt-4 text-[12px] leading-[1.55] text-[#657176]">{text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mx-auto mt-24 max-w-[820px] text-[25px] font-extrabold leading-[1.25] text-[#172029]">
        Transformation becomes sustainable when systems, people, and governance evolve together.
      </h3>
      <div className="mt-10">
        <SolutionButton href="/contactUs" className="min-w-[440px] max-w-full">
          Start Your Operational Capability Journey
        </SolutionButton>
      </div>
    </div>
  </section>
);

export default SolutionDeliveryStages;
