import { React, useState } from "react";
import PullLink from "../PullLink/PullLink";
import "./PullDiv.scss";

const PullDiv = ({
  pullData,
  showEdit,
  updatePull,
  deletePull,
  progPhase,
  allowDelete,
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

  function editPull() {}

  return (
    <div className="pull-div">
      <p className="pull-div__pull-num">{pullData.pull_num_today}</p>
      <div className="pull-div__info">
        <div className="pull-div__top">
          <p className="pull-div__p pull-div__p--mech">
            P{phase}
            <span className="pull-div__divider">•</span>
            {mech}
          </p>
        </div>

        <div className="pull-div__mid">
          <p className="pull-div__p">
            {/* <span className="pull-div__bold">Cause: </span> */}
            {cause}
          </p>
          {pullData.notes ? (
            <p className="pull-div__p pull-div__p--notes">
              <span className="pull-div__bold">Notes: </span>
              {notes}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="pull-div__bottom">
          <p className="pull-div__p pull-div__p--players">
            {playersResponsible}
          </p>
          {showEdit ? (
            <div className="pull-div__actions-container">
              <button className="pull-div__button" onClick={editPull}>
                {!editMode ? (
                  <i className="fa-regular fa-pen-to-square"></i>
                ) : (
                  <i className="fa-solid fa-check pull__save"></i>
                )}
              </button>
              {allowDelete ? (
                <button
                  className="pull-div__button"
                  //   onClick={() => {
                  //     deletePull(pullData);
                  //   }}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <PullLink
        logLink={logLink}
        clipLink={clipLink}
        // editMode={editMode}
        // handleLinkModalData={handleLinkModalData}
      />
    </div>
  );
};

export default PullDiv;
