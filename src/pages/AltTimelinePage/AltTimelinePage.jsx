import React from "react";
import Timeline from "../../components/Timeline/Timeline.jsx";
import "./AltTimelinePage.scss";

const AltTimelinePage = () => {
  fightTimeline = [];

  return <Timeline fightTimeline={fightTimeline} />;
};

export default AltTimelinePage;
