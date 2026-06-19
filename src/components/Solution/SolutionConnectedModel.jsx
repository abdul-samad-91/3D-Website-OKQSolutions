import SolutionButton from "./SolutionButton";
import SolutionIcon from "./SolutionIcons";

const solutions = [
  {
    number: "01",
    icon: "rocket",
    title: "Operational Excellence Transformation&trade;",
    text: "Build disciplined operational systems that improve consistency, governance, standardization, and performance.",
    position: "lg:left-[10%] lg:top-[2%]",
  },
  {
    number: "02",
    icon: "users",
    title: "Knowledge & Capability Systems&trade;",
    text: "Transform expertise into structured learning, qualification, and workforce capability.",
    position: "lg:right-[12%] lg:top-[2%]",
  },
  {
    number: "03",
    icon: "bolt",
    title: "Intelligent Operational Enablement&trade;",
    text: "Scale operational excellence through connected digital systems and responsible operational intelligence.",
    position: "lg:left-[10%] lg:bottom-[5%]",
  },
  {
    number: "04",
    icon: "target",
    title: "Strategic Advisory & Industrial Development&trade;",
    text: "Design long-term capability roadmaps, operational transformation strategies, and enterprise maturity programs.",
    position: "lg:right-[12%] lg:bottom-[5%]",
  },
];

const SolutionCard = ({ item }) => (
  <article
    className={`relative rounded-[10px] border border-[#BFEAF1] bg-white px-7 py-7 shadow-[0_16px_30px_rgba(15,84,98,0.08)] lg:absolute lg:h-[300px] lg:w-[270px] ${item.position}`}
  >
    <div className="flex items-start justify-between">
      <SolutionIcon name={item.icon} className="h-6 w-6 text-[#00A8C8]" />
      <span className="text-[11px] font-extrabold text-[#00A8C8]">{item.number}</span>
    </div>
    <h3 className="mt-7 text-[20px] font-medium leading-[1.22] text-[#1E292F]">{item.title}</h3>
    <p className="mt-5 text-[12px] leading-[1.65] text-[#66737A]">{item.text}</p>
  </article>
);

const SolutionConnectedModel = () => (
  <section className="bg-[linear-gradient(125deg,#EAF9FC_0%,#FFFFFF_58%,#EAF9FC_100%)] px-6 py-24 lg:py-[100px]">
    <div className="mx-auto max-w-[1280px]">
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="text-[38px] font-extrabold leading-[1.12] text-[#30373B] sm:text-[52px]">
          Four connected solutions. One operating model.
        </h2>
        <p className="mx-auto mt-7 max-w-[700px] text-[13px] leading-[1.8] text-[#66737A]">
          Each solution addresses a different layer of operational capability. Together they form one disciplined
          operating model - not isolated services.
        </p>
        <div className="mt-11 flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold text-[#00A8C8]">
          <span>Define systems</span>
          <span>-&gt;</span>
          <span>Develop people</span>
          <span>-&gt;</span>
          <span>Enable intelligence</span>
          <span>-&gt;</span>
          <span>Scale maturity</span>
        </div>
      </div>

      <div className="relative mx-auto mt-20 grid gap-8 lg:h-[610px] lg:max-w-[920px] lg:grid-cols-none">
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[470px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#A9E5EF] lg:block" />
        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 920 610" fill="none">
          <path d="M270 187 430 290M650 187 490 290M270 424 430 318M650 424 490 318" stroke="#8CE3F0" strokeWidth="1.6" />
        </svg>
        {solutions.map((item) => (
          <SolutionCard key={item.number} item={item} />
        ))}

        <div className="relative z-10 mx-auto flex h-[236px] w-[236px] flex-col items-center justify-center rounded-[5px] border-2 border-[#00B4D7] bg-white text-center shadow-[0_22px_32px_rgba(15,84,98,0.13)] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <SolutionIcon name="sync" className="h-8 w-8 text-[#00A8C8]" />
          <p className="mt-5 text-[20px] leading-[1.2] text-[#18252B]">OKQ Delivery<br />Model&trade;</p>
          <p className="mt-4 text-[11px] font-semibold text-[#425056]">One Operating Model</p>
        </div>
      </div>

      <div className="mt-9 flex justify-center">
        <SolutionButton href="/platform" className="min-h-[54px] min-w-[270px] px-7">
          See the OKQ Delivery Model&trade;
        </SolutionButton>
      </div>
    </div>
  </section>
);

export default SolutionConnectedModel;
