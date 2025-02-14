import { React, useRef } from "react";
import "./MechClipsCollection.scss";

const MechClipsCollection = ({ mech, active }) => {
  const contentEl = useRef();

  return (
    <div
      ref={contentEl}
      style={
        active ? { height: contentEl.current.scrollHeight } : { height: "0px" }
      }
      className={active ? "mech-clips mech-clips--active" : "mech-clips"}
    >
      {mech.content.map((subsection, index) => {
        return (
          <div className="mech-clips__subsection" key={index}>
            <h3
              className={`${
                index === 0
                  ? "mech-clips__subheading mech-clips__subheading--first"
                  : "mech-clips__subheading"
              }`}
            >
              {subsection.subsection}
            </h3>
            {subsection.clips.map((clip, index) => {
              return (
                <div className="clip" key={index}>
                  <a href={clip.link} target="_blank" className="clip__link">
                    <img src="https://i.imgur.com/NzRUemQ.png" />
                    {clip.title}
                  </a>
                  <p className="clip__cleanliness">{clip.cleanliness}</p>
                  <ul className="clip__notes-list">
                    {clip.notes.map((note, index) => {
                      return (
                        <li className="clip__note" key={index}>
                          {note}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MechClipsCollection;
