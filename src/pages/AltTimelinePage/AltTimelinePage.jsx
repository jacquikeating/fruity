import React from "react";
import Accordion from "../../components/Accordion/Accordion";
// import Timeline from "../../components/Timeline/Timeline.jsx";
import {
  m5sTimeline,
  m6sTimeline,
  m7sTimeline,
  m8sTimeline,
} from "../../utils/fight-timelines.js";
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
    {
      accordionItemTitle: "(M7S) Brute Abominator",
      accordionItemThumbnail: m7sTimeline.fightImage,
      content: m7sTimeline,
    },
    {
      accordionItemTitle: "(M8S) Howling Blade",
      accordionItemThumbnail: m8sTimeline.fightImage,
      content: m8sTimeline,
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
