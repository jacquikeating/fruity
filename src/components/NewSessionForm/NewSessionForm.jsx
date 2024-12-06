import { React, useState } from "react";
import axios from "axios";
import "./NewSessionForm.scss";

const API_URL = import.meta.env.VITE_API_URL;

const NewSessionForm = ({ lastSession, handleSessionFormData }) => {
  const [num, setNum] = useState(lastSession.id + 1);
  const [roster, setRoster] = useState(lastSession.roster.join(", "));
  const [progPhase, setProgPhase] = useState(lastSession.prog_phase);
  const [progMech, setProgMech] = useState(lastSession.prog_mech);
  const [ffLogsLink, setFFLogsLink] = useState("");
  const [twitchLinks, setTwitchLinks] = useState([]);
  const [goal, setGoal] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSubmit() {
    const sessionObj = {
      num: num,
      date: new Date().toISOString(),
      prog_phase: progPhase,
      prog_mech: progMech,
      fflogs_link: ffLogsLink,
      twitch_links: twitchLinks.split(", "),
      roster: roster.split(", "),
      goal: goal,
      notes: notes.split(", "),
    };

    console.log(sessionObj);

    handleSessionFormData(sessionObj);
    localStorage.setItem("sessionInProgress", JSON.stringify(sessionObj));

    let sessionObjToPost = { ...sessionObj };
    delete sessionObjToPost.num;
    sessionObjToPost.roster = JSON.stringify(roster.split(", "));
    sessionObjToPost.twitch_links = JSON.stringify(twitchLinks.split(", "));
    sessionObjToPost.notes = JSON.stringify(notes.split(", "));
    console.log(sessionObjToPost);
    addNewSession(sessionObjToPost);
  }

  async function addNewSession(sessionObjToPost) {
    try {
      await axios.post(`${API_URL}/sessions/`, sessionObjToPost);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="session-form">
      <div className="session-form__container">
        <div className="session-form__labels-column">
          <label className="session-form__label" htmlFor="session-num">
            Session #
          </label>
          <label className="session-form__label" htmlFor="roster">
            Roster
          </label>
          <label className="session-form__label" htmlFor="prog-phase">
            Prog Phase
          </label>
          <label className="session-form__label" htmlFor="prog-mech">
            Prog Mech
          </label>
          <label className="session-form__label" htmlFor="fflogs-link">
            FFLogs Link
          </label>
          <label className="session-form__label" htmlFor="twitch-links">
            Twitch Links
          </label>
          <label className="session-form__label" htmlFor="goal">
            Goal
          </label>
          <label className="session-form__label" htmlFor="notes">
            Notes
          </label>
        </div>
        <div className="session-form__inputs-column">
          <input
            className="session-form__input session-form__input--number"
            type="number"
            name="session-num"
            id="session-num"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <input
            className="session-form__input form__input--text"
            type="text"
            name="roster"
            id="roster"
            value={roster}
            onChange={(e) => setRoster(e.target.value)}
          />
          <input
            className="session-form__input form__input--number"
            type="number"
            name="prog-phase"
            id="prog-phase"
            value={progPhase}
            onChange={(e) => setProgPhase(e.target.value)}
          />
          <input
            className="session-form__input session-form__input--text"
            type="text"
            name="prog-mech"
            id="prog-mech"
            value={progMech}
            onChange={(e) => setProgMech(e.target.value)}
          />
          <input
            className="session-form__input session-form__input--text"
            type="text"
            name="fflogs-link"
            id="fflogs-link"
            value={ffLogsLink}
            onChange={(e) => setFFLogsLink(e.target.value)}
          />
          <input
            className="session-form__input session-form__input--text"
            type="text"
            name="twitch-links"
            id="twitch-links"
            value={twitchLinks}
            onChange={(e) => setTwitchLinks(e.target.value)}
          />
          <input
            className="session-form__input form__input--text"
            type="text"
            name="goal"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <input
            className="session-form__input form__input--text"
            type="text"
            name="notes"
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>

      <button className="session-form__button" onClick={handleSubmit}>
        Start
      </button>
    </div>
  );
};

export default NewSessionForm;
