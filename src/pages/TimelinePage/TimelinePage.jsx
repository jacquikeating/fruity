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
      <div className="timeline__container">
        <table className="timeline__table">
          <tbody>
            {phases.map((phase) => {
              return (
                <>
                  <tr className="timeline__header-row">
                    <th className="timeline__header-cell timeline__header-cell--phase">
                      {" "}
                      <h2 className="timeline__subheading">
                        {phase.phaseName}
                      </h2>
                    </th>
                    <th className="timeline__header-cell timeline__header-cell--name"></th>
                    <th className="timeline__header-cell timeline__header-cell--nick"></th>
                  </tr>

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
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default TimelinePage;
