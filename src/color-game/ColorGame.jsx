import { useState } from "react";
import { ColorBox } from "./ColorBox";

// Task - Clue: Hook & Conditional Styling
function ColorGame() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };

  // Task 2.1 First list the 3 boxes on the screen
  const [colorList, setColorList] = useState(["orange", "plum", "red"]);

  const deleteColor = (index) => {
    // Your code
    setColorList(colorList.toSpliced(index, 1));

  };

  // Task 2.2 Add color box
  // Task 2.3 Delete color box
  // type -> onChange -> setColor -> State updates (color) -> re-renders
  // click -> onClick -> setColorList ->  State updates (colorList) -> re-renders
  return (
    <div>
      <input
        type="text"
        style={styles}
        onChange={(event) => setColor(event.target.value)} />
      {/* Copy color list + new color */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {colorList.map((clr, index) => (
        <ColorBox clr={clr} deleteClr={() => deleteColor(index)} />
      ))}
    </div>
  );
}
