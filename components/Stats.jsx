export default function Stats() {
  const stats = [
    {
      value: "10K+",
      text: "Professionals trained for exceptional career success",
    },
    {
      value: "200+",
      text: "Sessions delivered with unmatched learning excellence",
    },
    {
      value: "5K+",
      text: "Active learners engaged in dynamic courses",
    },
  ];

  return (
    <section
      id="stats"
      className="w-[80%] mx-auto flex flex-col items-center  px-4 capitalize"
    >
      {/* HEADER */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-blue-600">Track Record</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          The Numbers Behind{" "}
          <span className="text-blue-600">Our Success</span>
        </p>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden sm:flex justify-center gap-10 p-6 rounded-xl w-full max-w-5xl">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 ${
              index !== stats.length - 1 ? "border-r-2 border-gray-300 pr-6" : ""
            }`}
          >
            <div className="text-xl font-semibold text-blue-600 w-24 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              {item.value}
            </div>
            <p className="max-w-[250px] text-center">{item.text}</p>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW */}
      <div className="sm:hidden grid gap-8 w-full max-w-md mt-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 ${
              index !== stats.length - 1 ? "border-b-2 border-gray-300 pb-4" : ""
            }`}
          >
            <div className="flex items-center justify-center text-blue-600 font-semibold w-16 h-8 bg-blue-100 rounded-full">
              {item.value}
            </div>
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}