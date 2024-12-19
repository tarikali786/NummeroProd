import About from "./About";
import { Automation } from "./Automation";
import { Bussiness } from "./Bussiness";
import { Conversation } from "./Conversation";
import { Funnel } from "./Funnel";
import { Hero } from "./Hero";
import { Omnichanal } from "./Omnichanal";
import { Strategy } from "./Strategy";
import { Assist } from "./Assist";
import { Value } from "./Value";
import { Number } from "./Number";
import { NummeroOffer } from "./Nummero-Offer";
import { GineeOffer } from "./Ginee-Offer";
import { HowItwork } from "./HowItwork";
import { Communication } from "./Communication";
import { Pioneering } from "./Pioneering";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { useEffect } from "react";

const Home = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className=" text-white-500  bg-bgblue-300 flex flex-col gap-y-10 w-full overflow-hidden">
      <Hero />
      <Bussiness />
      <Omnichanal />
      <About />
      <Strategy />
      <Assist />
      <Conversation />
      <Funnel />
      <Automation />
      <Value />
      <Number />
      <NummeroOffer />
      <GineeOffer />
      <HowItwork />
      <Communication />
      <Pioneering />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
