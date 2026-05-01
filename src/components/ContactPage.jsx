import PhoneMockup from "./PhoneMockup";

const ContactPage = () => {
  return (
    <section className="relative min-h-screen bg-taupe-100 overflow-hidden">
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Yellow Blob */}
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full " />
        {/* Green Blob */}
        <div className="absolute -left-20 bottom-40 h-96 w-96 rounded-full " />
        {/* Small Green Accent */}
        <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full " />
      </div>

      {/* Questions Badge */}
      {/* <div className="absolute right-8 top-8 pt-40 pr-40 rotate-[5deg] font-mono">
        <div className="rounded-full bg-[#d4e8d4] px-6 py-3 shadow-lg">
          <span className="text-sm font-medium text-gray-700">
            ANY QUESTIONS?
          </span>
        </div>
      </div> */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-20">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[clamp(4rem,15vw,100rem)] leading-[0.85] tracking-tight text-gray-800 font-mono">
              <span className="block">WE</span>
              <span className="block">ARE</span>
              <span className="block">HERE</span>
            </h1>

            <div className="mt-12">
              <button className="group relative inline-flex items-center gap-3 rounded-full bg-orange-300 px-8 py-4 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <span className="font-medium text-gray-800 font-mono italic font-black">
                  CONTACT US TODAY
                </span>
                {/* <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg> */}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;