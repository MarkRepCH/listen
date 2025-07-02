import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Episodes from './components/Episodes';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Episodes />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;