import React from "react";
import { Link } from "react-router-dom";
import { createReadableDate } from "../../utils/shared-functions.js";
import "./Session.scss";

const Session = ({ sessionData }) => {
  const { id, date, roster, prog_phase, prog_mech, fflogs_link, twitch_link } =
    sessionData;

  return (
    <li className="session">
      <Link to={`/report/${id}`} className="session__header">
        <h3 className="session__title">Session {id}</h3>
        <p className="session__date">{createReadableDate(date)}</p>
      </Link>
      <p className="session__body-text">
        <span className="session__category">Prog Point: </span>
        Phase {prog_phase}, {prog_mech}
      </p>
      <p className="session__body-text">
        <span className="session__category">Roster: </span>
        {roster}
      </p>
      <p className="session__links-container">
        <a className="session__link" href={fflogs_link}>
          <img src="/src/assets/25_fflogs.png" className="session__icon" />
          FFLogs
        </a>
        <a className="session__link" href={twitch_link}>
          <img src="/src/assets/25_twitch.png" className="session__icon" />
          Twitch
        </a>
      </p>
    </li>
  );
};

export default Session;
