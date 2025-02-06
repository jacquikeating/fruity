import { React, useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

import "./Accordion.scss";

const Accordion = ({ accordionItemsData, context }) => {
  const [clicked, setClicked] = useState("0");

  return (
    <ul className="accordion">
      {accordionItemsData.map((item, index) => (
        <AccordionItem key={index} data={item} context={context} />
      ))}
    </ul>
  );
};

export default Accordion;
