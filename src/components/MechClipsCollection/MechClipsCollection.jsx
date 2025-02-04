import React from "react";
import "./MechClipsCollection.scss";

const MechClipsCollection = ({ mech }) => {
  const { mechName, content } = mech;
  return (
    <>
      <button className="mech-clips__header">
        {mechName}
        <span className="control">—</span>
      </button>
      <div className="mech-clips__body">
        {content.map((subsection, index) => {
          return (
            <div className="mech-clips__subsection" key={index}>
              <h3 className="mech-clips__subheading">
                {subsection.subsection}
              </h3>
              {subsection.clips.map((clip, index) => {
                return (
                  <div className="clip" key={index}>
                    <a href={clip.link} target="_blank" className="clip__link">
                      Clip {index}
                    </a>
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
    </>
  );
};

export default MechClipsCollection;
