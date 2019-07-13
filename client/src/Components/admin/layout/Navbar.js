import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/Auth/AuthContext';

const Navbar = props => {
  const { isAuthenticated, loadUser } = useContext(AuthContext);

  const href = window.location.href;

  const onLogout = () => {
    console.log('Logout !');
  };

  useEffect(() => {
    if (localStorage.getItem('token') && !isAuthenticated) {
      loadUser();
    }

    return () => {};
  }, [isAuthenticated, loadUser]);

  return (
    <nav className='admin-page_navbar'>
      <div className='nav-content'>
        <div className='user-box'>
          <h3
            style={{
              fontSize: '2.5rem'
            }}
            className='udl-heading logo'
          >
            Pineland Music School
          </h3>
          {/* <h3>Welcome Back! Eric!</h3> */}
        </div>

        <div
          className={
            href.includes('/admin/events') ? 'nav-item active' : 'nav-item'
          }
        >
          <i className='fas fa-2x fa-calendar-alt' />
          <h2>
            <Link to='/admin/events'>Events</Link>
          </h2>
        </div>

        <div
          className={
            href.includes('/admin/courses') ? 'nav-item active' : 'nav-item'
          }
        >
          <i className='fas fa-2x fa-book-open' />
          <Link to='/admin/courses'>
            <h2>Courses</h2>
          </Link>
        </div>

        <div
          className={
            href.includes('/admin/users') ? 'nav-item active' : 'nav-item'
          }
        >
          <i className='fas fa-2x fa-user' />
          <Link to='/admin/users'>
            <h2>Users</h2>
          </Link>
        </div>

        {/* <div className={href.includes("/admin/instruments") ? "nav-item active" : "nav-item"}>
                    <i className="fas fa-2x fa-guitar"></i>
                    <Link to="/admin/instruments"><h2>Instruments</h2></Link>
                </div> */}

        <div
          className={
            href.includes('/admin/questions') ? 'nav-item active' : 'nav-item'
          }
        >
          <i className='fas fa-2x fa-question-circle' />
          <Link to='/admin/questions'>
            <h2>Questions</h2>
          </Link>
        </div>

        <div className='nav-last-item'>
          <i className='fas fa-2x fa-sign-out-alt' />
          <Link to='/'>
            <h2 onClick={onLogout}>Logout</h2>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
