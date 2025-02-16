import React from "react";
import "./MechsPage.scss";

const MechsPage = () => {
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
                    <li key="mech" className="mechs-page__list-item">
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
