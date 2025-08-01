import { React } from "react";
import MechClipsCollection from "../MechClipsCollection/MechClipsCollection";
import Timeline from "../../components/Timeline/Timeline.jsx";
import "./AccordionItem.scss";

const AccordionItem = ({ data, context, onToggle, active, pageState }) => {
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
          <div className="accordion-item__title-container">
            <img
              className="accordion-item__thumbnail"
              src={data.accordionItemThumbnail}
            />
            {data.accordionItemTitle}
          </div>

          {active ? (
            <i className="fa-solid fa-caret-down accordion-item__control accordion-item__control--active"></i>
          ) : (
            <i className="fa-solid fa-caret-down accordion-item__control"></i>
          )}
        </button>
        <Timeline
          fightTimeline={data.content}
          active={active}
          pageState={pageState}
        />
      </li>
    );
  }
};

export default AccordionItem;
