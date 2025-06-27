import { v4 as uuid } from "uuid";
import React, { useState } from "react";
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😂" }]);
  const addEmoji = () => {
    // setEmojis([...emojis, "😎"]);

    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😎" }]);
  };
  return (
    <div>
      {emojis.map((e) => (
        <span key={e.id} style={{ fontSize: "4rem" }}>
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
// This component is a simple emoji clicker that displays three buttons with different emojis.
