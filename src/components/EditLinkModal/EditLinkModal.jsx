import React from "react";
import "./EditLinkModal.scss";

const EditLinkModal = () => {
  return (
    <div>
      <label htmlFor="link-input-twitch">
        <img src="https://i.imgur.com/NzRUemQ.png" alt="Twitch" />
      </label>
      <input id="link-input-twitch" type="text"></input>
      <label htmlFor="link-input-fflogs">
        <img src="https://i.imgur.com/NzRUemQ.png" alt="FFLogs" />
      </label>
      <input id="link-input-fflogs" type="text" />
    </div>
  );
};

export default EditLinkModal;
