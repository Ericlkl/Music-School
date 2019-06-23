import React from 'react';

import NavBar from '../public/NavBar';
import Hero from '../public/Hero';
import Footer from '../public/Footer';
import InfoSection from '../public/InfoSection';

import bg_img from '../../assets/img/home_bg.jpg'
import intro_img from '../../assets/img/intro.jpg'
import child_img from '../../assets/img/teach_children.jpg';

const Feature = ({icon, title, desc}) => {
    return (
        <div className="feature">
            <i className={icon + " fas fa-3x"}></i>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}


const Features = () => {
    return (
        <div className="features">
            <div className="container">
                <h1 className="feature-title udl-heading">What We Provides...</h1>
                <h3 className="feature-description">We understand what our customer want.
                We know you’re always busy. No time for learning.
                So let us make a perfect plan for you,
                we’re really good at it, we promise! </h3>
                <Feature icon="fa-moon" 
                    title="Night Tutorial"
                    desc="Never cook again! We really mean that. 
                    Our subscription plans include up to 365 days/year 
                    coverage. You can also choose to order more flexibly 
                    if that's your style."
                />
                <Feature icon="fa-drum" 
                    title="No BYO instrument"
                    desc="Never cook again! We really mean that. 
                    Our subscription plans include up to 365 days/year 
                    coverage. You can also choose to order more flexibly 
                    if that's your style."
                />
                <Feature icon="fa-clock" 
                    title="Cancel anytime"
                    desc="Never cook again! We really mean that. 
                    Our subscription plans include up to 365 days/year 
                    coverage. You can also choose to order more flexibly 
                    if that's your style."
                />
                <Feature icon="fa-file-contract" 
                    title="No Contract"
                    desc="Never cook again! We really mean that. 
                    Our subscription plans include up to 365 days/year 
                    coverage. You can also choose to order more flexibly 
                    if that's your style."
                />
            </div>
        </div>
    )
}

const Home = () => {
    return(
        <div>
            <NavBar pages="home"/>
            <Hero bg_img={bg_img}
                title="Pineland Music School"
                subtitle="Learning Music is easier than you think"/>
                
            <InfoSection img={intro_img} 
                    imgPosition="left" 
                    title="What We do...">
                <h2>The best learning experience for music</h2>
                <p>Experience music lessons at their best. Guitar lessons, piano lessons, singing lessons, drum lessons, it's all here at Forte School of Music.</p>
                <h2>Professional Teacher for all kind of instruments</h2>
                <p>You can learn diffirent type of music here! </p>
            </InfoSection>

            <Features/>

            <InfoSection img={child_img} 
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

export default Home;