import { Button } from "../Common";
import { Card } from "../Home/Card";
import { AboutServiceData } from "../Data/Data";

export const Comprehensive = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-4 py-10  text-white-500 text-center">
      <>
        <h2 className="lg:text-4xl text-2xl font-semibold ">
          Comprehensive Digital Marketing Solutions
        </h2>
        <p className=" my-5 text-white-300">
          An extension of your company with respect to everything digital
          marketing.
        </p>
        <p className="text-white-300 mb-10">
          Unleash the potential of unrivalled performance and collaboration with
          Nummero, the leading web design company in Bangalore. Our superior
          services are offered for as little as $499 per month, providing
          excellent value for your money. When you work with Nummero as your
          brand agency, you gain access to a plethora of deliverables that will
          propel your digital marketing efforts to new heights.
        </p>
        <Button title="Read more" />
      </>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 mt-16 text-left">
        {AboutServiceData.map((item, index) => (
          <Card
            key={index}
            title={item?.title}
            description={item?.discription}
            iconUrl={item?.iconUrl}
          />
        ))}
      </div>
    </div>
  );
};
