import React from 'react'
import { useNavigate } from 'react-router-dom';
import {MdOutlineArrowBack} from 'react-icons/md'

const About = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='flex justify-between mb-5 text-cone'>      <MdOutlineArrowBack className='text-2xl cursor-pointer	' onClick={()=> navigate('/')}/>
    </div>
    <div className='border-4 border-cfour rounded-lg bg-cfour'>
      <h4 className='text-md text-cthree text-center mt-2 mb-3'>about the friendly lexicon</h4>
      <p className='text-sm text-left ml-3 mr-3 mt-1 mb-2'>info info info</p>
    </div>
    </>
  )
}

export default About
