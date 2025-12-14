"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 sm:py-28 overflow-hidden bg-[#0b1120]"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/pexels-sevenstormphotography-443383.jpg')",
        }}
      />

      {/* Navy Tint Overlay */}
      <div className="absolute inset-0 bg-[#0b1120]/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* BADGE */}
        <div className="mb-6 inline-flex px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm">
          Empowering Industrial Growth ⚡
          {/* Delivering Results, Exceeding Expectations ⚡ */}
        </div>

        {/* HEADLINE */}
        <h1 className="font-black tracking-tight text-white leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-[6rem]">
          Integrated Engineering
          <span className="block mt-2">Solutions Built for</span>
          <span className="block text-blue-400">Reliability</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
          Powering businesses with trusted electrical, lighting, CCTV, telecom,
          and mechanical systems engineered for long-term performance and
          uncompromising quality.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition">
            Explore Solutions →
          </button>

          <button className="px-8 py-3 rounded-full border border-slate-600 text-white font-semibold text-lg hover:bg-slate-800/40 transition">
            Learn More
          </button>
        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl pt-8 border-t border-slate-800 w-full">
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              500+
            </div>
            <div className="text-slate-400 text-sm">Projects Delivered</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">15+</div>
            <div className="text-slate-400 text-sm">Years Experience</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">98%</div>
            <div className="text-slate-400 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
