import { React, useState, useEffect } from "react";
import axios from "axios";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import SessionsList from "../../components/SessionsList/SessionsList";
import "./OverviewPage.scss";

const API_URL = import.meta.env.VITE_API_URL;

const OverviewPage = () => {
  const [sessionsArray, setSessionsArray] = useState([]);
  const [pullsArray, setPullsArray] = useState([]);

  useEffect(() => {
    async function getSessionsData() {
      try {
        let result = await axios.get(`${API_URL}/sessions`);
        let data = result.data;
        const typeOfRoster = typeof data[0].roster;
        if (typeOfRoster === "string") {
          data.forEach((session) => {
            session.roster = JSON.parse(session.roster.split);
            session.twitch_links = JSON.parse(session.twitch_links);
          });
        }
        setSessionsArray(data.reverse());
      } catch (error) {
        console.error(error);
      }
    }

    async function getPullsData() {
      try {
        let result = await axios.get(`${API_URL}/pulls`);
        let data = result.data;
        setPullsArray(data);
      } catch (error) {
        console.error(error);
      }
    }

    getSessionsData();
    getPullsData();
  }, []);

  return (
    <main className="overview-page">
      <h1 className="overview-page__title">Overview</h1>
      <section className="overview-page__section">
        {sessionsArray.length && pullsArray.length ? (
          <div className="overview-page__stats">
            <p className="overview-page__info">
              Total sessions: {sessionsArray.length}
            </p>
            <p className="overview-page__info">
              Total pulls: {pullsArray.length}
            </p>
            <p className="overview-page__info">
              {`Current prog point:
              Phase ${sessionsArray[0]?.prog_phase}, 
              ${sessionsArray[0]?.prog_mech}`}
            </p>
            <PhaseBreakdownTable
              sessionData={sessionsArray[0]}
              pullsArray={pullsArray}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>

      <section className="overview-page__section">
        {sessionsArray.length ? (
          <SessionsList sessionsArray={sessionsArray} />
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
};

export default OverviewPage;
