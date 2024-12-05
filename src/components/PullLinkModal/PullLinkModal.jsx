import React from "react";
import "./PullLinkModal.scss";

const PullLinkModal = () => {
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

export default PullLinkModal;
