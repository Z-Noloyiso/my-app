//noloyiso 

import "./index.css";
import { MovieList } from "./pages/MovieList";
import { UserList } from "./pages/UserList";
import { Counter } from "./concepts/Counter";
import {ColorGame} from "./color-game/ColorGame";
import { Routes, Route , Navigate, useParams} from "react-router";
import { useState } from "react";
import { NavLink } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AddMovie } from "./pages/AddMovie";
import { INITIAL_MOVIES } from "./movie/INITIAL_MOVIES";
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import PersonIcon from '@mui/icons-material/Person';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AddIcon from '@mui/icons-material/Add';

// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];

  //Lifting the state up: done when you want to share data between siblings
  const [moviesList, setMoviesList] = useState(INITIAL_MOVIES);
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      {/* a - will refresh */}
      {/* <a href="/about">About with a</a> | <a href="/contact">Contact with a</a>|{" "} */}
      {/* 3. Navigation */}
      <header>
      <nav>
      <ul className="nav">
      <li><NavLink to="/"> <HomeIcon /> Home </NavLink> </li>
      <li><NavLink to="/movies"><MovieIcon/> Movies </NavLink> </li>
      <li> <NavLink to="/users"> <PersonIcon/>User    </NavLink>    </li>
      <li><NavLink to="/color-game"><SportsEsportsIcon/> Color Game </NavLink> </li>
      <li><NavLink to="/movies/add"><AddIcon/>Add movie </NavLink> </li>
      
      </ul>
      </nav>
      </header>

      {/* 2. Matching */}
      <Routes>
      <Route path="/" element={<Home/>} />

      {/** redirection if you changed the link you must redirect user to the new link */}
      <Route path="/films" element={<Navigate replace to="/movies"/>} />
      <Route path="/movies" element={<MovieList moviesList={moviesList}/>} />
      <Route path="/users" element={<UserList/>} />
      <Route path="/color-game" element={<ColorGame/>} />
      <Route path="/movies/add" element={<AddMovie moviesList={moviesList} setMoviesList={setMoviesList}/>} />
      <Route path="/*" element={<NotFound/>} />
      {/* : makes it a variable */}
      <Route path="/movies/:id" element={<MovieDetails moviesList={moviesList}/>} />
      </Routes>

      
    </div>
    // JSX ends
  );
}



function MovieDetails({moviesList}){
  const {id} =useParams();
  return (

    <div>
      <h1> {moviesList[id].name} - {id}</h1>
    </div>
  )
}


