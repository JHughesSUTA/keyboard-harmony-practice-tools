import "../styles/chords.css";
import Button from "./Button";

const Chords = ({ onToggle, chords }) => {
  return (
    <>
      {chords.map((chord) => (
        <Button
          buttonValue={chord.value}
          onToggle={onToggle}
          id={chord.id}
        />
      ))}
    </>
  );
};

export default Chords;
