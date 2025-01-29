import React from "react";
import "./PullDiv.scss";

const PullDiv = ({
  pullData,
  showEdit,
  updatePull,
  deletePull,
  progPhase,
  allowDelete,
}) => {
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
    </div>
  );
};

export default PullDiv;
