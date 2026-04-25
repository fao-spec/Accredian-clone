"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "clients", label: "Clients" },
    { id: "accredian", label: "Accredian Edge" },
    { id: "cat", label: "CAT" },
    { id: "works", label: "How It Works" },
    { id: "faqs", label: "FAQs" },
    { id: "testimonials", label: "Testimonials" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full h-[80px] fixed top-0 left-0 bg-white shadow-md z-50">
        <div className="w-[95%] mx-auto px-4 h-full flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold">
            <img className="w-[120px]" src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden [@media(min-width:912px)]:flex space-x-6 items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`relative pb-1 transition flex items-center h-full ${
                  active === link.id
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}

                {/* underline */}
                <span
                  className={`absolute left-0 bottom-4 h-[2px] bg-blue-600 transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="[@media(min-width:912px)]:hidden flex items-center h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="fixed top-[80px] right-4 mt-4 w-[30%] bg-white shadow-lg rounded-lg z-40 mobile-menu p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.id);
                setIsOpen(false);
              }}
              className="block"
            >
              <span
                className={`relative inline-block pb-1 transition ${
                  active === link.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                ></span>
              </span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}