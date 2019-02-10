import React, {Component} from 'react';
import NavBar from './NavBar';
import InfoSection from './InfoSection';
import Hero from './Hero';
import Footer from './Footer';
import bg_img from '../assets/img/aboutus_bg.jpg'

class AboutUs extends Component{
    render(){
        return(
            <div>
                <NavBar pages="aboutus"/>
                <Hero bg_img={bg_img}
                    title="About US"
                    subtitle="Professional Music Insititute in Australia"/>

                <InfoSection title="Our History" imgPosition="left" img={bg_img} >
                    <h2>The best learning experience for music</h2>
                    <p>Experience music lessons at their best. Guitar lessons, piano lessons, singing lessons, drum lessons, it's all here at Forte School of Music. </p>
                    <h2>It is never be late to start</h2>
                    <p> We teach baby music, music for kids, music for adults.</p>
                </InfoSection>

                <InfoSection title="Contact US" img={bg_img} bg_color={{backgroundColor: 'rgb(244, 244, 244)'}} >
                    <h2>The best learning experience for music</h2>
                    <p>Experience music lessons at their best. Guitar lessons, piano lessons, singing lessons, drum lessons, it's all here at Forte School of Music. </p>
                    <h2>It is never be late to start</h2>
                    <p> We teach baby music, music for kids, music for adults.</p>
                </InfoSection>
                
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;