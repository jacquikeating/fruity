import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDataPage from "./pages/AddDataPage/AddDataPage";
import OverviewPage from "./pages/OverviewPage/OverviewPage";
import ReportPage from "./pages/ReportPage/ReportPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/report/:reportNum" element={<ReportPage />} />
          <Route path="/add-data" element={<AddDataPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
