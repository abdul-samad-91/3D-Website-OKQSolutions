import IntelligenceLoop from "../IntelligenceLoop/IntelligenceLoop";

const OperatingModel = () => {
  return (
    <section className="bg-white px-6 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
              style={{ backgroundColor: "#00B4D7" }}
            >
              2
            </span>
            <div className="h-px w-12 bg-[#00B4D7]" />
            <span className="text-[13px] font-medium tracking-[0.16em] uppercase text-[#00A8C8]">
              The OKQ Operating Model
            </span>
          </div>

          <h2 className="text-[2.35rem] lg:text-[44px] font-bold text-[#0d1b2a] leading-[1.12] mb-8 max-w-xl">
            Where expertise becomes a system.
          </h2>

          <p className="text-[15px] lg:text-[16px] text-[#4D5A60] leading-7 max-w-[520px]">
            Operational problems are rarely caused by a lack of effort. They emerge when the systems that should
            support people are disconnected - documentation apart from execution, training apart from reality,
            troubleshooting left informal. Fragmentation quietly erodes productivity, quality, safety, and resilience.
            OKQ closes those gaps by connecting knowledge, standardization, learning, competency, troubleshooting,
            governance, and improvement into one operating loop.
          </p>
        </div>

        <div className="lg:pl-4">
          <IntelligenceLoop />
        </div>
      </div>
    </section>
  );
};

export default OperatingModel;
