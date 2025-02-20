import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Education from "./components/Education";
import Techstack from "./components/Techstack";
import './font-face.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Work />
      <Education />
      <Techstack />
    </div>
  );
}

export default App;
