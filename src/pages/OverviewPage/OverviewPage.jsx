import { useAxiosGet } from "../../hooks/useFetch.js";
import OverviewStats from "../../components/OverviewStats/OverviewStats.jsx";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import SessionsList from "../../components/SessionsList/SessionsList";
import "./OverviewPage.scss";

const OverviewPage = ({ sessions }) => {
  const { data: pulls, error, loading } = useAxiosGet(`pulls`);

  {
    if (sessions.length > 0) {
      return (
        <main className="overview-page">
          <h1 className="overview-page__title">Overview</h1>
          <section className="overview-page__section">
            {!loading ? (
              <>
                <OverviewStats sessions={sessions} pulls={pulls} />
                <PhaseBreakdownTable lastSession={sessions[0]} pulls={pulls} />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </section>

          <section className="overview-page__section">
            {!loading ? (
              <SessionsList sessions={sessions} />
            ) : (
              <p>Loading...</p>
            )}
          </section>
        </main>
      );
    }
  }
};

export default OverviewPage;
