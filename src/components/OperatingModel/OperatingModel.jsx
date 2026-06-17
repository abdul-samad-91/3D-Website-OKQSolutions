const OperatingModel = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0"
            style={{ backgroundColor: "#00B4D7" }}
          >
            2
          </span>
          <div className="h-px w-10 bg-[#00B4D7]" />
          <span className="text-[18px] font-semibold tracking-[0.2em] uppercase text-[#00B4D7]">
            The OKQ Operating Model
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[2.5rem] lg:text-[48px] font-bold text-[#0d1b2a] leading-tight mb-8">
          Where expertise becomes a system.
        </h2>

        {/* Body */}
        <p className="text-[18px] text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Operational problems are rarely caused by a lack of effort. They emerge when the systems that should
          support people are disconnected — documentation apart from execution, training apart from reality,
          troubleshooting left informal. Fragmentation quietly erodes productivity, quality, safety, and resilience. OKQ
          closes those gaps by connecting knowledge, standardization, learning, competency, troubleshooting,
          governance, and improvement into one operating loop.
        </p>

      </div>
    </section>
  );
};

export default OperatingModel;
