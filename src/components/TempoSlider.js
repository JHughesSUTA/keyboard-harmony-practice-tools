import "../styles/tempoSlider.css";

const TempoSlider = ({ tempo, tempoChange }) => {
  return (
    <div id="tempo-container">
      <label for="tempo">Tempo:</label>
      <input
        name="tempo"
        type="range"
        autocomplete="off"
        min="20"
        max="80"
        value={tempo}
        onChange={tempoChange}
        step="2"
      />
      <p id="tempo-value">{`${Math.round(tempo)} BPM`}</p>
    </div>
  );
};

export default TempoSlider;
