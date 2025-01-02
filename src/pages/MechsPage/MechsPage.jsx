import React from "react";
import "./MechsPage.scss";

const MechsPage = () => {
  const mechsList = [
    "P1 Opener",
    "Utopian Sky",
    "Fall of Faith",
    "Towers",
    "P1 Enrage",
    "Diamond Dust",
    "Mirrors",
    "Light Rampant",
    "P2 Enrage",
    "Intermission",
    "Ultimate Relativity",
    "Apocalypse",
    "P3 Enrage",
    "Darklit Dragonsong",
    "Crystallize Time",
    "P4 Enrage",
    "Fulgent Blade",
    "Paradise Regained",
    "Polarizing Strikes",
    "P5 Enrage",
  ];

  return (
    <main>
      <section>
        <h1>Mechanics</h1>
      </section>
      <section>
        <ul>
          {mechsList.map((mech) => {
            return <li key="mech">{mech}</li>;
          })}
        </ul>
      </section>
    </main>
  );
};

export default MechsPage;
