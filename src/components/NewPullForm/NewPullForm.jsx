import { React, useState } from "react";
import Picker from "react-mobile-picker";
import "./NewPullForm.scss";

const NewPullForm = ({ roster, handlePullFormData }) => {
  const [selectedPhase, setSelectedPhase] = useState(1);
  const [selectedMech, setSelectedMech] = useState("");
  const [rosterArray, setRosterArray] = useState(roster.split(", "));

  function handlePhaseChange(e) {
    setSelectedPhase(e.phase);
  }

  function handleMechChange(e) {
    setSelectedMech(e.mech);
  }

  const phaseAndMechOptions = [
    ["N/A"],
    ["A", "B", "C"],
    ["Strength", "Sanctity", "Enrage"],
    ["Transition", "Wyrmhole", "Enums", "Drachenlance", "Enrage"],
    ["Orbs", "Tethers", "Enrage"],
    ["Wrath", "Death", "Enrage"],
    ["A", "Wrothflame", "Cauterize", "Enrage"],
    ["Transition", "Exas", "Akh Morn", "Enrage"],
  ];

  function handleSubmit() {
    const pullObj = {
      // num: num,
      // date: new Date().toISOString(),
      // roster: roster,
      // prog_phase: progPhase,
      // prog_mech: progMech,
      // fflogs_link: ffLogsLink,
      // twitch_link: twitchLink,
    };

    handlePullFormData(pullObj);

    let pullObjToPost = { ...pullObj };
    delete pullObjToPost.num;
    addNewPull(pullObjToPost);
  }

  async function addNewPull(pullObjToPost) {
    try {
      await axios.post(`http://localhost:5050/pulls/`, pullObjToPost);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="form">
      <label className="form__label" htmlFor="phase">
        Phase & Mechanic
      </label>

      <div className="form__pickers-container">
        <Picker
          value={selectedPhase}
          onChange={handlePhaseChange}
          wheelMode="natural"
          height={90}
          itemHeight={30}
          className="form__picker"
        >
          <Picker.Column key="phase" name="phase">
            {phaseAndMechOptions.map((_phase, index) => (
              <Picker.Item
                key={index}
                value={index}
                className="form__picker-option"
                style={
                  selectedPhase == index
                    ? {
                        color: "#b38cff",
                      }
                    : {}
                }
              >
                {index}
              </Picker.Item>
            ))}
          </Picker.Column>
        </Picker>

        <Picker
          value={selectedMech}
          onChange={handleMechChange}
          wheelMode="natural"
          height={90}
          itemHeight={30}
          className="form__picker"
        >
          <Picker.Column key="mech" name="mech">
            {phaseAndMechOptions[selectedPhase].map((mech) => (
              <Picker.Item
                key={mech}
                value={mech}
                className="form__picker-option"
                style={
                  selectedMech == mech
                    ? {
                        color: "#b38cff",
                      }
                    : {}
                }
              >
                {mech}
              </Picker.Item>
            ))}
          </Picker.Column>
        </Picker>
      </div>
      {/* 
      <select className="form__select" name="phase" id="phase">
        <option value="1" className="form__option">
          1
        </option>
        <option value="2" className="form__option">
          2
        </option>
        <option value="3" className="form__option">
          3
        </option>
        <option value="4" className="form__option">
          4
        </option>
        <option value="5" className="form__option">
          5
        </option>
        <option value="6" className="form__option">
          6
        </option>
        <option value="7" className="form__option">
          7
        </option>
      </select>

      <label className="form__label" htmlFor="mech">
        Mechanic
      </label>
      <select className="form__select" name="mech" id="mech">
        <option value="A" className="form__option">
          A
        </option>
        <option value="B" className="form__option">
          B
        </option>
        <option value="C" className="form__option">
          C
        </option>
      </select> */}

      <label className="form__label" htmlFor="cause">
        Cause of Wipe
      </label>
      <input
        className="form__input form__input--text"
        type="text"
        name="cause"
        id="cause"
      />

      {rosterArray.length ? (
        <fieldset className="form__fieldset">
          <legend className="form__label">Players Involved</legend>
          {rosterArray.map((player) => {
            return (
              <label className="form__label" htmlFor={player}>
                <input
                  className="form__checkbox"
                  type="checkbox"
                  name={player}
                  id={player}
                />
                {player}
              </label>
            );
          })}
        </fieldset>
      ) : (
        "Loading..."
      )}

      <button type="submit" className="form__button">
        Save
      </button>
    </form>
  );
};

export default NewPullForm;
