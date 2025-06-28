import { useState } from "react";

// eslint-disable-next-line no-unused-vars
function ScoreKeeper({ numPlayers, target = 5 }) {
  // eslint-disable-next-line no-unused-vars
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  //   const Increment = (index) => {
  //     setScores((prevScores) => {
  //       const newScores = [...prevScores];
  //       newScores[index] += 1;
  //       return newScores;
  //     });
  //   };

  const Increment = (index) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === index) {
          return score + 1;
        }
        return score;
      });
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };

  console.log("123123", scores);

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              Player {index + 1}: {score}{" "}
              <button onClick={() => Increment(index)}>+1</button>
              {score >= target ? "You are a Winner" : ""}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset Score</button>
    </div>
  );
}

export default ScoreKeeper;
