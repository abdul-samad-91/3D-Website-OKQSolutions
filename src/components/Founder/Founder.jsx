import { useState } from "react";

const visionItems = [
  {
    title: "The belief behind OKQ",
    body:
      "Industrial excellence begins with knowledge that is captured, standardized, shared, and continuously improved. When knowledge becomes a system, learning accelerates, capability grows, execution becomes consistent, risk falls, and performance rises.",
  },
  {
    title: "From tribal knowledge to industrial intelligence",
    body:
      "OKQ helps teams convert experience, lessons learned, and operational standards into structured intelligence that can be reused across roles, shifts, sites, and generations of workers.",
  },
  {
    title: "A human-centered industrial model",
    body:
      "Technology should strengthen people, not replace judgment. OKQ keeps operators, supervisors, engineers, and leaders at the center of every capability-building workflow.",
  },
  {
    title: "A future where industry learns continuously",
    body:
      "Every problem solved, assessment completed, and improvement captured becomes part of a living knowledge system that makes the next execution stronger.",
  },
  {
    title: "The industrial philosophy of OKQ",
    body:
      "Operational capability compounds when knowledge, standards, learning, compliance, and improvement work together as one operating discipline.",
  },
];

const Founder = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[linear-gradient(135deg,#EAF8FA_0%,#FFFFFF_48%,#EAF8FA_100%)] px-6 py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00A8C8] text-[10px] font-bold text-white">
            7
          </span>
          <div className="h-px w-12 bg-[#00A8C8]" />
          <span className="text-[18px] font-medium uppercase tracking-[0.16em] text-[#00A8C8]">
            Founder Vision
          </span>
        </div>

        <h2 className="mx-auto max-w-6xl text-center text-[36px] font-semibold leading-tight text-[#0d1b2a] lg:text-[40px]">
          Reimagining how industry learns, performs, and improves.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-6 text-[#4D5A60]">
          Modern industry has invested heavily in automation, technology, and data. Yet one of its most valuable
          assets remains underused: operational knowledge. OKQ transforms that knowledge into structured
          capability that compounds over time.
        </p>

        <div className="mt-16 space-y-6">
          {visionItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="overflow-hidden rounded-lg border border-[#BFEAF1] bg-[#F4FCFD] shadow-[0_6px_16px_rgba(0,168,200,0.14)]"
              >
                <button
                  type="button"
                  className="relative flex w-full items-center justify-between gap-5 px-8 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-bold text-[15px] text-[#060b0c]">{item.title}</span>
                  <span className="pointer-events-none absolute right-[-10px] top-[-90px] h-[200px] w-[130px] rounded-l-full bg-[linear-gradient(135deg,#00B4D733_0%,#00000000_100%)]" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`relative z-10 h-5 w-5 shrink-0 text-[#02667E] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-8 pb-7 pr-16">
                    <p className="text-[12px] leading-6 text-[#4D5A60]">{item.body}</p>
                  </div>
                )}
                <div className="h-[3px] bg-[#00B4D7]" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-[#BFEAF1] bg-[#E7FAFC] px-10 py-9">
          <div className="text-[56px] leading-none text-[#B9EEF5]">“</div>
          <blockquote className="-mt-5 max-w-4xl text-[19px] leading-8 text-[#4D5A60]">
            The greatest industrial asset is not machinery - it is human knowledge transformed into
            organizational capability. Our mission is to preserve it, strengthen it, and scale it responsibly.
          </blockquote>
          <div className="mt-7 border-l-4 border-[#00B4D7] pl-5">
            <p className="text-[12px] font-bold text-[#02667E]">Founder, OKQ Solutions</p>
            <p className="mt-1 text-[11px] text-[#6A7A80]">Operational Intelligence Platform</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="/signup"
            className="inline-flex min-w-[240px] justify-center rounded-md bg-[#00A8C8] px-8 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-[#058FA3]"
          >
            Build with OKQ Solutions
          </a>
          <a
            href="/contactUs"
            className="inline-flex min-w-[310px] justify-center rounded-md border border-[#00A8C8] bg-white/70 px-8 py-3.5 text-[13px] font-bold text-[#00A8C8] transition-colors hover:bg-white"
          >
            Book an Industrial Discovery Session
          </a>
        </div>

        <p className="mt-6 text-center text-[12px] text-[#00B4D7]">
          Or run the Operational Maturity Assessment&trade;
        </p>
      </div>
    </section>
  );
};

export default Founder;
