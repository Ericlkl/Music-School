import React, {Component} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';
import bg_img from '../assets/img/teachers_bg.jpg';

class JoinUs extends Component{
    render(){
        return(
            <div>
                <NavBar pages="joinus"/>
                <Hero bg_img={bg_img}
                    title="Join Us"
                    subtitle="Professional Teachers in Australia"/>
                <Footer/>
            </div>
        )
    }
}

export default JoinUs;