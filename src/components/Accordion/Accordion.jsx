import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

import "./Accordion.scss";

const Accordion = ({ accordionItemsData }) => {
  console.log(accordionItemsData);
  return (
    <ul className="accordion">
      {accordionItemsData.map((item, index) => (
        <AccordionItem key={index} data={item} />
      ))}
    </ul>
  );
};

export default Accordion;
