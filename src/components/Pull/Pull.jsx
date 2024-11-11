import React from "react";
import { numSuffix } from "../../utils/shared-functions";
import "./Pull.scss";

const Pull = ({ pullData }) => {
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
