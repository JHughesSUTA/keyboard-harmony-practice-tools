import { FaPlay, FaStop } from 'react-icons/fa'
import "../styles/startButton.css";


const StartButton = ({ startRandomizer, active }) => {
  return <button id="start-button" className={active ? "active" : ""} onClick={startRandomizer}>{active ? <FaStop /> : <FaPlay />}</button>;
};

export default StartButton;
