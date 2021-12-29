import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarousselCard from "./components/Caroussel-Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarousselCard />} />
      </Routes>
    </Router>
  );
}

export default App;
