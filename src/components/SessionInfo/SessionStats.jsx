import {
  findGoldStars,
  findStrugglePhase,
  findStruggleMech,
} from "../../utils/shared-functions.js";
import { useContext } from "react";
import { SessionContext } from "../../pages/ReportPage/ReportPage.jsx";

const SessionStats = () => {
  const { sessionCtx } = useContext(SessionContext);
  const { session, pullsArray, sessionID } = sessionCtx;
  return (
    <>
      <p className="report__extra-info">
        <span className="report__extra-info--bold">Most Wipes: </span>
        Phase {findStrugglePhase(pullsArray)}
        <span className="report__divider"> • </span>
        {findStruggleMech(pullsArray)}
      </p>
      <p className="report__extra-info">
        <span className="report__extra-info--bold">Gold Stars: </span>
        {findGoldStars(pullsArray, session.roster)}
      </p>
      {sessionID == 14 ? (
        <p className="report__extra-info">
          <span className="report__extra-info--bold">💩 Star: </span>
          Sophia
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default SessionStats;
