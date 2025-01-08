import { React, useState } from "react";
import Pull from "../Pull/Pull";
import "./PullsTable.scss";

const PullsTable = ({
  pullsArray,
  showEdit,
  updatePull,
  deletePull,
  progPhase,
}) => {
  const [pullNumType, setPullNumType] = useState("today");

  function togglePullNumType() {
    if (pullNumType === "today") {
      setPullNumType("overall");
    } else {
      setPullNumType("today");
    }
  }

  const columns = ["dur", "p", "mechanic", "cause", "players", "notes"];

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
            {showEdit ? (
              <th className="pulls-table__header-cell pulls-table__header-cell--actions">
                Actions
              </th>
            ) : (
              ""
            )}
          </tr>
          {pullsArray.map((pull, index) => {
            return (
              <Pull
                pullData={{ ...pull, index: index }}
                pullNumType={pullNumType}
                showEdit={showEdit}
                updatePull={updatePull}
                deletePull={deletePull}
                progPhase={progPhase}
                key={pull.pull_num_today || index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PullsTable;
