import React from 'react'

function Socials({link,icon}) {
  return (
    <>
        <li><a href={link} target='_blank'>{icon}</a></li>

    </>
  )
}

export default Socials