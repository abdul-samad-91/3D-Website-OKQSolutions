const loopNodes = [
  { id: 1, label: "Knowledge", angle: 270 },   // top
  { id: 2, label: "Standardize", angle: 315 },  // top-right
  { id: 3, label: "Learn", angle: 0 },          // right
  { id: 4, label: "Standardize", angle: 45 },   // bottom-right
  { id: 5, label: "Validate", angle: 90 },      // bottom
  { id: 6, label: "Execute", angle: 135 },      // bottom-left
  { id: 7, label: "Solve", angle: 180 },        // left
  { id: 8, label: "Improve", angle: 225 },      // top-left
];

const polarToCartesian = (cx, cy, radius, angleDeg) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
};

const IntelligenceLoop = () => {
  const cx = 400;
  const cy = 360;
  const orbitRadius = 240;
  const nodeRadius = 50;

  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl border border-gray-200 pt-10"
          style={{
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F5FBFC 50%, #EAF8FA 100%)",
          }}
        >
          {/* Title */}
          <h3 className="text-center text-[24px] font-bold text-[#02667E] mb-6">
            The Operational Intelligence Loop
          </h3>

          {/* Loop diagram */}
          <div className="relative w-full max-w-[800px] mx-auto" style={{ aspectRatio: "800 / 720" }}>
            <svg
              viewBox="0 0 800 720"
              className="absolute inset-0 w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer dashed circle connecting all nodes (curved path along orbit) */}
              <circle
                cx={cx}
                cy={cy}
                r={orbitRadius +12}
                stroke="#02667E"
                strokeWidth="1.2"
                strokeDasharray="9 10"
                fill="none"
                opacity="0.4"
              />

              {/* Inner second dashed circle slightly smaller */}
              <circle
                cx={cx}
                cy={cy}
                r={orbitRadius - 24}
                stroke="#02667E"
                strokeWidth="1"
                strokeDasharray="9 10"
                fill="none"
                opacity="0.4"
              />

              {/* Nodes - gear/cog teeth + filled circles */}
              {loopNodes.map((node) => {
                const pos = polarToCartesian(cx, cy, orbitRadius, node.angle);
                const toothCount = 28;
                const toothWidth = 6;
                const toothHeight = 3;
                const toothInnerR = nodeRadius -1;

                return (
                  <g key={node.id}>
                    {/* Gear teeth: individual rects rotated around the node center */}
                    {Array.from({ length: toothCount }, (_, i) => {
                      const angle = (i * 360) / toothCount;
                      return (
                        <rect
                          key={i}
                          x={pos.x - toothWidth / 2}
                          y={pos.y - toothInnerR - toothHeight}
                          width={toothWidth}
                          height={toothHeight}
                          rx="0"
                          fill="#0094B0"
                          transform={`rotate(${angle}, ${pos.x}, ${pos.y})`}
                        />
                      );
                    })}
                    {/* Solid teal node on top */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeRadius}
                      fill="#0094B0"
                    />
                    {/* Label */}
                    <text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="600"
                      fontFamily="system-ui, sans-serif"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceLoop;
