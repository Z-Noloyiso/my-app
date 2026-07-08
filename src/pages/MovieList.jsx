//Nolo
import { useState, useEffect } from "react";
import { Movie } from "../movie/Movie";
import { AddMovie } from "./AddMovie";
import { INITIAL_MOVIES } from "../movie/INITIAL_MOVIES";

export function MovieList() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch("https://6a4ceefee1cf82a4a17dd0d6.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => setMoviesList(data));
  }, []);

  const deleteMovie = (id, index) => {
    console.log("deleting");
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      `https://6a4ceefee1cf82a4a17dd0d6.mockapi.io/movies/${id}`,
      requestOptions,
    ).then(() => {setMoviesList(moviesList.toSpliced(index, 1))});
  };

  return (
    <main>
      <section>
        <div className="movies-container">
          {moviesList.map(({ name, poster, summary, rating, id }, index) => (
            <Movie
              name={name}
              poster={poster}
              summary={summary}
              rating={rating}
              key={index}
              id={index}
              deleteBtn={
                <button onClick={() => deleteMovie(id)}>Delete</button>
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}
