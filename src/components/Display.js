import "../styles/display.css";

const Display = ({ keyOptions, chordOptions }) => {
  return (
    <>
      <div className="display">
        {keyOptions.map((option) => option.value + option.selected + " ")}
        <br></br>
        {chordOptions.map((option) => option.value + option.selected + " ")}
      </div>
    </>
  );
};

export default Display;
