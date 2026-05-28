import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "./index.css";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/Skills"
          element={<Skills />}
        />

        <Route
          path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;