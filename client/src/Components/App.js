import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom'

import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Events from './Events';
import Teachers from './Teachers';
import Instrument from './Instrument';
import Courses from './Courses';
import AboutUs from './AboutUs';
import JoinUs from './JoinUs';
import Login from './Login';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar/>
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
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
