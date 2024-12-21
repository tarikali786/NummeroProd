import { Process } from "./Process";
import { Hero } from "./Hero";
import { Service } from "./Service";
import { Benefits } from "./Benefit";
import { Testimonials } from "../../Home/Testimonials";
import { FAQ } from "./FAQ";
import { useEffect } from "react";
import { Border } from "../../Common";

export const HeaderServic = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" bg-bgblue-100 pb-6">
      <Hero data={data[0]?.hero} />
      <Service data={data[0]?.services} />
      <Process data={data[0]?.process} />
      <Benefits data={data[0]?.benefits} />
      <Testimonials />
      <FAQ data={data[0]?.faq} />
      <Border />
    </div>
  );
};
