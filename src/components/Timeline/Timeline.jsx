import React from "react";
import "./Timeline.scss";

const Timeline = ({ fightTimeline }) => {
  return (
    <div className="timeline">
      <table className="timeline__table">
        <tbody>
          {fightTimeline.map((phase) => {
            return (
              <>
                <tr className="timeline__header-row">
                  <th className="timeline__header-cell timeline__header-cell--phase">
                    <h2 className="timeline__subheading">{phase.phaseName}</h2>
                  </th>
                  <th className="timeline__header-cell timeline__header-cell--name"></th>
                  <th className="timeline__header-cell timeline__header-cell--nick"></th>
                </tr>

                {phase.mechanics.map((mech) => {
                  return (
                    <tr className="timeline__row">
                      <td className="timeline__cell timeline__cell--time">
                        {mech.time}
                      </td>
                      <td className="timeline__cell timeline__cell--name">
                        {mech.name}
                      </td>
                      <td className="timeline__cell timeline__cell--damage">
                        {mech.damage}
                      </td>
                      <td className="timeline__cell timeline__cell--desc">
                        {mech.desc}
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
  );
};

export default Timeline;
