import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <div style={{
            padding: '150px'
        }} className="ui text container">
          <h1 className="ui inverted header">
            Pineland Music School
          </h1>
          <h2>Learning Music is easier than you think.</h2>
          <div className="ui huge primary button">Learn More<i className="right arrow icon"></i></div>
        </div>
    )
}



class Home extends Component{
    render(){
        return(
            <div>
                <NavBar page="home">
                    <Hero/>
                </NavBar>
                
                <h1>Home</h1>
                <Footer/>
            </div>
        )
    }
}

export default Home;