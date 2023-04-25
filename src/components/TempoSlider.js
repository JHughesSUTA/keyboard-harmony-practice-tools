const TempoSlider = ({tempo, handleChange}) => {

  return (
    <div className="tempo">
        <label for='tempo'>Tempo:</label>
        <input name='tempo' type='range' autocomplete="off" min='20' max='80' value={tempo} onChange={handleChange} step='2' />
        <p id='tempo-value'>{`${Math.round(tempo)} BPM   `}</p>
      </div>
  );
};

export default TempoSlider;
