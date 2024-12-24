import { Button } from "../Common";

export const Unlock = () => {
  return (
    <div
      className="w-full md:px-10 lg:px-12 xl:px-44 px-4 py-10  text-white-500 text-center n"
      style={{
        backgroundImage:
          "url(https://nummero.com/wp-content/themes/nummero/assets/img/map.png) ",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <>
        <h2 className="lg:text-4xl text-2xl font-semibold ">
          Unlock Your Path to Digital Marketing Success
        </h2>
        <p className=" my-5 text-white-300">
          Are you struggling to navigate the complex world of digital marketing?
          Surprisingly, almost half of businesses lack a well-defined online
          marketing strategy to guide their efforts. Without a clear roadmap,
          valuable resources are often wasted on paid digital marketing services
          without a strategic approach for goal setting, task prioritization,
          marketing direction, budgeting, and resource allocation.
        </p>
        <p className="text-white-300 mb-10">
          But fear not! Nummero, as a competitive advertising agency in
          Bangalore, is here to help you find your way. We specialise in
          crafting tailored strategies that drive results and maximise your
          return on investment. Let us demystify the world of digital marketing
          and empower your business to thrive in the digital landscape.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="">
            <h2 className="text-4xl font-bold mb-2">97%</h2>
            <p className="text-xl font-semibold">
              OF CONSUMERS SEARCH FOR BUSINESSES ONLINE
            </p>
          </div>
          <div className="">
            <h2 className="text-4xl font-bold mb-2">5.9 +</h2>
            <p className="text-xl font-semibold">
              Billion Google Searches Per Day
            </p>
          </div>
          <div className="">
            <h2 className="text-4xl font-bold mb-2">97%</h2>
            <p className="text-xl font-semibold">
              OF SEARCHERS NEVER GO PAST PAGE 1
            </p>
          </div>
        </div>
        <Button title="Know more" />
      </>
    </div>
  );
};
