import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAxiosGet, useAxios } from "./hooks/useFetch";
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
  // const { data: sessions, error, loading } = useAxiosGet(`sessions`);
  // useEffect(() => {
  //   if (sessions.length > 0) {
  //     setSessionsState(sessions);
  //   }
  // }, [sessions]);

  const [sessionsState, setSessionsState] = useState(null);

  const { response } = useAxios(
    {
      method: "get",
      url: "/sessions",
    },
    true
  );

  useEffect(() => {
    if (response !== null) {
      // console.log(response);
      setSessionsState(response);
    }
  }, [response]);

  return (
    <>
      {sessionsState ? (
        <BrowserRouter>
          <Header latestSession={sessionsState.length} />
          <Routes>
            <Route
              path="/"
              element={<OverviewPage sessions={[...sessionsState].reverse()} />}
            />
            <Route
              path="/report/:sessionID"
              element={<ReportPage sessions={sessionsState} />}
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
        ""
      )}
    </>
  );
}

export default App;
