import "./index.css";

export const Bussiness = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-4 py-6">
      <div className="bussinessCard flex flex-col items-center justify-center text-center text-white py-10 px-6 border border-white-400">
        <h2 className="text-white font-semibold text-xl md:text-3xl lg:text-4xl md:w-1/2">
          Join over 200+ businesses to create unique digital experiences for
          your customers.
        </h2>
        <div className="mt-16 flex md:justify-between  justify-center  flex-wrap gap-12 md:items-left items-center ">
          {/* Add logo images */}
          <div className="h-20vh w-[160px] md:w-[200px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675947905f5b957f67eefaec.png"
              alt="Appian"
              className=" object-contain"
            />
          </div>
          <div className="h-20vh w-[160px] md:w-[200px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675947903c5cd51163b15377.png"
              alt="Decathlon"
              className=" object-contain"
            />
          </div>
          <div className="h-20vh w-[160px] md:w-[200px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67594790b5c094332652c939.png"
              alt="Mobius"
              className=" object-contain"
            />
          </div>
          <div className="h-20vh w-[160px] md:w-[200px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675947905f5b958688eefaeb.png"
              alt="Nokia"
              className=" object-contain"
            />
          </div>
          <div className="h-20vh w-[160px] md:w-[200px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675947905f5b955598eefaed.png"
              alt="Nova IVF"
              className=" object-contain"
            />
          </div>
          <div className="h-20vh w-[160px] md:w-[200px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/6759479053bb95cdd0ad2ea5.png"
              alt="Philips"
              className=" object-contain"
            />
          </div>
          <div className="h-20vh w-[160px] md:w-[200px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67594790b5c094f95452c938.png"
              alt="Toyota"
              className=" object-contain"
            />
          </div>
          <div className="h-20vh w-[160px] md:w-[200px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675947905f5b954643eefaea.png"
              alt="Wipro"
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
