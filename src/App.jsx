import "./index.css";
import { MovieList } from "./MovieList";
import { UserList } from "./UserList";



export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      <MovieList/>
      <UserList/>
    </div>
    // JSX ends
  );
}


