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

  return (
    <table className="phases-table">
      <tbody>
        <tr className="phases-table__row">
          <th className="phases-table__header">Phase</th>
          <td className="phases-table__cell">1</td>
          <td className="phases-table__cell">2</td>
          <td className="phases-table__cell">3</td>
          <td className="phases-table__cell">4</td>
          <td className="phases-table__cell">5</td>
          <td className="phases-table__cell">6</td>
          <td className="phases-table__cell">7</td>
        </tr>
        <tr className="phases-table__row">
          <th className="phases-table__header">Pulls</th>
          <td className="phases-table__cell">{phasesArray[0]}</td>
          <td className="phases-table__cell">{phasesArray[1]}</td>
          <td className="phases-table__cell">{phasesArray[2]}</td>
          <td className="phases-table__cell">{phasesArray[3]}</td>
          <td className="phases-table__cell">{phasesArray[4]}</td>
          <td className="phases-table__cell">{phasesArray[5]}</td>
          <td className="phases-table__cell">{phasesArray[6]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PhaseBreakdownTable;
