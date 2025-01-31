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
  function editPull() {}

  return (
    <div className="pull-div">
      <p className="pull-div__pull-num">{pullData.pull_num_today}</p>
      <div className="pull-div__info">
        <div className="pull-div__top">
          <p className="pull-div__p pull-div__p--mech">
            P{pullData.phase}
            <span className="pull-div__divider">•</span>
            {pullData.mech}
          </p>
        </div>

        <div className="pull-div__mid">
          <p className="pull-div__p">
            {/* <span className="pull-div__bold">Cause: </span> */}
            {pullData.cause}
          </p>
          {pullData.notes ? (
            <p className="pull-div__p pull-div__p--notes">
              <span className="pull-div__bold">Notes: </span>
              {pullData.notes}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="pull-div__bottom">
          <p className="pull-div__p pull-div__p--players">
            {pullData.players_responsible}
          </p>
        </div>
      </div>
      <PullLink
        logLink={pullData.log_link}
        clipLink={pullData.clip_link}
        // editMode={editMode}
        // handleLinkModalData={handleLinkModalData}
      />

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
  );
};

export default PullDiv;
