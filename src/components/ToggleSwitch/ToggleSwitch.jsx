import { React, useState } from "react";
import Switch from "react-switch";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ stateToToggle, toggleFunction, labelText }) => {
  return (
    <div>
      <label>
        <span>{labelText}</span>
        <Switch checked={stateToToggle} onChange={toggleFunction} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
