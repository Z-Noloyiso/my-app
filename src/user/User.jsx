// Prop name
// Presentation - Reusability ⬆️
import { Counter } from "/src/concepts/Counter.jsx";

export function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={name + "'s profile pic"} />
      <p className="user-msg">
        Hello, <span className="user-name">{name} 🎉</span>
        <Counter/>
      </p>
    </div>
  );
}
