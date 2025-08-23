import PhaseBreakdownTable from "../PhaseBreakdownTable/PhaseBreakdownTable";
import {
  createReadableDate,
  findGoldStars,
  findStrugglePhase,
  findStruggleMech,
  checkIfEmptyLink,
  getMechAfterProgMech,
} from "../../utils/shared-functions.js";
import { useState } from "react";

const SessionInfo = ({
  session,
  setSession,
  editSession,
  pullsArray,
  sessionID,
  editMode,
  showEdit,
}) => {
  const [twitchLinksArray, setTwitchLinksArray] = useState(
    session.twitch_links.split(", ")
  );

  return (
    <section className="report__section">
      <h1 className="report__heading">
        Report:
        {!editMode ? (
          <span className="report__date">
            {createReadableDate(session.date)}
          </span>
        ) : (
          <input
            type="text"
            id="date-input"
            name="date-input"
            placeholder="YYYY-MM-DD"
            value={session.date}
            onChange={(e) =>
              setSession((prevSession) => {
                return { ...prevSession, date: e.target.value };
              })
            }
            className="report__input"
          />
        )}
      </h1>

      <p className="report__subtitle">
        Session {session.id}
        <span className="report__divider"> • </span>
        {!editMode ? (
          session.prog_mech === "Reclears" && sessionID !== "37" ? (
            "Reclears"
          ) : (
            `Phase ${session.prog_phase} ${session.prog_mech} Prog`
          )
        ) : (
          <>
            <input
              type="number"
              value={session.prog_phase}
              onChange={(e) =>
                setSession((prevSession) => {
                  return { ...prevSession, prog_phase: e.target.value };
                })
              }
              className="report__input"
            />
            <input
              type="text"
              value={session.prog_mech}
              onChange={(e) =>
                setSession((prevSession) => {
                  return { ...prevSession, prog_mech: e.target.value };
                })
              }
              className="report__input"
            />
          </>
        )}
        <span className="report__divider"> • </span>
        {!editMode ? (
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
        ) : (
          <>
            <input
              type="text"
              value={session.fflogs_link}
              onChange={(e) =>
                setSession((prevSession) => {
                  return { ...prevSession, fflogs_link: e.target.value };
                })
              }
              className="report__input"
            />
          </>
        )}
        {!editMode ? (
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
        ) : (
          <input
            type="text"
            value={session.twitch_links}
            onChange={(e) => {
              setTwitchLinksArray(e.target.value.split(", "));
              setSession((prevSession) => {
                return { ...prevSession, twitch_links: e.target.value };
              });
            }}
            className="report__input"
          />
        )}
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
            {!editMode ? (
              `${session.goal}`
            ) : (
              <input
                type="text"
                value={session.goal}
                onChange={(e) =>
                  setSession((prevSession) => {
                    return { ...prevSession, goal: e.target.value };
                  })
                }
                className="report__input"
              />
            )}
          </p>
          <p className="report__extra-info">
            <span className="report__extra-info--bold">Roster: </span>
            {!editMode ? (
              `${session.roster}`
            ) : (
              <input
                type="text"
                value={session.roster}
                onChange={(e) =>
                  setSession((prevSession) => {
                    return { ...prevSession, roster: e.target.value };
                  })
                }
                className="report__input"
              />
            )}
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
};

export default SessionInfo;
