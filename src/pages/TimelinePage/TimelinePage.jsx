import React from "react";
import { phases, timeline2 } from "./Timeline.js";
import "./TimelinePage.scss";

const TimelinePage = () => {
  function renderMechs(mechToFilter) {
    let copyOfTimeline = [...timeline2];
    let filteredTimeline = copyOfTimeline.filter(
      (submech) => submech.subphase === mechToFilter
    );
    return filteredTimeline.map((submech) => {
      // console.log(submech.name);
      <p>{submech.name}</p>;
    });
  }

  return (
    <main className="timeline">
      {/* {timeline.map((phase) => {
        phase.mechs.map((mech) => {
          console.log(mech.mechName);
          return <h2>{mech.mechName}</h2>;
        });
      })} */}
      {phases.map((phase) => {
        return (
          <div>
            <h2>
              {phase.phaseNum} - {phase.phaseName}
            </h2>
            {phase.mechs.map((mech) => {
              <h3>{mech}</h3>;
              renderMechs(mech);
              // {
              //   timeline2
              //     .filter((submech) => submech.name === mech)
              //     .map((submech) => {
              //       {
              //         console.log(submech.name);
              //       }
              //       <p>{submech.name}</p>;
              //     });
              // }
            })}
          </div>
        );
      })}
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
