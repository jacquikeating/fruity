import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAxios } from "../../hooks/useFetch.js";
import { getMechAfterProgMech } from "../../utils/shared-functions.js";
import PullsTable from "../../components/PullsTable/PullsTable.jsx";
import SessionInfo from "../../components/SessionInfo/SessionInfo.jsx";
import SessionInfoEdit from "../../components/SessionInfo/SessionInfoEdit.jsx";
import "./ReportPage.scss";

const API_URL = import.meta.env.VITE_API_URL;

const ReportPage = ({ sessions }) => {
  const { sessionID } = useParams();
  let thisSession = sessions.find((session) => session.id == sessionID);
  let pullToUpdate = {};

  const { response: pulls } = useAxios(
    {
      method: "get",
      url: `/sessions/${sessionID}/pulls`,
    },
    true
  );

  useEffect(() => {
    if (pulls !== null) {
      pulls.sort((a, b) => a.pull_num_today - b.pull_num_today);
      setPullsArray(pulls);
      setPullsToDisplay(pulls);
    }
  }, [pulls]);

  async function updatePull(pullToUpdate) {
    delete pullToUpdate.index;
    try {
      await axios.put(`${API_URL}/pulls/${pullToUpdate.id}`, pullToUpdate);
    } catch (error) {
      console.error(error);
    }
  }

  const [session, setSession] = useState(thisSession);
  const [pullsArray, setPullsArray] = useState([]);
  const [progPullsOnly, setProgPullsOnly] = useState(false);
  const [pullsToDisplay, setPullsToDisplay] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showEdit, setShowEdit] = useState(true);
  const [allowDelete, setAllowDelete] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1040;

  const { isAuthenticated, user } = useAuth0();
  let role = "none";

  useEffect(() => {
    if (isAuthenticated) {
      role = user["https://wall-is-safe.netlify.app/roles"][0];
    }
    if (role === "admin") {
      setShowEdit(true);
      setAllowDelete(true);
    } else if (role === "static") {
      setShowEdit(true);
    }

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize"), handleWindowResize;
  }, [sessionID]);

  function getProgPulls() {
    const filteredPullsArray = pullsToDisplay.filter(
      (pull) =>
        pull.mech === session.prog_mech ||
        pull.mech === getMechAfterProgMech(session.prog_mech)
    );
    return filteredPullsArray;
  }

  function handleCheckbox() {
    if (progPullsOnly) {
      setProgPullsOnly(false);
    } else {
      setProgPullsOnly(true);
    }
  }

  async function deletePull(pullToDelete) {
    try {
      const response = await axios.delete(
        `${API_URL}/pulls/${pullToDelete.id}`
      );
      if (response.status === 204) {
        setPullsArray(pullsArray.filter((pull) => pull.id !== pullToDelete.id));
      }
    } catch (err) {
      console.error("Error deleting pull:", err);
    }
  }

  async function updatePull(pull) {
    delete pull.index;
    pullToUpdate = { ...pull };
    console.log(pull);
    try {
      await axios.put(`${API_URL}/pulls/${pullToUpdate.id}`, pullToUpdate);
    } catch (error) {
      console.error(error);
    }
  }

  async function editSession() {
    if (editMode === false) {
      setEditMode(true);
    } else if (editMode === true) {
      const updatedSessionObj = { ...session };
      try {
        await axios.put(`${API_URL}/sessions/${sessionID}`, updatedSessionObj);
      } catch (error) {
        console.error(error);
      }
      setEditMode(false);
    }
  }

  function filterPulls(name) {
    const arrayFilteredByPlayer = [...pullsArray].filter((pull) =>
      pull.players_responsible.includes(name)
    );

    setPullsToDisplay(arrayFilteredByPlayer);
  }

  return (
    <main className="report">
      {session.id ? (
        <>
          <SessionInfo
            session={session}
            setSession={setSession}
            editSession={editSession}
            pullsArray={pullsArray}
            sessionID={sessionID}
            editMode={editMode}
            setEditMode={setEditMode}
            showEdit={showEdit}
          />
          <SessionInfoEdit />
          <section className="report__section">
            <div className="report__pulls-heading">
              <h2 className="report__subheading">
                Pulls ({pullsArray.length})
              </h2>
              <label
                className="report__filter-label"
                htmlFor="progOnlyCheckbox"
              >
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
              {session.roster.split(", ").length > 0 ? (
                <label className="report__filter-label" htmlFor="playerSelect">
                  <select
                    name="playerSelect"
                    id="playerSelect"
                    className="report__filter-input"
                    onChange={(e) => {
                      filterPulls(e.target.value);
                    }}
                  >
                    <option value={""}>--</option>
                    {session.roster.split(", ").map((player) => {
                      return (
                        <option
                          className="report__filter-option"
                          value={player}
                        >
                          {player}
                        </option>
                      );
                    })}
                  </select>
                  Filter by player
                </label>
              ) : (
                ""
              )}
            </div>

            {progPullsOnly ? (
              <PullsTable
                pullsArray={getProgPulls(pullsToDisplay)}
                showEdit={showEdit}
                updatePull={updatePull}
                deletePull={deletePull}
                progPhase={session.prog_phase}
                key={pullsArray}
                allowDelete={allowDelete}
                width={width}
                breakpoint={breakpoint}
              />
            ) : (
              <PullsTable
                pullsArray={pullsToDisplay}
                showEdit={showEdit}
                updatePull={updatePull}
                deletePull={deletePull}
                progPhase={session.prog_phase}
                key={pullsArray}
                allowDelete={allowDelete}
                width={width}
                breakpoint={breakpoint}
              />
            )}
          </section>
        </>
      ) : (
        <p>Could not retrieve data for session #{sessionID}</p>
      )}
    </main>
  );
};

export default ReportPage;
