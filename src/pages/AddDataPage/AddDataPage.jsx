import React from "react";
import NewPullForm from "../../components/NewPullForm/NewPullForm";
import "./AddDataPage.scss";

const AddDataPage = () => {
  return (
    <main className="add-data">
      <h1 className="add-data__heading">Add Data</h1>
      <section className="add-data__section">
        <h2 className="add-data__section-heading">New Session</h2>
      </section>
      <section className="add-data__section">
        <h2 className="add-data__section-heading">Session Info</h2>
      </section>
      <section className="add-data__section">
        <h2 className="add-data__section-heading">Add a Pull</h2>
        <NewPullForm />
      </section>
      <section className="add-data__section">
        <h2 className="add-data__section-heading">Pulls</h2>
      </section>
    </main>
  );
};

export default AddDataPage;
