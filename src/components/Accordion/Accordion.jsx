import { React, useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import "./Accordion.scss";

const Accordion = ({ accordionItemsData, context }) => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {accordionItemsData.map((item, index) => (
        <AccordionItem
          key={index}
          data={item}
          context={context}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}
    </ul>
  );
};

export default Accordion;
