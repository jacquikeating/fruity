import { React, useState, useEffect } from "react";
import axios from "axios";
import Session from "../Session/Session";
import "./SessionsList.scss";

const SessionsList = () => {
  const [sessionsArray, setSessionsArray] = useState([]);

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

    getSessionsData();
  }, []);

  return (
    <ul className="sessions-list">
      {sessionsArray.map((session) => {
        return <Session key={session.id} sessionData={session} />;
      })}
    </ul>
  );
};

export default SessionsList;
