import React, { useState } from 'react'
import homepic from './homepic-blue.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [word, setWord] = useState<string>('');
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchedWord = word.trim();
    if (!searchedWord || searchedWord.split(' ').length > 1) return;
    navigate(`/search/${searchedWord}`);
  }

  return (
    <><div className='flex flex-col items-center'>
      <img src={homepic} alt="img" className="h-auto w-64" />{/*https://www.freepik.com/premium-vector/young-woman-enjoy-reading-book_32439304.htm#query=book&position=5&from_view=search&track=sph*/}
      <h1 className=' text-cone font-bold text-2xl pb-2'>the friendly lexicon</h1>
      <p className='text-cone text-sm'>your everyday dictionary for easy access</p>
    </div>
    <div className='p-10'>
      <form onSubmit={handleSubmit}>
      <input className='w-64 h-10 border-2 border-cfive rounded-md text-center'
      placeholder='search'
      value={word}
      onChange={e => setWord(e.target.value)}></input>
      </form>
    </div></>
  )
}

export default Home
