import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';

import AuthContext from '../../context/Auth/AuthContext';

const LoginForm = () => {

  // State
  const formInitState = {
    email: "",
    password: ""
  };

  const [form, setForm] = useState({...formInitState});

  // Context State
  const {login, isAuthenticated} = useContext(AuthContext);

  // Form Component Function
  const onChange = (e) => setForm({...form, [e.target.name] : e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  return (
    <form onSubmit={onSubmit} className="ui form login-form">
      
      <h1 className="udl-heading logo">Pineland Music School</h1>

      <div className="field input-field">
        <label>Account</label>
        <input type="email" name="email" onChange={onChange} required/>
      </div>

      <div className="field input-field">
        <label>Password</label>
        <input type="password" name="password" onChange={onChange} required minLength="6"/>
      </div>

      <div className="field">
        <input type="submit" className="ui button" value="Submit" />
        <Link to="/register" className="ui button primary">Register</Link>
      </div>

    </form>
  )
}

const Poster = () => (
  <div className="login-img">
    <div className="container">
      <h1>Reaching the bright Music future today!</h1>
    </div>
  </div>
)

const Login = (props) => {
  
  // Context State
  const {isAuthenticated} = useContext(AuthContext);

  // ComponentDidMount
  useEffect(() => {
    if (isAuthenticated){
      props.history.push("/");
    }
  },[isAuthenticated])

  return(
    <div className="login">
      <LoginForm/>
      <Poster/>
    </div>
  )
}

export default Login;