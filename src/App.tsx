import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Episodes from './components/Episodes';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TranscriptPage from './components/TranscriptPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/transcript/:episodeId" element={<TranscriptPage />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Episodes />
              <Newsletter />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;