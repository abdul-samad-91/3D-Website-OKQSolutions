import operationalExcellance from "../../assets/images/operationalExcellance.jpg";

const BusinessImpact = () => {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${operationalExcellance})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#02667E]/60" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0 border-2 border-white/40 bg-white/20">
            5
          </span>
          <div className="h-px w-10 bg-white/40" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">
            Business Impact & ROI
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[2.2rem] lg:text-[2.8rem] font-extrabold text-white leading-tight mb-6">
          Operational excellence is a performance multiplier.
        </h2>

        {/* Body */}
        <p className="text-[14px] text-white/80 leading-relaxed max-w-2xl mx-auto">
          Documentation, training, competency, compliance, and operational learning are often treated as support
          activities. In reality they directly influence productivity, quality, safety, workforce capability, and long-term
          profitability. OKQ strengthens the operational foundations that enable consistent execution, faster
          capability development, and improvement at scale.
        </p>
      </div>
    </section>
  );
};

export default BusinessImpact;
