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
          damage: 309,
          desc: "double tankbuster",
          pre: ["ED tanks", "Spire", "Exalt"],
          post: ["Tauro"],
        },
        {
          name: "Play A/B Side",
          time: "0:38",
          damage: 132,
          desc: "roles/parties",
          pre: [],
          post: ["Oppo", "Phys"],
        },
        {
          name: "Play A/B Side",
          time: "0:58",
          damage: 132,
          desc: "roles/parties",
          pre: ["Pan", "Kera", "Macro"],
          post: ["Star", "Lady", "Ixo"],
        },
        {
          name: "Celebrate Good Times",
          time: "1:04",
          damage: 181,
          desc: "raidwide",
          pre: [],
          post: ["Micro", "Horo"],
        },
        {
          name: "Disco Infernal",
          time: "1:7",
          damage: 132,
          desc: "raidwide",
          pre: [],
          post: ["Micro", "Horo"],
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
