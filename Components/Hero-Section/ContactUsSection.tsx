export default function ContactInfoSection() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-white to-slate-50 py-20 md:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-200">
            GET IN TOUCH
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Let's Start a Conversation
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Whether you have questions, need support, or want to discuss a
            project, we're here to help. Reach out through any of the channels
            below.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Address Card */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Office Address
              </h3>

              <address className="not-italic text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">
                  Continental Energy Enterprises
                </span>
                <br />
                No. 11, Bazaar Street,
                <br />
                ICF Colony, Athipet,
                <br />
                Ambattur, Chennai - 600 058,
                <br />
                Tamilnadu, India.
              </address>

              <a
                href="https://www.google.com/maps/search/?api=1&query=No.+11,+Bazaar+Street,+ICF+Colony,+Athipet,+Ambattur,+Chennai+600058,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View on Map
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-green-300 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Phone</h3>

              <p className="text-slate-600 text-sm mb-3">
                Available Mon-Sat, 9 AM - 6 PM
              </p>

              <a
                href="tel:+917299972518"
                className="text-lg font-semibold text-slate-900 hover:text-green-600 transition-colors block"
              >
                +91 72999 72518
              </a>

              <a
                href="tel:+919444965199"
                className="text-lg font-semibold text-slate-900 hover:text-green-600 transition-colors block mt-1"
              >
                +91 94449 65199
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-purple-300 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>

              <p className="text-slate-600 text-sm mb-3">
                We'll respond within 24 hours
              </p>

              <a
                href="mailto:info@continentalenergy.com"
                className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors block break-all"
              >
                continentalenergyenterprises@gmail.com
              </a>

              <a
                href="mailto:support@continentalenergy.com"
                className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors block mt-2 break-all"
              >
                boomi@cee-s.co.in
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need Immediate Assistance?
          </h3>
          <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
            Our team is ready to help you with any urgent queries or technical
            support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91 72999 72518"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
            <a
              href="mailto:continentalenergyenterprises@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
