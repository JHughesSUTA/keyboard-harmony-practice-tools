import { useState, useEffect } from "react";
import Chords from "./components/Chords";
import Display from "./components/Display";
import Keys from "./components/Keys";
import StartButton from "./components/StartButton";

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

  const [displayKey, setDisplayKey] = useState("C");
  const [displayChord, setDisplayChord] = useState("7");

  const [running, setRunning] = useState(false);

  const toggleSelectedKey = (id) => {
    setKeyOptions(
      keyOptions.map((key) =>
        key.id === id ? { ...key, selected: !key.selected } : key
      )
    );
  };

  let tempo = 2000;

  const toggleSelectedChord = (id) => {
    setChordOptions(
      chordOptions.map((chord) =>
        chord.id === id ? { ...chord, selected: !chord.selected } : chord
      )
    );
  };

  const updateKeyDisplay = () => {
    let key = keyOptions[Math.floor(Math.random() * keyOptions.length)];
    setDisplayKey(key.value);
  };

  const updateChordDisplay = () => {
    let chord = chordOptions[Math.floor(Math.random() * chordOptions.length)];
    setDisplayChord(chord.value);
  };

  const startRandomizer = () => {
    setRunning((runningStatus) => !runningStatus);
  };

  useEffect(() => {
    let interval = null;
    if (running === true) {
      interval = setInterval(() => {
        updateKeyDisplay();
        updateChordDisplay();
      }, tempo);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="container">
      <StartButton onClick={startRandomizer} />
      <Keys onToggle={toggleSelectedKey} keys={keyOptions} />
      <Display value="C" displayKey={displayKey} displayChord={displayChord} />
      <Chords onToggle={toggleSelectedChord} chords={chordOptions} />

      <h2>testing vars</h2>
      <div>
        {keyOptions.map((option) => option.value + option.selected + " ")}
      </div>
      <br></br>
      <div>
        {chordOptions.map((option) => option.value + option.selected + " ")}
      </div>
      <div>{running.toString()}</div>
    </div>
  );
}

export default App;
