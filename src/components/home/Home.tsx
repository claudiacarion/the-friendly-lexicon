import React, { useState } from 'react'
import homepic from './homepic-blue.png'
import { useNavigate } from 'react-router-dom';
import {FaInfoCircle} from 'react-icons/fa'
import {BsBookmarkHeartFill} from 'react-icons/bs'

const Home = () => {
  const [word, setWord] = useState<string>('');
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchedWord = word.trim().toLowerCase();
    if (!searchedWord || searchedWord.split(' ').length > 1) return;
    navigate(`/definition/${searchedWord}`);
  }

  return (
    <>
    <div className='flex flex-col items-center sticky top-0 bg-cfive'>
    <div className='flex flex-col mt-10 mb-5 w-5/6'>
    <div className='flex justify-between text-cone'>
    <FaInfoCircle className='text-2xl cursor-pointer text-ctwo' onClick={()=> navigate('/about')} />
      <BsBookmarkHeartFill className='text-2xl cursor-pointer text-ctwo' onClick={()=> navigate('/bookmarks')}/>
      </div>
      </div>
      </div>
      <div className='flex flex-col items-center mt-5'>
        <img src={homepic} alt="img" className="h-auto w-64" />{/*https://www.freepik.com/premium-vector/young-woman-enjoy-reading-book_32439304.htm*/}
        <h1 className='font-bold text-2xl pb-2 text-ctwo text-center'>the friendly lexicon</h1>
        <p className=' text-md text-cone text-center'>your everyday dictionary for easy access</p>
        <div className='p-10'>
          <form onSubmit={handleSubmit}>
          <input className='w-64 h-12 border-2 border-cfour bg-cfour rounded-lg text-center text-cone focus:outline-none'
          placeholder='search'
          value={word}
          onChange={e => setWord(e.target.value)}></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
