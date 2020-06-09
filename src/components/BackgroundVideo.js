import React from 'react';

import zoom from '../images/neon_zoom_comp.mp4';

const BackgroudndVideo = () => {
    return (
        <video autoPlay loop muted
        style={{
            position: "absolute",
            width: "100%",  
            left: "50%",
            top: "50%", 
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            opacity: "0.7"
        }}
        >
            <source src={zoom} type="video/mp4" />       
        </video>
    )
}

export default BackgroudndVideo;