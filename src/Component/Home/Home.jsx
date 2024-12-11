import { Hero } from "./Hero";
import { Middle } from "./Middle";
import "./index.css";
const Home = () => {
  return (
    <>
      <div className=" relative  w-full overflow-hidden  HeroContainer text-white-500 h-[88vh]">
        <Hero />
        <Middle />
      </div>
    </>
  );
};

export default Home;
