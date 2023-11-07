import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, JumpSquare } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/jump-square" element={<JumpSquare />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
