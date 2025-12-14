"use client";

export default function PartnersSection() {
  const partners = [
    { name: "Schneider Electric", logo: "/Partner-Brand-logo/schneider.png" },
    { name: "Polycab", logo: "/Partner-Brand-logo/polycab.svg" },
    { name: "Schmersal", logo: "/Partner-Brand-logo/schmersal.png" },
    { name: "Jaquar", logo: "/Partner-Brand-logo/jaquar.png" },
    { name: "Philips", logo: "/Partner-Brand-logo/philips.jpg" },
    { name: "White Teak", logo: "/Partner-Brand-logo/whiteTeak.jpeg" },
    { name: "CP Plus", logo: "/Partner-Brand-logo/cpplus.png" },
    { name: "Matrix", logo: "/Partner-Brand-logo/matrix.png" },
    { name: "Telemecanique", logo: "/Partner-Brand-logo/tele.svg" },
    { name: "LG", logo: "/Partner-Brand-logo/lg.png" },
    { name: "Samsung", logo: "/Partner-Brand-logo/samsung.png" },
    { name: "dwyer", logo: "/Partner-Brand-logo/dwyer.svg" },
  ];

  return (
    // **CHANGE: Changed from bg-slate-50 to bg-slate-100 to alternate the section color.**
    <section className="relative w-full bg-slate-100 py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Background pattern — desktop only */}
      <div className="absolute inset-0 opacity-30 hidden md:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(203 213 225) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="inline-block mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Trusted Partnerships
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Industry-Leading Partners
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            We work with established global brands to deliver reliable,
            standards-compliant solutions across projects and industries.
          </p>
        </div>

        {/* LOGOS */}
        {/*
          MOBILE: Grid with 2 columns, centered logos,
          DESKTOP: Grid with 4 columns (original design)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative"
              style={{
                animation:
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    : "none",
              }}
            >
              {/*
                REVISED MOBILE CARD: Simple, logo-focused box.
                Hidden on md+
              */}
              <div className="md:hidden flex items-center justify-center bg-white border border-slate-200 rounded-xl p-4 h-24">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  // Use Tailwind for logo sizing/containment
                  className="max-h-12 w-full object-contain "
                  loading="lazy"
                />
              </div>

              {/* DESKTOP CARD — unchanged from original (hidden on mobile) */}
              <div className="hidden md:flex relative bg-white rounded-2xl p-8 shadow-sm border border-slate-300 hover:shadow-xl hover:border-blue-300 transition-all duration-500 aspect-square items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="relative z-10 w-full h-full object-contain p-4 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* DESKTOP HOVER NAME (hidden on mobile) */}
              <div className="absolute -bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block">
                <span className="text-sm font-semibold text-slate-700">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST INDICATOR — simplified for mobile */}
        <div className="mt-12 md:mt-20 text-center">
          <p className="text-sm md:text-base text-slate-700">
            Trusted by <span className="font-bold text-slate-900">500+</span>{" "}
            enterprises worldwide
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
