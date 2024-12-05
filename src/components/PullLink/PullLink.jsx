import { React, useState } from "react";
import EditLinkModal from "../EditLinkModal/EditLinkModal";
import "./PullLink.scss";

const PullLink = ({ logLink, clipLink, editMode, handleLinkChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [newLogLink, setNewLogLink] = useState(logLink);
  const [newClipLink, setNewClipLink] = useState(clipLink);

  function toggleLinkModal() {
    setShowModal(!showModal);

    if (logLink != newLogLink || clipLink != newClipLink) {
      handleLinkChange(newLogLink, newClipLink);
    }
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

      {logLink.length ? (
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

      {editMode && showModal ? (
        <EditLinkModal
          logLink={logLink}
          clipLink={clipLink}
          handleLinkChange={handleLinkChange}
          setNewLogLink={setNewLogLink}
          setNewClipLink={setNewClipLink}
        />
      ) : (
        ""
      )}
    </td>
  );
};

export default PullLink;
