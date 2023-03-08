import { useState } from "react";
import Chords from "./components/Chords";
import Display from "./components/Display";
import Keys from "./components/Keys";

function App() {
  const [chordOptions, setChordOptions] = useState([
    {
      id: 1,
      value: "C",
      selected: true,
    },
    {
      id: 2,
      value: "G",
      selected: true,
    },
    {
      id: 3,
      value: "D",
      selected: true,
    },
    {
      id: 4,
      value: "A",
      selected: true,
    },
    {
      id: 5,
      value: "E",
      selected: true,
    },
    {
      id: 6,
      value: "B",
      selected: true,
    },
    {
      id: 7,
      value: "F#",
      selected: true,
    },
    {
      id: 8,
      value: "C#",
      selected: true,
    },
    {
      id: 9,
      value: "Bb",
      selected: true,
    },
    {
      id: 10,
      value: "Eb",
      selected: true,
    },
    {
      id: 11,
      value: "Ab",
      selected: true,
    },
    {
      id: 12,
      value: "Db",
      selected: true,
    },
  ]);

  const toggleOption = (id) => {
    setChordOptions(
      chordOptions.map((chord) =>
        chord.id === id ? { ...chord, selected: !chord.selected } : chord
      )
    );
  };

  return (
    <div className="container">
      <Keys onToggle={toggleOption} chords={chordOptions} />
      <Display value="c" chordOptions={chordOptions} />
      <Chords />
    </div>
  );
}

export default App;
