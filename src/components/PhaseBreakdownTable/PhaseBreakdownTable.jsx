import React from "react";
import "./PhaseBreakdownTable.scss";

const PhaseBreakdownTable = ({ sessionData }) => {
  function getPhaseBreakdown() {
    let phasesReached = [];

    sessionData.pulls.map((pull) => {
      phasesReached.push(pull.phase);
    });

    let phaseBreakdown = phasesReached.reduce((accumulator, phase) => {
      return (
        accumulator[phase] ? ++accumulator[phase] : (accumulator[phase] = 1),
        accumulator
      );
    }, {});

    return phaseBreakdown;
  }

  const phaseBreakdown = getPhaseBreakdown();

  let phasesArray = [
    phaseBreakdown[1] ? phaseBreakdown[1] : 0,
    phaseBreakdown[2] ? phaseBreakdown[2] : 0,
    phaseBreakdown[3] ? phaseBreakdown[3] : 0,
    phaseBreakdown[4] ? phaseBreakdown[4] : 0,
    phaseBreakdown[5] ? phaseBreakdown[5] : 0,
    phaseBreakdown[6] ? phaseBreakdown[6] : 0,
    phaseBreakdown[7] ? phaseBreakdown[7] : 0,
  ];

  function getTextColour(phase) {
    let targetMech = sessionData.progPoint;
    let cleanupMech = sessionData.progPoint - 1;

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

  let counter = 1;
  let counter2 = 1;

  return (
    <table className="phases-table">
      <tbody>
        <tr className="phases-table__row">
          <th className="phases-table__header">Phase</th>
          {phasesArray.map(() => {
            let phaseNum = counter++;
            return (
              <td
                className={`phases-table__cell 
                phases-table__cell--${getTextColour(phaseNum)}`}
              >
                {phaseNum}
              </td>
            );
          })}
        </tr>

        <tr className="phases-table__row">
          <th className="phases-table__header">Pulls</th>
          {phasesArray.map((numberOfWipes) => {
            let phaseNum = counter2++;
            return (
              <td
                className={`phases-table__cell 
                phases-table__cell--${getTextColour(phaseNum)}`}
              >
                {numberOfWipes}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default PhaseBreakdownTable;
