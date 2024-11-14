import { React, useState, useEffect } from "react";
import axios from "axios";
import SessionsList from "../../components/SessionsList/SessionsList";
import "./OverviewPage.scss";

const OverviewPage = () => {
  const [sessionsArray, setSessionsArray] = useState([]);
  const [pullsArray, setPullsArray] = useState([]);

  useEffect(() => {
    async function getSessionsData() {
      try {
        let result = await axios.get(`http://localhost:5050/sessions/`);
        let data = result.data;
        setSessionsArray(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function getPullsData() {
      try {
        let result = await axios.get(`http://localhost:5050/pulls`);
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
      <SessionsList sessionsArray={sessionsArray} />
    </main>
  );
};

export default OverviewPage;
