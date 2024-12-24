import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ContactButton3 } from "../Common";
import { AboutHeroData } from "../Data/About/About";
import "swiper/css";
import "swiper/css/navigation";
export const Hero = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="text-white-500  h-[65vh] lg:h-[80vh] flex items-center justify-center "
    >
      {AboutHeroData.map((item, index) => (
        <SwiperSlide
          className={`w-full md:px-10 lg:px-12 xl:px-44 px-4 py-6 h-full  flex lg:flex-row flex-col items-center  gap-10 justify-between
           bg-gradient-to-r ${item?.background} 
           
           `}
          key={index}
        >
          <div className="lg:w-1/2 lg:text-left text-center">
            <h2 className="text-3xl lg:text-4xl  font-semibold  -tracking-tight">
              {item?.title}
            </h2>
            <p className="my-6 text-[16px] lg:text-lg  -tracking-tight">{item?.description}</p>
            <div className="mt-10">
              <ContactButton3 title="Contact Us" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:h-[60vh] h-[20vh] m-auto">
            <img src={item?.image} alt="" className="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
