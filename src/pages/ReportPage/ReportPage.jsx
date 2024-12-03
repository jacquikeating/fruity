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

const ReportPage = () => {
  const [sessionData, setSessionData] = useState();
  const [pullsArray, setPullsArray] = useState([]);
  const [progPullsOnly, setProgPullsOnly] = useState(false);
  const { sessionID } = useParams();

  useEffect(() => {
    async function getSessionData() {
      try {
        let result = await axios.get(
          `http://localhost:5050/sessions/${sessionID}`
        );
        let data = result.data[0];
        setSessionData(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function getPullsData() {
      try {
        let result = await axios.get(
          `http://localhost:5050/sessions/${sessionID}/pulls`
        );
        let data = result.data;
        setPullsArray(data);
      } catch (error) {
        console.error(error);
      }
    }

    getSessionData();
    getPullsData();
  }, []);

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
        `http://localhost:5050/pulls/${pullToDelete.id}`
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
    pullToUpdate.players_responsible = JSON.stringify(
      pullToUpdate.players_responsible
    );

    try {
      await axios.put(
        `http://localhost:5050/pulls/${pullToUpdate.id}`,
        pullToUpdate
      );
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
              Report:{" "}
              <span className="report__date">
                {createReadableDate(sessionData.date)}
              </span>
            </h1>
            {/* <p className="report__subtitle">
              Session {sessionData.id}
              <span className="report__divider"> • </span>
              Phase {sessionData.prog_phase} Prog
            </p>
            <p className="report__subtitle">
              <a className="report__link" href={sessionData.twitch_link}>
                <img src="/src/assets/25_twitch.png" className="report__icon" />
                Twitch
              </a>
              <a className="report__link" href={sessionData.fflogs_link}>
                <img src="/src/assets/25_fflogs.png" className="report__icon" />
                FFLogs
              </a>
            </p> */}
            <p className="report__subtitle">
              Session {sessionData.id}
              <span className="report__divider"> • </span>
              Phase {sessionData.prog_phase} Prog
              <span className="report__divider"> • </span>
              <a
                className={`report__link ${checkIfEmptyLink(
                  sessionData.fflogs_link
                )}`}
                href={sessionData.fflogs_link}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/src/assets/25_fflogs.png" className="report__icon" />
                FFLogs
              </a>
              <span className="report__divider"> • </span>
              <a
                className={`report__link ${checkIfEmptyLink(
                  sessionData.twitch_link
                )}`}
                href={sessionData.twitch_link}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/src/assets/25_twitch.png" className="report__icon" />
                Twitch
              </a>
            </p>
            <p className="report__extra-info">
              <span className="report__extra-info--bold">Roster: </span>
              {sessionData.roster.join(", ")}
            </p>
            <p className="report__extra-info">
              <span className="report__extra-info--bold">Most Wipes: </span>P
              {findStrugglePhase(pullsArray)}
              <span className="report__divider"> • </span>
              {findStruggleMech(pullsArray)}
            </p>
            <p className="report__extra-info">
              <span className="report__extra-info--bold">Gold Stars: </span>
              {findGoldStars(pullsArray, sessionData.roster)}
            </p>
          </section>

          <section className="report__section">
            <PhaseBreakdownTable
              sessionData={sessionData}
              pullsArray={pullsArray}
            />
          </section>

          <section className="report__section">
            <div className="report__pulls-heading">
              <h2 className="report__subheading">
                Pulls ({pullsArray.length})
              </h2>
              <label className="report__checkbox-label">
                <input
                  type="checkbox"
                  name="progOnlyCheckbox"
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
                showEdit={true}
                updatePull={updatePull}
                deletePull={deletePull}
                progPhase={sessionData.prog_phase}
              />
            ) : (
              <PullsTable
                pullsArray={pullsArray}
                showEdit={true}
                updatePull={updatePull}
                deletePull={deletePull}
                progPhase={sessionData.prog_phase}
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
