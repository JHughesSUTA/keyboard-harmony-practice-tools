import { useState } from "react";
import Chords from "./components/Chords";
import Display from "./components/Display";
import Keys from "./components/Keys";

function App() {
  const [chordOptions, setChordOptions] = useState([
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#",
    "C#",
    "Bb",
    "Eb",
    "Ab",
    "Db",
  ]);

  const toggleOption = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <Keys onToggle={toggleOption} />
      <Display value="c" chordOptions={chordOptions} />
      <Chords />
    </div>
  );
}

export default App;
