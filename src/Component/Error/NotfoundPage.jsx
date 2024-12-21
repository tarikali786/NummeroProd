import Img from "../../assets/image.png";
import { Button } from "../Common";
export const NotFoundPage = () => {
  return (
    <div className=" w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 h-screen flex items-center justify-center ">
      <div className="w-full">
        <div className=" h-[50vh]">
          <img src={Img} alt="" className="" />
        </div>
        <div className="text-center mt-6">
          <h1 className="text-4xl font-bold text-bgblue-100">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-blue-600 mt-4 mb-8" style={{paddingBlock:"10px"}}>
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button title="Back to Home" link="/" />
        </div>
      </div>
    </div>
  );
};
