import { BangaloreBrandingData } from "../../Data/Branding/Bangalore";
import { ProcessCard } from "./ProcessCard";

export const Process = () => {
  const processData = BangaloreBrandingData[0]?.process;

  return (
    <div className="md:px-10 lg:px-12 xl:px-44 px-6 py-10 flex flex-col items-center">
      <h2 className="text-center text-[40px] lg:w-1/2 font-bold text-blue-500">
        {processData?.heading}
      </h2>
      <div className="flex flex-col gap-y-20 mt-16 w-full">
        {processData?.processCard.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center w-full`}
          >
            <ProcessCard
              iconUrl={
                "https://www.nummero.com/wp-content/uploads/2024/07/Icon1.png"
              }
              title={item?.title}
              description={item?.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
