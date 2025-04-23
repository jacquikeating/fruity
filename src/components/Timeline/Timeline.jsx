import React from "react";
import "./Timeline.scss";

const Timeline = ({ fightTimeline }) => {
  return (
    <div className="tl">
      <h1 className="tl__title">{fightTimeline.fightName}</h1>
      <table className="tl__table">
        <tbody>
          {fightTimeline.phases.map((phase) => {
            return (
              <>
                {phase.phaseName ? (
                  <h2 className="tl__phase-name">{phase.phaseName}</h2>
                ) : (
                  ""
                )}

                <tr className="tl__header-row">
                  <th className="tl__header-cell tl__header-cell--time">
                    Time
                  </th>
                  <th className="tl__header-cell tl__header-cell--name">
                    Name
                  </th>
                  <th className="tl__header-cell tl__header-cell--dmg">Dmg</th>
                  <th className="tl__header-cell tl__header-cell--desc">
                    Description
                  </th>
                  <th className="tl__header-cell tl__header-cell--mits-heals">
                    Mits & Heals
                  </th>
                </tr>

                {phase.mechanics.map((mech) => {
                  return (
                    <tr className="tl__row">
                      <td className="tl__cell tl__cell--time">{mech.time}</td>
                      <td className="tl__cell tl__cell--name">{mech.name}</td>
                      <td className="tl__cell tl__cell--damage">
                        {mech.damage}k
                      </td>
                      <td className="tl__cell tl__cell--desc">{mech.desc}</td>
                      <td className="tl__cell tl__cell--mits-heals">
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
