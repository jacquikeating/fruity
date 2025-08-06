/* useFetch syntax that could work, but seems to have more issues than using a double-fetch hook */
const {
  data: sessions,
  loading: sessionsLoading,
  error: sessionsError,
} = useFetch2(`${API_URL}/sessions`);

const {
  data: pulls,
  loading: pullsLoading,
  error: pullsError,
} = useFetch2(`${API_URL}/pulls`);

// FFLogs API stuff from ReportPage.jsx. -----------------------------------------------------------------------------------------------------------------

// const API_KEY = import.meta.env.VITE_FFLOGS_API_KEY;

//    let ffLogs = null;

// const [ffLogsData, setFFLogsData] = useState([]);

// Original getPullsData() function. Truncated in actual file.

// async function getPullsData(logLink) {
//   try {
//     let result = await axios.get(`${API_URL}/sessions/${sessionID}/pulls`);
//     pulls = result.data;
//     pulls.sort((a, b) => a.pull_num_today - b.pull_num_today);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     // if (logLink.length > 1) {
//     //   getFFLogsData();
//     // } else {
//     setPullsArray(pulls);
//     setPullsToDisplay(pulls);
//     // }
//   }
// }

// async function getFFLogsData() {
//   const reportCode = session.fflogs_link.substring(31);

//   try {
//     let result = await axios.get(
//       `https://www.fflogs.com:443/v1/report/fights/${reportCode}?api_key=${API_KEY}`
//     );
//     ffLogs = result.data.fights;
//     setFFLogsData(ffLogs);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     if (ffLogs.length >= 1) {
//       for (let i = 0; i < pulls.length; i++) {
//         // console.log(ffLogs[i]);
//         if (ffLogs[i].combatTime) {
//           pulls[i].combatTime = convertMSToMinSec(ffLogs[i].combatTime);
//         } else {
//           pulls[i].combatTime = "?";
//         }
//         if (ffLogs[i].bossPercentage) {
//           pulls[i].bossPercentage = ffLogs[i].bossPercentage.toString();
//           // ffLogs[i].bossPercentage.toString().slice(1, 3) +
//           // "." +
//           // ffLogs[i].bossPercentage.toString().slice(1, 3) +
//           // "%";

//           // console.log(pulls[i].bossPercentage);
//         }
//       }
//     }
//     // console.log(pulls);
//     setPullsArray(pulls);
//     setPullsToDisplay(pulls);
//   }
// }

// Original Axios calls from OverviewPage. -----------------------------------------------------------------------------------------------------------------
// const [sessionsArray, setSessionsArray] = useState([]);
// const [pullsArray, setPullsArray] = useState([]);
// const [clearsNum, setClearsNum] = useState(0);

// useEffect(() => {
//   async function getSessionsData() {
//     try {
//       let result = await axios.get(`${API_URL}/sessions`);
//       let data = result.data;
//       setSessionsArray(data.reverse());
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async function getPullsData() {
//     try {
//       let result = await axios.get(`${API_URL}/pulls`);
//       let data = result.data;
//       let clearsArray = data.filter((pull) => pull.mech == "Clear");
//       setPullsArray(data);
//       setClearsNum(clearsArray.length);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   getSessionsData();
//   getPullsData();
// }, []);
