import "../styles/display.css";

const Display = ({ displayKey, displayChord }) => {
  return (
    <>
      <div className="display">
        {displayKey}
        {/* {keyOptions.map((option) => option.value + option.selected + " ")} */}
        {displayChord}
      </div>
    </>
  );
};

export default Display;
