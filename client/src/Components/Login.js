import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
          <div className="login">
            <div className="login-form">
              <h1 className="company-name">Pineland Music School</h1>

              <label htmlFor="username" >Email or Username</label>
              <input type="text" name="username"/>

              <label htmlFor="password" >Password</label>
              <input type="text" name="password"/>

              <button className="ui button">Sign In</button>
              <a href="#">forget password?</a>

              <div className="social-login">
                <button>Google</button>
                <button>Facebook</button>
              </div>

              <button>Create Account</button>

            </div>

            <div className="login-img">
              <div className="container">
                <h1>Reaching the bright Music future today!</h1>
              </div>
            </div>
          </div>
        )
    }
}

export default Login;