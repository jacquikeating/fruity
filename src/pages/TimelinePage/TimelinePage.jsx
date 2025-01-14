import React from "react";
import "./TimelinePage.scss";

const TimelinePage = () => {
  const timeline = [
    {
      phase: 1,
      boss: "Fatebreaker",
      startTime: "0:00",
      endTime: "2:37 (hard enrage 2:46)",
      mechs: [
        {
          mechName: "Opener",
          startTime: "0:00",
          endTime: "0:34",
          submechs: [
            {
              time: "0:14",
              mech: "Cyclonic Break",
              nickname: "proteans",
              maxDmg: 97,
            },
            {
              time: "0:16",
              mech: "Sinsmoke/Sinsmite",
              nickname: "partner stack/spread",
              maxDmg: 146,
            },
            {
              time: "0:24",
              mech: "Powder Mark Trail",
              nickname: "single TB",
              maxDmg: 0,
              tankbuster: true,
            },
          ],
        },
        {
          mechName: "Utopian Sky",
          startTime: "0:34",
          endTime: "1:20",
          untargetable: true,
          submechs: [
            {
              time: "0:40",
              mech: "Burn Mark",
              nickname: "double TB",
              maxDmg: 0,
              tankbuster: true,
            },
            {
              time: "0:49",
              mech: "Sinbound Fire/Thunder III",
              nickname: "light party stack/spread",
              maxDmg: 0,
            },
            {
              time: "0:56",
              mech: "Cyclonic Break",
              nickname: "proteans",
              maxDmg: 0,
            },
            {
              time: "0:58",
              mech: "Sinsmoke/Sinsmite",
              nickname: "partner stack/spread",
              maxDmg: 0,
            },
            {
              time: "1:18",
              mech: "Sinsmoke",
              nickname: "tether stacks",
              maxDmg: 0,
            },
          ],
        },
        {
          mechName: "Fall of Faith",
          startTime: "1:20",
          endTime: "2:05",
          submechs: [
            {
              time: "1:26",
              mech: "Burnished Glory",
              nickname: "DoT",
              maxDmg: 0,
            },
            {
              time: "1:41",
              mech: "Fall of Faith",
              nickname: "castbar ends",
              maxDmg: 0,
            },
            {
              time: "1:45",
              mech: "Sinblaze/Sinsmite/Bow Shock",
              nickname: "stack/cones",
              maxDmg: 0,
              repeatsAt: ["1:48, 1:51, 1:54"],
            },
            {
              time: "2:01",
              mech: "Burnished Glory",
              nickname: "DoT",
              maxDmg: 0,
            },
          ],
        },
        {
          mechName: "Towers",
          startTime: "2:05",
          endTime: "2:37",
          submechs: [
            {
              time: "2:10",
              mech: "Powder Mark Trail",
              nickname: "single TB",
              maxDmg: 0,
              tankbuster: true,
            },
            { time: "2:25", mech: "Explosion", nickname: "towers", maxDmg: 0 },
            {
              time: "2:26",
              mech: "Burn Mark",
              nickname: "double TB",
              maxDmg: 0,
              tankbuster: true,
            },
          ],
        },
      ],
    },
  ];

  return <div>TimelinePage</div>;
};

export default TimelinePage;
