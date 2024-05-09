import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleColorChange = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor }}>
      <button onClick={handleColorChange}>Change Color</button>
      <Counter />
    </div>
  );
}

export default App;
