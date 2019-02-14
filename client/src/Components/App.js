import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'

import Home from './Home';
import Events from './Events';
import Teachers from './Teachers';
import Courses from './Courses';
import AboutUs from './AboutUs';
import Login from './Login';
import SignUp from './SignUp';

// AdminPage Component
import EditCourse from './admin/EditCourse';
import EditEvent from './admin/EditEvent';
import EditTeacher from './admin/EditTeacher';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events}/>
          <Route path="/teachers" component={Teachers}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={Login}/>
          
          {/* Admin Page Route */}
          <Route path="/admin/courses" component={EditCourse}/>
          <Route path="/admin/teachers" component={EditTeacher}/>
          <Route path="/admin/events" component={EditEvent}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
