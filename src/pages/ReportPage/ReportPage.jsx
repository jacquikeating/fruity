import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  createReadableDate,
  findGoldStars,
  findStrugglePhase,
  findStruggleMech,
} from "../../utils/shared-functions.js";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import Pull from "../../components/Pull/Pull.jsx";
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
        const rosterArray = (data.roster = data.roster.split(","));
        data.roster = rosterArray;
        setSessionData(data);
        createReadableDate(data.date);
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
            <p className="report__subtitle">
              Session {sessionData.id}
              <span className="report__divider"> • </span>
              Phase {sessionData.prog_phase} Prog
              <span className="report__divider"> • </span>
              <a className="report__link" href={sessionData.fflogs_link}>
                Logs
              </a>
              <span className="report__divider"> • </span>
              <a className="report__link" href={sessionData.twitch_link}>
                VoD
              </a>
            </p>

            <p className="report__extra-info">
              <span className="report__extra-info--bold">Most Wipes:</span> P
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

            <PullsTable sessionData={sessionData} pullsArray={pullsArray} />

            <ul className="report__pulls-list">
              {progPullsOnly
                ? getProgPulls().map((pull) => {
                    return <Pull key={pull.id} pullData={pull} />;
                  })
                : pullsArray.map((pull) => {
                    return <Pull key={pull.id} pullData={pull} />;
                  })}
            </ul>
          </section>
        </>
      ) : (
        <p>Could not retrieve data for session #{sessionID}</p>
      )}
    </main>
  );
};

export default ReportPage;
