import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Intro />}></Route>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/Intro" element={<Intro />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
