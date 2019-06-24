import React, { useState, useEffect, useContext, Fragment }from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/Auth/AuthContext';

const NavBar = (props) => {

  // Navbar State
  const [ apperance , setApperance ] = useState({
    width: 0,
    transformNavbar : false,
    navbarOrientation: "vertical",
    appendMenu: false
  });

  const guestLinks = <Fragment>
    <Link className="ui large inverted button orange" to="/register">Sign Up</Link>
    <Link className="ui large inverted button" to="/login">Login</Link>
  </Fragment>;

  // Context State
  const {isAuthenticated, user, loadUser,logout } = useContext(AuthContext);

  const userLinks = <Link className="ui large inverted button orange" onClick={logout} to="/">Logout</Link>;

  // Navbar function
  const hamburgerMenuClicked = () => setApperance({ 
    ...apperance ,
    appendMenu : !apperance.appendMenu
  });
  
  const handleScroll = (event) => {
    if(event.pageY > 300){
      setApperance({ ...apperance, transformNavbar: true })
    } else {
      setApperance({ ...apperance, transformNavbar: false })
    }
  };

  const updateWindowDimensions = () => {
    // Call when the vh is changed
    setApperance({ 
      ...apperance,
      width: window.innerWidth
    });

    if (window.innerWidth > 854){
      setApperance({
        ...apperance,
        navbarOrientation: "horizontial", appendMenu: true 
      })
    } 
    else {
      setApperance({
        ...apperance,
        navbarOrientation: "vertical",
        appendMenu: false , 
        transformNavbar: true
      })
    }
  }

  useEffect(() => {
    // ComponentDidMount
      updateWindowDimensions();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateWindowDimensions);
      loadUser();

    // ComponentWillUnMount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowDimensions);
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div id={apperance.transformNavbar === true || 
      apperance.navbarOrientation === "vertical" ? "transfromNavbar" : "normalNavbar"} className="navbar">
      <div className="container">

        <div className={apperance.navbarOrientation}>

        <div className="menu-bar"
            style={ apperance.navbarOrientation === "vertical" ? 
            { display: 'flex' } : { display : 'none' }}>
          <h1 className="logo">Pineland Music School</h1>
          
          <div className="hamburger-menu" 
              onClick={hamburgerMenuClicked}
              >

            <div className="line"/>
            <div className="line"/>
            <div className="line"/>
          </div>
        </div>

          <div style={ apperance.appendMenu === false ? {display: 'none'} : {} } 
              className="page-links">
            <Link className={props.pages === "home" ? "active route" : "route"} to="/">Home</Link>
            <Link className={props.pages === "courses" ? "active route" : "route"} to="/courses">Course</Link>
            <Link className={props.pages === "events" ? "active route" : "route"} to="/events">Events</Link>
            <Link className={props.pages === "teachers" ? "active route" : "route"} to="/teachers">Teachers</Link>
            <Link className={props.pages === "aboutus" ? "active route" : "route"} to="/aboutus">About Us</Link>
          </div>

          <div style={ apperance.appendMenu === false ? {display: 'none'} : {} }
            className="members-sections">
              { !isAuthenticated ? guestLinks : userLinks }
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar;