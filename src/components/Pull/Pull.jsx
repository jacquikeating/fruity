import React from "react";
import "./Pull.scss";

const Pull = (pullData) => {
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
  } = pullData;

  return (
    <tr key={`pull-${id}`} className="pulls-table__row">
      <td
        key={`#${id}-${pull_num_today}`}
        className="pulls-table__cell pulls-table__cell--num-today"
      >
        {pullNumType === "today" ? index + 1 : id}
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
      <td key={`${id}-${players_responsible}`} className="pulls-table__cell">
        {players_responsible?.join(", ")}
      </td>
      <td key={`${id}-${notes}`} className="pulls-table__cell">
        {notes}
      </td>
      {showEdit ? (
        <td key={`${id}-actions`} className="pulls-table__cell">
          <button>Edit</button>
          <button>Delete</button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};

export default Pull;
