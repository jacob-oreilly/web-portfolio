import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
