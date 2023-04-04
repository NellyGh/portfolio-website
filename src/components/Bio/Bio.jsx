import React, { memo } from 'react'


function Bio({emoji,txt}) {
  return (
    <>
        <li>
            <span>{emoji}</span>
            &nbsp;&nbsp;
            {txt}
           
        </li>
    </>
  )
}

export default memo(Bio)