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
      <h1 className="timeline__heading">Timeline</h1>
      <p className="timeline__intro-text">
        This timeline assumes a P1 kill time of 2:37 (i gaming). Our ideal P4
        kill time is TBD, but I am currently assuming 12:53 based on the average
        of our cleanest pulls.
      </p>
      <p className="timeline__intro-text">
        Right now, those are 27.13 and 28.18 — which would have had a 12:55 P4
        if we'd killed P1 at 2:37.
      </p>
      <p className="timeline__intro-text">
        This timeline may be adjusted as we get more P5 pulls.
      </p>
      <ul className="timeline__kt-list">
        <li className="timeline__kt-list-item">
          Session 27, pull 13 — P1 2:37, P4 12:51. Ella got a DD during CT, but
          we saw P5.
        </li>
        <li className="timeline__kt-list-item">
          Session 27, pull 15 — P1 2:37, P4 12:58. Soph died on the post-CT akh
          morns. Crystal smash.
        </li>
        <li className="timeline__kt-list-item">
          Session 28, pull 18 — P1 2:38, P4 12:56. Clean except for crystal
          smash.
        </li>
        <li className="timeline__kt-list-item">
          Session 29, pull 14 — P1 2:38, P4 13:03. Lots of CT deaths. ~4%
          enrage.
        </li>
      </ul>

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
