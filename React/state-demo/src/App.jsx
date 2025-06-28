import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeper from "./ScoreKeeper";

function App() {
  return (
    <>
      <ScoreKeeper numPlayers={5} target={3} />
      {/* <EmojiClicker /> */}
    </>
  );
}

export default App;
