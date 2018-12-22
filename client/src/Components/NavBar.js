import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component{
    render(){
        return(
            <div className="ui borderless main menu" >
            <div className="ui text container">
              <div className="header item">
                <img className="logo" src=""/>
                <Link to="/">Music School</Link>
              </div>
              <Link to="/courses" className="item">Courses</Link>
              <Link to="/events" className="item">Events</Link>
              <Link to="/teachers" className="item">Teachers</Link>

              <div className="ui right floated item">
                <Link to="/signup" className="item">Sign Up</Link>
                <Link to="/login" className="item">Login</Link>
              </div>
            </div>
          </div>
        )
    }
}

export default NavBar;