import React from "react";
import Timeline from "../../components/Timeline/Timeline.jsx";
import "./AltTimelinePage.scss";

const AltTimelinePage = () => {
  let fightTimeline = [
    {
      phaseName: "Dancing Green",
      phaseNum: 1,
      mechanics: [
        {
          name: "Deep Cut",
          time: "0:14",
          damage: 275,
          desc: "double tankbuster",
        },
        {
          name: "Play A/B Side",
          time: "0:38",
          damage: 130,
          desc: "roles/parties",
        },
        {
          name: "Play A/B Side",
          time: "0:58",
          damage: 130,
          desc: "roles/parties",
        },
        {
          name: "Celebrate Good Times",
          time: "1:04",
          damage: 175,
          desc: "raidwide",
        },
      ],
    },
  ];

  return (
    <main>
      <Timeline fightTimeline={fightTimeline} />
    </main>
  );
};

export default AltTimelinePage;
