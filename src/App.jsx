import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const getSessions = async () => {
    const response = await fetch(`${API_URL}/sessions`);
    return response.json();
  };

  const { data, isPending } = useQuery({
    queryKey: ["sessions"],
    queryFn: getSessions,
  });

  return (
    <>
      {!isPending ? (
        <BrowserRouter>
          <Header latestSession={data.length} />
          <Routes>
            <Route
              path="/"
              element={<OverviewPage sessions={[...data].reverse()} />}
            />
            <Route
              path="/report/:sessionID"
              element={<ReportPage sessions={data} />}
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
