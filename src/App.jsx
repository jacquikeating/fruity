import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
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
import "./styles/index.scss";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [latestSession, setLatestSession] = useState(0);

  useEffect(() => {
    async function getSessionsCount() {
      try {
        let result = await axios.get(`${API_URL}/sessions`);
        setLatestSession(result.data.length);
      } catch (error) {
        console.error(error);
      }
    }

    getSessionsCount();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header latestSession={latestSession} />
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/report/:sessionID" element={<ReportPage />} />
          <Route path="/add-data" element={<AddDataPage />} />
          <Route path="/about" element={<InfoPage />} />
          <Route path="/mechanics" element={<MechsPage />} />
          <Route path="/clips" element={<NotesPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/account" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
