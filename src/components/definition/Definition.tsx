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
      <MdOutlineArrowBack className='text-xl cursor-pointer	' onClick={()=> navigate('/')}/>
      <BsBookmarkHeart className='text-xl' />
    </div>
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold h-24 w-64 text-cfive bg-ctwo rounded-md grid grid-cols-1 place-items-center mb-5'>{word}</h1>
      <AiFillSound className='text-xl text-cone mb-5' />
    </div>
    <div className=''>
      <h4 className='text-md text-cthree'>definition</h4>
        {definitionData.map (def =>
          def.meanings.map((meaning: { definitions:[] }) =>
          meaning.definitions.map((define: { definition: string }) =>
          (<ul><li className='text-sm'>{define.definition}</li></ul>))))}
      <h4 className='text-md text-cthree'>synonyms</h4>
        {definitionData.map (def => 
          def.meanings.map ((synonym: { synonyms:[] }) =>
          synonym.synonyms.map ((syn: string) =>
          (<ul><li className='text-sm'>{syn}</li></ul>))))}
    </div></>
  )
}

export default Definition
