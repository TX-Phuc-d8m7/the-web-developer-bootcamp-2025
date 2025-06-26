function Die({ numSides }) {
  const roll = Math.floor(Math.random() * 6) + 1;
  return (
    <p>
      Die Roll {roll} and {numSides}
    </p>
  );
}

export default Die;
