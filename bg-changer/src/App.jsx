import { useState } from "react";
import ColorBlock from "./components/ColorBlock";
function App() {
  const [newColor, setColor] = useState("olive");
  const colorName = ["red", "green", "blue", "olive", "gray", "yellow", "pink", "purple", "lavender", "white", "black"];

  return (
    <div style={{ backgroundColor: newColor }} className="flex justify-center items-end h-screen bg-black">
      <div className="w-[80%] bg-amber-50  h-[8%] mb-4 border rounded-2xl flex flex-wrap items-center justify-evenly">
        {colorName.map((color) => {
          return <ColorBlock key={color} name={color} setColor={setColor}></ColorBlock>;
        })}
      </div>
    </div>
  );
}

export default App;
