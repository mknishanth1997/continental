import {
  HiShieldCheck,
  HiClipboardDocumentCheck,
  HiUsers,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            About Us
          </span>
          <h2 className="leading-tight mb-6">
            <span className="block text-4xl sm:text-5xl font-extrabold text-slate-900">
              Continental Energy Enterprises
            </span>
            <span className="block mt-2 text-2xl sm:text-3xl font-semibold text-slate-700">
              Built on Reliability, Standards, and Long-Term Value
            </span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
            Continental Energy Enterprises is an engineering solutions partner
            supporting industrial, commercial, and infrastructure projects. Our
            work is guided by technical discipline, trusted partnerships, and a
            commitment to safety, quality, and dependable performance.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
            Learn More
            <span aria-hidden>→</span>
          </button>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* CARD 1 */}
          <div className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <HiShieldCheck className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Reliability First
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {/* Long-term performance and operational stability guide every
              decision we make. */}
              Decisions guided by long-term performance and operational
              stability.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <HiClipboardDocumentCheck className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Standards & Compliance
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {/* Strict adherence to safety, quality, and regulatory requirements. */}
              Commitment to safety, quality, and regulatory adherence in
              everything we do.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <HiUsers className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Trusted Partnerships
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {/* Collaboration with proven global and regional technology leaders. */}
              Working with proven technology leaders to ensure confidence and
              consistency.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <HiChatBubbleLeftRight className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Customer-Centric Approach
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Clear communication, accountability, and long-term relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
