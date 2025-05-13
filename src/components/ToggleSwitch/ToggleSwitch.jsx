import { React, useState } from "react";
import Switch from "react-switch";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="example">
      <label>
        <span>Switch with default style</span>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
      </label>
      <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p>
    </div>
  );
};

export default ToggleSwitch;
