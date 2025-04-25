export const m5sTimeline = {
  fightName: "Dancing Green",
  fightImage:
    "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/03/dancing-green-intro.jpg",
  phases: [
    {
      phaseName: "",
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
          time: "1:17",
          damage: 132,
          desc: "raidwide",
          pre: [],
          post: ["Micro", "Horo"],
        },
      ],
    },
  ],
};
