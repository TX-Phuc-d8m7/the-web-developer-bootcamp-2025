import React, { useState } from "react";
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState(["😂"]);
  const addEmoji = () => {
    // setEmojis([...emojis, "😎"]);

    setEmojis((oldEmojis) => [...oldEmojis, "😎"]);
  };
  return (
    <div>
      {emojis.map((e) => (
        <span style={{ fontSize: "4rem" }}>{e}</span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
// This component is a simple emoji clicker that displays three buttons with different emojis.
