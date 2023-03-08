import { useState } from "react";
import Chords from "./components/Chords";
import Display from "./components/Display";
import Keys from "./components/Keys";

function App() {
  const [keyOptions, setKeyOptions] = useState([
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

  const [chordOptions, setChordOptions] = useState([
    {
      id: 1,
      value: "M7",
      selected: true,
    },
    {
      id: 2,
      value: "7",
      selected: true,
    },
    {
      id: 3,
      value: "m7",
      selected: true,
    },
    {
      id: 4,
      value: "m7(b5)",
      selected: true,
    },
    {
      id: 5,
      value: "&deg;7",
      selected: true,
    },
    {
      id: 6,
      value: "7alt",
      selected: true,
    },
  ]);

  const toggleSelectedKey = (id) => {
    setKeyOptions(
      keyOptions.map((key) =>
        key.id === id ? { ...key, selected: !key.selected } : key
      )
    );
  };

  const toggleSelectedChord = (id) => {
    setChordOptions(
      chordOptions.map((chord) =>
        chord.id === id ? { ...chord, selected: !chord.selected } : chord
      )
    );
  };

  return (
    <div className="container">
      <Keys onToggle={toggleSelectedKey} keys={keyOptions} />
      <Display value="c" keyOptions={keyOptions} chordOptions={chordOptions} />
      <Chords onToggle={toggleSelectedChord} chords={chordOptions} />
    </div>
  );
}

export default App;
