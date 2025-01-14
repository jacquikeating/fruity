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

  const timeline2 = [
    {
      name: "Cyclonic Break",
      nickname: "proteans",
      time: "0:14",
      phase: 1,
      subphase: "Opener",
    },
    {
      name: "Sinsmoke/Sinsmite",
      nickname: "partner stack/spread",
      time: "0:16",
      phase: 1,
      subphase: "Opener",
    },
    {
      name: "Powder Mark Trail",
      nickname: "single TB",
      time: "0:24",
      phase: 1,
      subphase: "Opener",
    },
    {
      name: "Burn Mark",
      nickname: "double TB",
      time: "0:40",
      phase: 1,
      subphase: "Utopian Sky",
    },
    {
      name: "Sinbound Fire/Thunder III",
      nickname: "stack/spread",
      time: "0:49",
      phase: 1,
      subphase: "Utopian Sky",
    },
    {
      name: "Cyclonic Break",
      nickname: "proteans",
      time: "0:56",
      phase: 1,
      subphase: "Utopian Sky",
    },
    {
      name: "Sinsmoke/Sinsmite",
      nickname: "stack/spread",
      time: "0:58",
      phase: 1,
      subphase: "Utopian Sky",
    },
    {
      name: "Sinsmoke",
      nickname: "tether stacks",
      time: "1:18",
      phase: 1,
      subphase: "Fall of Faith",
    },
    {
      name: "Burnished Glory",
      nickname: "DoT",
      time: "1:26",
      ticksUntil: "1:41",
      phase: 1,
      subphase: "Fall of Faith",
    },
    {
      name: "Fall of Faith",
      nickname: "tethers",
      time: "1:45",
      additionalHitsAt: ["1:48", "1:51", "1:54"],
      phase: 1,
      subphase: "Fall of Faith",
    },
    {
      name: "Burnished Glory",
      nickname: "DoT",
      time: "2:01",
      ticksUntil: "2:16",
      phase: 1,
      subphase: "Towers",
    },
    {
      name: "Powder Mark Trail",
      nickname: "single TB",
      time: "2:09",
      phase: 1,
      subphase: "Towers",
    },
    {
      name: "Explosion",
      nickname: "towers",
      time: "2:25",
      phase: 1,
      subphase: "Towers",
    },
    {
      name: "Burn Mark",
      nickname: "double TB",
      time: "2:26",
      phase: 1,
      subphase: "Towers",
    },
  ];

  return (
    <main className="timeline">
      {/* {timeline.map((phase) => {
        phase.mechs.map((mech) => {
          console.log(mech.mechName);
          return <h2>{mech.mechName}</h2>;
        });
      })} */}
      {timeline2.map((mech) => {
        return (
          <p>
            {mech.time} {mech.name} ({mech.nickname})
          </p>
        );
      })}
    </main>
  );
};

export default TimelinePage;
