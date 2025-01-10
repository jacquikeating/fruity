import React from "react";
import "./NotesPage.scss";

const NotesPage = () => {
  return (
    <main className="notes">
      <h1 className="notes__heading">Notes</h1>
      <section className="notes__section">
        <h2 className="notes__subheading">Darklit Dragonsong</h2>
        <p className="notes__body-text">
          When I am studying, I find it helpful not only to watch guide videos
          where everything is perfectly executed, but to also see clips where
          something goes wrong. So here's a collection of all the different ways
          you can screw up Darklit Dragonsong!
        </p>
        <p className="notes__body-text">
          The point here is not to shame random strangers (who are probably more
          skilled than me) — it's to learn common pitfalls to look out for in my
          own prog.
        </p>
      </section>
    </main>
  );
};

export default NotesPage;
