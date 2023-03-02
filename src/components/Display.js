import "../styles/display.css";

const Display = ({ value, chordOptions }) => {
  return <div className="display">{chordOptions.toString()}</div>;
};

export default Display;
