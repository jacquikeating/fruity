import React from "react";
import MechClipsCollection from "../MechClipsCollection/MechClipsCollection";
import "./AccordionItem.scss";

const AccordionItem = ({ data, context }) => {
  return (
    <li className="accordion-item">
      <button className="accordion-item__header">
        {data.accordionItemTitle}
        <i className="fa-solid fa-caret-down"></i>
      </button>
      {context === "clips" ? <MechClipsCollection mech={data} /> : "Dummy item"}
    </li>
  );
};

export default AccordionItem;
