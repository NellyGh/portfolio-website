import React, { useCallback, useState } from "react";
import IMAGES from "../../Images";

const RandomImage = (Component) => (props) => {
    const [imageUrl, setImageUrl] = useState('')

    const selectRandomImage  = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * IMAGES.length);
        setImageUrl(prev => IMAGES[randomIndex]);
    }, [])

    return (
        <Component {...props} {...{imageUrl,selectRandomImage}} />
    )
}

export default RandomImage