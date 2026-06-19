import teamCapabilityImg from "../../assets/images/team-capability-visibiity.png";

const visibilityItems = [
  {
    title: "Workforce capability",
    icon: (
      <>
        <ellipse cx="12" cy="6.5" rx="6" ry="2.5" />
        <path d="M6 6.5v8c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-8" />
        <path d="M6 10.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5" />
      </>
    ),
  },
  {
    title: "Compliance readiness",
    icon: <path d="M12 3.5 18 6v5.6c0 4.1-2.5 7-6 8.9-3.5-1.9-6-4.8-6-8.9V6l6-2.5Z" />,
  },
  {
    title: "Operational learning",
    icon: (
      <>
        <path d="m4 8 8-4 8 4-8 4-8-4Z" />
        <path d="m7 10.2v4.4c1.3 1.1 3 1.7 5 1.7s3.7-.6 5-1.7v-4.4" />
      </>
    ),
  },
  {
    title: "Knowledge retention",
    icon: (
      <>
        <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5v-15Z" />
        <path d="M5 5.5A2.5 2.5 0 0 1 7.5 8H19" />
      </>
    ),
  },
  {
    title: "Improvement maturity",
    icon: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Organizational resilience",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

const IconTile = ({ children }) => (
  <span className="flex h-[54px] w-[54px] items-center justify-center rounded-md bg-[#00b7d4] text-white shadow-[0_10px_18px_rgba(0,183,212,0.28)]">
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  </span>
);

const Visibility = () => {
  return (
    <section id="visibility" className="bg-white px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-[30px] font-bold leading-tight text-[#082b35] md:text-[44px]">
            Better decisions require better visibility.
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-6 text-[#4d5a60]">
            A connected architecture gives leadership a clear, real-time view of the systems beneath performance - not just lagging KPIs. OKQ surfaces operational truth, so leaders can act on capability and risk before disruption occurs.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl overflow-hidden rounded bg-[#f4fbfc] shadow-[0_10px_28px_rgba(0,70,85,0.08)] lg:grid-cols-[1.04fr_1fr]">
          <div className="px-7 py-8 lg:px-8">
            <h3 className="text-[16px] font-bold text-[#007f95]">What leaders see</h3>
            <div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-8">
              {visibilityItems.map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <IconTile>{item.icon}</IconTile>
                  <p className="mt-4 text-[11px] leading-4 text-[#536267]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden border-t border-white lg:border-l lg:border-t-0">
            <img
              src={teamCapabilityImg}
              alt="Team Capability by Level visualization"
              className="h-[440px] w-full"
            />
          </div>
        </div>

        <div className="mt-9 text-center">
          <p className="text-[15px] text-[#4d5a60]">
            Leaders stop managing blind spots and start managing operational capability.
          </p>
          <p className="mt-5 text-[12px] font-bold text-[#007f95]">
            KPI focus: Capability-risk visibility - Succession readiness - Audit preparedness - Decision confidence
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visibility;
