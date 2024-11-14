import React from "react";
import { numSuffix } from "../../utils/shared-functions";
import "./Session.scss";

const Session = ({ sessionData }) => {
  const { id, date, roster, prog_mech, prog_phase, fflogs_link, twitch_link } =
    sessionData;
  console.log(sessionData);

  return <li className="session"></li>;
};

export default Session;
