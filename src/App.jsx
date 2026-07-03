//noloyiso 

import "./index.css";
import { MovieList } from "./movie/MovieList";
import { UserList } from "./user/UserList";
import { Counter } from "./concepts/Counter";
// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      <MovieList /> 
      {/* <UserList /> */}
      {/* <Counter /> */}

      {/* <ConditionalStyling /> */}
      {/*<ColorGame />*/}
    </div>
    // JSX ends
  );
}


