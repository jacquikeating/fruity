import { React, useState, useEffect } from "react";
import axios from "axios";
import "./MechsPage.scss";

const API_URL = import.meta.env.VITE_API_URL;

const MechsPage = () => {
  const [sessionsList, setSessionsList] = useState([]);
  const [mechsProgInfo, setMechsProgInfo] = useState([]);
  const [mostAttempts, setMostAttempts] = useState({});
  const [mostWipes, setMostWipes] = useState({});

  const mechsList = [
    ["Utopian Sky", "Fall of Faith", "Towers"],
    ["Diamond Dust", "Mirrors", "Light Rampant", "Intermission"],
    ["Ultimate Relativity", "Apocalypse"],
    ["Darklit Dragonsong", "Crystalize Time"],
    [
      "Fulgent Blade",
      "Wings Dark and Light",
      "Polarizing Strikes",
      "P5 Enrage",
      "Clear",
    ],
  ];

  const concatenatedMechsArray = mechsList[0].concat(
    mechsList[1],
    mechsList[2],
    mechsList[3],
    mechsList[4]
  );

  let mechIndex = 0;

  useEffect(() => {
    async function getSessionsList() {
      let sessions = [];
      try {
        let result = await axios.get(`${API_URL}/sessions`);
        sessions = result.data;
      } catch (error) {
        console.error(error);
      } finally {
        let firstSessionsArr = [];
        /*  Find the id of the first session where we reached each phase. 
            While the id of the first session with each prog_phase would be index + 1, 
            we would have first reached the phase in the session prior, 
            so just the index works here.
        */
        for (let i = 1; i < 6; i++) {
          const firstSession = sessions.findIndex(
            (session) => session.prog_phase === i
          );

          firstSessionsArr.push(firstSession);
        }
        setSessionsList(firstSessionsArr);
      }
    }

    async function getPullsList() {
      let pulls = [];
      let firstPullForEachMechArray = [];
      let mechsInfo = [];

      try {
        let result = await axios.get(`${API_URL}/pulls`);
        pulls = result.data.sort(
          (a, b) => a.pull_num_overall - b.pull_num_overall
        );
      } catch (error) {
        console.error(error);
      } finally {
        concatenatedMechsArray.map((mechName, index) => {
          let firstPullAtMech = pulls.find((pull) => pull.mech === mechName);
          firstPullForEachMechArray.push(firstPullAtMech?.pull_num_overall);
          if (firstPullAtMech) {
            let filteredPullsArray = pulls.filter((pull) => {
              return pull.mech === mechName;
            });
            let firstClearOfMech = pulls.find(
              (pull) =>
                pull.mech === concatenatedMechsArray[index + 1] ||
                pull.mech === concatenatedMechsArray[index + 2]
            );
            if (
              firstClearOfMech &&
              index !== concatenatedMechsArray.length - 1
            ) {
              let pullsToClear = filteredPullsArray.filter(
                (pull) =>
                  pull.pull_num_overall < firstClearOfMech.pull_num_overall
              );
              let mechInfo = {
                name: mechName,
                firstPull: firstPullAtMech,
                firstPullNum: firstPullAtMech.pull_num_overall,
                firstClear: firstClearOfMech,
                firstClearNum: firstClearOfMech.pull_num_overall,
                pullsToClear: pullsToClear.length + 1,
                totalWipes: filteredPullsArray.length,
              };
              mechsInfo.push(mechInfo);
            }
          }
        });
        setMechsProgInfo(mechsInfo);

        const mechsSortedByAttempts = mechsInfo.sort(
          (a, b) => a.pullsToClear - b.pullsToClear
        );
        setMostAttempts(mechsSortedByAttempts[0]);

        const mechsSortedByWipes = mechsInfo.sort(
          (a, b) => a.totalWipes - b.totalWipes
        );

        setMostWipes(mechsSortedByWipes[0]);
      }
    }

    getSessionsList();
    getPullsList();
  }, []);

  return (
    <main className="mechs-page">
      <section className="mechs-page">
        <h1 className="mechs-page__heading">Mechanics</h1>
        {mechsProgInfo.length == 14 ? (
          <p>Cleared on pull {mechsProgInfo[14].firstClearNum} overall</p>
        ) : (
          ""
        )}
        <p>
          Most attempts before clear: {mostAttempts.name} with{" "}
          {mostAttempts.pullsToClear} pulls
        </p>
        <p>
          Most wipes overall: {mostWipes.name} with {mostWipes.totalWipes} wipes
        </p>

        {mechsList.map((phase, index) => {
          const difference = sessionsList[index + 1] - sessionsList[index];
          return (
            <div key={index}>
              {index === 4 ? (
                <h2 className="mechs-page__subheading">
                  Phase {index + 1}: 9 sessions (27 to 36)
                </h2>
              ) : (
                <h2 className="mechs-page__subheading">
                  Phase {index + 1}: {difference} sessions (
                  {sessionsList[index]} to {sessionsList[index + 1]})
                </h2>
              )}

              <ul key={index} className="mechs-page__list">
                {phase.map((mech) => {
                  mechIndex++; // Cannot use the array's index since the mechs are split into multiple arrays. Incrementing this variable instead.

                  if (mech !== "Clear") {
                    // There's no prog after Clear! It needs to be included in the array to calculate the # of Enrage pulls, but rendering it is pointless.

                    return (
                      <li key={mech} className="mechs-page__list-item">
                        {mech}: {mechsProgInfo[mechIndex - 1]?.pullsToClear}{" "}
                        pulls
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default MechsPage;
