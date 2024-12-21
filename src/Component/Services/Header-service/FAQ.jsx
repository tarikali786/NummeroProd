import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";
import { div } from "framer-motion/client";
import { Border } from "../../Common/Border";

export const FAQ = ({ data }) => {
  return (
    <div className="lg:w-[80%] m-auto md:px-10 lg:px-12 xl:px-44 px-6 py-4 pt-10 text-white-500 ">
      <h2 className="text-center  text-4xl font-bold mb-10 ">FAQ</h2>
      {data?.map((item, index) => (
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
              style={{ marginTop: "0", fontSize: "18px" }}
            >
              {item?.answer}
            </AccordionDetails>
          </Accordion>
          <Border />
        </div>
      ))}
    </div>
  );
};
