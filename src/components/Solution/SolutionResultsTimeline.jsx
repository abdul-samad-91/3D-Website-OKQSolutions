import SolutionButton from "./SolutionButton";
import SolutionIcon from "./SolutionIcons";

const strengths = [
  ["01", "Productivity", "Less operational friction, faster onboarding, greater workforce effectiveness.", "list"],
  ["02", "Quality", "Improved consistency, reduced variation, stronger process control.", "badge"],
  ["03", "Safety", "Better hazard awareness, improved procedural compliance, stronger control.", "flame"],
  ["04", "Workforce capability", "Faster qualification, increased flexibility, less dependency on key individuals.", "users"],
  ["05", "Compliance", "Improved audit readiness, greater traceability, stronger governance.", "shield"],
  ["06", "Leadership", "Better visibility, stronger decision-making, greater resilience.", "users"],
];

const ResultCard = ({ item, index }) => {
  const isLeft = index % 2 === 1;

  return (
    <div className="relative grid min-h-[170px] items-center lg:grid-cols-[1fr_90px_1fr]">
      <article
        className={`w-full max-w-[470px] bg-white px-8 py-8 shadow-[0_2px_0_rgba(255,255,255,0.8)] ${
          isLeft
            ? "justify-self-start border-r-[8px] border-[#00B4D7] text-right lg:col-start-1"
            : "justify-self-end border-l-[8px] border-[#00B4D7] text-left lg:col-start-3"
        }`}
      >
        <p className="text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#00A8C8]">Strength {item[0]}</p>
        <h3 className="mt-4 text-[26px] font-extrabold text-[#121B25]">{item[1]}</h3>
        <p className="mt-5 text-[14px] leading-[1.6] text-[#7B858B]">{item[2]}</p>
      </article>
      <span className="absolute left-1/2 top-1/2 z-10 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#00B4D7] bg-white text-[#00A8C8]">
        <SolutionIcon name={item[3]} className="h-8 w-8" />
      </span>
    </div>
  );
};

const SolutionResultsTimeline = () => (
  <section className="bg-[#F5F6F7] px-6 pb-0 pt-24 lg:pt-[100px]">
    <div className="mx-auto max-w-[1120px]">
      <div className="mx-auto max-w-[780px] text-center">
        <h2 className="text-[36px] font-extrabold leading-[1.05] text-[#121B25] sm:text-[50px]">
          Measurable results across the enterprise.
        </h2>
        <p className="mx-auto mt-8 max-w-[710px] text-[15px] leading-[1.7] text-[#7A858B]">
          Organizations that strengthen operational capability are better positioned to improve performance where it
          matters - across productivity, quality, safety, workforce capability, compliance, and leadership.
        </p>
      </div>

      <div className="relative mx-auto mt-24 max-w-[940px] pb-16">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-[3px] -translate-x-1/2 bg-[#00B4D7] lg:block" />
        <div className="space-y-12">
          {strengths.map((item, index) => (
            <ResultCard key={item[0]} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[720px] items-center justify-center gap-4 rounded-full border border-[#DDE6E8] bg-white px-6 py-5 text-center text-[14px] text-[#526066] shadow-[0_8px_18px_rgba(22,36,46,0.04)]">
        <SolutionIcon name="bolt" className="h-4 w-4 shrink-0 text-[#00A8C8]" />
        <span>Stronger operational systems create performance that compounds over time.</span>
      </div>

      <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <SolutionButton href="/contactUs" className="min-w-[300px]">Book a Discovery Session</SolutionButton>
        <SolutionButton href="/contactUs" variant="outline" className="min-w-[390px] max-w-full">
          Run the Operational Maturity Assessment&trade;
        </SolutionButton>
      </div>
    </div>

    <div className="mt-24 bg-[linear-gradient(90deg,#00515F_0%,#009AB2_100%)] py-16 text-center">
      <p className="text-[16px] text-[#BFEAF1]">Where operational knowledge becomes measurable performance.</p>
    </div>
  </section>
);

export default SolutionResultsTimeline;
