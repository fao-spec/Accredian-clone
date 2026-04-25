"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const faqData = {
    course: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
      },
      {
        q: "What domain specializations are available?",
        a: "We offer expertise in Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
      },
    ],

    delivery: [
      {
        q: "Can the courses be customized for specific industries or teams?",
        a: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
      },
      {
        q: "Who are the instructors for these programs?",
        a: "Yes, all programs are tailored to align with your organization's goals and workforce needs.",
      },
      {
        q: "What formats are the programs delivered in?",
        a: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
      },
    ],

    misc: [
      {
        q: "What is the ideal term size for corporate training?",
        a: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
      },
      {
        q: "How do we get started with Accredian?",
        a: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
      },
    ],
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
    id="faqs"
    className="w-full flex justify-center mt-16 md:py-12 xl:px-12 px-4">
      <div className="w-full max-w-[90%]">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Frequently Asked{" "}
          <span className="text-blue-500 text-universal">Questions</span>
        </h2>

        <div className="flex gap-4 mt-8 md:flex-row flex-col">

          {/* LEFT TABS */}
          <div className="w-full md:flex-[0.3]">
            <div className="flex md:flex-col gap-4 overflow-x-auto">

              {["course", "delivery", "misc"].map((tab) => (
                <div
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenIndex(null);
                  }}
                  className={`w-full max-w-[280px] px-4 py-4 text-center cursor-pointer rounded-md ${
                    activeTab === tab
                      ? "bg-white shadow-lg text-blue-500 border-0"
                      : "border-neutral-300 text-neutral-500 border-2"
                  }`}
                >
                  <h1 className="text-sm lg:text-lg font-semibold whitespace-nowrap">
                    {tab === "course"
                      ? "About the Course"
                      : tab === "delivery"
                      ? "About the Delivery"
                      : "Miscellaneous"}
                  </h1>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:flex-[0.7] flex flex-col gap-4">

            {faqData[activeTab].map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-3">

                  <div
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center cursor-pointer w-full"
                  >
                    <h1 className={`text-lg font-semibold text-gay-900 ${
                      isOpen ? "text-blue-500" : ""
                    }`}>
                      {item.q}
                    </h1>

                    <span className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}>
                      <svg
                        className="w-5 h-5 text-gray-700"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>

                  {isOpen && (
                    <p className="mt-3 text-gray-600 text-sm">
                      {item.a}
                    </p>
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* BUTTON (NOW OPENS MODAL) */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-blue-500 px-6 py-3 bg-universal text-white font-semibold rounded-lg shadow-md"
          >
            Enquire Now
          </button>
        </div>

      </div>

      {/* MODAL (UNCHANGED) */}
      <>
        {open && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex flex-col sm:flex-row overflow-hidden">

              <div className="hidden sm:flex w-1/2 bg-blue-100">
                <img
                  src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
                  alt="Quote Request"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                id="scrollbar2"
                className="w-full sm:w-1/2 p-6 max-h-[90vh] overflow-y-auto"
              >

                <div className="flex justify-between items-center pb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Enquire Now
                  </h2>

                  <button onClick={() => setOpen(false)} className="cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

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

                  <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                    name="phone"
                    placeholder="Phone number is required"
                    required
                  />

                  <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                    name="company"
                    placeholder="Enter company name"
                    required
                  />

                  <select
                    className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                    name="courseDomain"
                  >
                    <option value="">Select Domain</option>
                    <option>Product Management</option>
                    <option>CFO</option>
                    <option>Data Science</option>
                  </select>

                  <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                    name="candidates"
                    placeholder="Enter No. of candidates"
                    required
                  />

                  <select
                    className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                    name="mode"
                  >
                    <option value="">Select Mode of Delivery *</option>
                    <option>Online</option>
                    <option>Offline</option>
                  </select>

                  <input className="w-full border-b-2 py-3 outline-none focus:border-blue-500"
                    name="location"
                    placeholder="Eg: Lagos, Nigeria"
                    required
                  />

                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-blue-500 text-white py-3 rounded-lg font-semibold mt-4"
                  >
                    Submit
                  </button>

                </form>

              </div>

            </div>
          </div>
        )}
      </>
    </div>
  );
}