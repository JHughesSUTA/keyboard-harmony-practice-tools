import "../styles/chords.css";
import Button from "./Button";

const Chords = ({ onToggle, chords }) => {
  return (
    <div className="chords">
      {chords.map((chord) => (
        <Button
          buttonValue={chord.value}
          onToggle={onToggle}
          id={chord.id}
        />
      ))}
    </div>
  );
};

export default Chords;
