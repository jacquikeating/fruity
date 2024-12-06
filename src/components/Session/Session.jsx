import React from "react";
import { Link } from "react-router-dom";
import {
  createReadableDate,
  checkIfEmptyLink,
} from "../../utils/shared-functions.js";
import "./Session.scss";

const Session = ({ sessionData }) => {
  const { id, date, roster, prog_phase, prog_mech, fflogs_link, twitch_links } =
    sessionData;

  return (
    <li className="session">
      <div className="session__header">
        <Link to={`/report/${id}`} className="session__title">
          <h3>Session {id}</h3>
        </Link>
        <p className="session__date">{createReadableDate(date)}</p>
      </div>
      <p className="session__body-text">
        <span className="session__category">Prog Point: </span>
        Phase {prog_phase}, {prog_mech}
      </p>
      <p className="session__body-text">
        <span className="session__category">Roster: </span>
        {roster.join(", ")}
      </p>
      <p className="session__links-container">
        <a
          className={`session__link ${checkIfEmptyLink(fflogs_link)}`}
          href={fflogs_link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.imgur.com/asZe3Wu.png"
            className="session__icon"
          />
          FFLogs
        </a>
        {twitch_links.length ? (
          twitch_links.map((vod, index) => {
            return (
              <>
                <span className="report__divider"> • </span>
                <a
                  className={`report__link`}
                  href={vod}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://i.imgur.com/NzRUemQ.png"
                    className="report__icon"
                  />
                  VOD {index + 1}
                </a>
              </>
            );
          })
        ) : (
          <p className={`report__link--empty_link`}>
            <img
              src="https://i.imgur.com/NzRUemQ.png"
              className="report__icon"
            />
            None
          </p>
        )}
      </p>
    </li>
  );
};

export default Session;
