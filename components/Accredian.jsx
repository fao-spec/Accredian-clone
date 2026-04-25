export default function AccredianEdge() {
  return (
    <section
      id="accredian"
      className="mt-12 w-[90%] mx-auto px-0 md:px-8 xl:px-12"
    >
      {/* HEADER */}
      <div className="text-center pb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Key Aspects of{" "}
          <span className="text-blue-600">Our Strategic Training</span>
        </p>
      </div>

      {/* DESKTOP IMAGE */}
      <div className="hidden sm:flex justify-center items-center mb-8">
        <img
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
          alt="Accredian Edge Desktop"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* MOBILE IMAGE */}
      <div className="flex sm:hidden justify-center items-center mb-8">
        <img
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg"
          alt="Accredian Edge Mobile"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}