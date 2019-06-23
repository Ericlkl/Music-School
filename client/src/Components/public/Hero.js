import React from 'react';

const Hero = ({bg_img, title, subtitle}) => {
    return (
        <div style={{
            background: `
                linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))
                , url(${bg_img}) no-repeat center center/cover
            `
        }} className="hero">
            <div className="text-section">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
    )
}

export default Hero;