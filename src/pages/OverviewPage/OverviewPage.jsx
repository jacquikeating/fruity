import useGetPulls from "../../hooks/use-get-pulls";
import OverviewStats from "../../components/OverviewStats/OverviewStats.jsx";
import PhaseBreakdownTable from "../../components/PhaseBreakdownTable/PhaseBreakdownTable";
import SessionsList from "../../components/SessionsList/SessionsList";
import "./OverviewPage.scss";

const OverviewPage = ({ sessions }) => {
  const { pullsData, isPending } = useGetPulls();

  return (
    <main className="overview-page">
      <h1 className="overview-page__title">Overview</h1>

      {!isPending ? (
        <>
          <section className="overview-page__section">
            <OverviewStats sessions={sessions} pulls={pullsData} />
            <PhaseBreakdownTable
              progPhase={sessions[0].prog_phase}
              pulls={pullsData}
            />
          </section>

          <section className="overview-page__section">
            <SessionsList sessions={sessions} />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default OverviewPage;
