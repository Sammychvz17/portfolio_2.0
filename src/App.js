import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
