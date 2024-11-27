import { React, useState } from "react";
import "./PullsTable.scss";

const PullsTable = ({ pullsArray }) => {
  const [pullNumType, setPullNumType] = useState("today");

  function togglePullNumType() {
    if (pullNumType === "today") {
      setPullNumType("overall");
    } else {
      setPullNumType("today");
    }
  }

  const columns = ["phase", "mechanic", "cause", "players", "notes"];

  return (
    <div className="pulls-table">
      <table className="pulls-table__table">
        <tbody>
          <tr className="pulls-table__header-row">
            <th
              className="pulls-table__header-cell"
              onClick={togglePullNumType}
            >
              #
            </th>
            {columns.map((column) => {
              return (
                <th
                  key={column}
                  className={`pulls-table__header-cell pulls-table__header-cell--${column}`}
                >
                  {column}
                </th>
              );
            })}
          </tr>
          {pullsArray.map((pull, index) => {
            const {
              id,
              pull_num_today,
              phase,
              mech,
              cause,
              players_responsible,
              log_link,
              clip_link,
              notes,
            } = pull;

            return (
              <tr key={`pull-${id}`} className="pulls-table__row">
                <td
                  key={`#${id}-${pull_num_today}`}
                  className="pulls-table__cell pulls-table__cell--num-today"
                >
                  {pullNumType === "today" ? index + 1 : id}
                  {/* {pull_num_today}
                  <span className="pulls-table__num-overall">{id}</span> */}
                </td>
                {/* <td
                  key={`${id}`}
                  className="pulls-table__cell pulls-table__cell--num-overall"
                >
                  {id}
                </td> */}
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
                  {players_responsible?.join(", ")}
                </td>
                <td key={`${id}-${notes}`} className="pulls-table__cell">
                  {notes}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PullsTable;
