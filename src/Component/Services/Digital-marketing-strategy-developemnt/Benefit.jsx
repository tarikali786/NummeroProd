import React from "react";
import { BangaloreBrandingData } from "../../Data/Branding/Bangalore";
import { Card } from "./Card";

export const Benefits = () => {
  const benefitsData = BangaloreBrandingData[0]?.benefits;

  return (
    <div className="md:px-10 lg:px-12 xl:px-44 px-6 py-10  flex flex-col  items-center">
      <h2 className="text-center text-[40px]  lg:w-1/2 font-bold text-blue-500">
        {benefitsData?.heading}
      </h2>
      <div className="grid lg:grid-cols-2 gap-x-28 gap-y-20 mt-16">
        {benefitsData?.benefitCard.map((item, index) => (
          <Card
            key={index}
            iconUrl={item?.icon}
            title={item?.title}
            description={item?.content}
          />
        ))}
      </div>
    </div>
  );
};
