import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

import "./Accordion.scss";

const Accordion = ({ accordionItemsData, context }) => {
  console.log(accordionItemsData);
  return (
    <ul className="accordion">
      {accordionItemsData.map((item, index) => (
        <AccordionItem key={index} data={item} context={context} />
      ))}
    </ul>
  );
};

export default Accordion;
