import { React, useState } from "react";
import { checkIfProgPointReached } from "../../utils/shared-functions";
import "./Pull.scss";

const Pull = ({
  pullData,
  pullNumType,
  showEdit,
  updatePull,
  deletePull,
  progPhase,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [phase, setPhase] = useState(pullData.phase);
  const [mech, setMech] = useState(pullData.mech);
  const [cause, setCause] = useState(pullData.cause);
  const [playersResponsible, setPlayersResponsible] = useState(
    pullData.players_responsible
  );
  const [logLink, setLogLink] = useState(pullData.log_link);
  const [clipLink, setClipLink] = useState(pullData.clip_link);
  const [notes, setNotes] = useState(pullData.notes);

  const index = pullData.index;

  function editRow() {
    if (editMode === false) {
      setEditMode(true);
    } else if (editMode === true) {
      setEditMode(false);
      updatePull({
        id: pullData.id,
        session_id: pullData.session_id,
        phase: phase,
        mech: mech,
        prog_point_reached: checkIfProgPointReached(progPhase, phase),
        cause: cause,
        players_responsible: playersResponsible,
        log_link: logLink,
        clip_link: clipLink,
        notes: notes,
        index: index,
      });
    }
  }

  return (
    <tr key={`pull-${index}`} className="pull">
      <td key={`#${index}`} className="pull__cell pull__cell--num-today">
        {pullNumType === "today" ? index + 1 : pullData.id}
      </td>

      <td key={`${index}-phase`} className="pull__cell">
        {!editMode ? (
          phase
        ) : (
          <input
            className="pull__input pull_input--number"
            type="number"
            value={phase}
            onChange={(e) => {
              setPhase(e.target.value);
            }}
          />
        )}
      </td>

      <td key={`${index}-mech`} className="pull__cell">
        {!editMode ? (
          mech
        ) : (
          <input
            className="pull__input"
            type="text"
            value={mech}
            onChange={(e) => {
              setMech(e.target.value);
            }}
          />
        )}
      </td>

      <td key={`${index}-cause`} className="pull__cell">
        {!editMode ? (
          cause
        ) : (
          <input
            className="pull__input"
            type="text"
            value={cause}
            onChange={(e) => {
              setCause(e.target.value);
            }}
          />
        )}
      </td>

      <td key={`${index}-players_responsible`} className="pull__cell">
        {!editMode ? (
          playersResponsible.join(", ")
        ) : (
          <input
            className="pull__input"
            type="text"
            value={playersResponsible.join(", ")}
            onChange={(e) => {
              setPlayersResponsible(e.target.value.split(", "));
            }}
          />
        )}
      </td>

      <td key={`${index}-notes`} className="pull__cell">
        {clipLink ? (
          <a
            className="pull__link"
            href={clipLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../src/assets/50_twitch.png" className="pull__icon" />
          </a>
        ) : (
          ""
        )}
        {logLink ? (
          <a
            className="pull__link"
            href={logLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src="../../src/assets/50_fflogs.png" className="pull__icon" />
          </a>
        ) : (
          ""
        )}
        {!editMode ? (
          notes
        ) : (
          <input
            className="pull__input"
            type="text"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          />
        )}
      </td>

      {showEdit ? (
        <td key={`${index}-actions`} className="pull__cell">
          <button className="pull__button" onClick={editRow}>
            {!editMode ? "Edit" : "Save"}
          </button>
          <button
            className="pull__button"
            onClick={() => {
              deletePull(pullData);
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
