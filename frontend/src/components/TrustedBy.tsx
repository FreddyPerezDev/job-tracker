const companies = ["Google", "Spotify", "Airbnb", "Netflix"];

export default function TrustedBy() {
  return (
    <section className="py-12 text-center">
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-emerald-500 mb-6">
        Trusted by Job Seekers at
      </p>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {companies.map((company) => (
          <span
            key={company}
            className="text-lg font-medium text-emerald-800/40"
          >
            {company}
          </span>
        ))}
      </div>
    </section>
  );
}
