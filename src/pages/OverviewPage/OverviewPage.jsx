import { React, useState, useEffect } from "react";
import axios from "axios";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import SessionsList from "../../components/SessionsList/SessionsList";
import "./OverviewPage.scss";
import { useAxiosAll } from "../../hooks/useFetch.js";

const API_URL = import.meta.env.VITE_API_URL;

const OverviewPage = () => {
  const { sessions, pulls, error, loading } = useAxiosAll(
    `${API_URL}/sessions`,
    `${API_URL}/pulls`
  );

  function getPullsAtProgPoint() {
    return pulls.filter((pull) => pull.mech == sessions[0].prog_mech).length;
  }

  function getClearsNum() {
    return pulls.filter((pull) => pull.mech == "Clear").length;
  }

  return (
    <main className="overview-page">
      <h1 className="overview-page__title">Overview</h1>
      <section className="overview-page__section">
        {!loading ? (
          <div className="overview-page__stats">
            <p className="overview-page__info">
              Total sessions: {sessions.length}
            </p>
            <p className="overview-page__info">Total pulls: {pulls.length}</p>
            {sessions[0].prog_mech === "Reclears" ? (
              <>
                <p className="overview-page__info">
                  Total clears: {getClearsNum()}
                </p>
              </>
            ) : (
              <>
                <p className="overview-page__info">
                  {`Current prog point:
                    Phase ${sessions[0]?.prog_phase}, 
                    ${sessions[0]?.prog_mech}`}
                </p>
                <p className="overview-page__info">
                  Pulls at prog point: {getPullsAtProgPoint()}
                </p>
              </>
            )}

            <PhaseBreakdownTable sessionData={sessions[0]} pullsArray={pulls} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>

      <section className="overview-page__section">
        {!loading ? (
          <SessionsList sessionsArray={sessions} />
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
};

export default OverviewPage;
