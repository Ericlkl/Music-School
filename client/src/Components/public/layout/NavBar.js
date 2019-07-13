import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/Auth/AuthContext';
import MsgBoxContext from '../../../context/MsgBox/MsgboxContext';

const NavBar = props => {
  // Navbar State
  const [apperance, setApperance] = useState({
    width: 0,
    transformNavbar: false,
    navbarOrientation: 'vertical',
    appendMenu: false
  });

  const href = window.location.href;

  const guestLinks = (
    <Fragment>
      <Link className='ui large inverted button orange' to='/register'>
        Sign Up
      </Link>
      <Link className='ui large inverted button' to='/login'>
        Login
      </Link>
    </Fragment>
  );

  // Context State
  const { isAuthenticated, loadUser, logout } = useContext(AuthContext);

  const { showMsgBox } = useContext(MsgBoxContext);

  const onLogout = () => {
    logout();
    showMsgBox('positive', 'Logout Successfully!');
  };

  const userLinks = (
    <Link className='ui large inverted button orange' onClick={onLogout} to='/'>
      Logout
    </Link>
  );

  // Navbar function
  const hamburgerMenuClicked = () =>
    setApperance({
      ...apperance,
      appendMenu: !apperance.appendMenu
    });

  const handleScroll = event => {
    if (event.pageY > 300) {
      setApperance({ ...apperance, transformNavbar: true });
    } else {
      setApperance({ ...apperance, transformNavbar: false });
    }
  };

  const updateWindowDimensions = () => {
    // Call when the vh is changed
    setApperance({
      ...apperance,
      width: window.innerWidth
    });

    if (window.innerWidth > 854) {
      setApperance({
        ...apperance,
        navbarOrientation: 'horizontial',
        appendMenu: true
      });
    } else {
      setApperance({
        ...apperance,
        navbarOrientation: 'vertical',
        appendMenu: false,
        transformNavbar: true
      });
    }
  };

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
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      id={
        apperance.transformNavbar === true ||
        apperance.navbarOrientation === 'vertical'
          ? 'transfromNavbar'
          : 'normalNavbar'
      }
      className='navbar'
    >
      <div className='container'>
        <div className={apperance.navbarOrientation}>
          <div
            className='menu-bar'
            style={
              apperance.navbarOrientation === 'vertical'
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <h1 className='logo'>Pineland Music School</h1>

            <div className='hamburger-menu' onClick={hamburgerMenuClicked}>
              <div className='line' />
              <div className='line' />
              <div className='line' />
            </div>
          </div>

          <div
            style={apperance.appendMenu === false ? { display: 'none' } : {}}
            className='page-links'
          >
            <Link className='route' to='/'>
              Home
            </Link>
            <Link
              className={href.includes('courses') ? 'active route' : 'route'}
              to='/courses'
            >
              Course
            </Link>
            <Link
              className={href.includes('events') ? 'active route' : 'route'}
              to='/events'
            >
              Events
            </Link>
            <Link
              className={href.includes('teachers') ? 'active route' : 'route'}
              to='/teachers'
            >
              Teachers
            </Link>
            <Link
              className={href.includes('aboutus') ? 'active route' : 'route'}
              to='/aboutus'
            >
              About Us
            </Link>
          </div>

          <div
            style={apperance.appendMenu === false ? { display: 'none' } : {}}
            className='members-sections'
          >
            {!isAuthenticated ? guestLinks : userLinks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
