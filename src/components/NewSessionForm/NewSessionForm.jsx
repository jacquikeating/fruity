import { React, useState } from "react";
import axios from "axios";
import "./NewSessionForm.scss";

const NewSessionForm = ({ handleSessionFormData }) => {
  const [num, setNum] = useState("");
  const [roster, setRoster] = useState("");
  const [progPhase, setProgPhase] = useState("");
  const [progMech, setProgMech] = useState("");
  const [ffLogsLink, setFFLogsLink] = useState("");
  const [twitchLink, setTwitchLink] = useState("");

  function handleSubmit() {
    const sessionObj = {
      num: num,
      date: new Date().toISOString(),
      prog_phase: progPhase,
      prog_mech: progMech,
      fflogs_link: ffLogsLink,
      twitch_link: twitchLink,
      roster: roster.split(", "),
    };

    handleSessionFormData(sessionObj);

    let sessionObjToPost = { ...sessionObj };
    delete sessionObjToPost.num;
    sessionObjToPost.roster = JSON.stringify(roster.split(", "));
    addNewSession(sessionObjToPost);
  }
  async function addNewSession(sessionObjToPost) {
    try {
      await axios.post(`http://localhost:5050/sessions/`, sessionObjToPost);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="session-form">
      <label className="session-form__label" htmlFor="session-num">
        Session #
        <input
          className="session-form__input session-form__input--number"
          type="number"
          name="session-num"
          id="session-num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </label>
      <label className="session-form__label" htmlFor="roster">
        Roster
        <input
          className="session-form__input form__input--text"
          type="text"
          name="roster"
          id="roster"
          value={roster}
          onChange={(e) => setRoster(e.target.value)}
        />
      </label>
      <label className="session-form__label" htmlFor="prog-phase">
        Prog Phase
        <input
          className="session-form__input form__input--number"
          type="number"
          name="prog-phase"
          id="prog-phase"
          value={progPhase}
          onChange={(e) => setProgPhase(e.target.value)}
        />
      </label>
      <label className="session-form__label" htmlFor="prog-mech">
        Prog Mech
        <input
          className="session-form__input session-form__input--text"
          type="text"
          name="prog-mech"
          id="prog-mech"
          value={progMech}
          onChange={(e) => setProgMech(e.target.value)}
        />
      </label>
      <label className="session-form__label" htmlFor="fflogs-link">
        FFLogs Link
        <input
          className="session-form__input session-form__input--text"
          type="text"
          name="fflogs-link"
          id="fflogs-link"
          value={ffLogsLink}
          onChange={(e) => setFFLogsLink(e.target.value)}
        />
      </label>
      <label className="session-form__label" htmlFor="twitch-link">
        Twitch Link
        <input
          className="session-form__input session-form__input--text"
          type="text"
          name="twitch-link"
          id="twitch-link"
          value={twitchLink}
          onChange={(e) => setTwitchLink(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Start</button>
    </div>
  );
};

export default NewSessionForm;
