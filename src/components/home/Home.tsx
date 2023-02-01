import React, { useState } from 'react'
import homepic from './homepic-blue.png'
import { useNavigate } from 'react-router-dom';
import {FaInfoCircle} from 'react-icons/fa'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'

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
    <div className='flex justify-between mb-5 text-cone'>
    <FaInfoCircle className='text-2xl cursor-pointer text-ctwo' onClick={()=> navigate('/about')} />
      <BsFillBookmarkHeartFill className='text-2xl cursor-pointer text-ctwo justify-end' onClick={()=> navigate('/bookmarks')}/>
      </div>
      <div className='flex flex-col items-center mt-10'>
        <img src={homepic} alt="img" className="h-auto w-64" />{/*https://www.freepik.com/premium-vector/young-woman-enjoy-reading-book_32439304.htm#query=book&position=5&from_view=search&track=sph*/}
        <h1 className='font-bold text-2xl pb-2 text-ctwo'>the friendly lexicon</h1>
        <p className=' text-sm text-cone'>your everyday dictionary for easy access</p>
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
