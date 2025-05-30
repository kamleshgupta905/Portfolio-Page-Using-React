import React from 'react';
import Navbar from "./components/navbar"

import Home from "./components/Home";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <div className="bg-white min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experiance />
      <Contact />
      <Footer />
      
    </div>
      <Toaster />
    </>
  );
}

export default App;
