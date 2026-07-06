//noloyiso 

import "./index.css";
import { MovieList } from "./movie/MovieList";
import { UserList } from "./user/UserList";
import { Counter } from "./concepts/Counter";
import {ColorGame} from "./color-game/ColorGame";
import { Routes, Route } from "react-router";
import { NavLink } from "react-router";

// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
       <h2>Welcome to the App</h2>
      {/* a - will refresh */}
      {/* <a href="/about">About with a</a> | <a href="/contact">Contact with a</a>|{" "} */}
      {/* 3. Navigation */}
      <NavLink to="/movie/MovieList"> Movies </NavLink> |
      <NavLink to="/user/UserList"> User    </NavLink>    |
      <NavLink to="/color-game/ColorGame"> ColorGame </NavLink>

      {/* 2. Matching */}
      <Routes>
      <Route path="/movie/MovieList" element={<MovieList/>} />
      <Route path="/user/UserList" element={<UserList/>} />
      <Route path="/color-game/ColorGame" element={<ColorGame/>} />
      </Routes>

      
    </div>
    // JSX ends
  );
}


