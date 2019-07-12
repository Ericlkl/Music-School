import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Routing Components
// import AdminRoute from './Components/routing/AdminRoute';

// Public Pages Components
import Home from './Components/public/pages/Home';
import Events from './Components/public/pages/Events';
import Teachers from './Components/public/pages/Teachers';
import Courses from './Components/public/pages/Courses';
import AboutUs from './Components/public/pages/AboutUs';
import Login from './Components/public/pages/Login';
import Register from './Components/public/pages/Register';
import MsgBox from './Components/public/layout/MsgBox';

import CourseContent from './Components/public/contents/Course';

// Students Pages Components

// Admin Manage Pages Components
import AdminHome from './Components/admin/pages/Manage/Home';
import AdminUser from './Components/admin/pages/Manage/Users';
import AdminCourse from './Components/admin/pages/Manage/Courses';
import AdminQuestion from './Components/admin/pages/Manage/Questions';
import AdminEvent from './Components/admin/pages/Manage/Events';

// Admin Create Pages
import CreateEvent from './Components/admin/pages/Create/Event';
import CreateCourse from './Components/admin/pages/Create/Course';

import CoursesState from './context/Courses/CoursesState';
import EventsState from './context/Events/EventsState';
import TeachersState from './context/Teachers/TeachersState';
import AuthState from './context/Auth/AuthState';
import MsgboxState from './context/MsgBox/MsgboxState';

const ContextState = props => {
  return (
    <AuthState>
      <TeachersState>
        <CoursesState>
          <EventsState>
            <MsgboxState>{props.children}</MsgboxState>
          </EventsState>
        </CoursesState>
      </TeachersState>
    </AuthState>
  );
};

const App = () => {
  return (
    <ContextState>
      <BrowserRouter>
        <Fragment>
          <MsgBox />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/events' component={Events} />
            <Route path='/teachers' component={Teachers} />

            <Route path='/courses' exact component={Courses} />
            <Route path='/courses/:id' component={CourseContent} />

            <Route path='/aboutus' component={AboutUs} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/admin/' exact component={AdminHome} />

            <Route path='/admin/users' exact component={AdminUser} />
            <Route path='/admin/courses' exact component={AdminCourse} />
            <Route path='/admin/questions' exact component={AdminQuestion} />
            <Route path='/admin/events' exact component={AdminEvent} />

            <Route path='/admin/add_event' exact component={CreateEvent} />
            <Route path='/admin/add_course' exact component={CreateCourse} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </ContextState>
  );
};

export default App;
