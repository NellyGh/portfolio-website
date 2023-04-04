import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import './NavItem.css'


function NavItem({text,href,txt}) {
  return (
    <>
        <li className='navbar-item'>
            <NavLink  className={({isActive})=>isActive ? "activeMenu":""} to={href}>
                    {text}
                <h1>{txt}</h1>
            </NavLink>
            
        </li>
    </>
  )
}


export default memo(NavItem)