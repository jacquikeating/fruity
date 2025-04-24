import React from "react";
import Timeline from "../../components/Timeline/Timeline.jsx";
import { m5sTimeline } from "../../utils/fight-timelines.js";
import "./AltTimelinePage.scss";

const AltTimelinePage = () => {
  return (
    <main>
      <Timeline fightTimeline={m5sTimeline} />
    </main>
  );
};

export default AltTimelinePage;
