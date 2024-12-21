
import { ProcessCard } from "./ProcessCard";
import { Devlopmentdata } from "../../Data/Development/Data";
export const Process = () => {
  const development = Devlopmentdata[0]?.Process;

  return (
    <div className="md:px-10 lg:px-12 xl:px-44 px-6 py-10 flex flex-col items-center">
      <h2 className="text-center text-[40px] lg:w-1/2 font-bold text-blue-500">
        
        {development?.heading}
      </h2>
      <div className="flex flex-col gap-y-20 mt-16 w-full">
        {development?.processCard.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center w-full`}
          >
            <ProcessCard
              imageurl={item.images}
              iconUrl={item.icon}
              title={item?.title}
              description={item?.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
