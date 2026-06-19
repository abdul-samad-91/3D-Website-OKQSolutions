const loopNodes = [
  { id: 1, label: "Document", angle: 270, icon: "document" },
  { id: 2, label: "Learn", angle: 315, icon: "learn" },
  { id: 3, label: "Assess", angle: 0, icon: "assess" },
  { id: 4, label: "Troubleshoot", angle: 45, icon: "troubleshoot" },
  { id: 5, label: "Improve", angle: 90, icon: "improve" },
  { id: 6, label: "Report", angle: 135, icon: "report" },
  { id: 7, label: "Standardize", angle: 180, icon: "standardize" },
  { id: 8, label: "Execute", angle: 225, icon: "execute" },
];

const polarToCartesian = (cx, cy, radius, angleDeg) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
};

const nodeIcon = (type) => {
  const iconProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    document: (
      <g {...iconProps}>
        <path d="M10 6h5l3 3v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        <path d="M15 6v4h4" />
        <path d="M11 14h5M11 17h3" />
      </g>
    ),
    learn: (
      <g {...iconProps}>
        <path d="M5 8.5 12 5l7 3.5-7 3.5-7-3.5Z" />
        <path d="M7 11v4.5c1.4 1.2 3 1.8 5 1.8s3.6-.6 5-1.8V11" />
      </g>
    ),
    assess: (
      <g {...iconProps}>
        <rect x="7" y="5" width="10" height="14" rx="2" />
        <path d="M10 9h4M10 13h4M10 16h2" />
      </g>
    ),
    troubleshoot: (
      <g {...iconProps}>
        <path d="m8 16 8-8M9 8.5h.01M15 15.5h.01" />
        <circle cx="9" cy="8.5" r="1.8" />
        <circle cx="15" cy="15.5" r="1.8" />
      </g>
    ),
    improve: (
      <g {...iconProps}>
        <path d="M6 18h12M8 16v-5M12 16V7M16 16v-8" />
        <path d="m12 5 2 2h-4l2-2Z" />
      </g>
    ),
    report: (
      <g {...iconProps}>
        <path d="M8 5h7l3 3v11H8V5Z" />
        <path d="M15 5v4h3M11 13h4M11 16h3" />
      </g>
    ),
    standardize: (
      <g {...iconProps}>
        <rect x="6" y="6" width="5" height="5" rx="1" />
        <rect x="13" y="6" width="5" height="5" rx="1" />
        <rect x="6" y="13" width="5" height="5" rx="1" />
        <rect x="13" y="13" width="5" height="5" rx="1" />
      </g>
    ),
    execute: (
      <g {...iconProps}>
        <path d="M8 6h6l3 3v9H8V6Z" />
        <path d="M14 6v4h3" />
        <path d="m10.5 14 1.5 1.5 3-3" />
      </g>
    ),
  };

  return icons[type];
};

const IntelligenceLoop = () => {
  const cx = 300;
  const cy = 300;
  const orbitRadius = 188;
  const nodeSize = 74;

  return (
    <div className="relative w-full max-w-[620px] mx-auto overflow-visible" style={{ aspectRatio: "1 / 1" }}>
      <style>
        {`
          @keyframes intelligenceLoopRotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }

          @keyframes intelligenceLoopStayUpright {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .intelligence-loop-orbit {
            animation: intelligenceLoopRotate 24s linear infinite;
            transform-box: view-box;
            transform-origin: ${cx}px ${cy}px;
            will-change: transform;
          }

          .intelligence-loop-upright {
            animation: intelligenceLoopStayUpright 24s linear infinite;
            transform-box: fill-box;
            transform-origin: center;
            will-change: transform;
          }
        `}
      </style>
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="intelligence-loop-orbit">
          <circle cx={cx} cy={cy} r={orbitRadius} stroke="#63BFD0" strokeWidth="1.2" opacity="0.75" />

          {loopNodes.map((node) => {
            const pos = polarToCartesian(cx, cy, orbitRadius, node.angle);
            const labelRadius = orbitRadius + 68;
            const label = polarToCartesian(cx, cy, labelRadius, node.angle);
            const textAnchor = node.angle === 270 || node.angle === 90 ? "middle" : label.x > cx ? "start" : "end";
            const baseline = node.angle === 270 ? "auto" : node.angle === 90 ? "hanging" : "middle";

            return (
              <g key={node.id}>
                <g transform={`translate(${pos.x}, ${pos.y})`}>
                  <g className="intelligence-loop-upright">
                    <rect x={-nodeSize / 2} y={-nodeSize / 2} width={nodeSize} height={nodeSize} rx="8" fill="#08AFCB" />
                    <g className="text-white" transform="translate(-12, -12)">
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        {nodeIcon(node.icon)}
                      </svg>
                    </g>
                  </g>
                </g>
                <g transform={`translate(${label.x}, ${node.angle === 270 ? label.y - 8 : node.angle === 90 ? label.y + 8 : label.y})`}>
                  <text
                    className=" intelligence-loop-upright"
                    x="0"
                    y="0"
                    textAnchor={textAnchor}
                    dominantBaseline={baseline}
                    fill="#00A8C8"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    bg="black"
                  >
                    {node.label}
                  </text>
                </g>
              </g>
            );
          })}
        </g>

        <text
          x={cx}
          y={cy + 9}
          textAnchor="middle"
          fill="#02667E"
          fontSize="44"
          fontWeight="700"
          fontFamily="Georgia, serif"
        >
          OKQ
        </text>
      </svg>
    </div>
  );
};

export default IntelligenceLoop;
