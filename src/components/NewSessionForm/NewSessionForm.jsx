import { React, useState } from "react";
import "./NewSessionForm.scss";

const NewSessionForm = ({ handleSessionFormData }) => {
  const [num, setNum] = useState("");
  const [roster, setRoster] = useState("");
  const [progPhase, setProgPhase] = useState("");
  const [progMech, setProgMech] = useState("");

  function handleSubmit() {
    handleSessionFormData({
      num: num,
      date: new Date().toISOString(),
      roster: roster,
      progPhase: progPhase,
      progMech: progMech,
    });
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
      <button onClick={handleSubmit}>Start</button>
    </div>
  );
};

export default NewSessionForm;
