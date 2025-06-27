import "./ColorBox.css";
import { useState } from "react";
function ColorBox({ colors }) {
  const [color, setColor] = useState("purple");
  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setColor(randomColor);
  };
  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorBox;
