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
                <td key={`pull # ${id}-${pull_num_today}`}>{pull_num_today}</td>
                <td key={`${id}`}>{id}</td>
                <td key={`${id}-${phase}`}>{phase}</td>
                <td key={`${id}-${mech}`}>{mech}</td>
                <td key={`${id}-${cause}`}>{cause}</td>
                <td key={`${id}-${players_responsible}`}>
                  {players_responsible}
                </td>
                {/* <td key={`${id}-${notes}`}>{notes}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PullsTable;
