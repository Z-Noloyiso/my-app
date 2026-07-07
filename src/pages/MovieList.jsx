//Nolo
import { useState } from "react";
import { Movie } from "../movie/Movie";
import { AddMovie } from "./AddMovie";
import { INITIAL_MOVIES } from "../movie/INITIAL_MOVIES";





export function MovieList({ moviesList}) {
  return (
    <main>
      <section>

        <div className="movies-container">
        {moviesList.map(({ name, poster, summary, rating }, index) => (
          <Movie
            name={name}
            poster={poster}
            summary={summary}
            rating={rating}
            key={index}
            id={index}
          />
        ))}
        </div>
      </section>
    </main>
  );
}





