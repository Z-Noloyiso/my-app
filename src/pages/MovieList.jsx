//Nolo
import { useState, useEffect } from "react";
import { Movie } from "../movie/Movie";
import { AddMovie } from "./AddMovie";
import { INITIAL_MOVIES } from "../movie/INITIAL_MOVIES";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export function MovieList() {
  const [moviesList, setMoviesList] = useState([]);
  const getMovies = () => {
    fetch("https://6a4ceefee1cf82a4a17dd0d6.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => setMoviesList(data));
  };

  const deleteMovie = (id) => {
    console.log("deleting");
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      `https://6a4ceefee1cf82a4a17dd0d6.mockapi.io/movies/${id}`,
      requestOptions,
    ).then(() => getMovies());
  };

  useEffect(() => {
    console.log("Mounting is done");
    getMovies();
  }, []);

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
              id={id}
              deleteBtn={



                <IconButton
                onClick={() => deleteMovie(id)}
                aria-label={`delete ${name} movie`}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}
