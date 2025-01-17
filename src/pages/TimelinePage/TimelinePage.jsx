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
      <table className="timeline__table">
        <tbody>
          {phases.map((phase) => {
            return (
              <div>
                <h2 className="timeline__subheading">
                  {phase.phaseNum} - {phase.phaseName}
                </h2>
                {filterMechs(phase.phaseNum).map((mech) => {
                  return (
                    <tr className="timeline__row">
                      <td className="timeline__cell timeline__cell--time">
                        {mech.time}
                      </td>
                      <td className="timeline__cell timeline__cell--name">
                        {mech.name}
                      </td>
                      <td className="timeline__cell timeline__cell--nick">
                        {" "}
                        {mech.nickname}
                      </td>
                    </tr>
                  );
                })}
              </div>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default TimelinePage;
