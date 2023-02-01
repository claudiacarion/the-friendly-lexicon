import React from 'react'
import { useNavigate } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col mb-10'>
      <IoMdArrowRoundBack className='text-2xl cursor-pointer mb-5 text-cone justify-self-start' onClick={()=> navigate('/')}/>
      <div className='border-4 border-cfour rounded-lg bg-cfour'>
        <h4 className='text-md text-cthree text-center mt-2 mb-3'>about the friendly lexicon</h4>
        <p className='text-sm text-left text-cone ml-3 mr-3 mt-2 mb-2'>This app was created as a hack project for the Post Graduate Program at School of Applied Technology <a href="http://salt.dev">&lt;/salt&gt;</a>.<br/><br/>
        The main focus of this project was to learn Tailwind CSS and practise developing the frontend of an app.
        The app is called the friendly lexicon because it was designed to be accessible to people with dyslexia and/or color blindness.</p>
        <div className='flex justify-around mt-5 mb-3 text-cone'>
          <a href='https://github.com/claudiacarion'><AiFillGithub className='text-2xl text-ctwo cursor-pointer' /></a>
          <a href='https://www.linkedin.com/in/claudia-pereira-carion/'><AiFillLinkedin className='text-2xl text-ctwo cursor-pointer' /></a>
          <a href='mailto:claudia.carion@appliedtechnology.se'><MdEmail className='text-2xl text-ctwo cursor-pointer' /></a>
        </div>
      </div>
    </div>
  )
}

export default About
