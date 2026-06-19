import sectionBg from "../../assets/images/sectionBG.jpg";
import roiPhil from "../../assets/images/roiPhil.jpg";
import operationalExcellence from "../../assets/images/operationalExcellance.jpg";
import heroGradiant from "../../assets/images/heroGradiant.jpg";

const stackItems = [
  {
    title: "ERP",
    icon: (
      <>
        <path d="M7 8h10M7 12h10M7 16h6" />
        <path d="M5 5h14v14H5z" />
      </>
    ),
  },
  {
    title: "QMS",
    icon: (
      <>
        <rect x="7" y="5" width="10" height="14" rx="2" />
        <path d="M10 9h4M10 13h4" />
      </>
    ),
  },
  {
    title: "LMS",
    icon: (
      <>
        <circle cx="12" cy="12" r="5" />
        <path d="m10.5 12 1 1 2.5-3" />
      </>
    ),
  },
  {
    title: "Document repositories",
    icon: (
      <>
        <path d="M6 5h8l4 4v10H6z" />
        <path d="M14 5v4h4M9 13h6M9 16h4" />
      </>
    ),
  },
  {
    title: "Audit & Compliance software",
    icon: (
      <>
        <path d="M12 4 18 7v5.5c0 3.6-2.3 6.2-6 7.5-3.7-1.3-6-3.9-6-7.5V7l6-3Z" />
        <path d="m10 12 1.5 1.5L15 10" />
      </>
    ),
  },
  {
    title: "HR systems",
    icon: (
      <>
        <circle cx="9" cy="8" r="2.5" />
        <path d="M4.5 18a4.5 4.5 0 0 1 9 0" />
        <path d="M16 7v6M13 10h6" />
      </>
    ),
  },
  {
    title: "Maintenance (CMMS)",
    icon: (
      <>
        <path d="M14.5 6.5 17 4l3 3-2.5 2.5" />
        <path d="m14 7 3 3-8 8H6v-3l8-8Z" />
      </>
    ),
  },
  {
    title: "Analytics & BI",
    icon: (
      <>
        <path d="M6 18V9M12 18V5M18 18v-7" />
        <path d="M4 18h16" />
      </>
    ),
  },
];

const trustCards = [
  {
    title: "Knowledge governance",
    image: roiPhil,
    body: "Controlled documentation, revision traceability, ownership accountability, lifecycle management",
  },
  {
    title: "Security",
    image: heroGradiant,
    body: "Controlled documentation, revision traceability, ownership accountability, lifecycle management",
  },
  {
    title: "Privacy & data responsibility",
    image: operationalExcellence,
    body: "Controlled documentation, revision traceability, ownership accountability, lifecycle management",
  },
  {
    title: "Accessibility",
    image: sectionBg,
    body: "Controlled documentation, revision traceability, ownership accountability, lifecycle management",
  },
];

const StackIcon = ({ children }) => (
  <svg
    className="mb-2 h-4 w-4 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconBadge = ({ children }) => (
  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#007f95] text-white shadow-[0_8px_18px_rgba(0,111,130,0.2)]">
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </span>
);

const Stack = () => {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[#061012] px-5 py-14 text-white lg:px-8 lg:py-16"
    >
      <img
        src={sectionBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,14,0.76)_0%,rgba(3,12,14,0.84)_46%,rgba(3,12,14,0.9)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mx-auto max-w-4xl text-[31px] font-bold leading-tight text-[#00bce2] md:text-[43px]">
            Connects with your stack. Secure, governed, and trusted.
          </h2>
          <p className="mx-auto mt-5 max-w-[790px] text-[13px] leading-6 text-white/82">
            OKQ is the connective capability layer - not a rip-and-replace. It unifies the systems you already run into one source of capability intelligence, and it is built with governance, security, and accessibility in the operating model from the start. Operational intelligence is only valuable when it can be trusted.
          </p>
        </div>

        <div className="mt-11 text-center">
          <p className="text-[13px] font-bold text-[#00bce2]">Connects alongside</p>
        </div>

        <div className="mx-auto mt-5 grid max-w-6xl grid-cols-2 gap-y-6 rounded border border-[#00bce2]/45 bg-[#063d46]/82 px-5 py-7 shadow-[0_14px_38px_rgba(0,0,0,0.25)] backdrop-blur md:grid-cols-4">
          {stackItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <StackIcon>{item.icon}</StackIcon>
              <p className="text-[11px] leading-4 text-white/88">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-xl bg-white shadow-sm transition-transform hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative h-[180px] overflow-hidden rounded-t-xl bg-gray-100">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
              </div>

              {/* Icon Badge */}
              <div className="absolute right-3 top-3 z-10">
                <IconBadge>
                  <path d="M12 4v4M7 12H4m16 0h-3M8 18h8" />
                </IconBadge>
              </div>

              {/* Content Area */}
              <div className="px-5 pb-5 pt-5">
                <h3 className="text-[16px] font-bold text-[#1c2529]">{card.title}</h3>
                <p className="mt-3 text-[11px] leading-5 text-[#617076]">{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-9 max-w-3xl text-center text-[13px] text-white/84">
          OKQ does not add another silo. Trust is not assumed - it is engineered.
        </p>
      </div>
    </section>
  );
};

export default Stack;
