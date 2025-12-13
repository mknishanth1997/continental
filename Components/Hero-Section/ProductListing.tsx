import {
  HiBolt,
  HiLightBulb,
  HiVideoCamera,
  HiCog6Tooth,
} from "react-icons/hi2";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: HiBolt,
      title: "Electrical Systems",
      description:
        "Safe and reliable power distribution solutions for commercial, industrial, and infrastructure facilities.",
      offerings: [
        "LT & HT Cabling",
        "MV Panels & Power Distribution Boards",
        "Electrical Distribution for Offices & Factories",
        "Earthing & Grounding Systems",
        "Turnkey Electrical Installations",
      ],
    },
    {
      icon: HiLightBulb,
      title: "Lighting Systems",
      description:
        "Energy-efficient and smart lighting solutions for performance, safety, and visual comfort.",
      offerings: [
        "LED Lighting Solutions",
        "Indoor & Outdoor Lighting",
        "Architectural & Facade Lighting",
        "Lighting Controls & Automation",
        "Turnkey Lighting Projects",
      ],
    },
    {
      icon: HiVideoCamera,
      title: "CCTV & Surveillance",
      description:
        "Scalable surveillance and security systems providing real-time monitoring and control.",
      offerings: [
        "IP & Analog CCTV Systems",
        "Video Management Systems (VMS)",
        "Access Control Solutions",
        "Surveillance Analytics",
        "Remote Monitoring Solutions",
      ],
    },
    {
      icon: HiCog6Tooth,
      title: "Mechanical Spares & Components",
      description:
        "Industrial-grade mechanical and automation components engineered for demanding environments.",
      offerings: [
        "Port & Marine Industry Components",
        "Automation & Actuation Parts",
        "Corrosion-Resistant Fixtures",
        "Custom Fabricated Supports",
        "Mechanical Integration Solutions",
      ],
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto border-t border-slate-200 pt-16">
        {/* SECTION HEADER */}
        <div className="mb-16 max-w-3xl">
          <span className="inline-block mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Our Solutions
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Engineering Capabilities
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            End-to-end integrated systems delivered across the full project
            lifecycle with technical discipline, compliance, and long-term
            operational reliability.
          </p>
        </div>

        {/* SOLUTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Offerings */}
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-800 mb-3">
                    Key Offerings
                  </h4>
                  <ul className="space-y-2">
                    {solution.offerings.map((offering, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
