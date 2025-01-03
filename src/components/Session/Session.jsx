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
  const twitchLinksArray = twitch_links.split(", ");

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
        {roster}
      </p>
      <div className="session__links-container">
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
          Logs
        </a>

        {twitchLinksArray.length > 1 ? (
          twitchLinksArray.map((vod, index) => {
            return (
              <>
                <span className="report__divider"> • </span>
                <a
                  className={`session__link`}
                  href={vod}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <img
                    src="https://i.imgur.com/NzRUemQ.png"
                    className="session__icon"
                    key={index}
                  />
                  VOD {index + 1}
                </a>
              </>
            );
          })
        ) : (
          <>
            <span className="report__divider"> • </span>
            <a
              className={`session__link ${checkIfEmptyLink(twitch_links)}`}
              href={twitch_links}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.imgur.com/NzRUemQ.png"
                className="session__icon"
              />
              VOD
            </a>
          </>
        )}
      </div>
    </li>
  );
};

export default Session;
