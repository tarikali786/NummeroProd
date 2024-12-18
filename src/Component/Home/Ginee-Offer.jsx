import { GineeServices } from "../Data/Data";
import { GineeCard } from "./GineeCard";
import "./index.css";
export const GineeOffer = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 pt-10 bussinessCard flex flex-col">
      <h3 className="text-md uppercase text-blue-500 text-center font-semibold">
        What we offer for ginee
      </h3>
      <h2 className="md:text-3xl text-2xl w-1/2 text-center font-bold mt-4">
        Where Strategy Meets Digital. Your Success Story Begins with Ginee.
      </h2>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16  items-stretch ">
        {GineeServices.map((service, index) => (
          <GineeCard
            key={index}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
            url={service.url}
          />
        ))}
      </div>
    </div>
  );
};
