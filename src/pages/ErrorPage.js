import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RandomImage from '../components/hoc/RandomImage';

function ErrorPage({imageUrl,selectRandomImage}) {
  
  useEffect(() => {
    selectRandomImage();
  }, []);
  
    const navigate = useNavigate()
  return (
    <div className='err-page'>
        <span className='err-title'>sorry</span>
        <p className='err-txt'>we couldn't find that page</p>
        <img src={imageUrl} alt="" width={400} />
        <p className='navigate' onClick={() => navigate('/')}>Go to Nelly's website</p>
    </div>
  )
}

export default  RandomImage(ErrorPage)