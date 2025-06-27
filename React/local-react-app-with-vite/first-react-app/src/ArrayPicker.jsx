function ArrayPicker({ values }) {
  const randIdx = Math.floor(Math.random() * values.length);
  const randElement = values[randIdx];
  return (
    <>
      <p>Pick number in this array: {values}</p>
      <p>Random {randElement}</p>
    </>
  );
}

export default ArrayPicker;
