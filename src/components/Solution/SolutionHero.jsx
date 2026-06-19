import SolutionButton from "./SolutionButton";
import SolutionIcon from "./SolutionIcons";

const audiences = [
  ["rocket", "Operations leaders"],
  ["shield", "Quality & compliance leaders"],
  ["target", "Learning & capability teams"],
  ["chart", "Continuous improvement professionals"],
  ["badge", "HSE & risk leaders"],
  ["users", "Executive leadership teams"],
];

const orbitItems = [
  { label: "SYSTEMS", sub: "Operational Discipline", x: 50, y: 22, icon: "target" },
  { label: "PERFORMANCE", sub: "Sustainable Results", x: 89, y: 60, icon: "chart" },
  { label: "PEOPLE", sub: "Workforce Capability", x: 10, y: 60, icon: "users" },
];

const captionItems = [
  { title: "ALIGN KNOWLEDGE", text: "Capture, share, and apply what works.", x: 10, y: 12, icon: "sync" },
  { title: "DRIVE DISCIPLINE", text: "Standardize execution and ensure compliance.", x: 92, y: 12, icon: "shield" },
  { title: "BUILD CAPABILITY", text: "Develop skills and strengthen teams.", x: 15, y: 78, icon: "users" },
  { title: "IMPROVE CONTINUOUSLY", text: "Measure, learn, and advance performance.", x: 79, y: 78, icon: "sync" },
];

