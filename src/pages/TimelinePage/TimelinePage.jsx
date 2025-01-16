import React from "react";
import { phases, timeline2 } from "./Timeline.js";
import "./TimelinePage.scss";

const TimelinePage = () => {
  function filterMechs(phaseToFilter) {
    let copyOfTimeline = [...timeline2];
    let filteredTimeline = copyOfTimeline.filter(
      (submech) => submech.phase === phaseToFilter
    );
    return filteredTimeline;
  }

  return (
    <main className="timeline">
      {phases.map((phase) => {
        return (
          <div>
            <h2 className="timeline__subheading">
              {phase.phaseNum} - {phase.phaseName}
            </h2>
            {filterMechs(phase.phaseNum).map((mech) => {
              return (
                <p className="timeline__entry">
                  {mech.time} {mech.name} ({mech.nickname})
                </p>
              );
            })}
          </div>
        );
      })}
    </main>
  );
};

export default TimelinePage;
