import { React } from "react";
import Switch from "react-switch";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ stateToToggle, toggleFunction, labelText }) => {
  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <span className="toggle-switch__label-text">{labelText}</span>
        <Switch
          checked={stateToToggle}
          onChange={toggleFunction}
          className="toggle-switch__switch"
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
