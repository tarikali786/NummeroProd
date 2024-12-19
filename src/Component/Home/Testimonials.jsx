import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-6 py-10 pt-10 text-center text-white-500">
      <h3 className="uppercase text-[16px] text-blue-500 text-center font-bold">
        Testimonial
      </h3>
      <h2 className="text-3xl mt-3 font-semibold text-white-500">Client Feedback & Reviews</h2>
      <div className=" mt-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {[1, 2, 3].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-[90%] lg:w-[70%] min-h-40 border m-auto rounded-full border-pink-500 flex flex-col justify-center items-center px-4 py-10 bg-[#2b2338]">
                <div className="size-32 border-2 border-pink-500  rounded-full">
                  <img
                    src="https://nummero.com/wp-content/themes/nummero/newhome/media/im-so-glad-i-found-you-shot-of-two-coworkers.jpg"
                    alt=""
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold  mt-4">Sarah Thompson</h3>
                <p> Thompson & Co.</p>
                <p className="my-6 w-[80%] text-white-300 ">
                  Since I have worked here for the last four months, I would
                  like to share my experience. At Numero, everything is
                  coordinated to provide better customer service. Communication
                  within a team increases motivation and productivity. The
                  atmosphere is great and the colleagues are wonderful.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
