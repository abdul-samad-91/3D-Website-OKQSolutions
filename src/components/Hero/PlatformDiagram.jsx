import Arrow from  "../../assets/images/Container.svg"; 

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
  <div className="flex flex-col items-center ">
    <div className="w-[45px] h-[45px] rounded-full bg-[#02667E] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(2,102,126,0.25)]">
      {icon}
    </div>
    <p className="text-[12px] font-bold text-[#1a2e35] pt-[1px] tracking-wide">{name}</p>
    <p
      className="text-[10px] text-gray-500 text-center leading-tight"
      style={{ maxWidth: descMaxWidth }}
    >
      {description}
    </p>
  </div>
);

const PlatformDiagram = () => {
  return (
    <div className="relative flex flex-col gap-12 w-[1020px] h-[800px]">
      {/* ====== INTELLIGENCE LAYER ====== */}
      <div className="relative w-full top-32 h-[170px] p-[2px] rounded-[200%] bg-gradient-to-br from-[#02667E] to-[#E4F0F9]">
        <div className="relative  w-full h-full rounded-[200%] bg-[#F0F9FB]">
            {/* OKQ INTELLIGENCE LAYER (center label) */}
            <div className="absolute top-15 left-1/2 -translate-x-1/2 text-center">
              {/* <p className="text-[34px] font-serif italic text-[#1a2e35] leading-none">OKQ</p> */}
              <p className="relative top-[10px] text-[10px]  z-40 tracking-[0.15em] text-[#02667E] uppercase font-medium mt-2">
                Intelligence Layer
              </p>
              <div className=" relative w-[200px] h-[30px]  pb-[2px] z-30  rounded-[200%] bg-gradient-to-b  from-[#E4F0F9] to-[#02667E]">        <div className="relative w-full h-full rounded-[200%] bg-[#F0F9FB]">
              </div></div>
              <div className="w-[200px] h-[30px]  pb-[2px] z-20 mt-[-20px]  rounded-[200%] bg-gradient-to-b  from-[#E4F0F9] to-[#02667E]">        <div className="relative w-full h-full rounded-[200%] bg-[#F0F9FB]"></div>
              </div>
            </div>

            {/* ACADEMY - top-left of upper ellipse */}
            <div className="absolute top-[-5px] left-[110px] z-10">
              <ModuleNode icon={moduleIcons.ACADEMY} name="ACADEMY" description="Learning" />
            </div>

            {/* INSIGHT - top-right of upper ellipse */}
            <div className="absolute top-[-5px] right-[90px] z-10">
              <ModuleNode icon={moduleIcons.INSIGHT} name="INSIGHT" description="Workforce Intelligence" />
            </div>

            {/* CORE - bottom-left of upper ellipse */}
            <div className="absolute bottom-[-50px] left-[50px] z-10">
              <ModuleNode icon={moduleIcons.CORE} name="CORE" description="Knowledge Management" />
            </div>

            {/* GUARD - bottom-right of upper ellipse */}
            <div className="absolute bottom-[-40px] right-[65px] z-10">
              <ModuleNode icon={moduleIcons.GUARD} name="GUARD" description="Compliance & Risk" />
            </div>
        </div>
      </div>


      {/* ====== OPERATIONAL LAYER ====== */}
      <div className="relative left-1/2 -translate-x-1/2 z-30 w-[400px] top-32 h-[120px] p-[2px] rounded-[200%] 
       bg-gradient-to-br from-[#02667E] to-[#E4F0F9]
      ">
        <div className="relative  w-full h-full rounded-[200%] bg-[#F0F9FB] z-20">
          {/* OKQ OPERATIONAL LAYER (center label) */}
          <div className="absolute shadow-[0_0_10px_10px_#F0F9FB]  top-[-10px] bg-[#F0F9FB] left-1/2 -translate-x-1/2 text-center z-10 ">
            {/* <p className="text-[30px] font-serif italic text-[#1a2e35] leading-none">OKQ</p> */}
            <p className="text-[11px] px-2 tracking-[0.35em] text-[#02667E] uppercase font-medium mt-2">
              Operational Layer
            </p>
          </div>

          {/* FLOW - left of lower ellipse */}
          <div className="absolute top-[30px] left-[-45px] z-10">
            <ModuleNode icon={moduleIcons.FLOW} name="FLOW" description="Process & Execution" />
          </div>

          {/* RESOLVE - right of lower ellipse */}
          <div className="absolute top-[30px] right-[-65px] z-10">
            <ModuleNode
              icon={moduleIcons.RESOLVE}
              name="RESOLVE"
              description="Troubleshooting & Problem Solving"
              descMaxWidth="120px"
            />
          </div>

          {/* PULSE - center between ops & foundation */}
          <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 z-10">
            <ModuleNode icon={moduleIcons.PULSE} name="PULSE" description="Continuous Improvement" />
          </div>
        </div>
      </div>


    <div>
    {/* <div className="shadow-[0_0_30px_black]  "> */}
    <div className=" relative left-1/2 -translate-x-1/2 top-[-50px] w-[400px] h-[250px] bg-gradient-to-t from-[#00B4D7] via-[#F0F9FB] to-[#F0F9FB] [clip-path:polygon(0_36%,100%_36%,60%_100%,40%_100%)] flex items-end justify-center z-20 justify-center">
    <div className="relative w-[120px] h-[60px]">
      {/* vertical waves */}
      <svg
        viewBox="0 0 100 300"
        className="absolute opacity-30 bottom-0 w-[100px] h-[200px]"
      >
        <path
          d="M10 10
            C90 60, 90 140, 50 180
            C10 220, 10 280, 90 290"
          fill="none"
          stroke="#F0F9FB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      
      <svg
        viewBox="0 0 100 300"
        className="absolute  opacity-30 bottom-[10px] left-[-10px] w-[100px] h-[200px]"
      >
        <path
          d="M10 10
            C90 60, 90 140, 50 180
            C10 220, 10 280, 90 290"
          fill="none"
          stroke="#F0F9FB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      
      <svg
        viewBox="0 0 100 300"
        className="absolute opacity-30 bottom-0 rotate-20 right-[-20px] w-[100px] h-[200px]"
      >
        <path
          d="M10 10
            C90 60, 90 140, 50 180
            C10 220, 10 280, 90 290"
          fill="none"
          stroke="#F0F9FB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <svg
        viewBox="0 0 100 300"
        className="absolute rotate-200 opacity-30 bottom-[-140px] right-[30px] w-[100px] h-[200px]"
      >
        <path
          d="M10 10
            C90 60, 90 140, 50 180
            C10 220, 10 280, 90 290"
          fill="none"
          stroke="#F0F9FB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <svg
        viewBox="0 0 100 300"
        className="absolute rotate-200 opacity-30 bottom-[-110px] right-[35px] w-[100px] h-[200px]"
      >
        <path
          d="M10 10
            C90 60, 90 140, 50 180
            C10 220, 10 280, 90 290"
          fill="none"
          stroke="#F0F9FB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <svg
        viewBox="0 0 100 300"
        className="absolute rotate-200 opacity-30 bottom-[-120px] right-[15px] w-[100px] h-[200px]"
      >
        <path
          d="M10 10
            C90 60, 90 140, 50 180
            C10 220, 10 280, 90 290"
          fill="none"
          stroke="#F0F9FB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        viewBox="0 0 100 300"
        className="absolute rotate-200 opacity-30 bottom-[-110px] right-[5px] w-[100px] h-[200px]"
      >
        <path
          d="M10 10
            C90 60, 90 140, 50 180
            C10 220, 10 280, 90 290"
          fill="none"
          stroke="#F0F9FB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {/* logo */}
      {/* <img src={logo} className="absolute bottom-[-8px] w-full h-[50px]  " alt="logoImage" /> */}
   <svg
    viewBox="0 13 120 60"
    className="absolute bottom-[-20px] w-full h-[50px] bg-gradient-to-t from-[#10b4d7] via-[#46bddb] to-[#67c6e1] "
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 30 C20 10, 45 10, 60 30 C75 50, 100 50, 100 30 C100 10, 75 10, 60 30 C45 50, 20 50, 20 30Z"
      stroke="#0097B2"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.75"
    />
  </svg> 
</div>
    </div>
      <div className="absolute left-75 rotate-35 bottom-[210px] bg-black w-[25px] h-[150px] shadow-[20px_0_30px_9px_#00B4D7]"> </div>
      <div className="absolute right-77 rotate-145 bottom-[210px] bg-black w-[25px] h-[150px] shadow-[20px_0_30px_10px_#00B4D7]"> </div> 

      
      <div className="relative flex flex-col  items-center ">
        {/* left side lines  */}
        <div className="">
          <div className="absolute top-[-150px] left-0  w-[120px] ">
            <p className="relative top-10 left-[-15px] text-[10px] text-[#00B4D7]">Unified Data</p>
            <div className="relative top-7 left-12 z-20 p-1 h-1 w-1 rounded-full bg-[#00B4D7]"></div>
            <svg
              viewBox="0 45 300 100"
              className="absolute top-[38px] left-[50px] inset-0 w-full h-[80px]"
              fill="none"
            >
              <path
                d="M20 20 C120 20, 180 180, 280 180"
                stroke="#00B4D7"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-[-130px] left-0  w-[120px] ">
            <p className="relative top-12 left-[-30px] text-[10px] text-[#00B4D7]">Enterprise Security</p>
            <div className="relative top-9 left-16 z-20 p-1 h-1 w-1 rounded-full bg-[#00B4D7]"></div>
            <svg
              viewBox="0 65 300 100"
              className=" absolute rotate-350 top-[40px] left-[67px] inset-0 w-[101px] h-[80px]"
              fill="none"
            >
              <path
                d="M20 20 C120 20, 180 180, 280 180"
                stroke="#00B4D7"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-[-130px] left-0  w-[120px] ">
            <p className="relative top-18.5 left-[15px] text-[10px] text-[#00B4D7]">Cloud Native</p>
            <div className="relative top-15.5 left-20 z-20 p-1 h-1 w-1 rounded-full bg-[#00B4D7]"></div>
            <svg
              viewBox="0 65 250 100"
              className=" absolute rotate-[-10] top-[77px] left-[87px] inset-0 w-[101px] h-[80px]"
              fill="none"
            >
              <path
                d="M-90 -30 C80 120, 180 20, 280 120"
                stroke="#00B4D7"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-[-130px] left-0  w-[120px] ">
            <p className="relative top-24 left-[-43px] text-[10px] text-[#00B4D7]">Realtime Analytics</p>
            <div className="relative top-21 left-10 z-20 p-1 h-1 w-1 rounded-full bg-[#00B4D7]"></div>
            <svg
              viewBox="0 65 250 100"
              className=" absolute rotate-160 top-[47px] left-[40px] inset-0 w-[151px] h-[80px]"
              fill="none"
            >
              <path
                d="M20 20 C80 120, 180 40, 380 220"
                stroke="#00B4D7"
                strokeWidth="2"
                strokeDasharray="2 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <p  className="text-[10.56px] text-white py-2 rounded-b-full px-8 relative top-[-50px] bg-[linear-gradient(180deg,#04798A_0%,#04798A_45%,#00AFCF_100%)] tracking-[0.5px] font-700 z-30">OKQ DIGITAL FOUNDATION</p>
        <div>
          <div className="absolute top-[-150px] right-0  w-[120px] ">
            <p className="relative top-10 right-[-50px] text-[10px] text-[#00B4D7]">Any Device</p>
            <div className="relative top-7 left-9 z-20 p-1 h-1 w-1 rounded-full bg-[#00B4D7]"></div>
            <svg
              viewBox="0 45 300 100"
              className="absolute top-[37px] right-19 rotate-120  0 w-full h-[80px]"
              fill="none"
            >
              <path
                d="M20 20 C80 120, 180 20, 280 120"
                stroke="#00B4D7"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-[-150px] right-0  w-[120px] ">
            <p className="relative top-16.5 right-[-40px] text-[10px] text-[#00B4D7]">Global Scalability</p>
            <div className="relative top-13.5 left-7 z-20 p-1 h-1 w-1 rounded-full bg-[#00B4D7]"></div>
            <svg
              viewBox="0 45 300 100"
              className="absolute top-[55px] right-21 rotate-125  0 w-[100px] h-[80px]"
              fill="none"
            >
              <path
                d="M20 20 C80 120, 180 20, 280 150"
                stroke="#00B4D7"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-[-130px] right-0  w-[120px] ">
            <p className="relative top-19.25 right-[-28px] text-[10px] text-[#00B4D7]">Seamless Integrations</p>
            <div className="relative top-16.5 right-[-17px] z-20 p-1 h-1 w-1 rounded-full bg-[#00B4D7]"></div>
            <svg
              viewBox="0 65 300 100"
              className=" absolute rotate-123 top-[61px] right-27  w-[101px] h-[80px]"
              fill="none"
            >
              <path
                d="M-10 -10 C120 20, 180 180, 280 250"
                stroke="#00B4D7"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute top-[-150px] right-0  w-[120px] ">
            <p className="relative top-30 right-[-50px] text-[10px] text-[#00B4D7]">Agentic Powered</p>
            <div className="relative top-27.5 right-[-40px] z-20 p-1 h-1 w-1 rounded-full bg-[#00B4D7]"></div>
            <svg
              viewBox="0 45 300 100"
              className="absolute rotate-135 top-[92px] right-[80px]  w-full h-[80px]"
              fill="none"
            >
              <path
                d="M-40 -50 C120 20, 180 180, 230 180"
                stroke="#00B4D7"
                strokeWidth="3"
                strokeDasharray="6 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <ul className="flex items-center gap-3 text-white py-2 rounded-full px-8 relative top-[-45px] bg-[linear-gradient(90deg,#04798A_0%,#04798A_45%,#00AFCF_100%)] text-[9px] font-700 ">
          <li className="tracting-[0.5px]">CAPTURE</li>
          <li><img src={Arrow}className="object-cover w-2 h-2" alt="rightarrow" /></li>
          <li>STANDARDIZE</li>
          <li><img src={Arrow}className="object-cover w-2 h-2" alt="rightarrow" /></li>
          <li>DEVELOP</li>
          <li><img src={Arrow}className="object-cover w-2 h-2" alt="rightarrow" /></li>
          <li>VALIDATE</li>
          <li><img src={Arrow}className="object-cover w-2 h-2" alt="rightarrow" /></li>
          <li>IMPROVE</li>
        </ul>
        <p className="text-[#636E72] text-[10.5px] relative top-[-30px]">ONE PLATFORM. ONE OPERATING MODEL. UNLIMITED POTENTIAL.</p>
      </div>
      </div>


    </div> 
  );
};

export default PlatformDiagram;






      // {/* ====== GRADIENT FUNNEL ====== */}
      // <div className="absolute top-[510px] left-1/2 -translate-x-1/2 w-[280px] h-[250px] z-0">
      //   <img
      //     src={heroGradiant}
      //     alt=""
      //     className="w-full h-full object-contain"
      //     style={{ mixBlendMode: "multiply" }}
      //   />
      // </div>

      // {/* ====== LEFT FEATURES ====== */}
      // <div className="absolute top-[525px] left-0 flex flex-col gap-7 z-10">
      //   {foundationFeatures.left.map((f) => (
      //     <div key={f.id} className="flex items-center gap-2">
      //       <span className="text-[#02667E]">
      //         <FeatureIcon type={f.icon} />
      //       </span>
      //       <span className="text-[13px] font-medium text-[#02667E] italic whitespace-nowrap">
      //         {f.label}
      //       </span>
      //       <span className="w-2 h-2 rounded-full bg-[#3FB1C5] inline-block ml-1" />
      //     </div>
      //   ))}
      // </div>

      // {/* ====== RIGHT FEATURES ====== */}
      // <div className="absolute top-[525px] right-0 flex flex-col gap-7 items-end z-10">
      //   {foundationFeatures.right.map((f) => (
      //     <div key={f.id} className="flex items-center gap-2">
      //       <span className="w-2 h-2 rounded-full bg-[#3FB1C5] inline-block mr-1" />
      //       <span className="text-[13px] font-medium text-[#02667E] italic whitespace-nowrap">
      //         {f.label}
      //       </span>
      //       <span className="text-[#02667E]">
      //         <FeatureIcon type={f.icon} />
      //       </span>
      //     </div>
      //   ))}
      // </div>

      // {/* ====== OKQ DIGITAL FOUNDATION PILL ====== */}
      // <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 z-20">
      //   <div className="bg-[#02667E] rounded-full py-2 px-7 flex items-center justify-center shadow-md">
      //     <span className="text-[10px] text-white uppercase tracking-[0.2em] font-semibold">
      //       OKQ Digital Foundation
      //     </span>
      //   </div>
      // </div>

      // {/* ====== STEPS BAR ====== */}
      // <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10">
      //   <div className="bg-[#02667E] rounded-md py-1.5 px-4 flex items-center gap-2">
      //     {foundationFeatures.steps.map((step, idx) => (
      //       <span key={step} className="flex items-center gap-2">
      //         <span className="text-[9px] text-white uppercase font-medium tracking-[0.1em]">
      //           {step}
      //         </span>
      //         {idx < foundationFeatures.steps.length - 1 && (
      //           <span className="text-[#7BB5C2] text-[8px]">●</span>
      //         )}
      //       </span>
      //     ))}
      //   </div>
      // </div>

      // {/* ====== BOTTOM TAGLINE ====== */}
      // <p className="absolute bottom-[8px] left-1/2 -translate-x-1/2 text-[8px] text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap font-medium">
      //   One Platform. One Operating Model. Unlimited Potential.
      // </p>
