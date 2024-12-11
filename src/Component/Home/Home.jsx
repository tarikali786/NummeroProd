import { Bussiness } from "./Bussiness";
import { Hero } from "./Hero";
import { Omnichanal } from "./Omnichanal";

const Home = () => {
  return (
    <div className=" text-white-500  bg-bgblue-500 flex flex-col gap-y-10 ">
      <Hero />
      <Bussiness />
      <Omnichanal />
    </div>
  );
};

export default Home;
