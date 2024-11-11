import React from "react";
import "./PullsTable.scss";

const PullsTable = ({ sessionData, pullsArray }) => {
  const columns = [
    "# Today",
    "# Overall",
    "Phase",
    "Mechanic",
    "Cause",
    "Players Responsible",
    "Notes",
  ];

  return (
    <div className="pulls-table">
      <table className="pulls-table__table">
        <tbody>
          <tr className="pulls-table__row">
            {columns.map((column) => {
              return <th key={column}>{column}</th>;
            })}
          </tr>
          {pullsArray.map((pull) => {
            const {
              id,
              pull_num_today,
              phase,
              mech,
              cause,
              players_responsible,
              log_link,
              clip_link,
            } = pull;
            return (
              <tr key={`${id}`} className="pulls-table__row">
                <td
                  key={`pull # ${id}-${pull_num_today}`}
                  className="pulls-table__cell"
                >
                  {pull_num_today}
                </td>
                <td key={`${id}`} className="pulls-table__cell">
                  {id}
                </td>
                <td key={`${id}-${phase}`} className="pulls-table__cell">
                  {phase}
                </td>
                <td key={`${id}-${mech}`} className="pulls-table__cell">
                  {mech}
                </td>
                <td key={`${id}-${cause}`} className="pulls-table__cell">
                  {cause}
                </td>
                <td
                  key={`${id}-${players_responsible}`}
                  className="pulls-table__cell"
                >
                  {players_responsible}
                </td>
                {/* <td key={`${id}-${notes}`} className="pulls-table__cell">{notes}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PullsTable;
