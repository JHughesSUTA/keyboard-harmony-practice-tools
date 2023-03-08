import "../styles/keys.css";
import Button from "./Button";

const Keys = ({ onToggle, keys }) => {
  return (
    <>
      {keys.map((key) => (
        <Button
          buttonValue={key.value}
          onToggle={onToggle}
          id={key.id}
        />
      ))}
    </>
  );
};

export default Keys;
