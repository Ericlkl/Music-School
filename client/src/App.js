import React, {Fragment} from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'

// Routing Components
import AdminRoute from './Components/routing/AdminRoute';

// Public Pages Components
import Home from './Components/public/pages/Home';
import Events from './Components/public/pages/Events';
import Teachers from './Components/public/pages/Teachers';
import Courses from './Components/public/pages/Courses';
import AboutUs from './Components/public/pages/AboutUs';
import Login from './Components/public/pages/Login';
import Register from './Components/public/pages/Register';

// Students Pages Components

// Admin Pages Components
import AdminHome from './Components/admin/pages/Home';

import CoursesState from './context/Courses/CoursesState';
import EventsState from './context/Events/EventsState';
import TeachersState from './context/Teachers/TeachersState';
import AuthState from './context/Auth/AuthState';

const ContextState = (props) => {
  return(
    <AuthState>
      <TeachersState>
        <CoursesState>
          <EventsState>
            {props.children}
          </EventsState>
        </CoursesState>
      </TeachersState>
    </AuthState>
  )
};

const App = () => {
  return (
    <ContextState>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events" component={Events}/>
            <Route path="/teachers" component={Teachers}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <AdminRoute path="/admin/" exact component={AdminHome}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </ContextState>
  );
}


export default App;
