import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component{
    render(){
        return (
          <div className="navbar">
            <div className="container">
              <div className="page-links">
                <Link className={this.props.pages === "home" ? "active route" : "route"} to="/">Home</Link>
                <Link className={this.props.pages === "courses" ? "active route" : "route"} to="/courses">Course</Link>
                <Link className={this.props.pages === "events" ? "active route" : "route"} to="/events">Events</Link>
                <Link className={this.props.pages === "teachers" ? "active route" : "route"} to="/teachers">Teachers</Link>
                <Link className={this.props.pages === "aboutus" ? "active route" : "route"} to="/aboutus">About Us</Link>
              </div>

              <div className="members-sections">
                <Link className="ui large inverted button" to="/signup">Sign Up</Link>
                <Link className="ui large inverted button" to="/login">Login</Link>
              </div>
            </div>
          </div>
        )
    }
}

export default NavBar;