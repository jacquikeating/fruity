import { useRef, useState } from "react";
// import { TwitchPlayer } from "react-twitch-embed";

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
  const clipsArray = [
    {
      subsection: "Pre-DD",
      clips: [
        {
          link: "https://www.twitch.tv/videos/2347272686?t=2h20m8s",
          url: "2347272686",
          time: "2h20m8s",
          problem: "Moving too late",
          description:
            "It's this group's first time reaching P4 and they're so excited! But then...",
          solution: "No notes, this is perfect.",
        },
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
          link: "https://www.twitch.tv/videos/2349041148?t=0h33m39s",
          url: "2349041148",
          time: "0h33m39s",
          problem: "DPS taking second aggro on Shiva",
          description:
            "GNB starts at 2nd aggro, but because he has dmg down, the BLM quickly overtakes him and dies to autos. 3 support get tethered.",
          solution: "GNB should have suicided as soon as Gaia hit 20%.",
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
      ],
    },
    {
      subsection: "Tethers",
      clips: [
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
          link: "https://www.twitch.tv/videos/2343743751?t=0h20m15s",
          url: "2343743751",
          time: "0h20m15s",
          problem: "No bowtie",
          description:
            "Hourglass = tank and west DPS need to switch. The switch starts out okay, but then the WAR second-guesses themselves and turns around.",
          solution: "Don't do that",
        },

        {
          link: "https://www.twitch.tv/videos/2349084399?t=2h24m32s",
          url: "2349084399",
          time: "2h24m32s",
          problem: "Tethered water flex",
          description:
            "DRG and DNC both had water. DRG probably panicked when they saw the DNC not flexing.",
          solution:
            "Just stay and yell at the DNC in Discord. The stacks resolve after Spirit Taker.",
        },
      ],
    },
    {
      subsection: "Spirit Taker",
      clips: [
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
          link: "https://www.twitch.tv/videos/2345919219?t=2h46m46s",
          url: "2345919219",
          time: "2h46m46s",
          problem: "Spreading too far",
          description:
            "(JP strats) Tethered WHM spreads to Narnia and their tether to the BRD breaks. If you pause at the right moment, you can see only 3 tethers.",
          solution:
            "If you're a tether, just go to your nearest number marker. Non-tethers can spread a little further, but there's no need to go super far.",
        },
      ],
    },
    {
      subsection: "Water Stacks & Wings",
      clips: [
        {
          link: "https://www.twitch.tv/videos/2346402771?t=1h0m58s",
          url: "2346402771",
          time: "1h0m58s",
          problem: "Moving too slowly for Hallowed Wings",
          description: "DNC and PCT got hit by wings and blew up the raid.",
          solution:
            "Start moving to safe side as soon as Spirit Taker resolves.",
        },
        {
          link: "https://www.twitch.tv/videos/2343743751?t=0h56m1s",
          url: "2343743751",
          time: "0h56m1s",
          problem: "Both waters on same side ",
          description: "SCH was untethered and should have switched with PCT.",
          solution:
            "Obviously, waters should pay attention. But it's also kinda crazy that nobody else noticed and called it out in Discord. If you see something, say something!",
        },
      ],
    },
    {
      subsection: "Somber Dance (Tankbuster)",
      clips: [
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
          link: "https://www.twitch.tv/videos/2346309039?t=1h47m17s",
          url: "2346309039",
          time: "1h47m17s",
          problem: "Tank ran out too late",
          description:
            "Best Darklit clip ever, because they screw up and then spend 15 minutes arguing about it :3",
          solution:
            "Move on Hallowed Wings castbar, don't wait for stack damage/animation.",
        },
      ],
    },
    {
      subsection: "Post-DD",
      clips: [
        {
          link: "https://www.twitch.tv/videos/2350949322?t=1h41m46s",
          url: "2350949322",
          time: "1h41m46s",
          problem: "7/1 tank died",
          description:
            "GNB wasted his Corundum on the WAR, who was taking Somber Dance with invuln. Then he did not have it up for himself and hit his other mits late. He had only 38% mit (Nascent + 2 oGCDs from each healer).",
          solution:
            "Know your mit plan and call out in voice if you need help.",
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
      ],
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

        {showDD ? (
          <article className="notes__mech">
            <div className="notes__subheading-container">
              <h2 className="notes__subheading">Darklit Dragonsong</h2>
              <i
                class="fa-solid fa-caret-up"
                onClick={() => setShowDD(false)}
              ></i>
            </div>
            {clipsArray.map((subsection) => {
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
                class="fa-solid fa-caret-down"
                onClick={() => setShowDD(true)}
              ></i>
            </div>
          </article>
        )}

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
      </section>
    </main>
  );
};

export default NotesPage;
