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
                  <th className="timeline__header-cell timeline__header-cell--time">
                    Time
                  </th>
                  <th className="timeline__header-cell timeline__header-cell--name">
                    Name
                  </th>
                  <th className="timeline__header-cell timeline__header-cell--dmg">
                    Damage
                  </th>
                  <th className="timeline__header-cell timeline__header-cell--desc">
                    Description
                  </th>
                  <th className="timeline__header-cell timeline__header-cell--desc">
                    Mits & Heals
                  </th>
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
                      <td className="timeline__cell timeline__cell--mits-heals">
                        {mech.pre.join(", ")} → {mech.post.join(", ")}
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
