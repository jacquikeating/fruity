import React from "react";
import { session1 } from "../../utils/old-data";
import {
  createReadableDate,
  findGoldStars,
  findStrugglePhase,
  findStruggleMech,
} from "../../utils/shared-functions.js";
import axios from "axios";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import Pull from "../../components/Pull/Pull.jsx";
import "./ReportPage.scss";

const ReportPage = () => {
  const [sessionData, setSessionData] = useState(null);
  const { sessionID } = useParams();

  useEffect(() => {
    async function getSessionData() {
      try {
        let result = await axios.get(`http://localhost:5050/sessions`);
        let data = result.data;
        setSessionData(data[0]);
        createReadableDate(data[0].date);
      } catch (error) {
        console.error(error);
      }
    }
    getSessionData();
  }, []);

  return (
    <main className="report">
      <section className="report__section">
        <h1 className="report__heading">
          Report: <span className="report__date">{session1.sessionDate}</span>
        </h1>
        <p className="report__subtitle">
          Session {session1.sessionNum}
          <span className="report__divider"> • </span>
          Phase {session1.progPoint} Prog
          <span className="report__divider"> • </span>
          <a className="report__link" href={session1.fflogsLink}>
            Logs
          </a>
          <span className="report__divider"> • </span>
          <a className="report__link" href={session1.twitchLink}>
            VoD
          </a>
        </p>

        <p className="report__extra-info">
          <span className="report__extra-info--bold">Most Wipes:</span> P
          {findStrugglePhase(session1.pulls)}
          <span className="report__divider"> • </span>
          {findStruggleMech(session1.pulls)}
        </p>
        <p className="report__extra-info">
          <span className="report__extra-info--bold">Gold Stars:</span>{" "}
          {findGoldStars(session1.pulls, session1.players)}
        </p>
      </section>
      ) : ( "" )}
      <section className="report__section">
        <PhaseBreakdownTable sessionData={session1} />
      </section>
      <section className="report__section">
        <h2 className="report__subheading">Pulls ({session1.pulls.length})</h2>
        <ul className="report__pulls-list">
          {session1.pulls.map((pull) => {
            return <Pull key={pull.pullNumTotal} pullData={pull} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default ReportPage;
