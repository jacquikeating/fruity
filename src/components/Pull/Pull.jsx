import React from "react";
import "./Pull.scss";

const Pull = ({ pullData }) => {
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

  return (
    <li className="pull">
      <div className="pull__nums">
        <h3 className="pull__num-today">Pull {pullData.pullNumToday}</h3>
        <p className="pull__num-total">
          {pullData.pullNumTotal}
          {numSuffix(pullData.pullNumTotal)} Overall
        </p>
      </div>

      <p className="pull__info">
        Phase {pullData.phase}, {pullData.mech}
      </p>
      <p className="pull__info">Cause: {pullData.wipeCause}</p>

      {pullData.playerNames.length > 0 ? (
        <p className="pull__players">
          Players: {pullData.playerNames.join(", ")}
        </p>
      ) : (
        ""
      )}
    </li>
  );
};

export default Pull;
