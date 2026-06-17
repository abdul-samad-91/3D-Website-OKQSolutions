import { foundationFeatures } from "../../data/heroData";
import heroGradiant from "../../assets/images/heroGradiant.jpg";

const moduleIcons = {
  ACADEMY: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
    </svg>
  ),
  INSIGHT: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
    </svg>
  ),
  CORE: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 10l1.5 1.5 2.5-2.5" />
    </svg>
  ),
  GUARD: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  FLOW: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="3" width="6" height="6" rx="1.5" />
      <rect x="3" y="15" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path strokeLinecap="round" d="M9 6h6M9 18h6M6 9v6M18 9v6" />
    </svg>
  ),
  RESOLVE: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
    </svg>
  ),
  PULSE: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
};

const ModuleNode = ({ icon, name, description, descMaxWidth = "auto" }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="w-[58px] h-[58px] rounded-full bg-[#02667E] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(2,102,126,0.25)]">
      {icon}
    </div>
    <p className="text-[13px] font-bold text-[#1a2e35] tracking-wide">{name}</p>
    <p
      className="text-[11px] text-gray-500 text-center leading-tight"
      style={{ maxWidth: descMaxWidth }}
    >
      {description}
    </p>
  </div>
);

const PlatformDiagram = () => {
  return (
    <div className="relative w-[720px] h-[800px] mx-auto">
      {/* Background SVG: rings + dashed connectors */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 720 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Intelligence Layer - large flat ellipse */}
        <ellipse cx="360" cy="180" rx="335" ry="135" stroke="#7BB5C2" strokeWidth="1.4" fill="none" opacity="0.85" />

        {/* Pedestal/shelf under OKQ INTELLIGENCE LAYER */}
        <ellipse cx="360" cy="225" rx="90" ry="10" stroke="#7BB5C2" strokeWidth="1" fill="none" opacity="0.6" />
        <ellipse cx="360" cy="220" rx="90" ry="10" stroke="#7BB5C2" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Operational Layer ellipse */}
        <ellipse cx="360" cy="370" rx="295" ry="115" stroke="#7BB5C2" strokeWidth="1.4" fill="none" opacity="0.85" />

        {/* Dashed connectors - LEFT side to foundation */}
        <path d="M 80 540 Q 200 580 320 660" stroke="#3FB1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        <path d="M 80 585 Q 190 615 305 670" stroke="#3FB1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        <path d="M 80 630 Q 180 645 295 685" stroke="#3FB1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        <path d="M 80 675 Q 180 685 290 700" stroke="#3FB1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />

        {/* Dashed connectors - RIGHT side to foundation */}
        <path d="M 640 540 Q 520 580 400 660" stroke="#3FB1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        <path d="M 640 585 Q 530 615 415 670" stroke="#3FB1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        <path d="M 640 630 Q 540 645 425 685" stroke="#3FB1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        <path d="M 640 675 Q 540 685 430 700" stroke="#3FB1C5" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
      </svg>

      {/* ====== INTELLIGENCE LAYER ====== */}

      {/* OKQ INTELLIGENCE LAYER (center label) */}
      <div className="absolute top-[125px] left-1/2 -translate-x-1/2 text-center z-10">
        <p className="text-[34px] font-serif italic text-[#1a2e35] leading-none">OKQ</p>
        <p className="text-[11px] tracking-[0.35em] text-[#02667E] uppercase font-medium mt-2">
          Intelligence Layer
        </p>
      </div>

      {/* ACADEMY - top-left of upper ellipse */}
      <div className="absolute top-[20px] left-[110px] z-10">
        <ModuleNode icon={moduleIcons.ACADEMY} name="ACADEMY" description="Learning" />
      </div>

      {/* INSIGHT - top-right of upper ellipse */}
      <div className="absolute top-[20px] right-[110px] z-10">
        <ModuleNode icon={moduleIcons.INSIGHT} name="INSIGHT" description="Workforce Intelligence" />
      </div>

      {/* CORE - bottom-left of upper ellipse */}
      <div className="absolute top-[200px] left-[60px] z-10">
        <ModuleNode icon={moduleIcons.CORE} name="CORE" description="Knowledge Management" />
      </div>

      {/* GUARD - bottom-right of upper ellipse */}
      <div className="absolute  top-[200px] right-[60px] z-10">
        <ModuleNode icon={moduleIcons.GUARD} name="GUARD" description="Compliance & Risk" />
      </div>

      {/* ====== OPERATIONAL LAYER ====== */}

      {/* OKQ OPERATIONAL LAYER (center label) */}
      <div className="absolute top-[325px] left-1/2 -translate-x-1/2 text-center z-10">
        <p className="text-[30px] font-serif italic text-[#1a2e35] leading-none">OKQ</p>
        <p className="text-[11px] tracking-[0.35em] text-[#02667E] uppercase font-medium mt-2">
          Operational Layer
        </p>
      </div>

      {/* FLOW - left of lower ellipse */}
      <div className="absolute top-[385px] left-[80px] z-10">
        <ModuleNode icon={moduleIcons.FLOW} name="FLOW" description="Process & Execution" />
      </div>

      {/* RESOLVE - right of lower ellipse */}
      <div className="absolute top-[385px] right-[60px] z-10">
        <ModuleNode
          icon={moduleIcons.RESOLVE}
          name="RESOLVE"
          description="Troubleshooting & Problem Solving"
          descMaxWidth="120px"
        />
      </div>

      {/* PULSE - center between ops & foundation */}
      <div className="absolute top-[470px] left-1/2 -translate-x-1/2 z-10">
        <ModuleNode icon={moduleIcons.PULSE} name="PULSE" description="Continuous Improvement" />
      </div>

      {/* ====== GRADIENT FUNNEL ====== */}
      <div className="absolute top-[510px] left-1/2 -translate-x-1/2 w-[280px] h-[250px] z-0">
        <img
          src={heroGradiant}
          alt=""
          className="w-full h-full object-contain"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* ====== LEFT FEATURES ====== */}
      <div className="absolute top-[525px] left-0 flex flex-col gap-7 z-10">
        {foundationFeatures.left.map((f) => (
          <div key={f.id} className="flex items-center gap-2">
            <span className="text-[#02667E]">
              <FeatureIcon type={f.icon} />
            </span>
            <span className="text-[13px] font-medium text-[#02667E] italic whitespace-nowrap">
              {f.label}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#3FB1C5] inline-block ml-1" />
          </div>
        ))}
      </div>

      {/* ====== RIGHT FEATURES ====== */}
      <div className="absolute top-[525px] right-0 flex flex-col gap-7 items-end z-10">
        {foundationFeatures.right.map((f) => (
          <div key={f.id} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3FB1C5] inline-block mr-1" />
            <span className="text-[13px] font-medium text-[#02667E] italic whitespace-nowrap">
              {f.label}
            </span>
            <span className="text-[#02667E]">
              <FeatureIcon type={f.icon} />
            </span>
          </div>
        ))}
      </div>

      {/* ====== OKQ DIGITAL FOUNDATION PILL ====== */}
      <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 z-20">
        <div className="bg-[#02667E] rounded-full py-2 px-7 flex items-center justify-center shadow-md">
          <span className="text-[10px] text-white uppercase tracking-[0.2em] font-semibold">
            OKQ Digital Foundation
          </span>
        </div>
      </div>

      {/* ====== STEPS BAR ====== */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10">
        <div className="bg-[#02667E] rounded-md py-1.5 px-4 flex items-center gap-2">
          {foundationFeatures.steps.map((step, idx) => (
            <span key={step} className="flex items-center gap-2">
              <span className="text-[9px] text-white uppercase font-medium tracking-[0.1em]">
                {step}
              </span>
              {idx < foundationFeatures.steps.length - 1 && (
                <span className="text-[#7BB5C2] text-[8px]">●</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ====== BOTTOM TAGLINE ====== */}
      <p className="absolute bottom-[8px] left-1/2 -translate-x-1/2 text-[8px] text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap font-medium">
        One Platform. One Operating Model. Unlimited Potential.
      </p>
    </div>
  );
};

const FeatureIcon = ({ type }) => {
  const icons = {
    database: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
    shield: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    cloud: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8L5 12l4 4M15 8l4 4-4 4" />
      </svg>
    ),
    chart: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
      </svg>
    ),
    device: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path strokeLinecap="round" d="M10 18h4" />
      </svg>
    ),
    globe: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    link: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10l-4 4 4 4M16 10l4 4-4 4M14 8l-4 12" />
      </svg>
    ),
    ai: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  };
  return icons[type] || null;
};

export default PlatformDiagram;
