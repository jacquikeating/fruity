import { BrowserRouter, Routes, Route } from "react-router-dom";
import useGetSessions from "./hooks/use-get-sessions";

import Header from "./components/Header/Header";
import AddDataPage from "./pages/AddDataPage/AddDataPage";
import InfoPage from "./pages/InfoPage/InfoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MechsPage from "./pages/MechsPage/MechsPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OverviewPage from "./pages/OverviewPage/OverviewPage";
import ReportPage from "./pages/ReportPage/ReportPage";
import TimelinePage from "./pages/TimelinePage/TimelinePage";
import AltTimelinePage from "./pages/AltTimelinePage/AltTimelinePage";

import "./styles/index.scss";

function App() {
  const { sessionsData, isPending } = useGetSessions();

  return (
    <>
      {!isPending ? (
        <BrowserRouter>
          <Header latestSession={sessionsData.length} />
          <Routes>
            <Route
              path="/"
              element={<OverviewPage sessions={[...sessionsData].reverse()} />}
            />
            <Route
              path="/report/:sessionID"
              element={<ReportPage sessions={sessionsData} />}
            />
            <Route path="/add-data" element={<AddDataPage />} />
            <Route path="/about" element={<InfoPage />} />
            <Route path="/prog" element={<MechsPage />} />
            <Route path="/clips" element={<NotesPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/alt-timeline" element={<AltTimelinePage />} />
            <Route path="/account" element={<LoginPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
