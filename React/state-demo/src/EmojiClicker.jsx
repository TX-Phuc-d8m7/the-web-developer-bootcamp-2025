import { v4 as uuid } from "uuid";
import React, { useState } from "react";

function randomEmoji() {
  const emojis = ["😂", "😎", "😍", "🤔", "😢"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    // setEmojis([...emojis, "😎"]);

    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };

  const deleteEmoji = (id) => {
    setEmojis((previousEmojis) => previousEmojis.filter((e) => e.id !== id));
  };

  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
// This component is a simple emoji clicker that displays three buttons with different emojis.
