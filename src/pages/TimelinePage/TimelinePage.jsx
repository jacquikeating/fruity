import React from "react";
import { timeline2 } from "./Timeline.js";
import "./TimelinePage.scss";

const TimelinePage = () => {
  return (
    <main className="timeline">
      {/* {timeline.map((phase) => {
        phase.mechs.map((mech) => {
          console.log(mech.mechName);
          return <h2>{mech.mechName}</h2>;
        });
      })} */}
      {timeline2.map((mech) => {
        return (
          <p>
            {mech.time} {mech.name} ({mech.nickname})
          </p>
        );
      })}
    </main>
  );
};

export default TimelinePage;
