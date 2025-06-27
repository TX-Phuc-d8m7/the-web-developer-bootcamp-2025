import { useState } from "react";

export default function Counter() {
  console.log("RE-RENDERING COUNTER COMPONENT");
  const [count, setCount] = useState(0);

  const setToTen = () => {
    setCount(10);
  };
  const addOne = () => {
    setCount(count + 1);
  };
  const addThree = () => {
    // setCount(count + 3);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Count: {count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
      <button onClick={setToTen}>Set to 10</button>
    </div>
  );
}
