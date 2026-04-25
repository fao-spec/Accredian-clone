"use client";

import { useState, useEffect, useRef } from "react";

export default function SupportSection() {
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
      {/* CTA SECTION */}
      <div
        id="supportSection"
        className="cta flex justify-center w-full mt-16 sm:mt-24 xl:px-12 px-4"
      >
        <div className="bg-blue-500 cta-grad border border-universal w-full max-w-[90%] py-8 md:py-16 md:px-12 px-6 bg-universal rounded-xl flex items-center md:justify-between md:flex-row flex-col gap-6">

          <div className="flex gap-8 md:flex-row flex-col md:items-start items-center">

            <div className="w-20 h-20 flex-shrink-0 bg-slate-200/35 rounded-xl p-1">
              <div className="w-full h-full bg-white rounded-xl p-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-universal"
                >
                  <path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21Z" />
                </svg>
              </div>
            </div>

            <div className="md:text-start text-center">
              <h1 className="text-xl md:text-3xl font-semibold text-white">
                Want to Learn More About Our Training Solutions?
              </h1>
              <h4 className="text-base hidden sm:block md:text-lg mt-2 max-w-xl font-medium text-neutral-100">
                Get Expert Guidance for Your Team’s Success!
              </h4>
            </div>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="cta-button w-full max-w-[200px] py-3 rounded-lg text-blue-500 bg-white text-xl font-semibold flex items-center justify-center gap-1 cursor-pointer"
          >
            Contact Us
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
            </svg>
          </button>

        </div>
      </div>

      {/* MODAL */}
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
             
              className="w-full sm:w-1/2 p-6 max-h-[90vh] overflow-y-auto"
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
                  placeholder="Enter Email"
                  required
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