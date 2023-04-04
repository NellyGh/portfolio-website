import React, { memo } from 'react'
import { FaCode, FaSafari } from 'react-icons/fa'
import './Portfolio.css'
import { Animate } from 'react-simple-animate';

function PortfolioInfo({name,img,linkCode,linkDemo}) {
  return (
    <div>
    <Animate
        play
        duration={2.5}
        start={{transform: "translateY(-1200px)",}}
        end={{transform: "translateY(0px)"}}
    >
        <img src={img} alt="" width={400}/>
            <h3>{name}</h3>
            <a className='cv button' rel="noreferrer" href={linkCode} target='_blank'><FaCode/> Source Code</a>
            <a className='cv button' rel="noreferrer"  href={linkDemo} target='_blank'><FaSafari/> Live Demo</a>
    </Animate>
    </div>
  )
}

export default memo(PortfolioInfo)
