import React from "react";
import MechClipsCollection from "../MechClipsCollection/MechClipsCollection";
import "./AccordionItem.scss";

const AccordionItem = ({ data, context }) => {
  return (
    <li className="accordion-item">
      {context === "clips" ? <MechClipsCollection mech={data} /> : "Dummy item"}
    </li>
  );
};

export default AccordionItem;
