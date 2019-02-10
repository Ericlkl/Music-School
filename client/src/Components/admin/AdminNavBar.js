import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class AdminNavBar extends Component{
    render(){
        return(
            <div className="ui borderless main menu" >
            <div className="ui text container">
              <div className="header item">
                
                <Link to="/">Music School</Link>
              </div>
              <Link to="/admin/courses" className="item">Edit Courses</Link>
              <Link to="/admin/events" className="item">Edit Events</Link>
              <Link to="/admin/teachers" className="item">Edit Teachers</Link>

              <div className="ui right floated item">
              </div>
            </div>
          </div>
        )
    }
}

export default AdminNavBar;