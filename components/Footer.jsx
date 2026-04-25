"use client";

import { useState, useRef, useEffect } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const formRef = useRef(null);

 useEffect(() => {
  const el = formRef.current;
  if (!el) return;

  const handleScroll = () => {
    const isBottom =
      el.scrollTop + el.clientHeight >= el.scrollHeight - 20;

    setShowSubmit(isBottom);
  };

  el.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on open

  return () => el.removeEventListener("scroll", handleScroll);
}, [open]);
  return (
    <>
      <footer className="mt-12 bg-[#1d1d1d] sm:bg-white sm:mt-24 py-10">
        <div className="max-w-[85%] w-full px-[22px] sm:px-0 mx-auto">

          {/* TOP SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-6">

            <div>
              <img
                className="hidden sm:block"
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
                style={{ width: "9rem" }}
              />

              <img
                className="block sm:hidden"
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp"
                style={{ width: "9rem" }}
              />

              {/* SOCIALS (UNCHANGED) */}
              <div className="flex gap-4 mt-4">
  <a href="https://facebook.com/accredianlearn" className="text-white sm:text-gray-700 hover:text-universal">
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
    </svg>
  </a>

  <a href="https://www.linkedin.com/company/accredianedu/" className="text-white sm:text-gray-700 hover:text-universal">
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79z"></path>
    </svg>
  </a>

  <a href="https://twitter.com/accredianedu" className="text-white sm:text-gray-700 hover:text-universal">
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
    </svg>
  </a>

  <a href="https://www.instagram.com/accredian_edu" className="text-white sm:text-gray-700 hover:text-universal">
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z"></path>
    </svg>
  </a>

  <a href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" className="text-white sm:text-gray-700 hover:text-blue-500">
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M10 15l5.19-3L10 9v6z"></path>
    </svg>
  </a>
</div>
            </div>

            {/* BUTTON */}
            <div className="mt-6 md:mt-0">
              <button
                onClick={() => setOpen(true)}
                className="cursor-pointer p-2 sm:px-6 sm:py-2 bg-blue-500 text-white rounded-lg"
              >
                Enquire Now
              </button>
              <p className="text-sm mt-2 text-gray-500">
                Speak with our Advisor
              </p>
            </div>
          </div>

          {/* RESTORED CONTENT SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 pb-6 gap-8 mt-6 border-b border-gray-700">

            <div>
              <h3 className="font-semibold text-lg text-white sm:text-black">
                Accredian
              </h3>
              <ul className="mt-2 space-y-2 text-white sm:text-gray-700">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Why Accredian</a></li>
              </ul>
            </div>

            <div>
                <h3 className="font-normal sm:font-semibold text-lg text-white sm:text-black">
                Contact Us
                </h3>
                <p className="text-gray-200 sm:text-gray-700 mt-2">
                Email us: <a href="mailto:enterprise@accredian.com" className="text-blue-500">enterprise@accredian.com</a>
                </p>
                <p className="text-white sm:text-gray-700 mt-2 max-w-lg">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                </p>
            </div>

          </div>

          <div className="text-center pt-3 text-gray-500">
            © {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd
            </div>

        </div>
      </footer>

      {/* MODAL (FIXED + WORKING) */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">

          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex flex-col sm:flex-row overflow-hidden">

            {/* LEFT IMAGE */}
            <div className="hidden sm:flex w-1/2 bg-blue-100">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
                alt="Quote Request"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT FORM */}
            <div
            ref={formRef}
              id="scrollbar2"
              className="w-full sm:w-1/2 p-6 h-[90vh] overflow-y-auto"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center pb-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Enquire Now
                </h2>

                <button onClick={() => setOpen(false)} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              {/* FORM */}
              <form className="text-black space-y-4 mt-4">

                <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                  name="name"
                  placeholder="Enter Name"
                  required
                />

                <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                  name="email"
                  placeholder="Enter Email"required
                />

                {/* PHONE (kept structure, just styled) */}
                <input
                  className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                  name="phone"
                  placeholder="Phone number is required"
                  required
                />

                <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                  name="company"
                  placeholder="Enter company name"
                  required
                />

                {/* DOMAIN */}
                <select
                  className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                  name="courseDomain"
                  required
                >
                  <option value="">Select Domain</option>
                  <option>Product Management</option>
                  <option>CFO</option>
                  <option>Data Science</option>
                  <option>Artificial Intelegence</option>
                  <option>Human Resource</option>
                  <option>Strategy & Leadership</option>
                  <option>General Management</option>
                  <option>Digital Transformation</option>
                  <option>Business Management</option>
                  <option>Finance</option>
                  <option>Project Management</option>
                  <option>Senior Management</option>
                  <option>Cybersecurity</option>
                </select>

                <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                  name="candidates"
                  placeholder="Enter No. of candidates"
                  required
                />

                {/* MODE */}
                <select
                  className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                  name="mode font-red-100"
                >
                  <option value="" className="font-red-100">Select Mode of Delivery *</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>

                <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                  name="location"
                  placeholder="Eg: Lagos, Nigeria"
                  required
                />

                {/* SUBMIT ONLY ON SCROLL */}
                {showSubmit && (
                  <button
                    type="submit"
                    className="bg-blue-500 w-full text-white py-3 rounded-lg font-semibold cursor-pointer"
                  >
                    Submit
                  </button>
                )}

              </form>
            </div>

          </div>
        </div>
      )}
    </>
  );
}