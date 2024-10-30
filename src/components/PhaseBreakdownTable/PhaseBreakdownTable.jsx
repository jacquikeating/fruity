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
  );
};

export default PhaseBreakdownTable;
