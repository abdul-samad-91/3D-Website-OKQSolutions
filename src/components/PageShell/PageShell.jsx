import { Link } from "react-router-dom";

const PageShell = ({ content }) => {
  return (
    <main className="bg-white">
      <section className="bg-[#f1fbfd] border-b border-[#d8eef3]">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#02667E] mb-4">
              {content.eyebrow}
            </p>
            <h1 className="text-[2.5rem] lg:text-[54px] font-semibold leading-[1.08] text-[#0d1b2a] max-w-3xl">
              {content.title}
            </h1>
            <p className="mt-6 text-[17px] leading-8 text-[#3D494D] max-w-2xl">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {content.highlights.map((item) => (
                <span
                  key={item}
                  className="border border-[#b7dce4] bg-white px-4 py-2 rounded text-[13px] font-semibold text-[#02667E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#d8eef3] rounded-lg p-6 shadow-sm">
            <p className="text-[13px] font-bold text-[#02667E] uppercase tracking-[0.18em] mb-5">
              Operating Flow
            </p>
            <div className="grid gap-3">
              {["Capture", "Standardize", "Develop", "Validate", "Improve"].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 border border-gray-100 bg-[#fbfdfe] rounded-md px-4 py-3"
                >
                  <span className="w-8 h-8 rounded-full bg-[#00B4D7] text-white text-[13px] font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-[15px] font-semibold text-[#0d1b2a]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {content.sections.map((section) => (
            <article key={section.title} className="border border-gray-200 rounded-lg p-6 bg-white">
              <h2 className="text-[20px] font-semibold text-[#0d1b2a]">{section.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-[#3D494D]">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 border border-[#d8eef3] bg-[#f7fcfd] rounded-lg px-6 py-8 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[24px] font-semibold text-[#0d1b2a]">Ready to connect knowledge with performance?</h2>
            <p className="mt-2 text-[15px] text-[#3D494D]">
              Create an account or return to the platform overview to continue exploring OKQ.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/signup"
              className="bg-[#02667E] text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[#024f63] transition-colors"
            >
              Sign Up
            </Link>
            <Link
              to="/"
              className="border border-[#02667E] text-[#02667E] text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-white transition-colors"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageShell;
