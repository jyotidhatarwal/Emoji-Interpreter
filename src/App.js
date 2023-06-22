import { useState } from "react";
import "./styles.css";

const emojiDatabase = {
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Goodwill and kindness",
  "🫠": "Melting Face",
  "🥹": "Face Holding Back Tears",
  "🫡": "Saluting Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😉": "Winking Face",
  "🤩": "Star-Struck",
  "🤓": "Nerd Face",
  "😂": "Face with Tears of Joy"
};
export default function App() {
  var emojiList = Object.keys(emojiDatabase);

  var [meaning, setMeaning] = useState("The Meaning will be shown here");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var newMeaning = emojiDatabase[userInput];
    if (userInput in emojiDatabase) {
      setMeaning(newMeaning);
    } else {
      newMeaning = "We don't have it in our Database";
    }
    setMeaning(newMeaning);
  }

  function emojiClickHandler(emoji) {
    var newMeaning = emojiDatabase[emoji];
    setMeaning(newMeaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <textarea
        placeholder="Put the emoji here to know the meaning"
        onChange={emojiHandler}
      ></textarea>
      <h2> {meaning} </h2>
      <h3>Emojis we know are mentioned below </h3>
      <ul>
        {emojiList.map((emoji) => {
          return (
            <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
