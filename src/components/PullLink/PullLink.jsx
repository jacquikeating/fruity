import { React, useState } from "react";
import "./PullLink.scss";

const PullLink = ({ logLink, clipLink, editMode, handleLinkChange }) => {
  const [showModal, setShowModal] = useState(false);

  function toggleLinkModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      {!editMode ? (
        ""
      ) : (
        <button className="pull__add-link-btn" onClick={toggleLinkModal}>
          +
        </button>
      )}

      {clipLink ? (
        <a
          className="pull__link"
          href={clipLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://i.imgur.com/HRxy3mm.png" className="pull__icon" />
        </a>
      ) : (
        ""
      )}
      {logLink ? (
        <a
          className="pull__link"
          href={logLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://i.imgur.com/WUA83tW.png" className="pull__icon" />
        </a>
      ) : (
        ""
      )}

      {showModal ? <EditLinkModal /> : ""}
    </div>
  );
};

export default PullLink;
