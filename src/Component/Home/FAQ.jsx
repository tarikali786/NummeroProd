import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";
import { useState } from "react";
import { FAQDATA } from "../Data/Data";
import { Border } from "../Common/Border";
import { div } from "framer-motion/client";

export const FAQ = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full lg:w-[80%]  md:px-10 lg:px-12 xl:px-44 px-6 py-4 pt-10  m-auto">
      <h2 className="text-center  text-4xl font-bold mb-10 ">FAQ</h2>

      {(showMore ? FAQDATA : [FAQDATA[0]]).map((item, index) => (
        <div key={index}>
          <Accordion className="faqCard" defaultExpanded={index === 0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item}-content`}
              id={`panel${item}-header`}
              style={{
                color: "#29a9e0",
                fontSize: "22px",
                marginBottom: "0",
              }}
            >
              {item?.question}
            </AccordionSummary>
            <AccordionDetails
              className="text-white-300"
              style={{ marginTop: "0" }}
            >
              {item?.answer}
            </AccordionDetails>
          </Accordion>
          <Border />
        </div>
      ))}

      <div
        onClick={() => setShowMore(!showMore)}
        className="ml-2 text-white-500 bg-blue-500 w-[120px] text-center rounded-lg py-3  cursor-pointer mt-5 mb-10"
      >
        {showMore ? "Show Less" : "Show More"}
      </div>

      <Border />
    </div>
  );
};
