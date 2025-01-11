import { useRef, useState } from "react";
// import { TwitchPlayer } from "react-twitch-embed";

import "./NotesPage.scss";

const NotesPage = () => {
  const [videoURL, setVideoURL] = useState(null);
  const [timestamp, setTimestamp] = useState("0h0m0s");
  //   const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  //   const handleReady = (e) => {
  //     embed.current = e;
  //   };
  const clipsArray = [
    {
      link: "https://www.twitch.tv/videos/2342258741?t=0h43m28s",
      url: "2342258741",
      time: "0h43m28s",
      problem: "Moving too soon",
      description:
        "BRD went out too soon and dropped an off-center Akh Rhai that killed PCT.",
      solution: "Don't move until the wings pop.",
    },
    {
      link: "https://www.twitch.tv/videos/2335965689?t=00h32m43s",
      url: "2335965689",
      time: "00h32m43s",
      problem: "Outranging shields",
      description:
        "Shields need to be reapplied after the first crystal pulse, a few seconds before Darklit cast.",
      solution: "Hug Shiva when the Akh Rhais stop.",
    },
    {
      link: "https://www.twitch.tv/videos/2342258741?t=0h43m43s",
      url: "2342258741",
      time: "0h43m43s",
      problem: "Weird starting positions",
      description:
        "This is an extreme example where both melees are stacked, but it shows how fucking confusing it is when the shape is not easy to identify.",
      solution: "Just do LR spots 4head",
    },
    {
      link: "https://www.twitch.tv/videos/2349084399?t=2h24m32s",
      url: "2349084399",
      time: "2h24m32s",
      problem: "Tethered water flex",
      description:
        "DRG and DNC both had water. DRG probably panicked when they saw the DNC not flexing.",
      solution:
        "Just stay and yell at the DNC in Discord. The stacks resolve after the tethers.",
    },
    {
      link: "https://www.twitch.tv/videos/2346402771?t=0h31m2s",
      url: "2346402771",
      time: "0h31m2s",
      problem: "Bad Spirit Taker spreads",
      description:
        "I'm not sure if this group is following LesBin strats, but it looks like they yoloed the spreads. SAM got yeeted into the wall.",
      solution: "Review diagrum on slide 15",
    },
    {
      link: "https://www.twitch.tv/videos/2346402771?t=1h0m58s",
      url: "2346402771",
      time: "1h0m58s",
      problem: "Moving too slowly for Hallowed Wings",
      description: "DNC and PCT got hit by wings and blew up the raid.",
      solution: "Start moving to safe side as soon as Spirit Taker resolves.",
    },
    {
      link: "https://www.twitch.tv/videos/2347173197?t=0h22m14s",
      url: "2347173197",
      time: "0h22m14s",
      problem: "Tank baited TB to wrong side",
      description:
        "WAR ran towards Gaia, not the opposite wall. TB smashed the party and the crystal. This is what a crystal smash sounds like!",
      solution:
        "Don't go to Narnia for Spirit Taker spreads. Baiting tank, look where she ends up and tell yourself in advance what the opposite side is, so you're not trying to figure it out in the moment.",
    },
    {
      link: "https://www.twitch.tv/storkod/clip/WanderingSneakyRuffThunBeast-RpT3TVEQCyUPJSIW",
      url: "2341997316",
      time: "2h6m34s",
      problem: "Imbalanced HP",
      description:
        "Nobody hit Gaia except for Tori. PLD had to sacc to save the run.",
      solution: "Pay attention to boss HP.",
    },
  ];
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

        <article className="notes__mech">
          <h2 className="notes__subheading">Darklit Dragonsong</h2>

          {/* <h3 className="notes__mech-subheading">Akh Rhai</h3> */}

          {clipsArray.map((clip) => {
            // new Twitch.Player("twitch-embed", {
            //   video: clip.url,
            //   time: clip.time,
            //   autoplay: false,
            // });

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

          {/* <div className="notes__example">
            <ul className="notes__list">
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
              <li className="notes__list-item">
                <span className="notes__bold-text">Problem: </span>
                BRD ran out too soon
              </li>
              <li className="notes__list-item">
                BRD dropped an off-center Akh Rhai that killed PCT
              </li>
              <li className="notes__list-item notes__list-item--solution">
                <span className="notes__bold-text">Solution: </span>
                Don't move until the wings pop
              </li>
            </ul>
          </div>

          <div className="notes__example">
            <ul className="notes__list">
              <li className="notes__list-item">
                <button
                  onClick={() => {
                    setVideoURL("2349081816");
                    setTimestamp("0h35m35s");
                  }}
                >
                  Play
                </button>
              </li>
              <li className="notes__list-item">
                <span className="notes__bold-text">Problem: </span>
                BRD ran out too soon
              </li>
              <li className="notes__list-item">
                BRD dropped an off-center Akh Rhai that killed PCT
              </li>
              <li className="notes__list-item notes__list-item--solution">
                <span className="notes__bold-text">Solution: </span>
                Don't move until the wings pop
              </li>
            </ul>
          </div> */}
        </article>
      </section>
    </main>
  );
};

export default NotesPage;
