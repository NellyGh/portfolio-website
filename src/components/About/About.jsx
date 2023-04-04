import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectAboutInfo } from '../../store/slices/aboutInfo/aboutInfoSlice'
import Hobbies from '../Hobbies/Hobbies'
import Skills from '../Skills/Skills'
import './About.css'
import { Animate } from 'react-simple-animate';

function About() {
  const {skills,hobbies} = useSelector(selectAboutInfo)

  return (
    <>
    <Animate
           play
           duration={7}
           start={{opacity:'0'}}
           end={{opacity:'1'}}
        >
      <div className='about-theme'>
        <div className='about-light-theme'>
            <div className='circle red'></div>
            <div className='circle yellow'></div>
            <div className='circle green'></div>
        </div>
        <p className='about-title'><span>nellyghazaryan  $ &nbsp;</span> cat aboutnelly</p>
        <p className='about-txt'> <span>aboutnelly (main) $ &nbsp;</span> 
            Junior Frontend Developer with a passion for building 
            elegant and intuitive user interfaces.<br/>
            As a recent graduate in <span>Frontend Development </span> Courses  
            at <a rel="noreferrer" href='https://smartcode.am/hy/' target='_blank'>SmartCode Development School</a>,  I have a solid understanding of HTML, CSS,
            and JavaScript, and I'm comfortable working 
            with various web development tools such as Git, NPM.
            <br/> During my studies, I gained  experience in React JS, including building dynamic user interfaces, 
            managing state using Redux, and creating reusable components.

          </p>
      </div>
      <div className='about-theme'>
        <div className='about-light-theme'>
            <div className='circle red'></div>
            <div className='circle yellow'></div>
            <div className='circle green'></div>
        </div>
        <p className='about-title'><span>nellyghazaryan  $ &nbsp;</span> cd skills/tools</p>
        <span style={{margin:'18px'}}>skills/tools (main) $  &nbsp;</span> 
        <ul>
            {
              skills.map(skill => (
                <Skills
                    key={skill.id}
                    skill={skill.skill}
                    
                />
              ))
            }
        </ul>
      </div>
      <div className='about-theme'>
        <div className='about-light-theme'>
              <div className='circle red'></div>
              <div className='circle yellow'></div>
              <div className='circle green'></div>
          </div>
          <p className='about-title'><span>nellyghazaryan  $ &nbsp;</span> cd hobbies/interests</p>
        <span style={{margin:'18px'}}>hobbies/interests (main) $  &nbsp;</span> 
              <ul>
                {
                  hobbies.map(hobbie => (
                    <Hobbies
                      key={hobbie.id}
                      hobbie={hobbie.hobbie}
                      txt={hobbie.txt}
                    />
                  ))
                }
              </ul>
      </div>
      </Animate>
    </>
  )
}

export default  memo(About)
