import React, {Fragment} from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';

const PageFrame = ({children, page, heroImg, heroTitle, heroSubtitle }) => {
    return (
        <Fragment>
            <NavBar pages={page}/>
            <Hero bg_img={heroImg} title={heroTitle} subtitle={heroSubtitle}/>

            {children}
            <Footer/>
        </Fragment>
    )
}

export default PageFrame
