import React, { Component } from "react";
import Switch from "react-switch";
import "./ToggleSwitch.scss";

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
}
function handleChange(checked) {
  this.setState({ checked });
}
const ToggleSwitch = () => {
  return (
    <label>
      <span>Switch with default style</span>
      <Switch onChange={this.handleChange} checked={this.state.checked} />
    </label>
  );
};

export default ToggleSwitch;
