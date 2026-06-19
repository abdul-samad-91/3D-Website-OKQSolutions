import { Link } from "react-router-dom";

const SolutionButton = ({ children, href, variant = "primary", className = "" }) => {
  const base =
    "inline-flex min-h-[50px] items-center justify-center rounded-[3px] px-8 text-[13px] font-bold transition-colors";
  const styles =
    variant === "outline"
      ? "border-2 border-[#00B4D7] bg-transparent text-[#00A8C8] hover:bg-[#E8FAFD]"
      : "bg-[#00B4D7] text-white shadow-[0_14px_28px_rgba(0,180,215,0.22)] hover:bg-[#0299B8]";

  return (
    <Link to={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      {variant === "primary" && <span className="ml-3 text-[17px] leading-none">-&gt;</span>}
    </Link>
  );
};

export default SolutionButton;
