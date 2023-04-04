import React, { memo } from 'react'
import './Skills.css'

function Skills({skill}) {
  return (
    <>
        <li className='skill'><img src={skill} alt='' width={100}/></li>
        
    </>
     
  )
}

export default memo(Skills)
