export function createReadableDate(sqlDate) {
  const readableDate = new Date(sqlDate).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const suffix = numSuffix(readableDate);
  const dateWithSuffix = `${readableDate}${suffix}`;
  return dateWithSuffix;
}

export function numSuffix(number) {
  const lastNumeral = JSON.stringify(number).slice(-1);
  const last2Numerals = JSON.stringify(number).slice(-2);
  if (lastNumeral == 1 && last2Numerals != 11) {
    return "st";
  } else if (lastNumeral == 2 && last2Numerals != 12) {
    return "nd";
  } else if (lastNumeral == 3 && last2Numerals != 13) {
    return "rd";
  } else {
    return "th";
  }
}

export const findStrugglePhase = (pullsArray) => {
  const tallyObject = pullsArray.reduce((accumulatedObject, thisPull) => {
    accumulatedObject[thisPull.phase] =
      (accumulatedObject[thisPull.phase] ?? 0) + 1;
    return accumulatedObject;
  }, {});

  const tallyArray = Object.entries(tallyObject);

  const highestCount = tallyArray.reduce(
    (currentHighest, thisItem) => {
      if (thisItem[1] >= currentHighest[1]) {
        return thisItem;
      } else {
        return currentHighest;
      }
    },
    [null, 0]
  );
  return `${highestCount[0]} (${highestCount[1]} wipes)`;
};

export const findStruggleMech = (pullsArray) => {
  const tallyObject = pullsArray.reduce((accumulatedObject, thisPull) => {
    accumulatedObject[thisPull.mech] =
      (accumulatedObject[thisPull.mech] ?? 0) + 1;
    return accumulatedObject;
  }, {});

  const tallyArray = Object.entries(tallyObject);

  const highestCount = tallyArray.reduce(
    (currentHighest, thisItem) => {
      if (thisItem[1] >= currentHighest[1]) {
        return thisItem;
      } else {
        return currentHighest;
      }
    },
    [null, 0]
  );
  return `${highestCount[0]} (${highestCount[1]} wipes)`;
};

export function findGoldStars(pullsArray, playersArray) {
  let causedWipes = [];
  let goldStars = [];

  pullsArray.map((pull) => {
    const responsiblePlayersArray = pull.players_responsible.split(",");
    responsiblePlayersArray.forEach((playerName) => {
      if (!causedWipes.includes(playerName)) {
        causedWipes.push(playerName);
      }
    });
  });

  playersArray.forEach((player) => {
    if (!causedWipes.includes(player)) {
      goldStars.push(player);
    }
  });

  if (goldStars.length === 0) {
    return "None";
  }

  goldStars = goldStars.join(", ");
  return goldStars;
}

export function getTextColour(progPoint, phase) {
  let targetMech = progPoint;
  let cleanupMech = progPoint - 1;

  if (phase > 0) {
    if (phase < cleanupMech) {
      return "old";
    } else if (phase == cleanupMech) {
      return "cleanup";
    } else if (phase == targetMech) {
      return "target";
    } else if (phase > targetMech) {
      return "newphase";
    } else {
      return "null";
    }
  }
}

export function convertObjectToJson(object) {
  const stringifiedKeys = {
    date: "date",
    roster: "roster",
    progPhase: "prog_phase",
    progMech: "prog_mech",
  };

  let modifiedObject = {};

  for (let key of Object.keys(object)) {
    modifiedObject[stringifiedKeys[key]] = object[key];
  }

  return modifiedObject;
}
