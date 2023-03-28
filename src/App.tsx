import { Route, Routes } from "react-router-dom";
import "./App.css";
import { StateSelector } from "./redux/stateSlice";
import NoMatch from "./components/Nomatch";
import Program from "./components/Program";
import soundfile from "./components/sound/BG_Sound.mp3";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const bgsound = new Audio(soundfile);
  const StateReducer = useSelector(StateSelector);
  useEffect(() => {
    if (StateReducer.state === 1) {
      console.log("play sond");
      bgsound.loop = true;
      bgsound.play();
    }
  }, [StateReducer.state]);
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Program />} />
        {/* <Route path="Register" element={<Register />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
