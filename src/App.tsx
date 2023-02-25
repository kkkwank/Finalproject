import { Route, Routes } from "react-router-dom";
import "./App.css";
import NoMatch from "./components/Nomatch";
import Program from "./components/Program";

function App() {
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
