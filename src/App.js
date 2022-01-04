import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Caroussel from "./components/Caroussel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Caroussel />} />
      </Routes>
    </Router>
  );
}

export default App;
