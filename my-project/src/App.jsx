import "./App.css";
import Presentation from "./assets/Presentation/Presentation";
import About from "./assets/About/About";
import { Projects } from "./assets/Projects/Projects";
import { Contact } from "./assets/Contact/Contact";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Presentation />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
