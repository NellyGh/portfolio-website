import React, { memo, useEffect} from 'react'
import './Home.css'
import {  useSelector } from 'react-redux';
import {selectPersonalInfo } from '../../store/slices/personalInfo/personalInfoSlice';
import Bio from '../Bio/Bio';
import avatar from '../../Images/nelly.png'
import { Animate } from 'react-simple-animate';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Socials from '../Socials/Socials';

function Home() {
  const {infoData,socials} = useSelector(selectPersonalInfo)

  return (
    <div className='main'>
      <div className='main-info'>
        <Animate  play
          delay={1.5}
          duration={2.5}
          start={{opacity:'0'}}
          end={{opacity:'1'}}>
          <div className='frame'>
            <img src={avatar} alt="" />
          </div>
          <ul className='bio' >
          {
            infoData.map(info => (
             
                  <Bio
                    key={info.id}
                    txt={info.txt}
                    emoji={info.emoji}
                  />   
            ))
          }
        </ul>
      </Animate>
      </div>
      <Animate
         play
         duration={2.5}
         start={{transform: "translateY(-1200px)",}}
         end={{transform: "translateY(0px)"}}
      >
        <div className='about'>
          {
            socials.map(el =>(
                <PersonalInfo
                  key={el.id}
                  fullName={el.fullName}
                  position={el.position}
                />
            ))
          }
          <div className='row'>
          <a className='cv' href='https://drive.google.com/file/d/1kJ3czE-YrMcLxraPFA5Qzw3Sj-8krlLY/view?usp=sharing' rel="noreferrer" target='_blank'>Download Resume</a>
          <ul>
          <p>How to reach me:</p>
          {
            socials[0].links.map(link => (
                  <Socials
                    key={link.id}
                    link={link.link}
                    icon={link.icon}
                  />
            ))
          }
           </ul>
          </div>
        </div>
      </Animate>
    </div>
  )
}

export default memo(Home)