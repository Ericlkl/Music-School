import React, {Component} from 'react';

class InfoSection extends Component{
    render(){
        return (
            <div className="info-section">
                <div className="container">
                    <h1 className="ui header info-title">{this.props.title}</h1>
                    <div className="info-box">
                        {this.props.infoArray.map( info => info)}
                    </div>
                    <div style={ this.props.floatImgLeft === true ? {
                        gridColumn: 1,
                        gridRow: 2
                    } : {}} className="image-box">
                        <img src={this.props.img} alt="section-img"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoSection