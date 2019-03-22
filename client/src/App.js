import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'

import Home from './Components/pages/Home';
import Events from './Components/pages/Events';
import Teachers from './Components/pages/Teachers';
import Courses from './Components/pages/Courses';
import AboutUs from './Components/pages/AboutUs';
import Login from './Components/pages/Login';
import SignUp from './Components/pages/SignUp';

// AdminPage Component
import EditCourse from './Components/admin/EditCourse';
import EditEvent from './Components/admin/EditEvent';
import EditTeacher from './Components/admin/EditTeacher';

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
          <Route path="/login" component={Login}/>
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
