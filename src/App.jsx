import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import './effects.css';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
    document.documentElement.classList.add('a-loaded');
  }, []);

  return (
    <>
      <CustomCursor />
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </>
  );
}

export default App;
