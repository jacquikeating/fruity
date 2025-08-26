import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, createContext } from "react";
import useGetPulls from "../../hooks/use-get-pulls.js";
import axios from "axios";
import { getMechAfterProgMech } from "../../utils/shared-functions.js";
import PullsSection from "../../components/PullsSection/PullsSection.jsx";
import PullsTable from "../../components/PullsTable/PullsTable.jsx";
import SessionInfo from "../../components/SessionInfo/SessionInfo.jsx";
import SessionInfoEdit from "../../components/SessionInfo/SessionInfoEdit.jsx";
import "./ReportPage.scss";

const API_URL = import.meta.env.VITE_API_URL;
const SessionContext = createContext();
const PullsContext = createContext();
const EditContext = createContext();

const ReportPage = ({ sessions }) => {
  const { sessionID } = useParams();
  const [session, setSession] = useState(
    sessions.find((session) => session.id == sessionID)
  );
  const [pullsArray, setPullsArray] = useState([]);
  const [progPullsOnly, setProgPullsOnly] = useState(false);
  const [pullsToDisplay, setPullsToDisplay] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [allowDelete, setAllowDelete] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1040;
  const { isAuthenticated, user } = useAuth0();
  let role = "none";
  let pullToUpdate = {};

  const { pulls, isPending } = useGetPulls(sessionID);

  useEffect(() => {
    if (!isPending) {
      pulls.sort((a, b) => a.pull_num_today - b.pull_num_today);
      setPullsArray(pulls);
      setPullsToDisplay(pulls);
    }
  }, [pulls]);

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

  function filterPulls(name) {
    const arrayFilteredByPlayer = [...pullsArray].filter((pull) =>
      pull.players_responsible.includes(name)
    );
    setPullsToDisplay(arrayFilteredByPlayer);
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

  const sessionCtx = {
    session,
    pullsArray,
    sessionID,
  };

  const pullsCtx = {
    width,
    breakpoint,
    pullsToDisplay,
    setPullsToDisplay,
    getProgPulls,
    filterPulls,
    handleCheckbox,
  };

  const editCtx = {
    editMode,
    setEditMode,
    showEdit,
    allowDelete,
    updatePull,
    deletePull,
    pullToUpdate,
    setPullsArray,
    setSession,
    editSession,
  };

  return (
    <SessionContext.Provider value={{ sessionCtx }}>
      <EditContext.Provider value={{ editCtx }}>
        <main className="report">
          {session.id ? (
            <>
              {!editMode ? <SessionInfo /> : <SessionInfoEdit />}

              <PullsContext.Provider value={{ pullsCtx }}>
                <PullsSection />

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
                    <label
                      className="report__filter-label"
                      htmlFor="playerSelect"
                    >
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
                              key={player}
                            >
                              {player}
                            </option>
                          );
                        })}
                      </select>
                      Filter by player
                    </label>
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
              </PullsContext.Provider>
            </>
          ) : (
            <p>Could not retrieve data for session #{sessionID}</p>
          )}
        </main>
      </EditContext.Provider>
    </SessionContext.Provider>
  );
};
export default ReportPage;
export { SessionContext, EditContext, PullsContext };
