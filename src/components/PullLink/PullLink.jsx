import { React, useState } from "react";
import EditLinkModal from "../EditLinkModal/EditLinkModal";
import "./PullLink.scss";

const PullLink = ({ logLink, clipLink, editMode, handleLinkModalData }) => {
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

      {logLink.length > 0 ? (
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

      {clipLink.length > 0 ? (
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
          handleLinkModalData={handleLinkModalData}
        />
      ) : (
        ""
      )}
    </td>
  );
};

export default PullLink;
