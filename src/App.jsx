import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddDataPage from "./pages/AddDataPage/AddDataPage";
import InfoPage from "./pages/InfoPage/InfoPage";
import OverviewPage from "./pages/OverviewPage/OverviewPage";
import ReportPage from "./pages/ReportPage/ReportPage";
import "./styles/index.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/report/:sessionID" element={<ReportPage />} />
          <Route path="/add-data" element={<AddDataPage />} />
          <Route path="/about" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
