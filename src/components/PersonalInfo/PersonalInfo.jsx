import './PersonalInfo.css'
import React  from 'react'



function PersonalInfo({fullName,position}) {

  return (
     <> 
          <p>Hello 👋 I'm</p>
          <section className="animation">
                <div className="first"><div>{fullName}</div></div>
                <div className="second"><div>{position}</div></div>
          </section>
    </>
  )
}

export default PersonalInfo