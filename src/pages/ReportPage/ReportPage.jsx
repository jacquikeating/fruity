import React from "react";
import { session1 } from "../../utils/old-data";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import "./ReportPage.scss";

const ReportPage = () => {
  function numSuffix(number) {
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

  function findGoldStars() {
    let causedWipes = [];
    let goldStars = [];

    session1.pulls.map((pull) => {
      pull.playerNames.forEach((playerName) => {
        if (!causedWipes.includes(playerName)) {
          causedWipes.push(playerName);
        }
      });
    });

    session1.players.forEach((player) => {
      if (!causedWipes.includes(player)) {
        goldStars.push(player);
      }
    });

    if (goldStars.length === 0) {
      return "None";
    }

    return goldStars;
  }

  const findStrugglePhase = (arr) => {
    const tallyObject = arr.reduce((accumulatedObject, thisPull) => {
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
    return highestCount[0];
  };

  const findStruggleMech = (arr) => {
    const tallyObject = arr.reduce((accumulatedObject, thisPull) => {
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
    return highestCount[0];
  };

  return (
    <main className="report">
      <h1 className="report__heading">
        Report: <span className="report__date">{session1.sessionDate}</span>
      </h1>
      <p className="report__subtitle">
        Session {session1.sessionNum}
        <span className="report__divider"> • </span>
        Phase {session1.progPoint} Prog
        <span className="report__divider"> • </span>
        <a className="report__link" href={session1.fflogsLink}>
          Logs
        </a>
        <span className="report__divider"> • </span>
        <a className="report__link" href={session1.twitchLink}>
          VoD
        </a>
      </p>

      <p className="report__extra-info">
        Struggle Phase: P{findStrugglePhase(session1.pulls)}
      </p>
      <p className="report__extra-info">
        Struggle Mech: {findStruggleMech(session1.pulls)}
      </p>
      <p className="report__extra-info">Gold Stars: {findGoldStars()}</p>

      <PhaseBreakdownTable sessionData={session1} />

      <h2 className="report__subheading">Pulls ({session1.pulls.length})</h2>

      <ul className="report__pulls-list">
        {session1.pulls.map((pull) => {
          return (
            <li className="pull" key={pull.pullNumTotal}>
              <div className="pull__nums">
                <h3 className="pull__num-today">Pull {pull.pullNumToday}</h3>
                <p className="pull__num-total">
                  {pull.pullNumTotal}
                  {numSuffix(pull.pullNumTotal)} Overall
                </p>
              </div>

              <p className="pull__info">
                Phase {pull.phase}, {pull.mech}
              </p>
              <p className="pull__info">Cause: {pull.wipeCause}</p>

              {pull.playerNames.length > 0 ? (
                <p className="pull__players">
                  Players: {pull.playerNames.join(", ")}
                </p>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ReportPage;
