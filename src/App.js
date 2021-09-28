import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var emojiweknow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInputEmoji = event.target.value;

    var meaning = emojiDictionary[userInputEmoji];

    setMeaning(meaning);

    if (meaning === undefined) {
      meaning = "We don't this on our Database";
    }
  }

  function emojClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <input onChange={inputChangeHandler}></input>

      <h1> {meaning} </h1>

      <h4>Emojis we know </h4>

      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojClickHandler(emoji)}
            style={{ fontSize: "2.5rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
