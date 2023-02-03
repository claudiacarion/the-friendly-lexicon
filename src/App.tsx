import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Bookmarks from './components/bookmarks/Bookmarks';
import Definition from './components/definition/Definition';
import About from './components/about/About';

const App = () => {
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')!) || {});

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); 
  }, [bookmarks]);

  const addBookmark = (word: string) => {
    setBookmarks((prev: any) => ({ ...prev, [word]: 'added' }));
  };

  const removeBookmark = (word: string) => {
    setBookmarks((prev: any) => {
    const temp = { ...prev};
    delete temp[word];
    return temp;
  })};

  return (
    <div className='min-h-screen max-w-screen bg-cfive font-century items-center relative'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks}/>} />
          <Route path="/definition/:word" element={<Definition bookmarks={bookmarks} addBookmark={addBookmark} removeBookmark={removeBookmark}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
