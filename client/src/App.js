import React, {Fragment} from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'

import Home from './Components/pages/Home';
import Events from './Components/pages/Events';
import Teachers from './Components/pages/Teachers';
import Courses from './Components/pages/Courses';
import AboutUs from './Components/pages/AboutUs';
import Login from './Components/pages/Login';
import SignUp from './Components/pages/SignUp';

import CoursesState from './context/Courses/CoursesState';
import EventsState from './context/Events/EventsState';

const App = () => {
  return (
    <CoursesState>
    <EventsState>
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events}/>
          <Route path="/teachers" component={Teachers}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Fragment>
    </BrowserRouter>
    </EventsState>
    </CoursesState>
  );
}


export default App;
