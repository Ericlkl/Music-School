import React, {Component} from 'react';
import NavBar from './NavBar';
import InfoSection from './InfoSection';
import Hero from './Hero';
import Footer from './Footer';

import school_img from '../assets/img/road.jpg'
import contact_img from '../assets/img/mailbox.jpg'
import bg_img from '../assets/img/aboutus_bg.jpg'

class AboutUs extends Component{
    render(){
        return(
            <div>
                <NavBar pages="aboutus"/>
                <Hero bg_img={bg_img}
                    title="About US"
                    subtitle="Professional Music Insititute in Australia"/>

                <InfoSection title="Our History" imgPosition="left" img={school_img} >
                    <h2>35 Years Teaching Experience</h2>
                    <p>Pineland Music school was established in {2019 - 35}. It has passed a long time that teaching different kind of people about playing music and theory.  </p>
                </InfoSection>

                <InfoSection title="Contact US" img={contact_img} bg_color={{backgroundColor: 'rgb(233, 233, 233)'}} >
                    <h2>Telphone Number :</h2>
                    <h3>0415 869 377</h3>
                    <h2>Address :</h2>
                    <h3>70 Pinelands Rd, Sunnybank Hills QLD 4109 Austrlia</h3>
                    <h2>Email :</h2>
                    <h3> pineland_music_school@gmail.com </h3>
                </InfoSection>
                
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;