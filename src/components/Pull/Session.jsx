import React from "react";
import { numSuffix } from "../../utils/shared-functions";
import "./Session.scss";

const Session = ({ pullData }) => {
  let responsiblePlayersArray = pullData.players_responsible.split(",");
  let responsiblePlayersString = responsiblePlayersArray.join(", ");

  return (
    <li className="pull">
      <div className="pull__nums">
        <h3 className="pull__num-today">Pull {pullData.pull_num_today}</h3>
        <p className="pull__num-total">
          {pullData.id}
          {numSuffix(pullData.id)} Overall
        </p>
      </div>

      <p className="pull__info">
        Phase {pullData.phase}, {pullData.mech}
      </p>
      <p className="pull__info">Cause: {pullData.cause}</p>

      {pullData.players_responsible.length > 0 ? (
        <p className="pull__players">Players: {responsiblePlayersString}</p>
      ) : (
        ""
      )}
    </li>
  );
};

export default Session;
