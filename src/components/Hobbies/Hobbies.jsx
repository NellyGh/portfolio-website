import React, { memo } from 'react'
import './Hobbies.css'

function Hobbies({hobbie,txt}) {
  return (
    <li className='hobbie'>{hobbie} <span>{txt}</span></li>
  )
}

export default memo(Hobbies)

