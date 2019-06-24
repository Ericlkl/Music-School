import React, {Fragment} from 'react';

import NavBar from '../public/NavBar';
import InfoSection from '../public/InfoSection';
import Hero from '../public/Hero';
import Footer from '../public/Footer';

import school_img from '../../assets/img/road.jpg'
import contact_img from '../../assets/img/mailbox.jpg'
import bg_img from '../../assets/img/aboutus_bg.jpg'
import join_us from '../../assets/img/join_us.jpg'



const AboutUs = () => { 
    return(
        <Fragment>
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

            <InfoSection title="Join Us" img={join_us} imgPosition="left">
                <h1>Join US Form</h1>
            </InfoSection>
            
            <Footer/>
        </Fragment>
    )

}

export default AboutUs;