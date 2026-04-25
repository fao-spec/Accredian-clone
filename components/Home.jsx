export default function Home() {
  return (
    <section id="home" className="w-full flex justify-center mt-10 mb-30 sm:pt-[80px]">
      
      <div className="shadow w-full sm:w-[95%] rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-8 shadow-2xl overflow-visible">
        
        {/* LEFT CONTENT */}
        <div className="w-[85%] sm:w-1/2 flex flex-col gap-6 ml-0 md:ml-0 lg:ml-15 md:gap-10 lg:gap-12">
          
          <h1 className="text-center sm:text-left text-xl sm:text-5xl lg:text-6xl font-bold">
            Next-Gen <span className="text-blue-600">Expertise</span> for Your{" "}
            <span className="text-blue-600">Enterprise</span>
          </h1>

          <p className="text-xs sm:text-lg lg:text-2xl text-gray-700 text-center sm:text-left">
            Cultivate high-performance teams through expert learning.
          </p>

          <ul className="grid grid-cols-2 sm:flex flex-wrap gap-3 text-sm sm:text-base">
            <li>✔ Tailored Solutions</li>
            <li>✔ Industry Insights</li>
            <li>✔ Expert Guidance</li>
            <li className="sm:hidden">✔ Measurable Impact</li>
          </ul>

          <div className="flex justify-center sm:justify-start mb-5">
            <button className="w-[80%] sm:w-[170px] p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-sm sm:text-base cursor-pointer">
              Enquire Now
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[85%] sm:w-1/2 flex justify-center sm:justify-end">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
            alt="hero"
            className="w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}