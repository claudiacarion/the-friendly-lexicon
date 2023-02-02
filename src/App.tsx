import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Bookmarks from './components/bookmarks/Bookmarks';
import Definition from './components/definition/Definition';
import About from './components/about/About';

const App = () => {
  const [bookmarks, setBookmarks] = useState({});

  const addBookmark = (word: string, definition: string) => {
    setBookmarks(prev => ({ ...prev, [word]: definition }));
  };

  const removeBookmark = (word: string) => {
    setBookmarks(prev => {
    const temp = { ...prev as any};
    delete temp[word];
    return temp;
  })};

  return (
    <div className=' min-h-screen bg-cfive font-century p-10 items-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/definition/:word" element={<Definition bookmarks={bookmarks} addBookmark={addBookmark} removeBookmark={removeBookmark}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
