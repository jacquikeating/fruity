import { React, useState } from "react";
import NewSessionForm from "../../components/NewSessionForm/NewSessionForm";
import NewPullForm from "../../components/NewPullForm/NewPullForm";
import PullsTable from "../../components/PullsTable/PullsTable";
import "./AddDataPage.scss";

const AddDataPage = () => {
  const [pullsArray, setPullsArray] = useState([]);
  const [sessionInProgress, setSessionInProgress] = useState(false);
  const [sessionData, setSessionData] = useState({});

  function handleSessionFormData(data) {
    console.log(data);
    setSessionData(data);
  }

  return (
    <main className="add-data">
      <h1 className="add-data__heading">Add Data</h1>
      {!sessionInProgress ? (
        <section className="add-data__section">
          <h2 className="add-data__section-heading">New Session</h2>
          <NewSessionForm handleSessionFormData={handleSessionFormData} />
        </section>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
};

export default AddDataPage;
