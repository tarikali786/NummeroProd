import React from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "../Data/Data";
export const DeskTopNavbar = () => {
  const [hoverIndex, setHoverIndex] = React.useState(null);
  React.useEffect(() => {
    const handleScroll = () => {
      setHoverIndex(null); // Reset hover index on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50  w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 bg-bgblue-500 lg:flex  lg:justify-between lg:items-center hidden  gap-2  ">
      <Link to="/" className="h-10 md:w-52 w-44">
        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67456d87b115f43b4135f2cf.png"
          alt="Nummero Logo"
        />
      </Link>
      <div className="text-white-500 flex  items-center gap-2 md:gap-4 lg:gap-6  font-semibold ">
        {NavbarData.map((item, index) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setHoverIndex(index)}
          >
            <Link to={item.link || "#"} className="hover:text-blue-500">
              {item.title}
            </Link>

            {/* Dropdown Menu */}
            {item?.item && hoverIndex === index && (
              <div
                className="absolute top-9 left-0 max-w-[20rem] min-w-min px-4 py-4 text-nowrap bg-[#2b2338] text-black shadow-lg rounded-md  z-50 flex flex-col gap-2"
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item?.item.map((child) => (
                  <Link
                    to={child.link || "#"}
                    key={child.id}
                    target={child?.target}
                    className="text-[16px]  hover:text-blue-500 text-white-500 rounded-md cursor-pointer  font-semibold"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Link
        to="tel:+917760974512"
        className="text-white-500 bg-blue-500 rounded-3xl px-6 py-3 font-semibold  "
      >
        <p>+917760974512</p>
      </Link>
    </div>
  );
};
