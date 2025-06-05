import React from "react";
import Accordion from "../../components/Accordion/Accordion";
// import Timeline from "../../components/Timeline/Timeline.jsx";
import { m5sTimeline, m6sTimeline } from "../../utils/fight-timelines.js";
import "./AltTimelinePage.scss";

const AltTimelinePage = () => {
  const accordionItemsData = [
    {
      accordionItemTitle: "(M5S) Dancing Green",
      accordionItemThumbnail: m5sTimeline.fightImage,
      content: m5sTimeline,
    },
    {
      accordionItemTitle: "(M6S) Sugar Riot",
      accordionItemThumbnail: m6sTimeline.fightImage,
      content: m6sTimeline,
    },
  ];

  return (
    <main>
      <h1>Timelines</h1>
      <Accordion
        accordionItemsData={accordionItemsData}
        context={"timelines"}
      />

      {/* <Timeline fightTimeline={m5sTimeline} /> */}
    </main>
  );
};

export default AltTimelinePage;
