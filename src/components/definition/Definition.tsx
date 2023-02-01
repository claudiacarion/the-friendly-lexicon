import React, { useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import {AiFillSound} from 'react-icons/ai'
import {BiLoaderCircle} from 'react-icons/bi'
import {MdError} from 'react-icons/md'

const Definition = () => {
  const { word } = useParams<{word: string}>();
  const navigate = useNavigate();
  const [definitionData, setDefData] = useState([] as any[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [audio, setAudio] = useState();

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        setDefData(data);
        setLoading(false);
        const phonetics = data[0].phonetics;
        if(!phonetics.length) return;
        const url = phonetics[0].audio;
        console.log('URL', url)
        setAudio(url);
      } catch {
        setError(true);
      }
    }
    fetchDefinition();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) {
    return (
      <div className='flex flex-col items-center mt-20'>
        <MdError className='text-4xl text-ctwo mb-3' />
        <p className='text-cone text-xl mb-5'>not found</p>
        <IoMdArrowRoundBack className='text-2xl cursor-pointer text-ctwo' onClick={()=> navigate('/')}/>
      </div>
  )}

  if (loading) {
    return (
      <div className='flex flex-col items-center mt-20'>
        <BiLoaderCircle className='text-4xl text-ctwo animate-spin mb-3' />
        <p className='text-cone text-xl'>loading</p>
      </div>
    )
  }
  
  let sound = new Audio(audio);

  const playSound = () => {
    sound.play();
  }

  return (
    <>
    <div className='flex justify-between mb-5 text-cone'>
      <IoMdArrowRoundBack className='text-2xl cursor-pointer text-ctwo' onClick={()=> navigate('/')}/>
      <BsFillBookmarkHeartFill className='text-2xl cursor-pointer text-ctwo' onClick={()=> navigate('/bookmarks')}/>
    </div>
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl h-20 w-auto text-cfive bg-ctwo rounded-lg grid grid-cols-1 place-items-center mb-5 pl-8 pr-8'>{word}</h1>
      <AiFillSound className='text-2xl text-ctwo mb-5 cursor-pointer' onClick={playSound}/>
    </div>
    <div>
      <div className='border-4 border-cfour rounded-lg bg-cfour'>
        <h4 className='text-md text-cthree text-center mt-2'>definition</h4>
        {definitionData.map (def =>
          def.meanings.map((meaning: { partOfSpeech:string, definitions:[] }) =>
          (<ul><li key={meaning.partOfSpeech} className='text-md text-cone mt-5 ml-3'>{meaning.partOfSpeech}
          {meaning.definitions.map((define: { definition:string }) =>
            <ul><li key={define.definition} className='text-sm list-disc text-left ml-8 mr-8 mt-1 mb-2'>{define.definition}</li></ul>
            )}
            </li></ul>)))}
      </div>
      <div className='border-4 border-cfour rounded-lg bg-cfour mt-5'>
        <h4 className='text-md text-cthree text-center mt-2 mb-3'>synonyms</h4>
        <div className='grid grid-cols-2'>
          {definitionData.map (def => 
            def.meanings.map ((synonym: { synonyms:[] }) =>
            synonym.synonyms.map ((synonym: string) =>
            (<ul><li key={synonym} className='text-sm text-left ml-3 mr-3 mt-1 mb-2'>{synonym}</li></ul>))))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Definition
