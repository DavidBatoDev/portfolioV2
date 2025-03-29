import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { Chatbot } from './components/Chatbot/Chatbot'; // Import the chatbot component

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
