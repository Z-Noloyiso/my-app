export function Movie({ name, poster, summary, rating }) {
  return (
    <div className="movie-container">
      <img src={poster} alt={name + "'s profile pic"} />
      <div className="movie-spec-container">
        <h3 className="movie-name">{name}</h3>
        <h3 className="movie-rating"> ⭐ {rating}</h3>
      </div>
      <p>{summary}</p>

    </div>
  );
}
