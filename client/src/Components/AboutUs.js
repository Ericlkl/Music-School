import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import bg_img from '../assets/img/aboutus_bg.jpg'

class AboutUs extends Component{
    render(){
        return(
            <div>
            <NavBar page="aboutus"
                    backgroundImg={bg_img}
                    title="About US"
                    subtitle="Professional Music Insititute in Australia"/>
                <h1>
                    AboutUs
                </h1>
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;