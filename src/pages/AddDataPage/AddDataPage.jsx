import { React, useState } from "react";
import NewPullForm from "../../components/NewPullForm/NewPullForm";
import PullsTable from "../../components/PullsTable/PullsTable";
import "./AddDataPage.scss";

const AddDataPage = () => {
  const [pullsArray, setPullsArray] = useState([]);

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
        <PullsTable pullsArray={pullsArray} />
      </section>
    </main>
  );
};

export default AddDataPage;
