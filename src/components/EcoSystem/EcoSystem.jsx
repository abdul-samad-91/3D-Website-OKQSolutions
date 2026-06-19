import { Link } from "react-router-dom";

const layers = [
  {
    number: "01",
    name: "OKQ Core\u2122",
    category: "Knowledge Foundation",
    detail: "Capture, organize, and govern operational knowledge",
    fill: "#19b8d4",
  },
  {
    number: "02",
    name: "OKQ Flow\u2122",
    category: "Process & Execution",
    detail: "Standard work, visual guidance, execution discipline",
    fill: "#79bdd1",
  },
  {
    number: "03",
    name: "OKQ Academy\u2122",
    category: "Learning & Development",
    detail: "Role-based learning, onboarding, skill development",
    fill: "#526e76",
  },
  {
    number: "04",
    name: "OKQ Insight\u2122",
    category: "Operational Intelligence",
    detail: "Capability visibility, risk signals, performance insight",
    fill: "#7d8586",
  },
  {
    number: "05",
    name: "OKQ Resolve\u2122",
    category: "Troubleshooting",
    detail: "Accelerated diagnosis, recovery, and learning",
    fill: "#195461",
  },
  {
    number: "06",
    name: "OKQ Guard\u2122",
    category: "Standards Governance",
    detail: "Audit readiness, traceability, compliance alignment",
    fill: "#42636a",
  },
  {
    number: "07",
    name: "OKQ Pulse\u2122",
    category: "Continuous Improvement",
    detail: "Competency checks, assessments, improvement management",
    fill: "#0d7487",
  },
];

const labelRotations = [-31, 29, 79, 130, 0, -130, -80];

const polarPoint = (center, radius, angle) => {
  const radians = (Math.PI / 180) * angle;
  return {
    x: center + radius * Math.cos(radians),
    y: center + radius * Math.sin(radians),
  };
};

const polygonPoints = (points) => points.map((point) => `${point.x},${point.y}`).join(" ");

const ArchitectureDiagram = () => {
  const center = 300;
  const outerRadius = 215;
  const innerRadius = 112;
  const labelRadius = 160;
  const step = 360 / layers.length;
  const startAngle = -90 - step;
  const innerPoints = Array.from({ length: layers.length }, (_, index) =>
    polarPoint(center, innerRadius, startAngle + index * step)
  );

  return (
    <svg viewBox="0 0 600 540" className="h-full w-full" role="img" aria-label="Seven layers of capability architecture">
      {layers.map((layer, index) => {
        const angleA = startAngle + index * step;
        const angleB = startAngle + (index + 1) * step;
        const outerA = polarPoint(center, outerRadius, angleA);
        const outerB = polarPoint(center, outerRadius, angleB);
        const innerB = polarPoint(center, innerRadius, angleB);
        const innerA = polarPoint(center, innerRadius, angleA);
        const labelPoint = polarPoint(center, labelRadius, angleA + step / 2);

        return (
          <g key={layer.number}>
            <polygon
              points={polygonPoints([outerA, outerB, innerB, innerA])}
              fill={layer.fill}
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <g transform={`translate(${labelPoint.x} ${labelPoint.y}) rotate(${labelRotations[index]})`} fill="#ffffff">
              <text x="-38" y="-22" fontSize="24" fontWeight="800">
                {layer.number}
              </text>
              <text x="-38" y="-3" fontSize="12" fontWeight="800">
                {layer.name}
              </text>
              <text x="-38" y="12" fontSize="7.5" fontWeight="800" letterSpacing="0.8">
                {layer.category.toUpperCase()}
              </text>
              <text x="-38" y="27" fontSize="7" fontWeight="500">
                {layer.detail}
              </text>
            </g>
          </g>
        );
      })}

      <polygon points={polygonPoints(innerPoints)} fill="#ffffff" />
      <text x={center} y="263" textAnchor="middle" fill="#3d494d" fontSize="62" fontWeight="800">
        7
      </text>
      <text
        x={center}
        y="298"
        textAnchor="middle"
        fill="#3d494d"
        fontSize="18"
        fontWeight="800"
        letterSpacing="0.8"
      >
        LAYERS OF CAPABILITY
      </text>
    </svg>
  );
};

const EcoSystem = () => {
  return (
    <section id="ecosystem" className="bg-white px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mx-auto max-w-5xl text-[30px] font-bold leading-tight text-[#082b35] md:text-[40px]">
            One connected ecosystem. Seven reinforcing layers.
          </h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-6 text-[#57666b]">
            OKQ connects documentation, workforce development, competency verification, troubleshooting, compliance, and operational learning into one integrated architecture. Each output strengthens the next layer, every operational event becomes learning, and every improvement raises future performance - a continuous cycle of operational maturity.
          </p>
          <p className="mt-7 text-[15px] font-semibold text-[#007f95]">
            The Operational Intelligence Loop: Knowledge -&gt; Standardize -&gt; Learn -&gt; Validate -&gt; Execute -&gt; Solve -&gt; Improve
          </p>
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-[18px] font-extrabold text-[#082b35]">The architecture</h3>
        </div>

        <div className="mx-auto mt-7 max-w-[690px]">
          <div className="mx-auto hidden aspect-[1.1/1] w-full md:block">
            <ArchitectureDiagram />
          </div>

          <div className="grid gap-3 md:hidden">
            {layers.map((layer) => (
              <article key={layer.number} className="rounded border border-[#d9edf1] bg-[#f8fdfe] p-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded bg-[#00a8c8] text-[14px] font-bold text-white">
                    {layer.number}
                  </span>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#082b35]">{layer.name}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#007f95]">{layer.category}</p>
                  </div>
                </div>
                <p className="mt-3 text-[12px] leading-5 text-[#57666b]">{layer.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-sm bg-[#f3fbfd] px-6 py-7">
          <h3 className="text-[17px] font-bold text-[#007f95]">Intelligent enablement, responsibly applied</h3>
          <p className="mt-4 text-[15px] leading-6 text-[#3d494d]">
            Agentic AI accelerates documentation, learning content, knowledge retrieval, assessment, and problem-solving. It reduces friction and amplifies competence - while people, standards, and operational discipline stay at the center.
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[18px] font-semibold text-[#3d494d]">
            Knowledge becomes capability. Capability becomes performance. Performance becomes continuous improvement.
          </p>
          <p className="mt-5 text-[14px] font-bold text-[#007f95]">
            KPI focus: MTTR - First Pass Yield - Knowledge retention - Document adoption
          </p>
          <Link
            to="/standards-intelligence"
            className="mt-7 inline-flex rounded-sm bg-[#00a8c8] px-8 py-3 text-[12px] font-semibold text-white shadow-[0_10px_20px_rgba(0,168,200,0.22)] transition-colors hover:bg-[#007f95]"
          >
            Explore the Leadership Command Center
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EcoSystem;
