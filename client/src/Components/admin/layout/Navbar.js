import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../../context/Auth/AuthContext';

const Navbar = (props) => {

    const { user,isAuthenticated, loadUser, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
    }

    useEffect(() => {
        if (localStorage.getItem('token')){
            loadUser();
        }

        return () => {

        }
    }, [isAuthenticated]);

    return (
        <nav className="admin-page_navbar">
            <div className="nav-content">
                
                <div className="user-box">
                    <h3>Pineland Music School</h3>
                    <h3>Welcome Back! Eric!</h3>
                </div>
                
                <div className="nav-item">
                    <i className="fas fa-2x fa-calendar-alt"/>
                    <Link to="/admin/events"><h2>Events</h2></Link>
                </div>
                
                <div className="nav-item">
                    <i className="fas fa-2x fa-book-open"></i>
                    <Link to="/admin/courses"><h2>Courses</h2></Link>
                </div>
                
                <div className="nav-item">
                    <i className="fas fa-2x fa-user"></i>
                    <h2>Students</h2>
                </div>
                
                <div className="nav-item active">
                    <i className="fas fa-2x fa-guitar"></i>
                    <h2>Instruments</h2>
                </div>
                
                <div className="nav-item">
                    <i className="fas fa-2x fa-question-circle"></i>
                    <Link to="/admin/questions"><h2>Questions</h2></Link>
                </div>
                
                <div className="nav-last-item">
                    <i className="fas fa-2x fa-sign-out-alt"></i>
                    <h2>Logout</h2>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
