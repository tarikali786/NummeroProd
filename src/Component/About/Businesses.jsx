import { Button } from "../Common";

export const Businesses = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-4 py-16 flex lg:flex-row flex-col gap-6  items-center justify-between">
      <div className="w-[50%] lg:w-[35%] mb-4">
        <img
          src="https://nummero.com/wp-content/themes/nummero/assets/img/Group531.svg"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 text-white-500 ">
        <h2 className="lg:text-3xl text-2xl font-semibold mb-6">
          Welcome to Nummero - Empowering businesses with digital marketing
          consultancy
        </h2>
        <p className="text-white-300 lg:text-[16px] text-sm mb-5">
          We at Nummero are an enthusiastic and dynamic digital marketing agency
          in Bangalore committed to assisting small and medium-sized businesses
          all over the world realise the full potential of their brands. We
          combine expertise, creativity, and cutting-edge techniques with our
          extensive offering of web design, online marketing solutions, and
          digital marketing services to propel the expansion of your company.
        </p>
        <p className="text-white-300 lg:text-[16px] text-sm mb-8">
          We recognise the value of competent digital marketing services in
          propelling organisations to new heights. Our expertise in creative
          design, strategic marketing, and brand building ensures that your
          online presence resonates with your target audience and produces
          measurable results. We put your website on the first pages of Google
          search results using our complete digital methods, increasing your
          visibility and profitability.
        </p>
        <Button title="Contact Us" />
      </div>
    </div>
  );
};
