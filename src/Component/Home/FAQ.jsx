import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";
import { useState } from "react";

export const FAQ = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 pt-10">
      {(showMore ? [1, 2, 3, 4] : [1]).map((item, index) => (
        <Accordion className="" key={index} defaultExpanded>
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
            Why Choose Nummero as the Best SEO Company in Bangalore?
          </AccordionSummary>
          <AccordionDetails
            className="text-white-300"
            style={{ marginTop: "0" }}
          >
            Nummero, the best SEO company in Bangalore, offers unmatched SEO
            services that boost your online presence and help you rank higher on
            search engine results pages (SERPs). Our team uses a data-driven
            approach to analyze market trends, user behavior, and search
            algorithms. This enables us to create SEO strategies tailored to
            meet the specific goals of your business. As the best SEO company in
            Bangalore, Nummero offers services like keyword research, on-page
            and off-page optimization, and technical SEO. We ensure your website
            is search engine friendly, while also providing a smooth user
            experience. Our SEO tactics are designed to enhance both visibility
            and credibility, leading to an increase in organic traffic. By
            choosing Nummero, you are partnering with a trusted SEO company in
            Bangalore that delivers results, helping your business grow
            sustainably in the digital space.
          </AccordionDetails>
        </Accordion>
      ))}

      <div
        onClick={() => setShowMore(!showMore)}
        className="ml-5 text-white-500 bg-blue-500 w-[120px] text-center rounded-lg py-3  cursor-pointer mt-5"
      >
        {showMore ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};
