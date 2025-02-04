import { useRef, useState } from "react";
// import { TwitchPlayer } from "react-twitch-embed";
import { DDClipsArray, CTClipsArray } from "./notes-data";
import "./NotesPage.scss";

const NotesPage = () => {
  const [showDD, setShowDD] = useState(false);
  const [showCT, setShowCT] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [timestamp, setTimestamp] = useState("0h0m0s");
  //   const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  //   const handleReady = (e) => {
  //     embed.current = e;
  //   };

  //   useEffect(() => {

  //   }, []);

  //   if (videoURL) {
  //     new Twitch.Embed("twitch-embed", {
  //       video: videoURL,
  //       time: timestamp,
  //       height: "500",
  //       width: "70%",
  //       autoplay: false,
  //     });
  //   }

  return (
    <main className="notes">
      <h1 className="notes__heading">Clips</h1>
      <section className="notes__section">
        <p className="notes__body-text">
          When I am studying, I find it helpful not only to watch guide videos
          where everything is perfectly executed, but to also see clips where
          something goes wrong.
        </p>
        <p className="notes__body-text notes__body-text--italic">
          The point here is not to shame random strangers (who are probably more
          skilled than me) — it's to learn common pitfalls to look out for in my
          own prog.
        </p>

        {/* <TwitchPlayer video="2335965689" /> */}

        {showDD ? (
          <article className="notes__mech">
            <div className="notes__subheading-container">
              <h2 className="notes__subheading">Darklit Dragonsong</h2>
              <i
                className="fa-solid fa-caret-up"
                onClick={() => setShowDD(false)}
              ></i>
            </div>
            {DDClipsArray.map((subsection) => {
              // new Twitch.Player("twitch-embed", {
              //   video: clip.url,
              //   time: clip.time,
              //   autoplay: false,
              // });

              return (
                <div className="notes__subsection">
                  <h3 className="notes__subsection-heading">
                    {subsection.subsection}
                  </h3>
                  {subsection.clips.map((clip) => {
                    return (
                      <div className="clip">
                        {/* <div className="clip__player" id="twitch-embed"></div> */}
                        Problem:{" "}
                        <a href={clip.link} target="_blank">
                          {clip.problem}
                        </a>
                        <div className="clip__text">
                          <p>{clip.description}</p>
                          <p>Solution: {clip.solution}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </article>
        ) : (
          <article className="notes__mech">
            <div className="notes__subheading-container">
              <h2 className="notes__subheading">Darklit Dragonsong</h2>
              <i
                className="fa-solid fa-caret-down"
                onClick={() => setShowDD(true)}
              ></i>
            </div>
          </article>
        )}

        {/* 
              <li className="notes__list-item">
                <button
                  onClick={() => {
                    setVideoURL("2342258741");
                    setTimestamp("0h43m28s");
                  }}
                >
                  Play
                </button>
              </li>
          */}
      </section>
    </main>
  );
};

export default NotesPage;
