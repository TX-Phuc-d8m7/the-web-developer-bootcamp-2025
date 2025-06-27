import { useState } from "react";

function ScoreKeeper() {
  const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });
  function p1IncrementScore() {
    setScore({ ...score, p1Score: score.p1Score + 1 });
  }
  function p2IncrementScore() {
    setScore({ ...score, p2Score: score.p2Score + 1 });
  }
  return (
    <div>
      <h1>Player 1 : {score.p1Score}</h1>
      <h1>Player 2 : {score.p2Score}</h1>
      <button onClick={p1IncrementScore}>+1 Player 1</button>
      <button onClick={p2IncrementScore}>+1 Player 2</button>
    </div>
  );
}

export default ScoreKeeper;
