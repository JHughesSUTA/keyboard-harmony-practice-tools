import { useState, useEffect } from "react";
import Chords from "./components/Chords";
import Display from "./components/Display";
import Keys from "./components/Keys";
import Header from "./components/Header";
import "./styles/container.css";

function App() {
  const [keyOptions, setKeyOptions] = useState([
    {
      id: 1,
      value: "C",
      active: true,
    },
    {
      id: 2,
      value: "G",
      active: true,
    },
    {
      id: 3,
      value: "D",
      active: false,
    },
    {
      id: 4,
      value: "A",
      active: false,
    },
    {
      id: 5,
      value: "E",
      active: false,
    },
    {
      id: 6,
      value: "B",
      active: false,
    },
    {
      id: 7,
      value: "F#",
      active: false,
    },
    {
      id: 8,
      value: "C#",
      active: false,
    },
    {
      id: 9,
      value: "Bb",
      active: false,
    },
    {
      id: 10,
      value: "Eb",
      active: false,
    },
    {
      id: 11,
      value: "Ab",
      active: false,
    },
    {
      id: 12,
      value: "Db",
      active: false,
    },
  ]);

  const [chordOptions, setChordOptions] = useState([
    {
      id: 1,
      value: "M7",
      active: true,
    },
    {
      id: 2,
      value: "7",
      active: true,
    },
    {
      id: 3,
      value: "m7",
      active: false,
    },
    {
      id: 4,
      value: "m7(b5)",
      active: false,
    },
    {
      id: 5,
      value: "&deg;7",
      active: false,
    },
    {
      id: 6,
      value: "7alt",
      active: false,
    },
  ]);

  const [tempo, setTempo] = useState(2000);

  // TODO : set C and 7 as default values
  const [displayKey, setDisplayKey] = useState("C");
  const [displayChord, setDisplayChord] = useState("7");

  const [running, setRunning] = useState(false);

  const toggleActiveKey = (id) => {
    setKeyOptions(
      keyOptions.map((key) =>
        key.id === id ? { ...key, active: !key.active } : key
      )
    );
  };

  const toggleActiveChord = (id) => {
    setChordOptions(
      chordOptions.map((chord) =>
        chord.id === id ? { ...chord, active: !chord.active } : chord
      )
    );
  };

  const updateKeyDisplay = () => {
    let activeKeys = keyOptions.filter((key) => key.active);
    let key = activeKeys[Math.floor(Math.random() * activeKeys.length)];
    setDisplayKey(key.value);
  };

  const updateChordDisplay = () => {
    let activeChords = chordOptions.filter((chord) => chord.active);

    let chord =
      activeChords[Math.floor(Math.random() * activeChords.length)];
    setDisplayChord(chord.value);
  };

  const startRandomizer = () => {
    setRunning((runningStatus) => !runningStatus);
  };

  const tempoChange = (event) => {
    console.log(event.target.value);
    setTempo(60000 / event.target.value);
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
  }, [running, keyOptions, chordOptions, tempo]);

  return (
    <div className="container">
      <Header
        tempo={60000 / tempo}
        tempoChange={tempoChange}
        startRandomizer={startRandomizer}
      />
      <Keys onToggle={toggleActiveKey} keys={keyOptions} />
      <Display value="C" displayKey={displayKey} displayChord={displayChord} />
      <Chords onToggle={toggleActiveChord} chords={chordOptions} />

      {/* <h2>testing vars</h2>
      <div>
        {keyOptions.map((option) => option.value + option.active + " ")}
      </div>
      <br></br>
      <div>
        {chordOptions.map((option) => option.value + option.active + " ")}
      </div>
      <div>{running.toString()}</div> */}
    </div>
  );
}

export default App;
