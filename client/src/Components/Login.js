import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
          <div className="login">
            <form className="login-form py-5">
              <h1 className="udl-heading company-name">Pineland Music School</h1>

              <div className="field ui input">  
                <label htmlFor="username" >Email or Username </label>
                <input type="text" name="username"/>
              </div>

              <div className="field ui input">
                <label htmlFor="password" >Password </label>
                <input type="text" name="password"/>
              </div>

              <button className="ui button">Sign In</button>
              <a href="#">forget password?</a>

              <div className="social-login">
                <button class="ui facebook button">
                  <i class="facebook icon"></i>
                  Facebook
                </button>

                <button class="ui google plus button">
                  <i class="google icon"></i>
                  Google
                </button>
              </div>

              <button className="ui button primary">Create Account</button>

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

export default Login;