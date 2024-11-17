import React from "react";
import "./NewSessionForm.scss";

const NewSessionForm = () => {
  return (
    <form>
      <label className="form__label" htmlFor="session-num">
        Session #
        <input
          className="form__input form__input--number"
          type="number"
          name="session-num"
          id="session-num"
        />
      </label>
      <label className="form__label" htmlFor="roster">
        Roster
        <input
          className="form__input form__input--text"
          type="text"
          name="roster"
          id="roster"
        />
      </label>
      <label className="form__label" htmlFor="prog-phase">
        Prog Phase
        <input
          className="form__input form__input--number"
          type="number"
          name="prog-phase"
          id="prog-phase"
        />
      </label>
      <label className="form__label" htmlFor="prog-mech">
        Prog Mech
        <input
          className="form__input form__input--text"
          type="text"
          name="prog-mech"
          id="prog-mech"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewSessionForm;
