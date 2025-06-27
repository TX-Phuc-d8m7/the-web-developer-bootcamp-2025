function handleClick() {
  console.log("Button clicked!");
}

function Clicker() {
  return (
    <div>
      <h1>Clicker</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default Clicker;
