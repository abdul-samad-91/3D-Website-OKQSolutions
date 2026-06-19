const icons = {
  rocket: (
    <>
      <path d="M13.5 4.5c2.7.6 4.8 2.7 5.4 5.4l-4 4-5.4-5.4 4-4Z" />
      <path d="m9.5 8.5-3 1 .7 3.3M14.9 13.9l-1 3-3.3-.7M8.5 15.5l-2 2" />
    </>
  ),
  users: (
    <>
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M3.5 19c.6-3 2.2-4.5 4.5-4.5s3.9 1.5 4.5 4.5M11.5 19c.6-3 2.2-4.5 4.5-4.5s3.9 1.5 4.5 4.5" />
    </>
  ),
  bolt: (
    <path d="m13 3-7 11h5l-1 7 7-11h-5l1-7Z" />
  ),
  shield: (
    <>
      <path d="M12 3 5.5 5.5v5.2c0 4.1 2.6 7.7 6.5 9.3 3.9-1.6 6.5-5.2 6.5-9.3V5.5L12 3Z" />
      <path d="m9.5 12 1.7 1.7 3.4-3.6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
    </>
  ),
  chart: (
    <>
      <path d="M5 18h14M7 16v-5M12 16V7M17 16v-8" />
      <path d="m7 11 5-4 5 1" />
    </>
  ),
  sync: (
    <>
      <path d="M7 7h8a4 4 0 0 1 4 4v1" />
      <path d="m16 4 3 3-3 3M17 17H9a4 4 0 0 1-4-4v-1" />
      <path d="m8 20-3-3 3-3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </>
  ),
  expand: (
    <>
      <path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4" />
      <path d="M4 4l5 5M20 4l-5 5M4 20l5-5M20 20l-5-5" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
    </>
  ),
  list: (
    <>
      <path d="M8 7h11M8 12h11M8 17h11" />
      <path d="M5 7h.01M5 12h.01M5 17h.01" />
    </>
  ),
  flame: (
    <path d="M12 21c3.4 0 6-2.3 6-5.7 0-2.7-1.7-4.7-3.8-6.8-.2 1.8-1 3-2.2 4.1.1-3-1.2-5.5-3.8-7.6.2 4-2.2 5.9-2.2 9.8C6 18.5 8.7 21 12 21Z" />
  ),
  badge: (
    <>
      <path d="M12 3 5.5 7v6c0 3.2 2.7 5.8 6.5 8 3.8-2.2 6.5-4.8 6.5-8V7L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

const SolutionIcon = ({ name, className = "h-5 w-5", strokeWidth = 1.8 }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
  >
    {icons[name]}
  </svg>
);

export default SolutionIcon;
