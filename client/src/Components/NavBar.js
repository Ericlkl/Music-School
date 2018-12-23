import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component{
    render(){
        const {page, backgroundImg, title , subtitle} = this.props;

        const backgroundStyle = {
          backgroundImage: ` linear-gradient( rgba(0,0,0,0.75), rgba(0,0,0,0.75) ), url(${backgroundImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        };

        return(
          <div style={backgroundStyle} className="ui inverted vertical masthead center aligned segment">
          <div className="ui container">
  
            <div className="ui large secondary inverted pointing menu">

              <Link to="/" className={ page === "home" ? "item active" : "item" }>
                Home
              </Link>

              <Link to="/courses" className={ page === "courses" ? "item active" : "item" }>
                Courses
              </Link>

              <Link to="/events" className={ page === "events" ? "item active" : "item" }>
                Events
              </Link>

              <Link to="/teachers" className={ page === "teachers" ? "item active" : "item" }>
                Teachers
              </Link>

              <Link to="/aboutus" className={ page === "aboutus" ? "item active" : "item" }>
                AboutUs
              </Link>
  
              <div className="right item">
                <Link to="/signup" className="ui inverted button">Sign Up</Link>
                <Link to="/login" className="ui inverted button">Login</Link>
              </div>
            </div>

            <div style={{
              padding: '200px'
            }} className="ui text container">

              <h1 className="ui inverted header">
                {title}
              </h1>
              <h2>{subtitle}</h2>
            </div>

          </div>
        </div>
        )
    }
}

export default NavBar;