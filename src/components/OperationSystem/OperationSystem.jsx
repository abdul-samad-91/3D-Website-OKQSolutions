import { Link } from "react-router-dom";
import workforceImg from "../../assets/images/Workforce.png";
import operationsImg from "../../assets/images/Operations.png";
import complianceImg from "../../assets/images/Compliance.png";
import leadershipImg from "../../assets/images/Leadership.png";
import operationSystemLoop from "../../assets/images/image01.png";

const outcomes = [
  {
    title: "Workforce",
    body: "Stronger capability, faster readiness, less dependency on tribal knowledge",
    image: workforceImg,
    icon: (
      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8.5 1.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 18.5a4.5 4.5 0 0 1 9 0M13.5 18.5a3 3 0 0 1 6 0" />
    ),
  },
  {
    title: "Operations",
    body: "Greater execution consistency, discipline, and process reliability",
    image: operationsImg,
    icon: (
      <>
        <path d="M4 13.5h4l2-7 4 11 2-6h4" />
        <circle cx="18" cy="6" r="2" />
      </>
    ),
  },
  {
    title: "Compliance",
    body: "Improved traceability, audit readiness, standards alignment",
    image: complianceImg,
    icon: (
      <>
        <path d="M7 5.5h10M7 10h10M7 14.5h6" />
        <path d="m15 16.5 1.5 1.5 3-3" />
      </>
    ),
  },
  {
    title: "Leadership",
    body: "Clearer visibility of capability, risk, and operational maturity",
    image: leadershipImg,
    icon: (
      <>
        <path d="M12 4v4M7 12H4m16 0h-3M8 18h8" />
        <path d="M8 18a4 4 0 0 1 8 0M8.5 12a3.5 3.5 0 0 1 7 0" />
      </>
    ),
  },
];

const IconBadge = ({ children, className = "" }) => (
  <span
    className={`flex h-9 w-9 items-center justify-center rounded-full bg-[#007f95] text-white shadow-[0_8px_18px_rgba(0,111,130,0.2)] ${className}`}
  >
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </span>
);

const OperationSystem = () => {

  return (
    <section id="operation-system" className="bg-[#eefbfc] px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-[31px] font-bold leading-[1.08] text-[#082b35] md:text-[44px] lg:text-[50px]">
            The Operating System for Industrial Capability
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-[15px] font-semibold leading-6 text-[#006f82] md:text-[18px]">
            Knowledge, capability, compliance, and continuous improvement - connected in one operational ecosystem.
          </p>
        </div>

        <div className="relative mx-auto mt-8 h-[540px] max-w-[1080px] md:h-[600px] lg:mt-10 lg:h-[460px]">
          <img 
            src={operationSystemLoop}
            alt="OKQ Operating System Loop"
            className="absolute inset-x-0 top-8 mx-auto h-full w-full object-contain md:top-6 lg:top-8"
          />

          {/* Animated Beam SVG Overlay */}
          <svg
            className="absolute inset-x-0 top-8 mx-auto h-full w-full overflow-visible md:top-6 lg:top-8 pointer-events-none"
            viewBox="0 0 1180 500"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <style>{`
                @keyframes beamFlow {
                  0%   { stroke-dashoffset: 0; }
                  100% { stroke-dashoffset: -2200; }
                }
                .beam-path {
                  stroke-dasharray: 180 2020;   /* 180 = trail length, 2020 = gap (total ~2200) */
  stroke-dashoffset: 0;
  animation: beamFlow 8s linear infinite;
  filter: drop-shadow(0 0 6px #00d9ff) drop-shadow(0 0 14px rgba(0,217,255,0.5));
  will-change: stroke-dashoffset;
  fill: none;
   `}</style>
            </defs>
            <path
              className="beam-path"
              d="M96 250C96 138 219 82 336 135C446 185 538 321 637 376C728 427 835 433 936 340C1039 245 1028 112 884 97C735 82 615 212 501 324C383 440 209 424 126 323C103 295 96 271 96 250Z"
              stroke="#00d9ff"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="mx-auto mt-12 max-w-[760px] text-center text-[13px] leading-6 text-[#4b5c61] md:mt-4">
          Industrial organizations run documentation, training, competency, compliance, troubleshooting, and improvement across disconnected systems - fragmenting knowledge, drifting execution, and hiding real capability from leadership. OKQ connects these functions into one platform that turns knowledge into capability, capability into performance, and performance into continuous improvement.
        </p>

        <div className="mt-14 text-center">
          <h3 className="text-[28px] font-bold leading-tight text-[#007f95]">Platform outcomes</h3>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1120px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="relative min-h-[296px] overflow-hidden rounded-[4px] rounded-br-[92px] bg-white shadow-[0_2px_8px_rgba(0,111,130,0.04)]"
            >
              {outcome.image ? (
                <img src={outcome.image} alt="" className="h-[158px] w-full object-cover" />
              ) : (
                <div className="h-[158px] bg-white" />
              )}
              <IconBadge className="absolute right-4 top-4 h-9 w-9">{outcome.icon}</IconBadge>
              <div className="px-6 pb-8 pt-3">
                <h4 className="text-[17px] font-extrabold text-[#1c2529]">{outcome.title}</h4>
                <p className="mt-4 max-w-[190px] text-[11px] leading-[1.65] text-[#617076]">{outcome.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[13px] text-[#44565c]">
            OKQ is not another software platform. It is operational capability infrastructure for modern industry.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 rounded-sm bg-[#00a8c8] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_10px_20px_rgba(0,168,200,0.22)] transition-colors hover:bg-[#007f95]"
            >
              Explore Platform Architecture
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              to="/contactUs"
              className="inline-flex items-center rounded-sm border border-[#00a8c8] px-7 py-3 text-[12px] font-semibold text-[#007f95] transition-colors hover:bg-white"
            >
              Book a Discovery Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationSystem;
