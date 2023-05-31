import "../styles/keys.css";
import Button from "./Button";

const Keys = ({ onToggle, keys }) => {
  return (
    <div id="keys">
      {keys.map((key) => (
        <Button
          buttonValue={key.value}
          onToggle={onToggle}
          id={key.id}
        />
      ))}
    </div>
  );
};

export default Keys;
