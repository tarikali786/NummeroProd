import About from "./About";
import { Automation } from "./Automation";
import { Bussiness } from "./Bussiness";
import { Conversation } from "./Conversation";
import { Funnel } from "./Funnel";
import { Hero } from "./Hero";
import { Omnichanal } from "./Omnichanal";
import { Strategy } from "./Strategy";
import { Assist } from "./Assist";

const Home = () => {
  return (
    <div className=" text-white-500  bg-bgblue-300 flex flex-col gap-y-10 ">
      <Hero />
      <Bussiness />
      <Omnichanal />
      <About />
      <Strategy />
      <Assist />
      <Conversation />
      <Funnel />
      <Automation />
    </div>
  );
};

export default Home;
