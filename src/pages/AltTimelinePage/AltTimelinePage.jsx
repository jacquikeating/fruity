import { React, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import {
  m5sTimeline,
  m6sTimeline,
  m7sTimeline,
  m8sTimeline,
} from "../../utils/fight-timelines.js";
import "./AltTimelinePage.scss";

const AltTimelinePage = () => {
  const [displayIcons, setDisplayIcons] = useState(true);
  const [majorCDsOnly, setMajorCDsOnly] = useState(false);

  function toggleIcons() {
    if (displayIcons) {
      setDisplayIcons(false);
    } else {
      setDisplayIcons(true);
    }
  }

  function toggleMajorCDs() {
    if (majorCDsOnly) {
      setMajorCDsOnly(false);
    } else {
      setMajorCDsOnly(true);
    }
  }

  const stateVariables = [displayIcons, majorCDsOnly];

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

      <ToggleSwitch
        stateToToggle={displayIcons}
        toggleFunction={toggleIcons}
        labelText={"Action icons"}
      />
      <ToggleSwitch
        stateToToggle={majorCDsOnly}
        toggleFunction={toggleMajorCDs}
        labelText={"Show major CDs only"}
      />
      <Accordion
        accordionItemsData={accordionItemsData}
        context={"timelines"}
        pageState={stateVariables}
      />
    </main>
  );
};

export default AltTimelinePage;
