import React from 'react';

const InfoSection = (props) =>{
    return (
        <div style={props.bg_color} className="info-section">
            <div className="container">
                <h1 className="ui header info-title">{props.title}</h1>
                <div className="info-box">
                    {props.children}
                </div>
                <div style={ props.imgPosition === "left" ? {
                    gridColumn: 1,
                    gridRow: 2
                } : {}} className="image-box">
                    <img src={props.img} alt="section-img"/>
                </div>
            </div>
        </div>
    )
}

export default InfoSection