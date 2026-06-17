import { Link } from "react-router-dom";

const AuthForm = ({ mode }) => {
  const isSignup = mode === "signup";

  return (
    <main className="bg-[#f7fcfd] min-h-[calc(100vh-65px)]">
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div>
          <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#02667E] mb-4">
            {isSignup ? "Create Account" : "Welcome Back"}
          </p>
          <h1 className="text-[2.4rem] lg:text-[52px] font-semibold leading-[1.08] text-[#0d1b2a]">
            {isSignup ? "Start building operational capability." : "Access your OKQ workspace."}
          </h1>
          <p className="mt-6 text-[17px] leading-8 text-[#3D494D] max-w-xl">
            {isSignup
              ? "Set up your account to explore platform workflows, standards intelligence, and performance modules."
              : "Sign in to continue managing knowledge, learning, compliance, and improvement workflows."}
          </p>
        </div>

        <form className="bg-white border border-[#d8eef3] rounded-lg p-6 lg:p-8 shadow-sm">
          <div className="grid gap-5">
            {isSignup && (
              <label className="grid gap-2">
                <span className="text-[13px] font-semibold text-[#0d1b2a]">Full name</span>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[15px] outline-none focus:border-[#02667E]"
                  placeholder="Your name"
                />
              </label>
            )}

            <label className="grid gap-2">
              <span className="text-[13px] font-semibold text-[#0d1b2a]">Email address</span>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[15px] outline-none focus:border-[#02667E]"
                placeholder="you@company.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-[13px] font-semibold text-[#0d1b2a]">Password</span>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[15px] outline-none focus:border-[#02667E]"
                placeholder="Enter password"
              />
            </label>

            {isSignup && (
              <label className="grid gap-2">
                <span className="text-[13px] font-semibold text-[#0d1b2a]">Company</span>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[15px] outline-none focus:border-[#02667E]"
                  placeholder="Company name"
                />
              </label>
            )}

            <button
              type="button"
              className="mt-2 bg-[#02667E] text-white text-[15px] font-semibold px-5 py-3.5 rounded-md hover:bg-[#024f63] transition-colors"
            >
              {isSignup ? "Create Account" : "Login"}
            </button>
          </div>

          <p className="mt-6 text-center text-[14px] text-[#3D494D]">
            {isSignup ? "Already have an account?" : "Need an account?"}{" "}
            <Link to={isSignup ? "/login" : "/signup"} className="font-semibold text-[#02667E] hover:text-[#024f63]">
              {isSignup ? "Login" : "Sign up"}
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default AuthForm;
