import { React, useState } from "react";
import { createReadableDate } from "../../utils/shared-functions.js";
import NewSessionForm from "../../components/NewSessionForm/NewSessionForm";
import NewPullForm from "../../components/NewPullForm/NewPullForm";
import PullsTable from "../../components/PullsTable/PullsTable";
import "./AddDataPage.scss";

const AddDataPage = () => {
  const [pullsArray, setPullsArray] = useState([]);
  const [sessionInProgress, setSessionInProgress] = useState(false);
  const [sessionData, setSessionData] = useState({});

  function handleSessionFormData(data) {
    setSessionData(data);
    setSessionInProgress(true);
  }

  function handlePullFormData(data) {
    let copyOfPullsArray = [...pullsArray];
    copyOfPullsArray.push(data);
    setPullsArray(copyOfPullsArray);
    localStorage.setItem(
      "pullsFromNewSession",
      JSON.stringify(copyOfPullsArray)
    );
  }

  function updatePull(pullData) {
    let copyOfPullsArray = [...pullsArray];
    copyOfPullsArray[pullData.index] = pullData;
    localStorage.setItem(
      "pullsFromNewSession",
      JSON.stringify(copyOfPullsArray)
    );
    setPullsArray(copyOfPullsArray);
  }

  function deletePull(pullIndex) {
    let copyOfPullsArray = [...pullsArray];
    copyOfPullsArray.splice(pullIndex, 1);
    localStorage.setItem(
      "pullsFromNewSession",
      JSON.stringify(copyOfPullsArray)
    );
    setPullsArray(copyOfPullsArray);
  }

  return (
    <main className="add-data">
      <h1 className="add-data__heading">Add Data</h1>
      {!sessionInProgress ? (
        <section className="add-data__section">
          <h2 className="add-data__section-heading">New Session</h2>
          <NewSessionForm handleSessionFormData={handleSessionFormData} />
        </section>
      ) : (
        <>
          <section className="add-data__section">
            <h2 className="add-data__section-heading">Session Info</h2>
            <p>Session: {sessionData.num}</p>
            <p>Date: {createReadableDate(sessionData.date)}</p>
            <p>Roster: {sessionData.roster.join(", ")}</p>
            <p>
              Prog Point: Phase {sessionData.prog_phase},{" "}
              {sessionData.prog_mech}
            </p>
          </section>
          <section className="add-data__section">
            <h2 className="add-data__section-heading">Add a Pull</h2>
            <NewPullForm
              sessionData={sessionData}
              pullsArray={pullsArray}
              handlePullFormData={handlePullFormData}
            />
          </section>
          <section className="add-data__section">
            <h2 className="add-data__section-heading">Pulls</h2>
            <PullsTable
              pullsArray={pullsArray}
              showEdit={true}
              deletePull={deletePull}
              updatePull={updatePull}
              progPhase={sessionData.prog_phase}
            />
          </section>
          <section className="add-data__section">
            <button className="add-data__button">Complete Session</button>
          </section>
        </>
      )}
    </main>
  );
};

export default AddDataPage;
