import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './assets/Header/Header';
import Presentation from './assets/Presentation/Presentation'
import About from './assets/About/About';
import { Projects } from './assets/Projects/Projects';
import { Contact } from './assets/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App
