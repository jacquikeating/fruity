import PhaseBreakdownTable from "../PhaseBreakdownTable/PhaseBreakdownTable";
import {
  createReadableDate,
  findGoldStars,
  findStrugglePhase,
  findStruggleMech,
  checkIfEmptyLink,
} from "../../utils/shared-functions.js";
import { useState, useContext } from "react";
import { SessionContext } from "../../pages/ReportPage/ReportPage.jsx";

const SessionInfo = () => {
  const { sessionCtx } = useContext(SessionContext);
  const {
    session,
    setSession,
    editSession,
    pullsArray,
    sessionID,
    editMode,
    showEdit,
  } = sessionCtx;

  const [twitchLinksArray, setTwitchLinksArray] = useState(
    session.twitch_links.split(", ")
  );

  if (!editMode) {
    return (
      <section className="report__section">
        <h1 className="report__heading">
          Report:
          <span className="report__date">
            {createReadableDate(session.date)}
          </span>
        </h1>

        <p className="report__subtitle">
          Session {session.id}
          <span className="report__divider"> • </span>
          {session.prog_mech === "Reclears" && sessionID !== "37"
            ? "Reclears"
            : `Phase ${session.prog_phase} ${session.prog_mech} Prog`}
          <span className="report__divider"> • </span>
          <a
            className={`report__link ${checkIfEmptyLink(session.fflogs_link)}`}
            href={session.fflogs_link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.imgur.com/asZe3Wu.png"
              className="report__icon"
            />
            Logs
          </a>
          <>
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
                  className={`session__link ${checkIfEmptyLink(
                    session.twitch_links
                  )}`}
                  href={session.twitch_links}
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
          </>
          {showEdit ? (
            <button className="report__button" onClick={editSession}>
              {!editMode ? (
                <i className="fa-regular fa-pen-to-square"></i>
              ) : (
                <i className="fa-solid fa-check report__save"></i>
              )}
            </button>
          ) : (
            ""
          )}
        </p>

        <div className="report__extra-info-container">
          <div className="report__extra-info-left">
            <p className="report__extra-info">
              <span className="report__extra-info--bold">Goal: </span>
              {session.goal}
            </p>
            <p className="report__extra-info">
              <span className="report__extra-info--bold">Roster: </span>
              {session.roster}
            </p>
            <p className="report__extra-info">
              <span className="report__extra-info--bold">Most Wipes: </span>
              Phase {findStrugglePhase(pullsArray)}
              <span className="report__divider"> • </span>
              {findStruggleMech(pullsArray)}
            </p>
            <p className="report__extra-info">
              <span className="report__extra-info--bold">Gold Stars: </span>
              {findGoldStars(pullsArray, session.roster)}
            </p>
            {sessionID == 14 ? (
              <p className="report__extra-info">
                <span className="report__extra-info--bold">💩 Star: </span>
                Sophia
              </p>
            ) : (
              ""
            )}
          </div>

          <PhaseBreakdownTable
            progPhase={session.prog_phase}
            pulls={pullsArray}
          />

          <div className="report__extra-info-right">
            {session.notes.length > 0 ? (
              <div className="report__extra-info">
                <span className="report__extra-info--bold">Notes: </span>
                <ul className="report__list">
                  {!editMode ? (
                    <>
                      {session.notes.split(", ").map((note) => {
                        return (
                          <li className="report__note" key={note}>
                            {note}
                          </li>
                        );
                      })}
                    </>
                  ) : (
                    <textarea
                      value={session.notes}
                      onChange={(e) =>
                        setSession((prevSession) => {
                          return { ...prevSession, notes: e.target.value };
                        })
                      }
                      className="report__input"
                    ></textarea>
                  )}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default SessionInfo;
