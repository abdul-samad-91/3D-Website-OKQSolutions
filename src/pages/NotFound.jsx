import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-[#f7fcfd] flex items-center">
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#02667E] mb-4">404</p>
        <h1 className="text-[2.5rem] lg:text-[52px] font-semibold text-[#0d1b2a]">Page not found</h1>
        <p className="mt-5 text-[16px] leading-7 text-[#3D494D]">
          The page you are looking for is not available in this OKQ workspace.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex bg-[#02667E] text-white text-[14px] font-semibold px-5 py-3 rounded-md hover:bg-[#024f63] transition-colors"
        >
          Go Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
