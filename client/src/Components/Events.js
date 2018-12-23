import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

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

class Events extends Component{
    render(){
        return(
            <div>
                <NavBar page="events">
                    <Hero/>
                </NavBar>
                <h1>
                    Events
                </h1>
                <Footer/>
            </div>
        )
    }
}

export default Events;