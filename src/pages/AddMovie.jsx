import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export function AddMovie({ moviesList, setMoviesList }) {


  const [movie, setMovie] = useState({
    name: "",
    poster: "",
    rating: "",
    summary: "",
  });

  return <section className="add-movie-form">
    
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setMovie({ ...movie, name: event.target.value })}/>
      <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setMovie({ ...movie, name: event.target.value })}/>
      <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setMovie({ ...movie, name: event.target.value })}/>
      <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setMovie({ ...movie, name: event.target.value })}/>

      <Button variant="contained"
      onClick={() => {
        setMoviesList([movie, ...moviesList]);
      }}
    >
      Add Movie
    </Button>
    
    {/* <input
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
      onChange={(event) => setMovie({ ...movie, summary: event.target.value })} />  */}

    
  </section>;



}