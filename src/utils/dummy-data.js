let totalPulls = 0;
let progPoint = "Target Mech";
let cleanupMech = "Cleanup Mech";

let dummyData = [
  {
    sessionNum: 0,
    sessionDate: "",
    fflogsLink: "",
    twitchLink: "",
    pulls: [
      {
        pullNumToday: 0,
        pullNumTotal: 0,
        duration: "0:00",
        durationInSeconds: 0,
        phase: determinePhase(this.durationInSeconds)[0],
        mechanic: determinePhase(this.durationInSeconds)[1],
        deaths: [],
        wipeCause: "",
        playerNames: [],
        progPointReached: checkProgPoint(this.mechanic),
      },
    ],
  },
];

function determinePhase(seconds) {
  let phase = 0;
  let mechanic = "";

  switch (seconds) {
    case seconds < 30:
      phase = 1;
      mechanic = "Opener";
      break;

    case seconds < 60:
      phase = 1;
      mechanic = "First Mech";
      break;
  }

  return [phase, mechanic];
}

function checkProgPoint(mechanic) {
  if (mechanic === progPoint) {
    return "target";
  } else if (mechanic === cleanupMech) {
    return "cleanup";
  } else {
    return "old";
  }
}
