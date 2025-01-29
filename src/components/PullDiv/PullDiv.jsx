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
          <p className="pull-div__p">P{pullData.phase}</p>
          <p className="pull-div__p">{pullData.mech}</p>
        </div>
        <div className="pull-div__mid">
          <p className="pull-div__p">
            ({pullData.players_responsible}) {pullData.cause}
          </p>
          <p className="pull-div__p pull-div__p--notes">{pullData.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default PullDiv;
