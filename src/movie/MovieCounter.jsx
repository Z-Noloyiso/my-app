import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

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
export function MovieCounter() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);

  console.log("Re-render");

  const total = like + dislike;

  return (
    <div className="movie-counter">
       <ThumbUpIcon onClick={() => setLike(like + 1)          }/>
         {like}
    

      <ThumbDownIcon onClick={() => setDislike(dislike + 1)}/>
         {dislike}
      
    </div>

  );
}
