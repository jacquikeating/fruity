import React from "react";
import "./SessionsList.scss";

const SessionsList = ({ sessionsArray }) => {
  return (
    <ul className="sessions-list">
      {sessionsArray.map((session) => {
        // return <Session key={session.id} sessionData={session} />;
      })}
    </ul>
  );
};

export default SessionsList;
