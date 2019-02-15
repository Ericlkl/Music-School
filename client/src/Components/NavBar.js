import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom'

class NavBar extends Component{

    state= {
      width: 0,
      transformNavbar : false,
      navbarOrientation: "vertical"
    }
    
    componentDidMount = () => {
      this.updateWindowDimensions();
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.updateWindowDimensions);
    };
    
    componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.updateWindowDimensions);
    };

    updateWindowDimensions = () => {
      // Call when the vh is changed
      this.setState({ 
        width: window.innerWidth
      });

      if (window.innerWidth > 854){
        this.setState({navbarOrientation: "horizontial"})
      } else {
        this.setState({navbarOrientation: "vertical", transformNavbar: true})
      }
    }
    
    handleScroll = (event) => {
      console.log('the scroll things', event.path[1].scrollY);
      console.log('vh width', this.state.width);
      if(event.path[1].scrollY > 450){
        this.setState({ transformNavbar: true })
      } else {
        this.setState({ transformNavbar: false })
      }
    };

    render(){
        return (
          <div id={this.state.transformNavbar === true ? "transfromNavbar" : "normalNavbar"} className="navbar">
            <div className="container">
              <div className={this.state.navbarOrientation}>
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
          </div>
        )
    }
}

export default NavBar;