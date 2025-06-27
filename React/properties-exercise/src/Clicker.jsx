function handleClick(message) {
  alert(message);
}

function Clicker({ message, buttonText }) {
  return (
    <div>
      <button onClick={() => handleClick(message)}>{buttonText}</button>
    </div>
  );
}

export default Clicker;
