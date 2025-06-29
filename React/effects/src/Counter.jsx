import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(
    function myEffect() {
      console.log("My effect is running");
    },
    [count]
  );
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default Counter;
