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
              icon: "/actions/Eukrasian_Diagnosis.png",
              cd: 0,
            },
            {
              job: "AST",
              name: "Exaltation",
              abbr: "Exalt",
              icon: "/actions/Exaltation.png",
              cd: 60,
            },
            {
              job: "AST",
              name: "The Spire",
              abbr: "Spire",
              icon: "/actions/The_Spire.png",
              cd: 120,
            },
          ],
          post: [
            {
              job: "SGE",
              name: "Taurochole",
              abbr: "Tauro",
              icon: "/actions/Taurochole.png",
              cd: 45,
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
              name: "Physis II",
              abbr: "Phys",
              icon: "/actions/Physis_II.png",
              cd: 60,
            },
            {
              job: "AST",
              name: "Celestial Opposition",
              abbr: "Oppo",
              icon: "/actions/Celestial_Opposition.png",
              cd: 60,
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
              icon: "/actions/Panhaima.png",
              cd: 120,
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
              icon: "/actions/Macrocosmos.png",
              cd: 180,
            },
          ],
          post: [
            {
              job: "SGE",
              name: "Ixochole",
              abbr: "Ixo",
              icon: "/actions/Ixochole.png",
              cd: 30,
            },
            {
              job: "AST",
              name: "Earthly Star (Place)",
              abbr: "Star (Place)",
              icon: "/actions/Earthly_Star.png",
              cd: 60,
            },
            {
              job: "AST",
              name: "Lady of Crowns",
              abbr: "Lady",
              icon: "/actions/Lady_of_Crowns.png",
              cd: 120,
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
              name: "Microcosmos",
              abbr: "Micro",
              icon: "/actions/Microcosmos.png",
              cd: 180,
            },
          ],
        },
        {
          name: "Disco Infernal",
          time: "1:17",
          damage: 132,
          desc: "raidwide",
          pre: [
            {
              job: "AST",
              name: "Horoscope (Place)",
              abbr: "Horo (Place)",
              icon: "/actions/Horoscope_1.png",
              cd: 60,
            },
          ],
          post: [
            {
              job: "AST",
              name: "Horoscope (Pop)",
              abbr: "Horo (Pop)",
              icon: "/actions/Horoscope_2.png",
              cd: 60,
            },
          ],
        },
      ],
    },
  ],
};
