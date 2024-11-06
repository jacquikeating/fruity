import React from "react";
import "./NewPullForm.scss";

const NewPullForm = () => {
  return (
    <form className="add-data__form">
      <label className="add-data__label" for="phase">
        Phase
      </label>
      <select className="add-data__select" name="phase" id="phase">
        <option value="1" className="add-data__option">
          1
        </option>
        <option value="2" className="add-data__option">
          2
        </option>
        <option value="3" className="add-data__option">
          3
        </option>
        <option value="4" className="add-data__option">
          4
        </option>
        <option value="5" className="add-data__option">
          5
        </option>
        <option value="6" className="add-data__option">
          6
        </option>
        <option value="7" className="add-data__option">
          7
        </option>
      </select>

      <label className="add-data__label" for="mech">
        Mechanic
      </label>
      <select className="add-data__select" name="mech" id="mech">
        <option value="A" className="add-data__option">
          A
        </option>
        <option value="B" className="add-data__option">
          B
        </option>
        <option value="C" className="add-data__option">
          C
        </option>
      </select>

      <label className="add-data__label" for="cause">
        Cause of Wipe
      </label>
      <input
        className="add-data__input add-data__input--text"
        type="text"
        name="cause"
        id="cause"
      />

      <fieldset className="add-data__fieldset">
        <legend className="add-data__label">Players Involved</legend>

        <input
          className="add-data__checkbox"
          type="checkbox"
          name="Chro"
          id="Chro"
        />
        <label className="add-data__label" for="Chro">
          Chro
        </label>

        <input
          className="add-data__checkbox"
          type="checkbox"
          name="Sophia"
          id="Sophia"
        />
        <label className="add-data__label" for="Sophia">
          Sophia
        </label>

        <input
          className="add-data__checkbox"
          type="checkbox"
          name="Ella"
          id="Ella"
        />
        <label className="add-data__label" for="Ella">
          Ella
        </label>

        <input
          className="add-data__checkbox"
          type="checkbox"
          name="Ruvien"
          id="Ruvien"
        />
        <label className="add-data__label" for="Ruvien">
          Ruvien
        </label>

        <input
          className="add-data__checkbox"
          type="checkbox"
          name="Quil"
          id="Quil"
        />
        <label className="add-data__label" for="Quil">
          Quil
        </label>

        <input
          className="add-data__checkbox"
          type="checkbox"
          name="Char"
          id="Char"
        />
        <label className="add-data__label" for="Char">
          Char
        </label>

        <input
          className="add-data__checkbox"
          type="checkbox"
          name="Hypatia"
          id="Hypatia"
        />
        <label className="add-data__label" for="Hypatia">
          Hypatia
        </label>

        <input
          className="add-data__checkbox"
          type="checkbox"
          name="Laveera"
          id="Laveera"
        />
        <label className="add-data__label" for="Laveera">
          Laveera
        </label>
      </fieldset>

      <button type="submit" className="add-data__button">
        Save
      </button>
    </form>
  );
};

export default NewPullForm;
