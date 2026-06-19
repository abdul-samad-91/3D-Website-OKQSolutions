import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About OKQ", href: "/about" },
      { label: "Mission & Vision", href: "/about" },
      { label: "Standards", href: "/standards-intelligence" },
      { label: "Contact", href: "/contactUs" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Features", href: "/platform" },
      { label: "Architecture", href: "/platform" },
      { label: "Enterprise", href: "/signup" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Operational Excellence", href: "/solution" },
      { label: "Knowledge Systems", href: "/solution" },
      { label: "Competency Framework", href: "/solution" },
      { label: "Delivery Model", href: "/solution" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", href: "/industries" },
      { label: "Automotive", href: "/industries" },
      { label: "Aerospace & Defense", href: "/industries" },
      { label: "Pharmaceutical", href: "/industries" },
    ],
  },
];

const SocialIcon = ({ type }) => {
  const common = "h-4 w-4";

  if (type === "linkedin") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.9H3.72V20h3.22V8.9ZM5.34 4a1.86 1.86 0 1 0 0 3.72 1.86 1.86 0 0 0 0-3.72ZM20.28 13.64c0-3.1-1.66-4.54-3.88-4.54a3.34 3.34 0 0 0-3.03 1.67h-.04V8.9h-3.08V20h3.21v-5.49c0-1.45.28-2.85 2.07-2.85 1.76 0 1.78 1.65 1.78 2.94V20h3.21l-.24-6.36Z" />
      </svg>
    );
  }

  if (type === "twitter") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 6.5c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.1 1.6-2-.7.4-1.5.7-2.4.9A3.7 3.7 0 0 0 11.7 9c0 .3 0 .6.1.8A10.4 10.4 0 0 1 4.2 6s-3.5 7.8 4.7 11.2c-1.2.8-2.7 1.2-4.2 1.2 8.3 4.6 16.7-.4 16.7-9.2v-.4c.7-.5 1.2-1 1.6-1.7Z" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-14 lg:py-16">
      <div className="max-w-[1230px] mx-auto">
        <div className="grid gap-12 lg:grid-cols-13">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex">
              <img src={Logo} alt="OKQ Solutions" className="h-9 w-auto" />
            </Link>
            <p className="mt-7 max-w-md text-[14px] leading-6 text-[#4D5A60]">
              Where operational knowledge becomes measurable performance.
            </p>
            <p className="mt-5 max-w-md text-[14px] font-semibold leading-6 text-[#0d1b2a]">
              Transforming Operational Knowledge into Industrial Performance
            </p>
            <div className="mt-6 flex items-center gap-4 text-[#4D5A60]">
              {["linkedin", "twitter", "mail"].map((item) => (
                <a key={item} href="/contactUs" className="transition-colors hover:text-[#00A8C8]" aria-label={item}>
                  <SocialIcon type={item} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h3 className="text-[13px]  font-bold text-[#0d1b2a]">{column.title}</h3>
              <ul className="mt-5 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[13px] text-[#4D5A60] transition-colors hover:text-[#00A8C8]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col gap-5 text-[13px] text-[#4D5A60] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 OKQ Solutions. All rights reserved.</p>
          <div className="flex items-center gap-7">
            <Link to="/privacy" className="transition-colors hover:text-[#00A8C8]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-[#00A8C8]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
