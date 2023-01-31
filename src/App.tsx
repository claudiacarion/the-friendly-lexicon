import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Bookmarks from './components/bookmarks/Bookmarks';
import Definition from './components/definition/Definition';
import About from './components/about/About';

const App = () => {
  return (
    <div className=' min-h-screen bg-cfour font-century p-10 text-center'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/definition/:word" element={<Definition />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
