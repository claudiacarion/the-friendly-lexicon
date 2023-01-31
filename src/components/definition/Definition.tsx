import React, { useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import {MdOutlineArrowBack} from 'react-icons/md'
import {BsBookmarkHeart} from 'react-icons/bs'
import {AiFillSound} from 'react-icons/ai'

const Definition = () => {
  const { word } = useParams<{word: string}>();
  const navigate = useNavigate();
  const [definitionData, setDefData] = useState([] as any[]);

  useEffect(() => {
    const fetchDefinition = async () => {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      setDefData(data);
    }
    fetchDefinition();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <><div className='flex justify-between mb-10 text-cone'>
      <MdOutlineArrowBack className='text-2xl cursor-pointer	' onClick={()=> navigate('/')}/>
      <BsBookmarkHeart className='text-2xl' />
    </div>
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold h-20 w-64 text-cfive bg-ctwo rounded-md grid grid-cols-1 place-items-center mb-5'>{word}</h1>
      <AiFillSound className='text-xl text-cone mb-5' />
    </div>
    <div>
      <div className='border-4 border-cfour rounded-md bg-cfour'>
      <h4 className='text-md text-cthree text-center mt-2'>definition</h4>
        {definitionData.map (def =>
          def.meanings.map((meaning: { partOfSpeech:string, definitions:[] }) =>
          (<ul><li key={meaning.partOfSpeech} className='text-lg text-cone mt-3 ml-3'>{meaning.partOfSpeech}
          {meaning.definitions.map((define: { definition:string }) =>
            <ul><li key={define.definition} className='text-sm list-disc text-left ml-8 mr-8 mt-1 mb-2'>{define.definition}</li></ul>
            )}
            </li></ul>)))}
            </div>
            <div className='border-4 border-cfour rounded-md bg-cfour mt-5'>
      <h4 className='text-md text-cthree text-center mt-2 mb-3'>synonyms</h4>
      <div className='grid grid-cols-2'>
        {definitionData.map (def => 
          def.meanings.map ((synonym: { synonyms:[] }) =>
          synonym.synonyms.map ((synonym: string) =>
          (<ul><li key={synonym} className='text-sm text-left ml-3 mr-3 mt-1 mb-2'>{synonym}</li></ul>))))}
          </div>
          </div>
    </div></>
  )
}

export default Definition
