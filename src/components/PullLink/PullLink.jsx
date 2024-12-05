import { React, useState } from "react";
import EditLinkModal from "../EditLinkModal/EditLinkModal";
import "./PullLink.scss";

const PullLink = ({ logLink, clipLink, editMode, handleLinkChange }) => {
  const [showModal, setShowModal] = useState(false);

  function toggleLinkModal() {
    setShowModal(!showModal);
  }

  return (
    <td className="pull-link__cell">
      {!editMode ? (
        ""
      ) : (
        <button className="pull-link__add-link-btn" onClick={toggleLinkModal}>
          {!showModal ? "+" : "x"}
        </button>
      )}

      {clipLink ? (
        <a
          className="pull-link__link"
          href={clipLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.imgur.com/HRxy3mm.png"
            className="pull-link__icon"
          />
        </a>
      ) : (
        ""
      )}
      {logLink ? (
        <a
          className="pull-link__link"
          href={logLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.imgur.com/WUA83tW.png"
            className="pull-link__icon"
          />
        </a>
      ) : (
        ""
      )}

      {editMode && showModal ? (
        <EditLinkModal
          logLink={logLink}
          clipLink={clipLink}
          handleLinkChange={handleLinkChange}
        />
      ) : (
        ""
      )}
    </td>
  );
};

export default PullLink;
