import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
          <div className="footer">
            <div className="container">
              <div className="page-links">
                  <h1>Pages</h1>
                  <Link to="/courses" className="link">Courses</Link>
                  <Link to="/events" className="link">Events</Link>
                  <Link to="/teachers" className="link">Teachers</Link>
                  <Link to="/aboutus" className="link">AboutUs</Link>  
              </div>

              <div className="page-links">
                <h1>Admin Portal</h1>
                <Link to="/admin/register" className="link">Register Admin</Link>
                <Link to="/admin/login" className="link">Login Admin</Link>
                <Link to="/admin/courses" className="link">CMS</Link>
              </div>

              <div className="social-medias">
                <i class="fab fa-facebook-square fa-3x"></i>
                <i class="fab fa-instagram fa-3x"></i>
                <i class="fab fa-twitter-square fa-3x"></i>
                <i class="fab fa-google-plus-square fa-3x"></i>
              </div>

              <div className="copyright">
                <h1>Developed By KA LONG LEE &copy; All Right Reserved</h1>
                <h3>It is a profolio project for building a fullstack web application for music school. The school is not exist in the real world.</h3>
              </div>

            </div>
          </div>
        )
    }
}

export default Footer;