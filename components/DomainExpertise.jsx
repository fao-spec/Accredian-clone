export default function DomainExpertise() {
  const domains = [
    "Product & Innovation Hub",
    "Gen-AI Mastery",
    "Leadership Elevation",
    "Tech & Data Insights",
    "Operations Excellence",
    "Digital Enterprise",
    "Fintech Innovation Lab",
  ];

  const icons = [
    "lightbulb",
    "brain",
    "users",
    "chart",
    "settings",
    "globe",
    "banknote",
  ];

  return (
    <section className="mt-12 sm:mt-24 mb-4 w-[90%] mx-auto">
      
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-blue-600">Domain Expertise</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          <span className="text-blue-600">Specialized Programs</span> Designed
          to Fuel Innovation
        </p>
      </div>

      {/* GRID */}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        
        {domains.map((item, index) => (
          <div
            key={index}
            className="w-[45%] sm:w-[30%] flex sm:flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-lg p-4"
          >
            
            {/* ICON PLACEHOLDER */}
            <div className="w-8 h-8 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-2 sm:mr-0 sm:mb-2">
              {icons[index][0].toUpperCase()}
            </div>

            <h3 className="text-xs sm:text-lg font-semibold text-center text-gray-900">
              {item}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}