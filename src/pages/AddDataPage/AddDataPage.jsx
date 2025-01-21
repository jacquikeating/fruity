import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { createReadableDate } from "../../utils/shared-functions.js";
import NewSessionForm from "../../components/NewSessionForm/NewSessionForm";
import NewPullForm from "../../components/NewPullForm/NewPullForm";
import PullsTable from "../../components/PullsTable/PullsTable";
import "./AddDataPage.scss";

const API_URL = import.meta.env.VITE_API_URL;

const AddDataPage = () => {
  // let navigate = useNavigate();

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
      console.log(lsSessionData);
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
    if (data.indexToInsert == 0) {
      copyOfPullsArray.push(data);
    } else {
      copyOfPullsArray.splice(data.indexToInsert - 1, 0, data);
    }
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

  console.log(Number(localStorage.getItem("counter")));

  async function handleSubmit() {
    let counter = Number(localStorage.getItem("counter"));

    pullsArray.map(async (pull, index) => {
      pull.pull_num_today = Number(index + 1);
      pull.pull_num_overall = counter + pull.pull_num_today;
      counter++;
      delete pull.index;
      delete pull.indexToInsert;
      try {
        await axios.post(`${API_URL}/pulls/`, pull);
      } catch (error) {
        console.error(error);
      }
    });

    localStorage.setItem("counter", counter);
    navigator.clipboard.writeText(localStorage.getItem("pullsFromNewSession"));
    localStorage.removeItem("pullsFromNewSession");
    localStorage.removeItem("sessionInProgress");
    // navigate(`/report/${sessionData.num}`);
  }

  // async function resurrectPull() {
  //   let pull = {
  //     cause: "Hypatia wrong flex",
  //     clip_link: "",
  //     log_link: "",
  //     mech: "Fall of Faith",
  //     notes: "Didn't see Char's tether",
  //     phase: "1",
  //     players_responsible: "Hypatia",
  //     prog_point_reached: "old",
  //     pull_num_overall: 0,
  //     pull_num_today: 12,
  //     session_id: 16,
  //   };
  //   try {
  //     await axios.post(`${API_URL}/pulls/`, pull);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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
            <p>Goal: {sessionData.goal}</p>
            <p>Notes: {sessionData.notes}</p>
            <p>FFLogs Link: {sessionData.fflogs_link}</p>
            <p>Twitch Links: {sessionData.twitch_links}</p>
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
              allowDelete={true}
            />
          </section>
          <section className="add-data__section">
            <button className="add-data__button" onClick={handleSubmit}>
              Complete Session
            </button>
            {/* <button onClick={resurrectPull}>bring the pull back</button> */}
          </section>
        </>
      )}
    </main>
  );
};

export default AddDataPage;
