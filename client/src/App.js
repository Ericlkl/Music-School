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
import MsgBox from './Components/public/layout/MsgBox';

// Students Pages Components

// Admin Pages Components
import AdminHome from './Components/admin/pages/Home';
import AdminPageFrame from './Components/admin/layout/AdminPageFrame';
import AdminCourse from './Components/admin/pages/Courses';
import AdminQuestion from './Components/admin/pages/Questions';

import EventForm from './Components/admin/Forms/Event';
import TeacherForm from './Components/admin/Forms/Teacher';


import CoursesState from './context/Courses/CoursesState';
import EventsState from './context/Events/EventsState';
import TeachersState from './context/Teachers/TeachersState';
import AuthState from './context/Auth/AuthState';
import MsgboxState from './context/MsgBox/MsgboxState';

const ContextState = (props) => {
  return(
    <AuthState>
      <TeachersState>
        <CoursesState>
          <EventsState>
            <MsgboxState>
              {props.children}
            </MsgboxState>
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
          <MsgBox/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events" component={Events}/>
            <Route path="/teachers" component={Teachers}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin/" exact component={AdminHome}/>

            <Route path="/admin/courses" exact component={AdminCourse}/>
            <Route path="/admin/questions" exact component={AdminQuestion}/>

            <Route path="/admin/add_event" exact component={(props) => 
              <AdminPageFrame>
                <EventForm/>
              </AdminPageFrame>
            }/>
            <Route path="/admin/add_teacher" exact component={(props) => 
              <div style={{
                display: "flex"
              }}>
                <AdminPageFrame>
                  <TeacherForm/>
                </AdminPageFrame>
              </div>
            }/>


          </Switch>
        </Fragment>
      </BrowserRouter>
    </ContextState>
  );
}


export default App;
