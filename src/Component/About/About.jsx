import { Hero } from "./Hero";
import { Businesses } from "./Businesses";
import { Comprehensive } from "./Comprehensive";
import { Unlock } from "./Unlock";

export const About = () => {
  return (
    <div className="bg-bgblue-100">
      <Hero />
      <Businesses />
      <Comprehensive />
      <Unlock />
    </div>
  );
};
