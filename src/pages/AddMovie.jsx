import { useState } from "react";


export function AddMovie({ moviesList, setMoviesList }) {


  const [movie, setMovie] = useState({
    name: "",
    poster: "",
    rating: "",
    summary: "",
  });

  return <section>
    <input
      type="text"
      placeholder="Name"
      onChange={(event) => setMovie({ ...movie, name: event.target.value })} />

    <input
      type="text"
      placeholder="Poster"
      onChange={(event) => setMovie({ ...movie, poster: event.target.value })} />

    <input
      type="text"
      placeholder="Rating"
      onChange={(event) => setMovie({
        ...movie,
        rating: +(event.target.value),
      })} />

    <input
      type="text"
      placeholder="Summary"
      onChange={(event) => setMovie({ ...movie, summary: event.target.value })} />

    <button
      onClick={() => {
        setMoviesList([movie, ...moviesList]);
      }}
    >
      Add Movie
    </button>
  </section>;



}