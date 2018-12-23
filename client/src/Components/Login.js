import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div style={{
                height: '100vh'
            }} className="ui placeholder segment">
            <div className="ui two column very relaxed stackable grid">
              <div className="column">
                <div className="ui form">
                  <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                      <input type="text" placeholder="Username"/>
                      <i className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                      <input type="password"/>
                      <i className="lock icon"></i>
                    </div>
                  </div>
                  <div className="ui blue submit button">Login</div>
                </div>
              </div>
              <div className="middle aligned column">
                <div className="ui big button">
                  <i className="signup icon"></i>
                  Sign Up
                </div>

                <div className="ui big button">
                <i className="signup icon"></i>
                    Go Back
                </div>
              </div>
            </div>
            <div className="ui vertical divider">
              Or
            </div>
          </div>
        )
    }
}

export default Login;