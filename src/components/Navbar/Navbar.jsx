import './Navbar.css'
import React, { memo, useState } from 'react'
import NavItem from '../NavItem/NavItem'
import Toggler from '../Toggler/Toggler'
import { FaBars } from 'react-icons/fa'

function Navbar() {
    const linksData = [
        {
            id:'1',
            text:'Home',
            href:'/'
        },
        {
            id:'2',
            text:'About Me',
            href:'/about'
        },
        {
            id:'3',
            txt:'js',
            href:'/'
        },
        {
            id:'4',
            text:'Portfolio',
            href:'/portfolio'
        },

    ]
    // const [smallScreen, setSmallScreen] = useState(false)
    // const handleClick = () => {
    //     setSmallScreen(!smallScreen)
    // }
  return (
    <nav className='navbar'>
        <ul>
            
            {
                linksData.map(link =>(
                    <NavItem 
                        key={link.id}
                        text={link.text}
                        href={link.href}
                        txt={link.txt}
                    />
                ))  
            }
           <Toggler/>
           <div className='bar-icons'>
                <FaBars/>
           </div>
           
        </ul>
        
    </nav>
  )
}

export default memo(Navbar)