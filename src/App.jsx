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

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Test />
            <Header latestSession={sessionsState.length} />
            <Routes>
              <Route
                path="/"
                element={
                  <OverviewPage sessions={[...sessionsState].reverse()} />
                }
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
        </QueryClientProvider>
      ) : (
        ""
      )}
    </>
  );
}

function Test() {
  const API_URL = import.meta.env.VITE_API_URL;

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["x"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/sessions`);
      const testData = await response.json();
      console.log(testData);
      return testData;
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
}

export default App;
