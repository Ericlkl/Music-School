import React, {Component} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';
import InfoSection from './InfoSection';
import bg_img from '../assets/img/home_bg.jpg'

import intro_img from '../assets/img/intro.jpg'

class Home extends Component{
    render(){
        return(
            <div>
                <NavBar pages="home"/>
                <Hero bg_img={bg_img}
                    title="Pineland Music School"
                    subtitle="Learning Music is easier than you think"/>
                <InfoSection img={intro_img} 
                            infoArray={[
                                <h2>The best learning experience for music</h2>,
                                <p>Experience music lessons at their best. Guitar lessons, piano lessons, singing lessons, drum lessons, it's all here at Forte School of Music.</p>,
                                <h2>The best learning experience for music</h2>,
                                <p>Experience music lessons at their best. Guitar lessons, piano lessons, singing lessons, drum lessons, it's all here at Forte School of Music.</p>,
                                <h2>The best learning experience for music</h2>,
                                <p>Experience music lessons at their best. Guitar lessons, piano lessons, singing lessons, drum lessons, it's all here at Forte School of Music.</p>
                            ]}
                            floatImgLeft={true}
                            title="What We do..."/>
                <Footer/>
            </div>
        )
    }
}

export default Home;