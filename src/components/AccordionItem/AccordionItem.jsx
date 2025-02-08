import React from "react";
import MechClipsCollection from "../MechClipsCollection/MechClipsCollection";
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
        <MechClipsCollection
          //   className={`${
          //     active
          //       ? "accordion-item__content"
          //       : "accordion-item__content accordion-item__content--open"
          //   }`}
          //   className="accordion-item__content"
          mech={data}
          active={active}
        />
      </li>
    );
  }

  //   return (
  //     <li className="accordion-item">
  //       <button className="accordion-item__header" onClick={onToggle}>
  //         {data.accordionItemTitle}
  //         {active ? (
  //           <i className="fa-solid fa-caret-down accordion-item__control accordion-item__control--active"></i>
  //         ) : (
  //           <i className="fa-solid fa-caret-down accordion-item__control"></i>
  //         )}
  //       </button>
  //       {context === "clips" ? <MechClipsCollection mech={data} /> : "Dummy item"}
  //     </li>
  //   );
};

export default AccordionItem;
