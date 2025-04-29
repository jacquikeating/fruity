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
          pre: [
            {
              job: "SGE",
              name: "Eukrasian Diagnosis",
              abbr: "ED",
              icon: "",
            },
            {
              job: "AST",
              name: "Exaltation",
              abbr: "Exalt",
              icon: "",
            },
            {
              job: "AST",
              name: "The Spire",
              abbr: "Spire",
              icon: "",
            },
          ],
          post: [
            {
              job: "SGE",
              name: "Taurochole",
              abbr: "Tauro",
              icon: "",
            },
          ],
        },
        {
          name: "Play A/B Side",
          time: "0:38",
          damage: 132,
          desc: "roles/parties",
          pre: [],
          post: [
            {
              job: "SGE",
              name: "Physis",
              abbr: "Phys",
              icon: "",
            },
            {
              job: "AST",
              name: "Celestial Opposition",
              abbr: "Oppo",
              icon: "",
            },
          ],
        },
        {
          name: "Play A/B Side",
          time: "0:58",
          damage: 132,
          desc: "roles/parties",
          pre: [
            {
              job: "SGE",
              name: "Panhaima",
              abbr: "Pan",
              icon: "",
            },
            {
              job: "SGE",
              name: "Kerachole",
              abbr: "Kera",
              icon: "/actions/Kerachole.png",
            },
            {
              job: "AST",
              name: "Macrocosmos",
              abbr: "Macro",
              icon: "",
            },
          ],
          post: [
            {
              job: "SGE",
              name: "Ixochole",
              abbr: "Ixo",
              icon: "",
            },
            {
              job: "AST",
              name: "Earthly Star",
              abbr: "Star",
              icon: "",
            },
            {
              job: "AST",
              name: "Lady of Crowns",
              abbr: "lady",
              icon: "",
            },
          ],
        },
        {
          name: "Celebrate Good Times",
          time: "1:04",
          damage: 181,
          desc: "raidwide",
          pre: [],
          post: [
            {
              job: "AST",
              name: "Horoscope",
              abbr: "Horo",
              icon: "",
            },
            {
              job: "AST",
              name: "Microcosmos",
              abbr: "Micro",
              icon: "",
            },
          ],
        },
        {
          name: "Disco Infernal",
          time: "1:17",
          damage: 132,
          desc: "raidwide",
          pre: [],
          post: [],
        },
      ],
    },
  ],
};
