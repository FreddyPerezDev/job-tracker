export default function Footer() {
  return (
    <footer className="bg-emerald-100/50 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
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
          <span className="font-bold text-emerald-950">JobTracker</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-emerald-800/70 hover:text-emerald-700 transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-emerald-800/70 hover:text-emerald-700 transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-emerald-800/70 hover:text-emerald-700 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-emerald-800/50">
          &copy; 2024 JobTracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
