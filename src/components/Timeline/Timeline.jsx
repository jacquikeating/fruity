import React from "react";
import "./Timeline.scss";

const Timeline = () => {
  const phases = [];

  return (
    <div className="timeline">
      <table className="timeline__table">
        <tbody>
          {phases.map((phase) => {
            return (
              <>
                <tr className="timeline__header-row">
                  <th className="timeline__header-cell timeline__header-cell--phase">
                    {/* <h2 className="timeline__subheading">{phase.phaseName}</h2> */}
                  </th>
                  <th className="timeline__header-cell timeline__header-cell--name"></th>
                  <th className="timeline__header-cell timeline__header-cell--nick"></th>
                </tr>

                {/* {filterMechs(phase.phaseNum).map((mech) => {
                  return (
                    <tr className="timeline__row">
                      <td className="timeline__cell timeline__cell--time">
                        {mech.time}
                      </td>
                      <td className="timeline__cell timeline__cell--name">
                        {mech.name}
                      </td>
                      <td className="timeline__cell timeline__cell--nick">
                        {mech.nickname}
                      </td>
                    </tr>
                  );
                })} */}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Timeline;
