import { React } from "react";
import MechClipsCollection from "../MechClipsCollection/MechClipsCollection";
import Timeline from "../../components/Timeline/Timeline.jsx";
import "./AccordionItem.scss";

const AccordionItem = ({ data, context, onToggle, active }) => {
  if (context === "clips") {
    return (
      <li className="accordion-item">
        <button className="accordion-item__header" onClick={onToggle}>
          {data.accordionItemTitle}
          {active ? (
            <i className="fa-solid fa-caret-down accordion-item__control accordion-item__control--active"></i>
          ) : (
            <i className="fa-solid fa-caret-down accordion-item__control"></i>
          )}
        </button>
        <MechClipsCollection mech={data} active={active} />
      </li>
    );
  } else if (context === "timelines") {
    return (
      <li className="accordion-item">
        <button className="accordion-item__header" onClick={onToggle}>
          {data.accordionItemTitle}
          {active ? (
            <i className="fa-solid fa-caret-down accordion-item__control accordion-item__control--active"></i>
          ) : (
            <i className="fa-solid fa-caret-down accordion-item__control"></i>
          )}
        </button>
        <Timeline fightTimeline={data.content} active={active} />
      </li>
    );
  }
};

export default AccordionItem;
