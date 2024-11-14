import React from "react";
import { numSuffix } from "../../utils/shared-functions";
import "./Session.scss";

const Session = ({ sessionData }) => {
  const { id, date, roster, prog_phase, prog_mech, fflogs_link, twitch_link } =
    sessionData;
  console.log(sessionData);

  return (
    <li className="session">
      <div className="session__header">
        <h3 className="session__title">Session {id}</h3>
        <p className="session__date">{date}</p>
      </div>
      <p className="session__body-text">
        <span className="session__category">Prog Point: </span>
        Phase {prog_phase}, {prog_mech}
      </p>
      <p className="session__body-text">
        <span className="session__category">Roster: </span>
        {roster}
      </p>
      <p className="session__body-text">
        <a className="session__link" href={fflogs_link}>
          FFLogs
        </a>
        <a className="session__link" href={twitch_link}>
          Twitch
        </a>
      </p>
    </li>
  );
};

export default Session;
