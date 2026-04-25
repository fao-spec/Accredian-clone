"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="testimonials w-[90%] mt-16 sm:mt-20 flex flex-col items-center ml-[5%]"
    >
      {/* Heading */}
      <div className="text-center mb-10 mx-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Testimonials from{" "}
          <span className="text-universal text-blue-500">Our Partners</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          What <span className="text-universal text-blue-500">Our Clients</span> Are Saying
        </p>
      </div>

      {/* Slider */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide className="flex h-auto items-stretch">
            <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-[250px] flex-grow">
              <div className="w-full flex flex-col justify-start items-start pl-6 h-full">
                <div className="h-16 mb-4 flex items-center gap-4">
                  <img
                    loading="lazy"
                    className="h-14 w-14 object-contain"
                    src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg"
                    alt="ADP"
                  />
                </div>
                <p className="text-neutral-600 text-base font-light">
                  "We would like to thank Accredian for the wonderful support
                  and the beautiful journey. The team turned our vision into
                  reality with unparalleled dedication, service, and expertise
                  throughout the entire process."
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="flex h-auto items-stretch">
            <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-[250px] flex-grow">
              <div className="w-full flex flex-col justify-start items-start pl-6 h-full">
                <div className="h-16 mb-4 flex items-center gap-4">
                  <img
                    loading="lazy"
                    className="h-14 w-14 object-contain"
                    src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg"
                    alt="Bayer"
                  />
                </div>
                <p className="text-neutral-600 text-base font-light">
                  "Accredian's commitment to excellence is unmatched. They
                  consistently go the extra mile to ensure our needs are met
                  and exceeded, providing reliable support and high-quality
                  service every step of the way."
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="flex h-auto items-stretch">
            <div className="bg-white border border-gray-300 rounded-xl p-6 flex flex-row items-center w-full min-h-[250px] flex-grow">
              <div className="w-full flex flex-col justify-start items-start pl-6 h-full">
                <div className="h-16 mb-4 flex items-center gap-4">
                  <img
                    loading="lazy"
                    className="h-14 w-14 object-contain"
                    src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png"
                    alt="Reliance"
                  />
                </div>
                <p className="text-neutral-600 text-base font-light">
                  "Choosing Accredian for the learning & development of our
                  employees was a beneficial decision. The value derived from
                  the course is immense & their support team is always there
                  to help our employees."
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}