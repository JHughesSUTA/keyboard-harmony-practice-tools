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
    // <div>
    //   <Button buttonValue="M7" />
    //   <Button buttonValue="7" />
    //   <Button buttonValue="m7" />
    //   <Button buttonValue="m7(b5)" />
    //   <Button buttonValue="&deg;7" />
    //   <Button buttonValue="7alt." />
    // </div>
  );
};

export default Chords;
