export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        </div>
        <span className="text-lg font-bold text-emerald-950">JobTracker</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-emerald-950 font-medium hover:text-emerald-700 transition-colors"
        >
          Login
        </a>
        <a
          href="#"
          className="bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
        >
          Get Started Free
        </a>
      </div>
    </nav>
  );
}
