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
    // pullsToDisplay,
    // setPullsToDisplay,
    // getProgPulls,
    // filterPulls,
    // handleCheckbox,
  } = pullsCtx;

  const [progPullsOnly, setProgPullsOnly] = useState(false);
  const [pullsToDisplay, setPullsToDisplay] = useState([]);

  function handleCheckbox() {
    if (progPullsOnly) {
      setProgPullsOnly(false);
    } else {
      setProgPullsOnly(true);
    }
  }

  function getProgPulls() {
    const filteredPullsArray = pullsToDisplay.filter(
      (pull) =>
        pull.mech === session.prog_mech ||
        pull.mech === getMechAfterProgMech(session.prog_mech)
    );
    return filteredPullsArray;
  }

  return (
    <section className="report__section">
      <div className="report__pulls-heading">
        <h2 className="report__subheading">Pulls ({pullsArray.length})</h2>

        <label className="report__filter-label" htmlFor="progOnlyCheckbox">
          <input
            type="checkbox"
            name="progOnlyCheckbox"
            id="progOnlyCheckbox"
            className="report__filter-input"
            value={progPullsOnly}
            onChange={handleCheckbox}
          />
          Show prog pulls only
        </label>
      </div>
    </section>
  );
};

export default PullsSection;
