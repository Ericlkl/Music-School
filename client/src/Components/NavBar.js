import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component{
    render(){
        return (
          <div className="navbar">
            <div className="container">

              <div className="route-section">
                <div className="page-links">
                  <Link className="route" to="/">Home</Link>
                  <Link className="route" to="/">Course</Link>
                  <Link className="route" to="/">Events</Link>
                  <Link className="route" to="/">Teachers</Link>
                </div>
                <div className="members-sections">
                  <Link className="ui large inverted button" to="/signup">Sign Up</Link>
                  <Link className="ui large inverted button" to="/login">Login</Link>
                </div>
              </div>

              <div className="text-section">
                <h1 className="title">Title</h1>
                <h2 className="subtitle">Subtitle</h2>
              </div>
              
            </div>
          </div>
        )
    }
}

export default NavBar;