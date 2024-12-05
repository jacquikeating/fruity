import React from "react";
import "./EditLinkModal.scss";

const EditLinkModal = () => {
  return (
    <div className="link-modal">
      <label htmlFor="link-input-twitch" className="link-modal__label">
        <img
          src="https://i.imgur.com/NzRUemQ.png"
          alt="Twitch"
          className="link-modal__icon"
        />
      </label>
      <input
        id="link-input-twitch"
        type="text"
        className="link-modal__input"
      ></input>
      <label htmlFor="link-input-fflogs" className="link-modal__label">
        <img
          src="https://i.imgur.com/asZe3Wu.png"
          alt="FFLogs"
          className="link-modal__icon"
        />
      </label>
      <input id="link-input-fflogs" type="text" className="link-modal__input" />
    </div>
  );
};

export default EditLinkModal;
