import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  createReadableDate,
  findGoldStars,
  findStrugglePhase,
  findStruggleMech,
  checkIfEmptyLink,
  getMechAfterProgMech,
  convertMSToMinSec,
} from "../../utils/shared-functions.js";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import PullsTable from "../../components/PullsTable/PullsTable.jsx";
import "./ReportPage.scss";

localStorage.setItem("name", "ella");
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_FFLOGS_API_KEY;
const username = localStorage.getItem("name");

const ReportPage = () => {
  const [sessionData, setSessionData] = useState();
  const [pullsArray, setPullsArray] = useState([]);
  const [ffLogsData, setFFLogsData] = useState([]);
  const [progPullsOnly, setProgPullsOnly] = useState(false);
  const [pullsToDisplay, setPullsToDisplay] = useState([]);
  const { sessionID } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [date, setDate] = useState("");
  const [progPhase, setProgPhase] = useState(0);
  const [progMech, setProgMech] = useState("");
  const [fflogsLink, setFFLogsLink] = useState("");
  const [twitchLinks, setTwitchLinks] = useState("");
  const [twitchLinksArray, setTwitchLinksArray] = useState([]);
  const [goal, setGoal] = useState("");
  const [roster, setRoster] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    let session = null;
    let pulls = null;
    let ffLogs = null;

    async function getSessionData() {
      try {
        let result = await axios.get(`${API_URL}/sessions/${sessionID}`);
        session = result.data[0];
        setSessionData(session);
        setDate(session.date);
        setProgPhase(session.prog_phase);
        setProgMech(session.prog_mech);
        setFFLogsLink(session.fflogs_link);
        setTwitchLinks(session.twitch_links);
        setTwitchLinksArray(session.twitch_links.split(", "));
        setGoal(session.goal);
        setRoster(session.roster);
        setNotes(session.notes);
      } catch (error) {
        console.error(error);
      } finally {
        getPullsData();
      }
    }

    async function getPullsData() {
      try {
        let result = await axios.get(`${API_URL}/sessions/${sessionID}/pulls`);
        pulls = result.data;
        pulls.sort((a, b) => a.pull_num_today - b.pull_num_today);
      } catch (error) {
        console.error(error);
      } finally {
        getFFLogsData();
      }
    }

    async function getFFLogsData() {
      const reportCode = session.fflogs_link.substring(31);

      try {
        let result = await axios.get(
          `https://www.fflogs.com:443/v1/report/fights/${reportCode}?api_key=${API_KEY}`
        );
        ffLogs = result.data.fights;
        setFFLogsData(ffLogs);
      } catch (error) {
        console.error(error);
      } finally {
        if (ffLogs.length >= 1) {
          for (let i = 0; i < pulls.length; i++) {
            pulls[i].combatTime = convertMSToMinSec(ffLogs[i].combatTime);
            console.log(pulls[i]);
          }
        }
        setPullsArray(pulls);
        setPullsToDisplay(pulls);
      }
    }

    getSessionData();

    if (username === "ella") {
      setShowEdit(true);
    }
  }, [sessionID]);

  function getProgPulls() {
    const filteredPullsArray = pullsToDisplay.filter(
      (pull) =>
        pull.mech === progMech || pull.mech === getMechAfterProgMech(progMech)
    );
    return filteredPullsArray;
  }

  function handleCheckbox() {
    if (progPullsOnly) {
      setProgPullsOnly(false);
    } else {
      setProgPullsOnly(true);
    }
  }

  async function deletePull(pullToDelete) {
    try {
      const response = await axios.delete(
        `${API_URL}/pulls/${pullToDelete.id}`
      );
      if (response.status === 204) {
        setPullsArray(pullsArray.filter((pull) => pull.id !== pullToDelete.id));
      }
    } catch (err) {
      console.error("Error deleting pull:", err);
    }
  }

  async function updatePull(pullToUpdate) {
    delete pullToUpdate.index;
    try {
      await axios.put(`${API_URL}/pulls/${pullToUpdate.id}`, pullToUpdate);
    } catch (error) {
      console.error(error);
    }
  }

  async function editSession() {
    if (editMode === false) {
      setEditMode(true);
    } else if (editMode === true) {
      const updatedSessionObj = {
        date: date,
        prog_phase: progPhase,
        prog_mech: progMech,
        fflogs_link: fflogsLink,
        twitch_links: twitchLinks,
        roster: roster,
        goal: goal,
        notes: notes,
      };
      try {
        await axios.put(`${API_URL}/sessions/${sessionID}`, updatedSessionObj);
      } catch (error) {
        console.error(error);
      }
      setEditMode(false);
    }
  }

  function filterPulls(name) {
    let newArray = pullsArray;

    const arrayFilteredByPlayer = newArray.filter((pull) =>
      pull.players_responsible.includes(name)
    );

    setPullsToDisplay(arrayFilteredByPlayer);
  }

  return (
    <main className="report">
      {sessionData ? (
        <>
          <section className="report__section">
            <h1 className="report__heading">
              Report:
              {!editMode ? (
                <span className="report__date">{createReadableDate(date)}</span>
              ) : (
                <input
                  type="text"
                  id="date-input"
                  name="date-input"
                  placeholder="YYYY-MM-DD"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              )}
            </h1>

            <p className="report__subtitle">
              Session {sessionData.id}
              <span className="report__divider"> • </span>
              {!editMode ? (
                `Phase ${progPhase} ${progMech} Prog`
              ) : (
                <>
                  <input
                    type="number"
                    value={progPhase}
                    onChange={(e) => setProgPhase(e.target.value)}
                  />
                  <input
                    type="text"
                    value={progMech}
                    onChange={(e) => setProgMech(e.target.value)}
                  />
                </>
              )}
              <span className="report__divider"> • </span>
              {!editMode ? (
                <a
                  className={`report__link ${checkIfEmptyLink(fflogsLink)}`}
                  href={fflogsLink}
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
                  {/* <img
                    src="https://i.imgur.com/asZe3Wu.png"
                    className="report__icon"
                  /> */}
                  <input
                    type="text"
                    value={fflogsLink}
                    onChange={(e) => setFFLogsLink(e.target.value)}
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
                          twitchLinks
                        )}`}
                        href={twitchLinks}
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
                  value={twitchLinks}
                  onChange={(e) => {
                    setTwitchLinks(e.target.value);
                    setTwitchLinksArray(e.target.value.split(", "));
                  }}
                />
              )}
              {showEdit ? (
                <button onClick={editSession}>
                  {!editMode ? "Edit" : "Save"}
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
                    `${goal}`
                  ) : (
                    <input
                      type="text"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                    />
                  )}
                </p>
                <p className="report__extra-info">
                  <span className="report__extra-info--bold">Roster: </span>
                  {!editMode ? (
                    `${roster}`
                  ) : (
                    <input
                      type="text"
                      value={roster}
                      onChange={(e) => setRoster(e.target.value)}
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
                  {findGoldStars(pullsArray, roster)}
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
                sessionData={sessionData}
                pullsArray={pullsArray}
              />
              <div className="report__extra-info-right">
                <div className="report__extra-info">
                  <span className="report__extra-info--bold">Notes: </span>
                  <ul className="report__list">
                    {!editMode ? (
                      <>
                        {notes.split(", ").map((note) => {
                          return (
                            <li className="report__note" key={note}>
                              {note}
                            </li>
                          );
                        })}
                      </>
                    ) : (
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      ></textarea>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="report__section">
            <div className="report__pulls-heading">
              <h2 className="report__subheading">
                Pulls ({pullsArray.length})
              </h2>
              <label
                className="report__filter-label"
                htmlFor="progOnlyCheckbox"
              >
                <input
                  type="checkbox"
                  name="progOnlyCheckbox"
                  id="progOnlyCheckbox"
                  className="report__filter-input"
                  value={progPullsOnly}
                  onChange={handleCheckbox}
                />
                Show prog pulls only
              </label>
              {sessionData.roster.split(", ").length > 0 ? (
                <label className="report__filter-label" htmlFor="playerSelect">
                  <select
                    name="playerSelect"
                    id="playerSelect"
                    className="report__filter-input"
                    onChange={(e) => {
                      filterPulls(e.target.value);
                    }}
                  >
                    <option value={""}>--</option>
                    {sessionData.roster.split(", ").map((player) => {
                      return (
                        <option
                          className="report__filter-option"
                          value={player}
                        >
                          {player}
                        </option>
                      );
                    })}
                  </select>
                  Filter by player
                </label>
              ) : (
                ""
              )}
            </div>

            {progPullsOnly ? (
              <PullsTable
                pullsArray={getProgPulls(pullsToDisplay)}
                showEdit={showEdit}
                updatePull={updatePull}
                deletePull={deletePull}
                progPhase={sessionData.prog_phase}
                key={pullsArray}
              />
            ) : (
              <PullsTable
                pullsArray={pullsToDisplay}
                showEdit={showEdit}
                updatePull={updatePull}
                deletePull={deletePull}
                progPhase={sessionData.prog_phase}
                key={pullsArray}
              />
            )}
          </section>
        </>
      ) : (
        <p>Could not retrieve data for session #{sessionID}</p>
      )}
    </main>
  );
};

export default ReportPage;
