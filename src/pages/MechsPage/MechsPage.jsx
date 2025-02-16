import { React, useState, useEffect } from "react";
import axios from "axios";
import "./MechsPage.scss";

const API_URL = import.meta.env.VITE_API_URL;

const MechsPage = () => {
  const [sessionsList, setSessionsList] = useState([]);

  const mechsList = [
    ["P1 Opener", "Utopian Sky", "Fall of Faith", "Towers", "P1 Enrage"],
    ["Diamond Dust", "Mirrors", "Light Rampant", "P2 Enrage", "Intermission"],
    ["Ultimate Relativity", "Apocalypse", "P3 Enrage"],
    ["Darklit Dragonsong", "Crystallize Time", "P4 Enrage"],
    [
      "Fulgent Blade",
      "Wings Dark and Light",
      "Polarizing Strikes",
      "P5 Enrage",
    ],
  ];

  useEffect(() => {
    async function getSessionsList() {
      let sessions = [];
      try {
        let result = await axios.get(`${API_URL}/sessions`);
        sessions = result.data;
        setSessionsList(sessions);
      } catch (error) {
        console.error(error);
      } finally {
        /*  Find the id of the first session where we reached each phase. 
            While the id of the first session with each prog_phase would be index + 1, 
            we would have first reached the phase in the session prior, 
            so just the index works here.
        */
        for (let i = 1; i < 6; i++) {
          const firstSession = sessions.findIndex(
            (session) => session.prog_phase === i
          );
          console.log(
            `We first reached phase ${i} in session ${firstSession}.`
          );
        }
      }
    }

    getSessionsList();
  }, []);

  return (
    <main className="mechs-page">
      <section className="mechs-page">
        <h1 className="mechs-page__heading">Mechanics</h1>

        {mechsList.map((phase, index) => {
          return (
            <>
              <h2 className="mechs-page__subheading">Phase {index + 1}</h2>
              <ul key={index} className="mechs-page__list">
                {phase.map((mech) => {
                  return (
                    <li key={mech} className="mechs-page__list-item">
                      {mech}
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </section>
    </main>
  );
};

export default MechsPage;
