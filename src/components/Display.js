import "../styles/display.css";

const Display = ({ chordOptions }) => {
  return (
    <div className="display">
      {chordOptions.map((option) => option.value + option.selected + " ")}
    </div>
  );
};

export default Display;
