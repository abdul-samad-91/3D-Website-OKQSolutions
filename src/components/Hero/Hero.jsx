import { heroContent, standards } from "../../data/heroData";
import PlatformDiagram from "./PlatformDiagram";

const Hero = () => {
  return (
    <section style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #FDFEFE 8.33%, #FAFDFE 16.67%, #F8FCFD 25%, #F5FBFC 33.33%, #F3FAFC 41.67%, #F0F9FB 50%, #EEF9FB 62.5%, #ECF8FB 75%, #EAF8FA 87.5%, #E8F7FA 100%)" }} className="py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          {/* Heading: black + teal highlight on last line */}
          <h1 className="text-[2.75rem] lg:text-[53px] xl:text-[3.75rem] font-extrabold leading-[1.1] text-[#0d1b2a]">
            {heroContent.headingMain}{" "}
            <span style={{ color: "#00B4D7" }}>{heroContent.headingHighlight}</span>
          </h1>

          <p className="text-[18px] lg:text-[20px] font-bold text-[#0d1b2a] leading-snug">
            {heroContent.subtitle}
          </p>

          <p className="text-[#444] leading-relaxed text-[15px] max-w-xl">
            {heroContent.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            {heroContent.buttons.map((btn) => (
              <a
                key={btn.id}
                href={btn.href}
                className={
                  btn.variant === "primary"
                    ? "inline-flex items-center gap-3 text-white text-[15px] font-semibold px-7 py-3.5 rounded-lg transition-opacity hover:opacity-90"
                    : "inline-flex items-center gap-3 border-2 border-[#0d1b2a] text-[#0d1b2a] text-[15px] font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-50 transition-colors"
                }
                style={btn.variant === "primary" ? { backgroundColor: "#00B4D7" } : {}}
              >
                {btn.label}
                {btn.hasArrow && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Tagline */}
          <p className="italic text-[14px] font-medium mt-1" style={{ color: "#00B4D7" }}>
            {heroContent.tagline}
          </p>
        </div>

        {/* Right Diagram */}
        <div className="hidden lg:flex justify-center items-center">
          <PlatformDiagram />
        </div>
      </div>

      {/* Standards & Frameworks strip */}
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-10">
        <p className="text-center text-[11px] font-semibold tracking-[0.25em] text-[#3D494D] uppercase mb-6">
          Standards & Frameworks
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {standards.map((standard) => (
            <span
              key={standard.id}
              className="px-5 py-2 border bg-[#FFFFFF] border-gray-300 rounded-full text-[13px] text-gray-700 font-medium hover:border-[#00B4D7] hover:text-[#00B4D7] transition-colors cursor-default"
            >
              {standard.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
