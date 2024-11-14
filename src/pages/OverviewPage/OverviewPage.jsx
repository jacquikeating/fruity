import React from "react";
import SessionsList from "../../components/SessionsList/SessionsList";
import "./OverviewPage.scss";

const OverviewPage = () => {
  return (
    <main className="overview-page">
      <h1 className="overview-page__title">Overview</h1>
      <SessionsList />
    </main>
  );
};

export default OverviewPage;
