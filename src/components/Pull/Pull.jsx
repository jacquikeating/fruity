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

  return (
    <tr key={`pull-${index}`} className="pulls-table__row">
      <td
        key={`#${index}`}
        className="pulls-table__cell pulls-table__cell--num-today"
      >
        {pullNumType === "today" ? index + 1 : id}
      </td>
      <td key={`${index}-phase`} className="pulls-table__cell">
        {!editMode ? (
          phase
        ) : (
          <input
            type="number"
            value={phase}
            onChange={(e) => {
              setPhase(e.target.value);
            }}
          />
        )}
      </td>
      <td key={`${index}-mech`} className="pulls-table__cell">
        {!editMode ? (
          mech
        ) : (
          <input
            type="text"
            value={mech}
            onChange={(e) => {
              setMech(e.target.value);
            }}
          />
        )}
      </td>
      <td key={`${index}-cause`} className="pulls-table__cell">
        {!editMode ? (
          cause
        ) : (
          <input
            type="text"
            value={cause}
            onChange={(e) => {
              setCause(e.target.value);
            }}
          />
        )}
      </td>
      <td key={`${index}-players_responsible`} className="pulls-table__cell">
        {!editMode ? (
          playersResponsible
        ) : (
          <input
            type="text"
            value={playersResponsible}
            onChange={(e) => {
              setPlayersResponsible(e.target.value);
            }}
          />
        )}
      </td>
      <td key={`${index}-notes`} className="pulls-table__cell">
        {!editMode ? (
          notes
        ) : (
          <input
            type="text"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          />
        )}
      </td>
      {showEdit ? (
        <td key={`${index}-actions`} className="pulls-table__cell">
          <button onClick={editRow}>{!editMode ? "Edit" : "Save"}</button>
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
};

export default Pull;
