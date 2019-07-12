import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../../context/Auth/AuthContext';
import MsgboxContext from '../../../context/MsgBox/MsgboxContext';

const LoginForm = () => {
  // State
  const formInitState = {
    email: '',
    password: ''
  };

  const [form, setForm] = useState({ ...formInitState });

  // Context State
  const { login, errors } = useContext(AuthContext);
  const { showMsgBox } = useContext(MsgboxContext);

  // Form Component Function
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(form);
  };

  useEffect(() => {
    if (errors) {
      showMsgBox('negative', errors, 4000);
    }
  }, [errors, showMsgBox]);

  return (
    <form onSubmit={onSubmit} className='ui form login-form'>
      <h1 className='udl-heading logo'>Pineland Music School</h1>

      <div className='field input-field'>
        <label>Account</label>
        <input type='email' name='email' onChange={onChange} required />
      </div>

      <div className='field input-field'>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={onChange}
          required
          minLength='6'
        />
      </div>

      <div className='field'>
        <input type='submit' className='ui button' value='Login' />
        <Link to='/register' className='ui button primary'>
          Sign Up
        </Link>
      </div>
    </form>
  );
};

const Poster = () => (
  <div className='login-img'>
    <div className='container'>
      <h1>Reaching the bright Music future today!</h1>
    </div>
  </div>
);

const Login = ({ history }) => {
  // Context State
  const { isAuthenticated, loadUser } = useContext(AuthContext);
  const { showMsgBox } = useContext(MsgboxContext);

  // ComponentDidMount
  useEffect(() => {
    if (localStorage.getItem('token')) {
      loadUser();
    }
    if (isAuthenticated) {
      showMsgBox('positive', 'Login Successfully !');
      history.push('/');
    }
  }, [isAuthenticated, history, loadUser, showMsgBox]);

  return (
    <div className='login'>
      <LoginForm />
      <Poster />
    </div>
  );
};

export default Login;
