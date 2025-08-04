import { useState, useEffect } from "react";
import axios from "axios";

// Working! Original version
export default function useFetch(url) {
  //   console.log(url);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        // console.log(data);
      });
  }, [url]);

  return { loading, data };
}

// Axios version
export default function useFetch2(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        // console.log(response.data);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}

// example: https://wis-fruity-1ed9bfddc2af.herokuapp.com/sessions/44

// async function getSessionData() {
//   try {
//     let result = await axios.get(`${API_URL}/sessions/${sessionID}`);
//     session = result.data[0];
//     setSessionData(session);
//     setDate(session.date);
//     setProgPhase(session.prog_phase);
//     setProgMech(session.prog_mech);
//     setFFLogsLink(session.fflogs_link);
//     setTwitchLinks(session.twitch_links);
//     setTwitchLinksArray(session.twitch_links.split(", "));
//     setGoal(session.goal);
//     setRoster(session.roster);
//     setNotes(session.notes);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     getPullsData(session.fflogs_link);
//   }
// }

// async function getPullsData(logLink) {
//       try {
//         let result = await axios.get(`${API_URL}/sessions/${sessionID}/pulls`);
//         pulls = result.data;
//         pulls.sort((a, b) => a.pull_num_today - b.pull_num_today);
//       } catch (error) {
//         console.error(error);
//       } finally {

//         setPullsArray(pulls);
//         setPullsToDisplay(pulls);
//       }
//     }

//     getSessionData();

//     const handleWindowResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleWindowResize);
//     return () => window.removeEventListener("resize"), handleWindowResize;
//   }, [sessionID]);
