import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div style={{
                padding: "50px",
                marginTop: "100px"
            }} className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  <h4 className="ui inverted header">About</h4>
                  <div className="ui inverted link list">
                  <Link to="/courses" className="item">Courses</Link>
                  <Link to="/events" className="item">Events</Link>
                  <Link to="/teachers" className="item">Teachers</Link>
                  <Link to="/aboutus" className="item">AboutUs</Link>
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Services</h4>
                  <div className="ui inverted link list">
                    <a href="#" className="item">Banana Pre-Order</a>
                    <a href="#" className="item">DNA FAQ</a>
                    <a href="#" className="item">How To Access</a>
                    <a href="#" className="item">Favorite X-Men</a>
                  </div>
                </div>
                <div className="seven wide column">
                  <h4 className="ui inverted header">Footer Header</h4>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Footer;