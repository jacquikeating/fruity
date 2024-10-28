import React from "react";
import { session1 } from "../../utils/old-data";
import "./ReportPage.scss";

const ReportPage = () => {
  return (
    <main className="report">
      <h1 className="report__heading">Report: {session1.sessionDate}</h1>
      <p className="report__subtitle">
        Session {session1.sessionNum}
        <a className="report__link" href={session1.fflogsLink}>
          Logs
        </a>
        <a className="report__link" href={session1.twitchLink}>
          VoD
        </a>
      </p>

      <h2 className="report__subheading">Pulls ({session1.pulls.length})</h2>
      <ul className="report__pulls-list">
        {session1.pulls.map((pull) => {
          return (
            <li className="pull" key={pull.pullNumTotal}>
              <div className="pull__nums">
                <h3 className="pull__num-today">Pull {pull.pullNumToday}</h3>
                <p className="pull__num-total">{pull.pullNumTotal} Overall</p>
              </div>

              <p className="pull__info">
                Phase {pull.phase}, {pull.mech}
              </p>
              <p className="pull__info">Cause: {pull.wipeCause}</p>

              {pull.playerNames.length > 0 ? (
                <p className="pull__players">
                  Players: {pull.playerNames.join(", ")}
                </p>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ReportPage;
