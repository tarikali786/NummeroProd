export const Strategy = () => {
  return (
    <div className=" w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 flex flex-col lg:flex-row items-center  justify-between  gap-10">
      <div className="lg:w-1/2  ">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          Omni-Channel Strategy
        </h3>
        <p className="text-[16px] mb-6  text-white-300">
          An omni-channel strategy in digital marketing integrates multiple
          channels (websites, mobile apps, social media, email, stores) to
          provide a seamless customer experience, ensuring consistency and
          personalization across platforms to enhance engagement and loyalty.
        </p>

        <div className="flex flex-col gap-y-4">
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://nummero.com/wp-content/themes/nummero/newhome/media/Icons/Automation/6a.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Unified Customer Experience:
              </b>{" "}
              Ensuring seamless consistency across all channels.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a91573772bdfe84837d9e.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Data Integration:</b>{" "}
              Centralizing and leveraging customer data effectively.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9239b5c094b59f544131.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Personalization:</b>{" "}
              Tailoring messaging and offers based on customer insights.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full ">
        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675993edda8c39661440bdae.gif"
          alt="Icon"
        />
      </div>
    </div>
  );
};