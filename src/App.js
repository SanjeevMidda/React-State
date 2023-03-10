import "./styles.css";
import Circle from "./components/Circle";
import Circle2 from "./components/Circle2"

function App() {
  return (
    <div className="layout">
      <h1>Hello</h1>
      <Circle letter = "A"/>
      <Circle2 />
    </div>
  );
}

export default App;
