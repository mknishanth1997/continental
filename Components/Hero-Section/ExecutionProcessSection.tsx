import {
  HiPencilSquare,
  HiWrenchScrewdriver,
  HiCheckCircle,
  HiLifebuoy,
} from "react-icons/hi2";

const steps = [
  {
    step: "01",
    title: "System Design",
    description:
      "Detailed planning, load calculations, layout design, and equipment selection aligned with technical and safety standards.",
    icon: HiPencilSquare,
  },
  {
    step: "02",
    title: "Installation",
    description:
      "On-site execution carried out by experienced teams with strict adherence to safety, quality, and project timelines.",
    icon: HiWrenchScrewdriver,
  },
  {
    step: "03",
    title: "Testing & Commissioning",
    description:
      "Comprehensive testing, calibration, and validation to ensure performance, stability, and compliance with specifications.",
    icon: HiCheckCircle,
  },
  {
    step: "04",
    title: "After-Sales Support",
    description:
      "Responsive technical support, troubleshooting, and maintenance to ensure long-term system reliability.",
    icon: HiLifebuoy,
  },
];

export default function ExecutionProcessSection() {
  return (
    // **CHANGE: Changed from bg-slate-50 to bg-white to alternate the section color.**
    <section id="services" className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto border-t border-slate-200 pt-24">
        {/* SECTION HEADER */}
        <div className="mb-16 max-w-3xl">
          <span className="inline-block mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            End-to-End Project Execution
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We deliver integrated engineering solutions across the full project
            lifecycle — from initial design to commissioning and long-term
            support.
          </p>
        </div>

        {/* STEPS */}
        <div className="space-y-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-0 bg-gradient-to-r from-slate-100 to-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {/* LARGE NUMBER - Left Side */}
                <div className="flex items-center justify-center w-32 sm:w-40 h-32 sm:h-36 bg-blue-600 text-white">
                  <span className="text-7xl sm:text-8xl font-black opacity-90">
                    {index + 1}
                  </span>
                </div>

                {/* CONTENT AREA */}
                <div className="flex-1 flex items-center justify-between p-6 pl-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* ICON BOX */}
                  <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 text-white shrink-0 ml-6">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
