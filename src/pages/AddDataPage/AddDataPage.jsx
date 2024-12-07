import { React, useState, useEffect } from "react";
import axios from "axios";
import { createReadableDate } from "../../utils/shared-functions.js";
import NewSessionForm from "../../components/NewSessionForm/NewSessionForm";
import NewPullForm from "../../components/NewPullForm/NewPullForm";
import PullsTable from "../../components/PullsTable/PullsTable";
import "./AddDataPage.scss";

const API_URL = import.meta.env.VITE_API_URL;

const AddDataPage = () => {
  const [sessionInProgress, setSessionInProgress] = useState(false);
  const [sessionData, setSessionData] = useState({});
  const [lastSession, setLastSession] = useState({});
  const lsPullsArray = JSON.parse(localStorage.getItem("pullsFromNewSession"));
  const [pullsArray, setPullsArray] = useState(lsPullsArray || []);

  useEffect(() => {
    const lsSessionData = JSON.parse(localStorage.getItem("sessionInProgress"));
    if (lsSessionData) {
      setSessionData(lsSessionData);
      setSessionInProgress(true);
    } else {
      async function getLastSessionData() {
        try {
          let result = await axios.get(`${API_URL}/sessions/`);
          let mostRecentSession = result.data.reverse()[0];
          setLastSession(mostRecentSession);
        } catch (error) {
          console.error(error);
        }
      }
      getLastSessionData();
    }
  }, []);

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

  function deletePull(pullData) {
    let copyOfPullsArray = [...pullsArray];
    copyOfPullsArray.splice(pullData.index, 1);
    localStorage.setItem(
      "pullsFromNewSession",
      JSON.stringify(copyOfPullsArray)
    );
    setPullsArray(copyOfPullsArray);
  }

  function insertPull(pullData, pullNum) {}

  async function handleSubmit() {
    pullsArray.map(async (pull, index) => {
      pull.pull_num_today = index + 1;
      delete pull.index;
      pull.players_responsible = JSON.stringify(pull.players_responsible);
      try {
        await axios.post(`${API_URL}/pulls/`, pull);
      } catch (error) {
        console.error(error);
      }
    });

    localStorage.removeItem("pullsFromNewSession");
    localStorage.removeItem("sessionInProgress");
  }

  return (
    <main className="add-data">
      <h1 className="add-data__heading">Add Data</h1>
      {!sessionInProgress ? (
        <section className="add-data__section">
          <h2 className="add-data__section-heading">New Session</h2>
          {lastSession.id > 0 ? (
            <NewSessionForm
              lastSession={lastSession}
              handleSessionFormData={handleSessionFormData}
            />
          ) : (
            ""
          )}
        </section>
      ) : (
        <>
          <section className="add-data__section">
            <h2 className="add-data__section-heading">Session Info</h2>
            <p>Session: {sessionData.num}</p>
            <p>Date: {createReadableDate(sessionData.date)}</p>
            <p>Roster: {sessionData.roster}</p>
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
            <button className="add-data__button" onClick={insertPull}>
              Insert Pull
            </button>
            <button className="add-data__button" onClick={handleSubmit}>
              Complete Session
            </button>
          </section>
        </>
      )}
    </main>
  );
};

export default AddDataPage;
