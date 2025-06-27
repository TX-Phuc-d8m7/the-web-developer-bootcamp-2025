export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
