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
          onColor="#57AA50"
          offColor="#797977"
          height={24}
          width={50}
          handleDiameter={22}
          activeBoxShadow="0 0 2px 3px #4775D1"
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
