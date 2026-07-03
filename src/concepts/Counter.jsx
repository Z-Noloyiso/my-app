import { useState } from "react";

// React reacts to special variables
// Hook variables
// What is hook? Hook is function ('use') - useState, useEffect, useContext
// state - current value of component
// setState - fn updates the state
// let [state, setState] = useState(Initial_Value)
// DOM methods - ❌
// y = f(x)
// Component is function State
// C = f(S) - State change Component re-renders (Re draw)
export function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);

  console.log("Re-render");

  const total = like + dislike;

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>

      <button onClick={() => setDislike(dislike + 1)}>
        👎 {dislike}
      </button>
    <br></br>
      <progress max={total} value={like}></progress>

      <div>{ like - dislike >= 10 ? <h3> You are awesome 🥳🥳</h3> : null}</div>
    </div>

  );
}


