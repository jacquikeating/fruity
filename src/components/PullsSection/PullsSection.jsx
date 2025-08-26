import { useState, useContext } from "react";
import {
  SessionContext,
  PullsContext,
  EditContext,
} from "../../pages/ReportPage/ReportPage.jsx";

const PullsSection = () => {
  const { sessionCtx } = useContext(SessionContext);
  const { session, pullsArray, sessionID } = sessionCtx;
  const { editCtx } = useContext(EditContext);
  const {
    editMode,
    setEditMode,
    showEdit,
    allowDelete,
    updatePull,
    deletePull,
    pullToUpdate,
  } = editCtx;
  const { pullsCtx } = useContext(PullsContext);
  const {
    width,
    breakpoint,
    setPullsArray,
    pullsToDisplay,
    setPullsToDisplay,
    getProgPulls,
    filterPulls,
    handleCheckbox,
  } = pullsCtx;

  return (
    <section className="report__section">
      <div className="report__pulls-heading">
        <h2 className="report__subheading">Pulls ({pullsArray.length})</h2>
      </div>
    </section>
  );
};

export default PullsSection;