const SolutionHero = () => (
  <section className="relative overflow-hidden bg-[#F8F9FA]">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0)_75%,rgba(255,255,255,0)_48%,rgba(255,255,255,0.72)_48%,rgba(255,255,255,0.72)_100%)]" />
    <div className="relative mx-auto grid max-w-[1230px] gap-10 px-6 pb-16 pt-14 lg:grid-cols-[0.94fr_1.06fr]  lg:pb-20 lg:px-0 lg:pt-12">
      <div className="max-w-[615px]">
        <div className="mb-9">
          <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#00A8C8]">OKQ Solutions</p>
          <div className="mt-3 h-[4px] rounded-2xl w-[35px] bg-[#00B4D7]" />
        </div>

        <h1 className="max-w-[560px] text-[48px] font-bold leading-[0.98] tracking-[-0.02em]  text-[#30373B] sm:text-[36px] lg:text-[50px]">
          Solutions for Operational 
          <br/>
          <span>Excellence</span>
        </h1>
        <p className="mt-7 max-w-[600px] text-[21px] font-semibold  tracking-[0.02em] leading-[1.45] text-[#00A8C8]">
          Strengthen capability, standardize execution, and improve performance.
        </p>
        <p className="mt-7 max-w-[610px] text-[15px] leading-[2] text-[#657176]">
          Industrial performance depends on more than technology, equipment, or compliance programs. Sustainable
          results require connected systems that align knowledge, workforce capability, operational discipline, and
          continuous improvement. OKQ designs, implements, and scales the operational systems that drive consistency,
          capability, compliance, and long-term performance.
        </p>
        <p className="mt-7 text-[15px] font-bold text-[#2D3436]">
          Define better systems. Develop stronger people. Deliver better performance.
        </p>

        <div className="mt-8 rounded-[4px] border border-[#D7E5E8] bg-white px-8 py-8 shadow-[0_1px_1px_rgba(0,0,0,0.02)]">
          <p className="mb-5 text-center text-[10px] font-bold text-[#00A8C8]">Designed for</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-[4px] bg-[#F7FBFC] px-5 py-3">
                <SolutionIcon name={icon} className="h-4 w-4 text-[#00A8C8]" />
                <span className="text-[11px] font-semibold text-[#47555A]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-11 flex flex-col gap-4 sm:flex-row">
          <SolutionButton href="/solution" className="sm:min-w-[236px]">Explore Solutions</SolutionButton>
          <SolutionButton href="/contactUs" variant="outline" className="sm:min-w-[280px]">
            Book a Discovery Session
          </SolutionButton>
        </div>
      </div>

      <div className="relative min-h-[560px] lg:min-h-[660px]">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-1 border-[#d0eaee]" />
        <div className="absolute left-78 top-69 h-[105px] w-[5px]   bg-[#61bacc]" />        
        <div className="absolute left-45 rotate-65 top-115 h-[110px] w-[5px]   bg-[#61bacc]" />
        <div className="absolute right-45 rotate-112 top-115 h-[110px] w-[5px]   bg-[#61bacc]" />

        {/* arrow */}
        <svg width="24" height="24" className="absolute top-50.5 rotate-250 right-45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11L22 2L13 22L10 14L2 11Z" fill="#2EA7C9" />
        </svg>
        {/* path */}
        <svg className="absolute inset-0 h-full w-full bg" viewBox="0 0 700 660" fill="none"> 
          <path d="M482 55 C540 75 650 190 649 313" stroke="#00B4D7" strokeWidth="1.5" />
        </svg>
        {/* arrow */}
        <svg width="24" height="24" className="absolute top-110 rotate-140 right-10" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11L22 2L13 22L10 14L2 11Z" fill="#2EA7C9" />
        </svg>
        
        {/* doted lines */}
        <svg width="80" height="72"  viewBox="0 0 80 72" className="absolute top-50 left-20" fill="none" xmlns="http://www.w3.org/2000/svg" >
          {/* <!-- Dotted Line --> */}
          <path d="M15 5 L40 10 L48 60" stroke="#17A8D1" stroke-width="2" stroke-dasharray="2 2" fill="none" />

          {/* <!-- Solid Line --> */}
            <circle cx="50" cy="66" r="4" fill="#17A8D1" />
        </svg>
         <svg width="94" height="109" viewBox="0 0 94 109" className="absolute top-47 right-15" fill="none" xmlns="http://www.w3.org/2000/svg" >
          {/* Dotted line */}
          <path d="M60 8 L36 14 L25 70" stroke="#18A9D5" strokeWidth="2" strokeDasharray="2 2" fill="none" />
          {/* Circle */}
          <circle cx="23" cy="75" r="4" fill="#18A9D5" />
        </svg>
        <svg width="80" height="72"  viewBox="0 0 80 72" className="absolute top-177 right-40 rotate-180" fill="none" xmlns="http://www.w3.org/2000/svg" >
          {/* <!-- Dotted Line --> */}
          <path d="M15 5 L40 10 L48 60" stroke="#17A8D1" stroke-width="2" stroke-dasharray="2 2" fill="none" />
          {/* <!-- Solid Line --> */}
            <circle cx="50" cy="66" r="4" fill="#17A8D1" />
        </svg>
         <svg width="94" height="109" viewBox="0 0 94 109" className="absolute top-170 left-32   rotate-180" fill="none" xmlns="http://www.w3.org/2000/svg" >
          {/* Dotted line */}
          <path d="M60 8 L36 14 L25 70" stroke="#18A9D5" strokeWidth="2" strokeDasharray="2 2" fill="none" />
          {/* Circle */}
          <circle cx="23" cy="75" r="4" fill="#18A9D5" />
        </svg>

        {/* arrow */}
        <svg width="24" height="24" className="absolute top-55 rotate-20 left-46" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11L22 2L13 22L10 14L2 11Z" fill="#2EA7C9" />
        </svg>
        {/* path */}
        <svg className="absolute  right- rotate-247 h-full w-full bg" viewBox="0 0 700 660" fill="none"> 
          <path d="M482 55 C540 75 650 190 649 313" stroke="#00B4D7" strokeWidth="1.5" />
        </svg>
        {/* arrow */}
        <svg width="24" height="24" className="absolute top-110 rotate-130 left-5.5" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11L22 2L13 22L10 14L2 11Z" fill="#2EA7C9" />
        </svg>

        {/* arrow */}
        <svg width="24" height="24" className="absolute top-170.5 rotate-0 right-38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11L22 2L13 22L10 14L2 11Z" fill="#2EA7C9" />
        </svg>
        {/* path */}
        <svg className="absolute rotate-130 inset-0 h-full w-full bg" viewBox="0 0 700 660" fill="none"> 
          <path d="M432 45 C540 75 650 190 649 313" stroke="#00B4D7" strokeWidth="1.5" />
        </svg>
        {/* arrow */}
        <svg width="24" height="24" className="absolute top-166.5 rotate-270 left-36.5" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11L22 2L13 22L10 14L2 11Z" fill="#2EA7C9" />
        </svg>

          {/* center circle okq solutions */}
        <div className="absolute left-1/2 top-1/2 flex h-[176px] w-[176px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#61bacc] bg-white text-center shadow-[0_0_5px_#66c3d6]">
          <p className="font-serif text-[34px] leading-none text-[#1F2528]">OKQ</p>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#00A8C8]">Solutions</p>
          <p className="mt-5 max-w-[112px] text-[13px] leading-[1.35] text-[#536167]">One Connected Operating System</p>
        </div>

            {/* sides circles */}
        {orbitItems.map((item) => (
          <div
            key={item.label}
            className="absolute flex h-[146px] w-[146px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#00B4D7] bg-white text-center shadow-[0_10px_26px_rgba(0,180,215,0.08)]"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            
            <SolutionIcon name={item.icon} className="h-8 w-8 text-[#00B4D7]" />
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#00A8C8]">{item.label}</p>
            <p className="mt-1 max-w-[90px] text-[12px] leading-[1.35] text-[#293236]">{item.sub}</p>
          </div>
        ))}

        {captionItems.map((item) => (
          <div
            key={item.title}
            className="absolute hidden max-w-[170px] -translate-x-1/2 text-center text-[#334047] md:block"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#D9F5F9] text-[#00A8C8]">
              <SolutionIcon name={item.icon} className="h-5 w-5" />
            </span>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.04em]">{item.title}</p>
            <p className="mt-1 text-[11px] leading-[1.35] text-[#5B686D]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionHero;
