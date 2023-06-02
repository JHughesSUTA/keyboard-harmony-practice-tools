import "../styles/chords.css";
import Button from "./Button";

const Chords = ({ onToggle, chords }) => {
  return (
    <div id="chords">
      {chords.map((chord) => (
        <Button
          buttonValue={chord.value}
          onToggle={onToggle}
          id={chord.id}
          active={chord.active}
        />
      ))}
    </div>
  );
};

export default Chords;
