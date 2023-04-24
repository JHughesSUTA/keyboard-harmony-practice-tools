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
      selected: false,
    },
    {
      id: 4,
      value: "A",
      selected: false,
    },
    {
      id: 5,
      value: "E",
      selected: false,
    },
    {
      id: 6,
      value: "B",
      selected: false,
    },
    {
      id: 7,
      value: "F#",
      selected: false,
    },
    {
      id: 8,
      value: "C#",
      selected: false,
    },
    {
      id: 9,
      value: "Bb",
      selected: false,
    },
    {
      id: 10,
      value: "Eb",
      selected: false,
    },
    {
      id: 11,
      value: "Ab",
      selected: false,
    },
    {
      id: 12,
      value: "Db",
      selected: false,
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
      selected: false,
    },
    {
      id: 4,
      value: "m7(b5)",
      selected: false,
    },
    {
      id: 5,
      value: "&deg;7",
      selected: false,
    },
    {
      id: 6,
      value: "7alt",
      selected: false,
    },
  ]);

  // TODO : set C and 7 as default values
  const [displayKey, setDisplayKey] = useState("C");
  const [displayChord, setDisplayChord] = useState("7");

  const [running, setRunning] = useState(false);

  let tempo = 2000;

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

  const updateKeyDisplay = () => {
    let selectedKeys = keyOptions.filter((key) => key.selected);
    let key = selectedKeys[Math.floor(Math.random() * selectedKeys.length)];
    setDisplayKey(key.value);
  };

  const updateChordDisplay = () => {
    let selectedChords = chordOptions.filter((chord) => chord.selected);

    let chord =
      selectedChords[Math.floor(Math.random() * selectedChords.length)];
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
  }, [running, keyOptions, chordOptions]);

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
