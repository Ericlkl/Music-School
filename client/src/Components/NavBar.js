import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom'

class NavBar extends Component{

    state= {
      width: 0,
      transformNavbar : false,
      navbarOrientation: "vertical",
      appendMenu: false
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
        this.setState({navbarOrientation: "horizontial", appendMenu: true })
      } else {
        this.setState({navbarOrientation: "vertical", appendMenu: false , transformNavbar: true})
      }
    }

    hamburgerMenuClicked = () => {
      this.setState({appendMenu : !this.state.appendMenu});
    }
    
    handleScroll = (event) => {
      if(event.path[1].scrollY > 450){
        this.setState({ transformNavbar: true })
      } else {
        this.setState({ transformNavbar: false })
      }
    };

    render(){
        return (
          <div id={this.state.transformNavbar === true || 
            this.state.navbarOrientation === "vertical" ? "transfromNavbar" : "normalNavbar"} className="navbar">
            <div className="container">

              <div className={this.state.navbarOrientation}>
                <div className="hamburger-menu" 
                    onClick={this.hamburgerMenuClicked}
                style={ this.state.navbarOrientation === "vertical" ? 
                  { display: 'flex' } : { display : 'none' }
                }>
                  <div className="line"/>
                  <div className="line"/>
                  <div className="line"/>
                </div>

                <div style={ this.state.appendMenu === false ? {display: 'none'} : {} } 
                    className="page-links">
                  <Link className={this.props.pages === "home" ? "active route" : "route"} to="/">Home</Link>
                  <Link className={this.props.pages === "courses" ? "active route" : "route"} to="/courses">Course</Link>
                  <Link className={this.props.pages === "events" ? "active route" : "route"} to="/events">Events</Link>
                  <Link className={this.props.pages === "teachers" ? "active route" : "route"} to="/teachers">Teachers</Link>
                  <Link className={this.props.pages === "aboutus" ? "active route" : "route"} to="/aboutus">About Us</Link>
                </div>
                <div style={ this.state.appendMenu === false ? {display: 'none'} : {} }
                 className="members-sections">
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