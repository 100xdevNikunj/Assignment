import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

export default function QS7() {
  const [name, setname] = React.useState("");
  const rootRef = React.useRef(null);

  const generateWishes = () => {
    const wishes = [
      "Wishing you a day filled with love, joy, and unforgettable moments!",
      "May your birthday be the start of a year filled with new accomplishments and adventures.",
      "Cheers to another year of laughter, love, and incredible memories!",
      "May your special day be surrounded by the people who make you happiest.",
      "Happy birthday! May this year be the best one yet.",
      "Wishing you health, happiness, and all the wonderful things life has to offer.",
      "May your birthday be as fantastic as you are!",
      "Another year older, wiser, and more fabulous! Happy birthday!",
      "May your day be filled with surprises, laughter, and the company of good friends.",
      "Here's to a year filled with exciting opportunities and new beginnings.",
      "Happy birthday! May your heart be full of joy and your year full of blessings.",
      "May your day be surrounded by the warmth of love and the joy of celebration.",
      "Cheers to another year of growth, adventure, and incredible achievements!",
      "May your day be sprinkled with love, laughter, and all the things that make you smile.",
      "Wishing you a birthday that's just as amazing as you are!",
    ];

    const randomIndex = Math.floor(Math.random() * wishes.length);
    const randomWish = wishes[randomIndex];
    const randomWish2 = wishes[randomIndex];

    // Use createRoot to render wishes
    const root = ReactDOM.createRoot(rootRef.current);
    root.render(
      <div>
        <h1>{randomWish}</h1>
        <br></br>
        <h1>
          {" "}
          {randomWish2} = {name}
        </h1>
      </div>,
    );
  };

  return (
    <>
      <Link to="/">Go to Home</Link>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: 'url("https://picsum.photos/800/600")',
          backgroundSize: "cover",
          color: "Black",
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            margin: "10px 0",
            width: "300px",
            textAlign: "center",
          }}
        />
        <button
          onClick={generateWishes}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            margin: "10px 0",
          }}
        >
          Submit
        </button>
        {/* Use a ref to create a root for rendering wishes */}
        <div ref={rootRef}></div>
      </div>
    </>
  );
}
