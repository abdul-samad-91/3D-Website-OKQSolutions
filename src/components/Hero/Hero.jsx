import { Link } from "react-router-dom";
import { heroContent, standards } from "../../data/heroData";
import PlatformDiagram from "./PlatformDiagram";

const standardIcons = {
  1: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#1526A8" />
      <circle cx="12" cy="12" r="5.5" stroke="white" strokeWidth="1" strokeDasharray="1 2" />
    </svg>
  ),
  2: (
    <span className="text-[8px] font-black uppercase tracking-[-0.02em] text-[#267FA0]">ISO</span>
  ),
  3: (
    <span className="text-[8px] font-black uppercase tracking-[-0.02em] text-[#267FA0]">ISO</span>
  ),
  4: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="white" opacity="0.9" />
      <circle cx="12" cy="12" r="6" stroke="#2EAFC3" strokeWidth="1.6" />
      <path d="M12 7v5l3 2" stroke="#2EAFC3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  5: (
    <span className="text-[8px] font-black uppercase tracking-[-0.02em] text-[#61B947]">VDA</span>
  ),
  6: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-2.35-5.66" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 5.5v5h-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  7: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.5" opacity="0.9" />
      <path d="M12 5.5v13M8 9h8M8 15h8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  8: (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M4 17h16" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 16V9h3v7M10.5 16V6.5h3V16M16 16v-5h3v5" fill="white" opacity="0.95" />
    </svg>
  ),
};

const Hero = () => {
  return (
    <section style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #FDFEFE 8.33%, #FAFDFE 16.67%, #F8FCFD 25%, #F5FBFC 33.33%, #F3FAFC 41.67%, #F0F9FB 50%, #EEF9FB 62.5%, #ECF8FB 75%, #EAF8FA 87.5%, #E8F7FA 100%)" }} className="overflow-hidden">
      <div className="max-w-[1230px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <p className="text-[14px] font-bold tracking-[0.22em] uppercase text-[##00B4D7] leading-none">
            {heroContent.topText}
          </p>
          {/* Heading: black + teal highlight on last line */}
          <h1 className="text-[2.75rem] lg:text-[50px] font-bold leading-[1.1] text-[#0d1b2a]">
            {heroContent.headingMain}{" "}
            <br></br>
            <span style={{ color: "#00B4D7" }}>{heroContent.headingHighlight}</span>
          </h1>

          <p className="text-[18px] lg:text-[20px] font-bold text-[#00677D] font-semibold text-[#0d1b2a] leading-snug">
            {heroContent.subtitle}
          </p>

          <p className="text-[#444] text-[#3D494D] leading-relaxed text-[15px] max-w-xl">
            {heroContent.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            {heroContent.buttons.map((btn) => (
              <Link
                key={btn.id}
                to={btn.href}
                className={
                  btn.variant === "primary"
                    ? "inline-flex items-center gap-3 text-white text-[15px] font-semibold px-5 py-3.5 rounded transition-opacity hover:opacity-90"
                    : "inline-flex items-center gap-3 border-2 border-[#0094B0] text-[#0094B0] text-[15px] font-semibold px-5 py-3.5 rounded hover:bg-gray-50 transition-colors"
                }
                style={btn.variant === "primary" ? { backgroundColor: "#00B4D7" } : {}}
              >
                {btn.label}
                {btn.hasArrow && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Tagline */}
          <p className="italic text-[13px] font-medium mt-1" style={{ color: "#0094B0" }}>
            {heroContent.tagline}
          </p>
        </div>

        {/* Right Diagram */}
        <div className="hidden lg:flex justify-center items-center">
          <PlatformDiagram />
        </div>
      </div>

      <div className=" bg-gradient-to-r from-[#28A9BD] to-[#0094B0] text-white shadow-[0_-1px_0_rgba(255,255,255,0.45)_inset]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-3">
          <p className="text-center text-[16px] font-semibold tracking-[0.22em] uppercase leading-none">
            Standards & Frameworks
          </p>
          <div className="mt-3 flex items-center gap-6 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-between lg:gap-3">
            {standards.map((standard) => (
              <div
                key={standard.id}
                className="flex shrink-0 items-center gap-2 text-[16px]  leading-none"
              >
                <span className="flex h-7 min-w-7 items-center justify-center">
                  {standardIcons[standard.id]}
                </span>
                <span>{standard.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
