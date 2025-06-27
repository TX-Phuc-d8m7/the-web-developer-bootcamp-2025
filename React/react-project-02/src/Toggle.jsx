import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(true);
  const [count, setCount] = useState(0);
  const toggle = () => setIsOn(!isOn);
  const incrementCount = () => setCount(count + 2);
  return (
    <div>
      <button onClick={toggle}>{isOn ? "😍" : "😭"}</button>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
