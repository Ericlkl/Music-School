import React, {Component} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';
import InfoSection from './InfoSection';
import bg_img from '../assets/img/home_bg.jpg'

import intro_img from '../assets/img/intro.jpg'
import child_img from '../assets/img/teach_children.jpg';

class Home extends Component{
    render(){
        return(
            <div>
                <NavBar pages="home"/>
                <Hero bg_img={bg_img}
                    title="Pineland Music School"
                    subtitle="Learning Music is easier than you think"/>
                <InfoSection img={intro_img} imgPosition="left" title="What We do...">
                    <h2>The best learning experience for music</h2>
                    <p>Experience music lessons at their best. Guitar lessons, piano lessons, singing lessons, drum lessons, it's all here at Forte School of Music.</p>
                    <h2>Professional Teacher for all kind of instruments</h2>
                    <p>You can learn diffirent type of music here! </p>
                </InfoSection>

                <InfoSection img={child_img} 
                        bg_color={{ backgroundColor: 'rgba(100, 100, 100,0.1)' }}
                        imgPosition="right" 
                        title="Best Music School In Queensland">
                    <h2>We Teached 700+ children</h2>
                    <p>We cared about children</p>
                    <h2>We also provides 800+ instrument for student to use</h2>
                    <p>You don't need to purchase any instrument for tutorials.</p>
                </InfoSection>

                
                <Footer/>
            </div>
        )
    }
}

export default Home;