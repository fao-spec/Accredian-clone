export default function Cats() {
  return (
    <section
      id="cat"
      className="w-full mt-12 sm:mt-24 py-6 flex flex-col items-center second-bg-grad"
    >
      <div className="w-full sm:w-[90%] px-4 sm:px-0 mx-auto">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            The <span className="text-universal">CAT Framework</span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            Our Proven Approach to{" "}
            <span className="text-universal">Learning Excellence</span>
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center mt-16">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
            alt="CAT Framework"
            className="w-full sm:w-[70%] h-auto rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}