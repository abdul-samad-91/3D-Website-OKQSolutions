import SolutionButton from "./SolutionButton";

const causes = [
  ["Improvement treated as a project", "Momentum fades when it isn't embedded in daily operations"],
  ["Training without capability", "Completion is measured, but readiness stays unclear"],
  ["Reactive problem-solving", "Problems are fixed, but learning isn't retained"],
  ["Underdeveloped workforce capability", "Human capability is left unmanaged as strategic infrastructure"],
  ["Documentation without execution", "Standards exist but aren't consistently applied"],
  ["Limited operational visibility", "Capability gaps and risks remain hidden"],
  ["Disconnected improvement efforts", "Changes don't update standards, learning, or qualification"],
];

const SolutionChallenges = () => (
  <section className="bg-white px-6 py-24 lg:py-[100px]">
    <div className="mx-auto max-w-[1280px]">
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="text-[34px] font-extrabold leading-[1.15] text-[#17252B] sm:text-[46px]">
          Improvement fails when systems remain unchanged.
        </h2>
        <p className="mx-auto mt-8 max-w-[780px] text-[13px] leading-[1.8] text-[#66737A]">
          Organizations invest heavily in training, Lean programs, digital tools, audits, and improvement projects -
          yet the same problems recur because the underlying operational systems stay fragmented. Lasting improvement
          is built through stronger systems, not isolated initiatives.
        </p>
      </div>

      <div className="mt-16 rounded-[4px] bg-[linear-gradient(105deg,#EAF9FC_0%,#F9FEFF_52%,#EAF9FC_100%)] px-8 py-10 lg:px-14">
        <h3 className="text-center text-[19px] font-extrabold text-[#02667E]">Common causes</h3>
        <div className="mt-8 grid gap-x-20 gap-y-6 md:grid-cols-2">
          {causes.map(([title, text]) => (
            <div key={title} className="flex gap-4">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#00B4D7] text-[10px] font-bold text-[#00B4D7]">
                i
              </span>
              <div>
                <p className="text-[12px] font-extrabold text-[#1D2A30]">{title}</p>
                <p className="mt-2 text-[11px] leading-[1.6] text-[#6C777D]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[4px] border border-[#BEEAF1] bg-white px-8 py-8 lg:px-12">
        <h3 className="text-[20px] font-extrabold text-[#02667E]">Start with operational truth</h3>
        <p className="mt-5 text-[12px] leading-[1.75] text-[#59666C]">
          Before changing systems, OKQ makes the current state visible. The Operational Maturity Assessment&trade;
          (OMAT) profiles capability strength, operational risk, and the highest-value improvement priorities - so
          investment is guided by evidence, not assumption.
        </p>
        <p className="mt-6 text-[12px] leading-[1.75] text-[#59666C]">You cannot improve what you cannot clearly see.</p>
      </div>

      <div className="mt-8 flex justify-center">
        <SolutionButton href="/contactUs" className="min-h-[48px] min-w-[380px] max-w-full px-6">
          Run an Operational Maturity Assessment&trade;
        </SolutionButton>
      </div>
    </div>
  </section>
);

export default SolutionChallenges;
