export default function Hero() {
  return (
    <section className="relative px-6 pt-16 pb-20 text-center max-w-4xl mx-auto">
      {/* Decorative calendar icon - top left */}
      <div className="absolute left-0 top-8 opacity-20 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-28 text-emerald-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <rect x="7" y="13" width="3" height="3" rx="0.5" />
          <rect x="14" y="13" width="3" height="3" rx="0.5" />
        </svg>
      </div>

      {/* Decorative chat icon - right */}
      <div className="absolute right-4 top-48 opacity-20 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-emerald-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-emerald-300 rounded-full px-4 py-1.5 mb-8">
        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
        <span className="text-sm font-semibold text-emerald-700 tracking-wider uppercase">
          V2.0 is Live
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        <span className="text-emerald-950">Master Your</span>
        <br />
        <span className="text-emerald-500">Job Search Chaos</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg text-emerald-800/70 max-w-2xl mx-auto mb-10 leading-relaxed">
        Organize applications, track interviews, and land your dream role
        without the stress. The all-in-one workspace for modern job seekers.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#"
          className="bg-emerald-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2 text-lg"
        >
          Start Tracking Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#"
          className="border-2 border-emerald-200 bg-white text-emerald-950 px-8 py-3.5 rounded-full font-semibold hover:border-emerald-400 transition-colors flex items-center gap-2 text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-emerald-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Watch Demo
        </a>
      </div>
    </section>
  );
}
