import { ContactButton } from "../../Common";
import { BangaloreBrandingData } from "../../Data/Branding/Bangalore";
import "./index.css";

export const Hero = () => {
  const brandingData = BangaloreBrandingData[0]?.hero;

  return (
    <div className="bangalorHeroContainer lg:h-[68vh] w-full text-white-500 overflow-hidden">
      <div className="bussinessCard md:px-10 lg:px-12 xl:px-44 px-6 py-10 flex md:flex-row flex-col justify-center text-center lg:text-left items-center h-full gap-6 bg-[#0b031b93]">
        <div className="w-full md:w-1/2">
          <span className="uppercase text-[12px] font-semibold text-blue-500 ">
            {brandingData?.title}
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold mt-4">
            {brandingData?.heading}
          </h1>
          <p className="text-white-300 text-[18px] mt-4 mb-10">
            {brandingData?.subheading}
          </p>
          <ContactButton title="Contact Us" />
        </div>
        <div className="w-[68%] md:w-1/2">
          <img
            src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67640620fb63bc3bf1669e59.png"
            alt="Branding"
          />
        </div>
      </div>
    </div>
  );
};
