import "./App.css";

import { useContext,useState } from "react";

import Circle from "./Circle";

import ContextCircle, { ContextProvider } from "./ContextCircle";

function App() {
  // const circleCtx = useContext(ContextCircle);
  const [items,setItems] = useState([])

  const addCircle = event => {
    setItems([...items,1])
  }
  return (
    <div>
      <button onClick={addCircle}>Add Circle</button>
      {items.map((element) => {
        return <Circle />;
      })}
    </div>
  );
}

export default App;
