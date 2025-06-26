function Greet({ person = "guy", home = "anonymous" }) {
  return (
    <div>
      <h1>
        Good Morning {person} from {home}
      </h1>
    </div>
  );
}

export default Greet;
