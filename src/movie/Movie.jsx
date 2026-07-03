import { MovieCounter } from "./MovieCounter";
import { useState } from "react";

export function Movie({ name, poster, summary, rating }) {
  const styles={
    color: rating >=8  ? "green" : "red"
  }


 
  let [show, setShow] = useState(false);
  const summaryStyle={
    display: show ? "block" : "none"
  }
  
  
  return (
    <div className="movie-container">
      <img src={poster} alt={name + "'s profile pic"} />
      <div className="movie-spec-container">
        <h3 className="movie-name">{name}</h3>
        <h3 className="movie-rating" style ={styles}> ⭐ {rating}</h3>
      </div>
      <button className= " summary-toggle" onClick={() => setShow(!show)}> 💡Toggle Summary</button>
      <p style={summaryStyle} className="movie-summary">{summary}</p>
      <MovieCounter/>
      
    </div>
  );
}
