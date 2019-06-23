import React from 'react';

const InfoSection = ({title, bg_color, imgPosition, img, children}) =>{
    return (
        <div style={bg_color} className="info-section">
            <div className="container">
                <h1 className="ui header info-title udl-heading">{title}</h1>
                <div className="info-box">
                    {children}
                </div>
            <div style={ imgPosition === "left" ? {
                    gridColumn: 1,
                    gridRow: 2
                } : {}} className="image-box">
                    <img src={img} alt="section-img"/>
                </div>
            </div>
        </div>
    )
}

export default InfoSection