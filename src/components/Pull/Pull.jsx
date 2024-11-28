import { React, useState } from "react";
import "./Pull.scss";

const Pull = ({ pullData, pullNumType, showEdit, deletePull }) => {
  const [editMode, setEditMode] = useState(false);
  const [phase, setPhase] = useState(pullData.phase);
  const [mech, setMech] = useState(pullData.mech);
  const [cause, setCause] = useState(pullData.cause);
  const [playersResponsible, setPlayersResponsible] = useState(
    pullData.players_responsible.join(", ")
  );
  const [logLink, setLogLink] = useState(pullData.log_link);
  const [clipLink, setClipLink] = useState(pullData.clip_link);
  const [notes, setNotes] = useState(pullData.notes);

  const index = pullData.index;

  function editRow() {
    editMode ? setEditMode(false) : setEditMode(true);
  }

  if (!editMode) {
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
            <button onClick={editRow}>Edit</button>
            <button
              onClick={() => {
                deletePull(index);
              }}
            >
              Delete
            </button>
          </td>
        ) : (
          <input
            type="number"
            value={phase}
            onChange={(e) => {
              setPhase(e.target.value);
            }}
          />
        )}
      </tr>
    );
  } else {
    return (
      <tr key={`pull-${id}`} className="pulls-table__row">
        <td
          key={`#${id}-${pull_num_today}`}
          className="pulls-table__cell pulls-table__cell--num-today"
        >
          EDIT MODE
        </td>
        <td key={`${id}-${phase}`} className="pulls-table__cell">
          EDIT MODE
        </td>
        <td key={`${id}-${mech}`} className="pulls-table__cell">
          EDIT MODE
        </td>
        <td key={`${id}-${cause}`} className="pulls-table__cell">
          EDIT MODE
        </td>
        <td key={`${id}-${players_responsible}`} className="pulls-table__cell">
          EDIT MODE
        </td>
        <td key={`${id}-${notes}`} className="pulls-table__cell">
          EDIT MODE
        </td>
        {showEdit ? (
          <td key={`${id}-actions`} className="pulls-table__cell">
            <button onClick={editRow}>Edit</button>
            <button
              onClick={() => {
                deletePull(index);
              }}
            >
              Delete
            </button>
          </td>
        ) : (
          ""
        )}
      </tr>
    );
  }
};

export default Pull;
