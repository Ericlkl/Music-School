import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import bg_img from '../assets/img/aboutus_bg.jpg'

const Description = () => {
    return (
        <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">

            <div style={{
                padding:'30px'
            }} className="row">
                <div className="center aligned column">
                    <h1>What We do...</h1>
                </div>
            </div>

            <div style={{
                marginTop: '30px',
                marginBottom: '30px'
            }} className="row">
                <div className="eight wide column">
                <h3 className="ui header">The best learning experience for music</h3>
                <p>Experience music lessons at their best. Guitar lessons, piano lessons, singing lessons, drum lessons, it's all here at Forte School of Music. </p>
                <h3 className="ui header">It is never be late to start</h3>
                <p> We teach baby music, music for kids, music for adults.</p>
                </div>
                <div className="seven wide right floated column">
                <img src={bg_img} className="ui large bordered rounded image"/>
                </div>
            </div>
            </div>
        </div>
    )
}

class AboutUs extends Component{
    render(){
        return(
            <div>
            <NavBar page="aboutus"
                    backgroundImg={bg_img}
                    title="About US"
                    subtitle="Professional Music Insititute in Australia"/>
                <Description/>
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;