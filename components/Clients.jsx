export default function Clients() {
  const clients = [
    {
      name: "Reliance",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    },
    {
      name: "HCL",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
    },
    {
      name: "IBM",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
    },
    {
      name: "CRIF",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
    },
    {
      name: "ADP",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    },
    {
      name: "Bayer",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
    },
  ];

  return (
    <section
      id="clients"
      className="mt-8 sm:mt-28 w-[90%] mx-auto text-center"
    >
      {/* HEADER */}
      <div>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Successful Collaborations With the{" "}
          <span className="text-blue-600">Industry’s Best</span>
        </p>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-8 mt-10 items-center">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={client.logo}
              alt={client.name}
              className="object-contain w-20 h-20"
            />
          </div>
        ))}
      </div>

      {/* MOBILE MARQUEE */}
      <div className="block sm:hidden overflow-hidden relative w-full mt-10">
        <div className="flex whitespace-nowrap animate-marquee w-max">
            {[...clients, ...clients].map((client, index) => (
            <div
                key={index}
                className="flex justify-center items-center px-8"
            >
                <img
                src={client.logo}
                alt={client.name}
                className="w-14 h-14 object-contain"
                />
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}