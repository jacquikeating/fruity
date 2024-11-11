import React from "react";
import { getTextColour } from "../../utils/shared-functions";
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

  let counter = 1;
  let counter2 = 1;

  return (
    <div className="phases-table">
      <table className="phases-table__table">
        <tbody>
          <tr className="phases-table__row">
            <th className="phases-table__header">Phase</th>
            {phasesArray.map(() => {
              let phaseNum = counter++;
              return (
                <td
                  className={`phases-table__cell 
                phases-table__cell--${getTextColour(
                  sessionData.progPoint,
                  phaseNum
                )}`}
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
                phases-table__cell--${getTextColour(
                  sessionData.progPoint,
                  phaseNum
                )}`}
                >
                  {numberOfWipes}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhaseBreakdownTable;
