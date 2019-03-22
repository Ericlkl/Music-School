import React, {Component} from 'react';

class Hero extends Component{
    render(){
        return (
            <div style={{
                background: `
                    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))
                    , url(${this.props.bg_img}) no-repeat center center/cover
                `
            }} className="hero">
                <div className="text-section">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            </div>
        )
    }
}

export default Hero;