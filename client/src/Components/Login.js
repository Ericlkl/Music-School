import React, {Component} from 'react';
import {Field , reduxForm} from 'redux-form'
import axios from 'axios';

class Login extends Component{
    renderInput = ({input, label , meta}) => {
      const className = `field ui input ${meta.error && meta.touched ? 'error' : '' }`

      return (
        <div className={className}>  
          <label>{label}</label>
          <input {...input}/>
        </div>
      )
    }

    onSubmit = async (formValues) => {
      console.log("Forms Value Sent !");

      await axios.post('/api/login', formValues);
    }


    render(){
        return(
          <div className="login">
            <form className="ui form login-form py-5 error" 
                  onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
              <h1 className="udl-heading company-name">Pineland Music School</h1>

              <Field name="username"
                label="Username :"
                component={this.renderInput}
              />

              <Field name="password"
                label="Password :"
                component={this.renderInput}
              />

              <button className="ui button">Login </button>

              <a href="#">forget password?</a>

              <div className="social-login">
                <button className="ui facebook button">
                  <i className="facebook icon"></i>
                  Facebook
                </button>

                <button className="ui google plus button">
                  <i className="google icon"></i>
                  Google
                </button>
              </div>

              <button className="ui button primary">
                Create Account
              </button>
            </form>

            <div className="login-img">
              <div className="container">
                <h1>Reaching the bright Music future today!</h1>
              </div>
            </div>
          </div>
        )
    }
}

const validate = (formsValue) => {
  const errors = {};
  if (!formsValue.username){
    errors.username = "You Must insert username !"
  }

  if(!formsValue.password){
    errors.password = "You Must enter your password !"
  }
  else if (formsValue.password.length < 8){
    errors.password = "Password Length is less than 8 digit"
  }

  return errors
}

const formWrapped = reduxForm({
  form: "loginForm",
  validate
})(Login)

export default formWrapped;