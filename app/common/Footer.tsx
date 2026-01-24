import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <Image src="/whitelogo.png" alt="LOGO" width={250} height={100} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div className="flex justify-between ">
            {/* Online Platform */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Online Platform
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Courses
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Courses
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://iagainstitute.com/contact-us"
                    className="text-gray-300 hover:text-white transition-colors underline text-sm sm:text-base"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://iagainstitute.com/privacy-policy"
                    className="text-gray-300 hover:text-white transition-colors underline text-sm sm:text-base"
                  >
                    Privacy-Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://iagainstitute.com/contact-us"
                    className="text-gray-300 hover:text-white transition-colors underline text-sm sm:text-base"
                  >
                    Become a Franchisee
                  </a>
                </li>
                <li>
                  <a
                    href="https://iagainstitute.com/terms-condition"
                    className="text-gray-300 hover:text-white transition-colors underline text-sm sm:text-base"
                  >
                    Teams and conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 shrink-0"
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
                <span className="text-gray-300 text-sm sm:text-base">
                  (+91) 888 99 7188
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 flex-shrink-0"
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
                <span className="text-gray-300 text-sm sm:text-base">
                  info@iagainstitute.com
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Opening Hours</h3>
            <div className="flex items-start gap-4 text-sm sm:text-base">
              <span className="text-gray-300">Mon - Sat</span>
              <span className="text-gray-300">10 AM - 08 PM</span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-gray-700">
          <div className="flex items-start gap-3 max-w-2xl">
            <svg
              className="w-6 h-6 text-gray-100 shrink-0 mt-1"
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
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Add:606 Pukhraj Corporate, Indore, Madhya pardhesh, India 452001
            </p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="https://www.facebook.com/official.iaga"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              <Image
                src="/socialicons/facebook.png"
                alt="Facebook"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://x.com/iagaofficial"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Image
                src="/socialicons/twitter.png"
                alt="Twitter"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://www.instagram.com/iaga_official/"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg  flex items-center justify-center">
                <Image
                  src="/socialicons/instagram.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/iaga-institute/"
              className="text-blue-600 hover:text-blue-500 transition-colors"
            >
              <Image
                src="/socialicons/linkedin.png"
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            Copyright 2026 IAGA Institute.
          </p>
        </div>
      </div>
    </footer>
  );
}
