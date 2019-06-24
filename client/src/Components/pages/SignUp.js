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
    <form onSubmit={onSubmit} className="ui form register-form">

        <h2 className="form-title">Register Form</h2>

        <div className="field">
            <label>* Name</label>

            <div className="two fields">
                <div className="field">
                    <input type="text" name="firstName" placeholder="First Name" required/>
                </div>

                <div className="field">
                    <input type="text" name="lastName" placeholder="Last Name" required/>
                </div>
            </div>
        </div>

        <div className="field input-field">
            <label>* Email</label>
            <input type="email" name="email" placeholder="abc@email.com" onChange={onChange} required/>
        </div>

        <div className="field input-field">
            <label>Facebook</label>
            <input type="text" name="facebook" placeholder="Facebook Username" onChange={onChange}/>
        </div>

        <div className="field input-field">
            <label>Address</label>
            <input type="text" name="address" placeholder="Street/Suburb/City/Nation" onChange={onChange}/>
        </div>

        <div className="field input-field">
            <label>* Password</label>
            <input type="password" name="password" onChange={onChange} required minLength="6"/>
        </div>

        <div className="field input-field">
            <label>* Confirm Password</label>
            <input type="password" name="password2" onChange={onChange} required minLength="6"/>
        </div>

        <div className="terms-field">
            <input type="checkbox" tabindex="0" class="hidden"/>
            <label>I agree to the Terms and Conditions</label>
        </div>

        <div className="field">
            <input type="submit" className="ui button" value="Submit" />
        </div>

    </form>
  )
}

const SignUp = (props) => {

  // Context State
  const {isAuthenticated} = useContext(AuthContext);

  // ComponentDidMount
  useEffect(() => {
    if (isAuthenticated){
      props.history.push("/");
    }
  },[isAuthenticated])

  return(
    <div className="signup">
      <h1 className="udl-heading logo">Pineland Music School</h1>
      <LoginForm/>
    </div>
  )
}

export default SignUp;