export default function CourseSegmentation() {
  const courses = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      img: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
    },
  ];

  return (
    <section className="mt-12 sm:mt-28 mb-10 w-[80%] mx-auto text-center">
      
      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Tailored <span className="text-blue-600">Course Segmentation</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Explore <span className="text-blue-600">Custom-fit Courses</span>{" "}
          Designed to Address Every Professional Focus
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h4 className="text-lg font-semibold text-blue-600">
                {course.title}
              </h4>

              <p className="text-gray-600 text-sm mt-2 hidden sm:block">
                {course.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}