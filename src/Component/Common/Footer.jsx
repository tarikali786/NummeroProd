import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link } from "react-router-dom";
import { Border } from "./Border";
export const Footer = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-4 py-6 bg-bgblue-100  ">
      <div className="border-2 rounded-[50px] bg-blue-500 min-h-20 flex lg:flex-row flex-col gap-4 gap-y-6 text-white-500 justify-between  overflow-hidden px-12 lg:px-20 py-10">
        <div className="w-full lg:w-[40%]">
          <div className="w-[260px] h-[60px]">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/6762a8df63c0fe2097d6f6e7.png"
              alt=""
            />
          </div>
          <p className="text-bgblue-300 text-sm mt-2 w-[75%]">
            Transforming Ideas into Digital Excellence. Elevate your online
            presence with our innovative solutions and strategic digital
            services.
          </p>

          <div className="flex gap-3 mt-4">
            <Link to="https://www.facebook.com/Nummeroindia" target="_blank">
              <FacebookOutlinedIcon
                style={{ fontSize: "30px" }}
                className="hover:text-blue-500"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/nummero" target="_blank">
              <LinkedInIcon
                style={{ fontSize: "30px" }}
                className="hover:text-blue-500"
              />
            </Link>
            <Link to="https://www.instagram.com/_nummero/" target="_blank">
              <InstagramIcon
                style={{ fontSize: "30px" }}
                className="hover:text-blue-500"
              />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UC-WvFAEiJX4PrXicXFGYiig/featured"
              target="_blank"
            >
              <YouTubeIcon
                style={{ fontSize: "30px" }}
                className="hover:text-blue-500"
              />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=+917760974512&text=Hello"
              target="_blank"
            >
              <WhatsAppIcon
                style={{ fontSize: "30px" }}
                className="hover:text-blue-500"
              />
            </Link>
            <Link to="https://x.com/_nummero" target="_blank">
              <XIcon
                style={{ fontSize: "26px" }}
                className="hover:text-blue-500"
              />
            </Link>
          </div>
        </div>

        <div className="lg:w-[60%] mt-6 lg:mt-0 flex  flex-wrap gap-y-6 justify-between">
          <div className=" ">
            <h3 className="text-[20px] font-semibold ">Services</h3>

            <div className=" flex flex-col gap-2 mt-2 text-bgblue-300 ">
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Branding
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Website Development
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                SEO
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Social Media Management
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Influencer Marketing
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Digital Marketing Strategy
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Logo Design
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Content Writing
              </Link>
            </div>
          </div>
          <div className=" ">
            <h3 className="text-[20px] font-semibold ">Support</h3>

            <div className=" flex flex-col gap-2 mt-2 text-bgblue-300 ">
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Customer Support
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Cancellation & Refund Policy
              </Link>
            </div>
          </div>{" "}
          <div className=" ">
            <h3 className="text-[20px] font-semibold ">Company</h3>

            <div className=" flex flex-col gap-2 mt-2 text-bgblue-300 ">
              <Link to="#" className="hover:text-yellow-500 text-sm">
                About us
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Product Suite
              </Link>
              <Link to="#" className="hover:text-yellow-500 text-sm">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Border />
        <div className="text-white-300 flex lg:flex-row flex-col text-center justify-between mt-4 items-center gap-y-3">
          <p className="text-sm tracking-wide">
            Copyright© 2024 Nummero, All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
