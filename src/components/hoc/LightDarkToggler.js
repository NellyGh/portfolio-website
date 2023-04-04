import React, { useCallback, useState } from "react";



const LightDarkToggler = (Component) => (props) => {
   
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = useCallback(() => {
        setDarkMode(prev => !prev)
    }, [])
  
    return (
        <Component {...props} {...{darkMode,toggleDarkMode}} />
    )
}

export default LightDarkToggler