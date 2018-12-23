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
                    <Link to="/" className="item">Banana Pre-Order</Link>
                    <Link to="/" className="item">DNA FAQ</Link>
                    <Link to="/" className="item">How To Access</Link>
                    <Link to="/" className="item">Favorite X-Men</Link>
                  </div>
                </div>
                <div className="seven wide column">
                  <h4 className="ui inverted header">Developed By KA LONG LEE (Eric)</h4>
                  <p>It is a profolio project for building a fullstack web application for music school. The school is not exist in the real world.</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Footer;