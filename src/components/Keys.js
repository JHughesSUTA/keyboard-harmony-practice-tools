import "../styles/keys.css";
import Button from "./Button";

const Keys = ({ onToggle, chords }) => {
  return (
    <>
      {chords.map((chord) => (
        <Button
          buttonValue={chord.value}
          onToggle={onToggle}
          chordId={chord.id}
        />
      ))}
    </>
  );
};

export default Keys;
