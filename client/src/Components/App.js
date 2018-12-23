import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'

import Home from './Home';
import Events from './Events';
import Teachers from './Teachers';
import Instrument from './Instrument';
import Courses from './Courses';
import AboutUs from './AboutUs';
import JoinUs from './JoinUs';
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
          <Route path="/instrument" component={Instrument}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/joinus" component={JoinUs}/>
          <Route path="/signup" component={SignUp}/>
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
