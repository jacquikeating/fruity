import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  createReadableDate,
  findGoldStars,
  findStrugglePhase,
  findStruggleMech,
  checkIfEmptyLink,
} from "../../utils/shared-functions.js";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import PullsTable from "../../components/PullsTable/PullsTable.jsx";
import "./ReportPage.scss";

const API_URL = import.meta.env.VITE_API_URL;
const username = localStorage.getItem("name");

const ReportPage = () => {
  const [sessionData, setSessionData] = useState();
  const [pullsArray, setPullsArray] = useState([]);
  const [progPullsOnly, setProgPullsOnly] = useState(false);
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
    async function getSessionData() {
      try {
        let result = await axios.get(`${API_URL}/sessions/${sessionID}`);
        let session = result.data[0];
        setTwitchLinksArray(session.twitch_links.split(", "));
        setSessionData(session);
      } catch (error) {
        console.error(error);
      }
    }

    async function getPullsData() {
      try {
        let result = await axios.get(`${API_URL}/sessions/${sessionID}/pulls`);
        let data = result.data;
        data.sort((a, b) => a.pull_num_today - b.pull_num_today);
        setPullsArray(data);
      } catch (error) {
        console.error(error);
      }
    }

    getSessionData();
    getPullsData();
    if (username === "ella") {
      setShowEdit(true);
    }
  }, [sessionID]);

  function getProgPulls() {
    const filteredPullsArray = pullsArray.filter(
      (pull) => pull.phase >= sessionData.prog_phase
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

  return (
    <main className="report">
      {sessionData ? (
        <>
          <section className="report__section">
            <h1 className="report__heading">
              Report:
              <span className="report__date">
                {createReadableDate(sessionData.date)}
              </span>
            </h1>

            <p className="report__subtitle">
              Session {sessionData.id}
              <span className="report__divider"> • </span>
              Phase {sessionData.prog_phase} {sessionData.prog_mech} Prog
              <span className="report__divider"> • </span>
              <a
                className={`report__link ${checkIfEmptyLink(
                  sessionData.fflogs_link
                )}`}
                href={sessionData.fflogs_link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/asZe3Wu.png"
                  className="report__icon"
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
                    className={`session__link ${checkIfEmptyLink(
                      sessionData.twitch_links
                    )}`}
                    href={sessionData.twitch_links}
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
              {showEdit ? (
                <button
                  onClick={() => {
                    setEditMode(true);
                  }}
                >
                  Edit
                </button>
              ) : (
                ""
              )}
            </p>

            <div className="report__extra-info-container">
              <div className="report__extra-info-left">
                <p className="report__extra-info">
                  <span className="report__extra-info--bold">Goal: </span>
                  {sessionData.goal}
                </p>
                <p className="report__extra-info">
                  <span className="report__extra-info--bold">Roster: </span>
                  {sessionData.roster}
                </p>
                <p className="report__extra-info">
                  <span className="report__extra-info--bold">Most Wipes: </span>
                  Phase {findStrugglePhase(pullsArray)}
                  <span className="report__divider"> • </span>
                  {findStruggleMech(pullsArray)}
                </p>
                <p className="report__extra-info">
                  <span className="report__extra-info--bold">Gold Stars: </span>
                  {findGoldStars(pullsArray, sessionData.roster)}
                </p>
              </div>
              <PhaseBreakdownTable
                sessionData={sessionData}
                pullsArray={pullsArray}
              />
              <div className="report__extra-info-right">
                <div className="report__extra-info">
                  <span className="report__extra-info--bold">Notes: </span>
                  <ul className="report__list">
                    {sessionData.notes.split(", ").map((note) => {
                      return (
                        <li className="report__note" key={note}>
                          {note}
                        </li>
                      );
                    })}
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
                className="report__checkbox-label"
                htmlFor="progOnlyCheckbox"
              >
                <input
                  type="checkbox"
                  name="progOnlyCheckbox"
                  id="progOnlyCheckbox"
                  className="report__prog-only-checkbox"
                  value={progPullsOnly}
                  onChange={handleCheckbox}
                />
                Show prog pulls only
              </label>
            </div>

            {progPullsOnly ? (
              <PullsTable
                pullsArray={getProgPulls()}
                showEdit={showEdit}
                updatePull={updatePull}
                deletePull={deletePull}
                progPhase={sessionData.prog_phase}
                key={pullsArray}
              />
            ) : (
              <PullsTable
                pullsArray={pullsArray}
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
