import React, { memo, useEffect, useState } from 'react'
import LightDarkToggler from '../hoc/LightDarkToggler';
import './Toggler.css'


function Toggler({darkMode,toggleDarkMode}) {
    
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
      }, [darkMode]);

     

  return (
    <li className='dark-light-item'>
      <span onClick={()=> toggleDarkMode()}>{darkMode ?  '🌑' : '🌕'}</span>   
    </li>
  )
}

export default memo(LightDarkToggler(Toggler))