import React, {Component} from 'react';

class Login extends Component{

    render(){
        return(
          <div className="login">
            <form className="ui form login-form py-5 error" 
                  onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
              <h1 className="udl-heading logo">Pineland Music School</h1>

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

export default Login;