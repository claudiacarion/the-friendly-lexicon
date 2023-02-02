import React from 'react'
import { useNavigate } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io'

interface BookmarkProps {
  bookmarks: {}
}

const Bookmarks = (bookmarks: BookmarkProps) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col mb-10'>
      <IoMdArrowRoundBack className='text-2xl cursor-pointer mb-5 text-ctwo justify-self-start' onClick={()=> navigate(-1)}/>
      <div className='border-4 border-cfour rounded-lg bg-cfour'>
          <h4 className='text-md text-cthree text-center mt-2 mb-5'>bookmarks</h4>
          <div className='flex flex-col items-center'>
          {Object.keys(bookmarks.bookmarks).map((word: string) => (
          <ul><li className='text-md h-10 text-cfive bg-ctwo rounded-lg grid grid-cols-1 place-items-center mb-3 pl-5 pr-5 ml-5 mr-5 cursor-pointer' onClick={()=>navigate(`/definition/${word}`)}>
            {word}
          </li></ul>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Bookmarks
