import "./App.css";
import Person from "./Person";

function App() {
  return (
    <div className="App" id="main_container">
      <Person name="Sajeel" experience={9} isMarried={true} />
    </div>
  );
}

export default App;
