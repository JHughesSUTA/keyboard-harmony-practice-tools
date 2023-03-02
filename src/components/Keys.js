import "../styles/keys.css";
import Button from "./Button";

const Keys = ({ onToggle }) => {
  return (
    <div>
      <Button buttonValue="C" onToggle={onToggle} />
      <Button buttonValue="G" onToggle={onToggle} />
      <Button buttonValue="D" onToggle={onToggle} />
      <Button buttonValue="A" onToggle={onToggle} />
      <Button buttonValue="E" onToggle={onToggle} />
      <Button buttonValue="B" onToggle={onToggle} />
      <Button buttonValue="F#" onToggle={onToggle} />
      <Button buttonValue="C#" onToggle={onToggle} />
      <Button buttonValue="Bb" onToggle={onToggle} />
      <Button buttonValue="Eb" onToggle={onToggle} />
      <Button buttonValue="Ab" onToggle={onToggle} />
      <Button buttonValue="Db" onToggle={onToggle} />
    </div>
  );
};

export default Keys;
