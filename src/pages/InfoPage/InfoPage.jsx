import React from "react";
import axios from "axios";
import "./InfoPage.scss";

const API_URL = import.meta.env.VITE_API_URL;

const InfoPage = () => {
  const pullsArray = [
    {
      session_id: 12,
      phase: 1,
      mech: "Utopian Sky",
      prog_point_reached: "old",
      cause: "Your other 2/4",
      players_responsible: "Touche",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 3,
      mech: "Apocalypse",
      prog_point_reached: "target",
      cause: "Ruv UR late RW placement; Apoc??? ",
      players_responsible: "Ruv",
      log_link: "",
      clip_link: "",
      notes:
        "Review VOD. We recovered from the UR deaths but IDK what happened on Apoc",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 1,
      mech: "Towers",
      prog_point_reached: "old",
      cause: "Ella walked out of tower",
      players_responsible: "Ella",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 3,
      mech: "Apocalypse",
      prog_point_reached: "target",
      cause: "Char did not swap",
      players_responsible: "Char",
      log_link: "",
      clip_link: "",
      notes:
        "Double swap. Both tanks had 38s, and both RDPS had no debuff. Also, some shit happened on UR, check that. Quil hit by laser to her right",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Diamond Dust",
      prog_point_reached: "cleanup",
      cause: "Ella is seeing shit",
      players_responsible: "Ella",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 1,
      mech: "Fall of Faith",
      prog_point_reached: "old",
      cause: "Touche late to fire stack",
      players_responsible: "Touche",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Enrage",
      prog_point_reached: "cleanup",
      cause: "Ella star lines; Hyp + Char ice slide",
      players_responsible: "Ella, Hypatia, Char",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Enrage",
      prog_point_reached: "cleanup",
      cause: "Char's star was too far out -> 2 DDs in G2",
      players_responsible: "Char",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Diamond Dust",
      prog_point_reached: "cleanup",
      cause: "Ruv did cone stuff but he was star",
      players_responsible: "Ruv",
      log_link: "",
      clip_link: "",
      notes: "",
      index: 8,
    },
    {
      session_id: 12,
      phase: 3,
      mech: "Ultimate Relativity",
      prog_point_reached: "target",
      cause: "Sophia ran out before stack",
      players_responsible: "Sophia",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Light Rampant",
      prog_point_reached: "cleanup",
      cause: "Touche (puddle) late to stack",
      players_responsible: "Touche",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 3,
      mech: "Apocalypse",
      prog_point_reached: "target",
      cause: "Sophia and Quil clipped each other on UR, Apoc ???",
      players_responsible: "Touche, Sophia, Hypatia",
      log_link: "",
      clip_link: "",
      notes: "DDs from Apocs. Review 10:35",
      index: 11,
    },
    {
      session_id: 12,
      phase: 3,
      mech: "Ultimate Relativity",
      prog_point_reached: "target",
      cause: "South tower baited wrong",
      players_responsible: "Quil",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Light Rampant",
      prog_point_reached: "cleanup",
      cause: "Hyp lag; Quil hugged Ruv while trying to LB",
      players_responsible: "Quil, Hypatia",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Light Rampant",
      prog_point_reached: "cleanup",
      cause: "Someone didn't make it into tower (Touche?)",
      players_responsible: "",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 3,
      mech: "Ultimate Relativity",
      prog_point_reached: "target",
      cause: "Char (SE) hit by S laser (Hypatia)",
      players_responsible: "",
      log_link: "",
      clip_link: "",
      notes: "11:24ish",
      index: 15,
    },
    {
      session_id: 12,
      phase: 1,
      mech: "Fall of Faith",
      prog_point_reached: "old",
      cause: "Quil DD on US; Ella/Laveera too close on lightning baits",
      players_responsible: "Ella, Quil",
      log_link: "",
      clip_link: "",
      notes: "I tihnk I was too close -- check 11:29",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Enrage",
      prog_point_reached: "cleanup",
      cause: "DD: Touche puddle, Char & Soph ice slide",
      players_responsible: "Touche, Sophia, Char",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 2,
      mech: "Light Rampant",
      prog_point_reached: "cleanup",
      cause: "5th puddles each hit a second person (Soph + Hyp)",
      players_responsible: "",
      log_link: "",
      clip_link: "",
      notes:
        "I am not sure if the puddle angle could be improved or what. wtb more cameras",
      index: 18,
    },
    {
      session_id: 12,
      phase: 3,
      mech: "Ultimate Relativity",
      prog_point_reached: "target",
      cause: "Ella bad bait",
      players_responsible: "Ella",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
    {
      session_id: 12,
      phase: 3,
      mech: "Apocalypse",
      prog_point_reached: "target",
      cause: "Touche gaze on UR; Sophia wrong side + Quil apocs ",
      players_responsible: "Touche, Sophia, Quil",
      log_link: "",
      clip_link: "",
      notes: "",
      indexToInsert: 0,
    },
  ];

  pullsArray.map(async (pull, index) => {
    pull.pull_num_today = index + 1;
    delete pull.index;
    delete pull.indexToInsert;
    try {
      await axios.post(`${API_URL}/pulls/`, pull);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <main className="info-page">
      <h1 className="info-page__title">About</h1>
      <p className="info-page__text info-page__text--intro">
        Hi, I'm Ella, amateur full-stack developer and worst player in my DSR
        static — and I've got the data to back that up. I struggled hard during
        DSR prog, which prompted me to start writing down my mistakes and the
        causes of our wipes. I realized that since I was calling out myself more
        than anyone else, I could share my google doc as a resource for everyone
        to benefit from. FRUity is an evolution of that idea.
      </p>
      <p>This project is...</p>

      <h2 className="info-page__subheading">⚹ Non-toxic</h2>
      <p className="info-page__text">
        Or, well, as non-toxic as a giant list of our fuckups can be. The goal
        is not to shame people, but to give us a concrete picture of areas we
        can improve on. We're going in with the expectation that, collectively,
        we'll make hundreds of mistakes before we get everything right.
      </p>

      <h2 className="info-page__subheading">⚹ Subjective and imperfect</h2>
      <p className="info-page__text">
        All data comes from my personal observations, so it's prone to human
        error. Plus, some things are up to interpretation -- for instance, if
        two people kill each other with spread markers, is one person at fault,
        or are both equally responsible?
      </p>

      <h2 className="info-page__subheading">⚹ Collaborative</h2>
      <p className="info-page__text">
        We are a team of eight, and one person cannot be the single source of
        truth. If I get something wrong or if you disagree with my
        interpretations, I want you to let me know! Coming soon, you'll even be
        able to edit it yourself.
      </p>

      <h2 className="info-page__subheading">⚹ Continually growing</h2>
      <p className="info-page__text">
        This will probably look a little bit different each time you check in.
        I've got an endless list of tweaks, UI improvements, and new features to
        be added. Please look forward to it.
      </p>
    </main>
  );
};

export default InfoPage;
