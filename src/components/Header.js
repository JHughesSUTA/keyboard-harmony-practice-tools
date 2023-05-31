import "../styles/header.css";
import StartButton from "./StartButton";
import TempoSlider from "./TempoSlider";

const Header = ({tempo, tempoChange, startRandomizer}) => {
  return <div id="header">
    <TempoSlider tempo={tempo} tempoChange={tempoChange} />
    <StartButton startRandomizer={startRandomizer} />
  </div>;
};

export default Header;
