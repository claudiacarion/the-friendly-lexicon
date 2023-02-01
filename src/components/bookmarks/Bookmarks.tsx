import React from 'react'
import { useNavigate } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io'

const Bookmarks = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='flex justify-between mb-10 text-cone'>
    <IoMdArrowRoundBack className='text-2xl cursor-pointer text-ctwo' onClick={()=> navigate(-1)}/>
  </div>

    <div>
      bookmarks
    </div>
    </>
  )
}

export default Bookmarks
