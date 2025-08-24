import PhaseBreakdownTable from "../PhaseBreakdownTable/PhaseBreakdownTable";
import {
  createReadableDate,
  findGoldStars,
  findStrugglePhase,
  findStruggleMech,
  checkIfEmptyLink,
} from "../../utils/shared-functions.js";
import { useState, useContext } from "react";
import { SessionContext } from "../../pages/ReportPage/ReportPage.jsx";

const SessionInfoEdit = () => {
  const { sessionCtx } = useContext(SessionContext);
  const {
    session,
    setSession,
    editSession,
    pullsArray,
    sessionID,
    editMode,
    showEdit,
  } = sessionCtx;

  const [twitchLinksArray, setTwitchLinksArray] = useState(
    session.twitch_links.split(", ")
  );

  return <p>test</p>;
};

export default SessionInfoEdit;
