import "../styles/display.css";

const Display = ({ displayKey, displayChord }) => {
  return (
    <>
      <div id="display">
        <div className="display__circle">
          <p>
            {displayKey}
            {/* {keyOptions.map((option) => option.value + option.selected + " ")} */}
            {displayChord}
          </p>
        </div>
      </div>
    </>
  );
};

export default Display;
