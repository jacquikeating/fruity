import { React, useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Timeline.scss";

const Timeline = ({ fightTimeline }) => {
  const [displayIcons, setDisplayIcons] = useState(true);

  function toggleIcons() {
    if (displayIcons) {
      setDisplayIcons(false);
    } else {
      setDisplayIcons(true);
    }
  }

  return (
    <div className="tl">
      <h2 className="tl__title">{fightTimeline.fightName}</h2>
      <img
        className="tl__img"
        src={fightTimeline.fightImage}
        alt={`Image of ${fightTimeline.fightName}`}
      />
      <table className="tl__table">
        <tbody>
          {fightTimeline.phases.map((phase) => {
            return (
              <>
                {phase.phaseName ? (
                  <h3 className="tl__phase-name">{phase.phaseName}</h3>
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
                        {mech.pre.map((action, index) => {
                          if (displayIcons && action.icon) {
                            return (
                              <img
                                src={action.icon}
                                alt={action.name}
                                className="tl__action-icon"
                              />
                            );
                          } else if (index != 0) {
                            return <span>, {action.abbr}</span>;
                          } else {
                            return <span>{action.abbr}</span>;
                          }
                        })}
                        <span className="tl__arrow"> → </span>
                        {mech.post.map((action, index) => {
                          if (displayIcons && action.icon) {
                            return (
                              <img
                                src={action.icon}
                                alt={action.name}
                                className="tl__action-icon"
                              />
                            );
                          } else if (index != 0) {
                            return <span>, {action.abbr}</span>;
                          } else {
                            return <span>{action.abbr}</span>;
                          }
                        })}
                      </td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>

      <ToggleSwitch
        stateToToggle={displayIcons}
        toggleFunction={toggleIcons}
        labelText={"Action icons"}
      />
    </div>
  );
};

export default Timeline;
