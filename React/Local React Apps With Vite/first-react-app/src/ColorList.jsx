function ColorList({ colors }) {
  return (
    <div>
      <p>Color List</p>
      {colors.map((c) => (
        <li style={{ color: c }}>{c}</li>
      ))}
    </div>
  );
}

export default ColorList;
