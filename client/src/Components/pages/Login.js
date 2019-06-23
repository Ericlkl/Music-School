import React from 'react';

const Poster = () => (
  <div className="login-img">
    <div className="container">
      <h1>Reaching the bright Music future today!</h1>
    </div>
  </div>
)

const Login = () => {

  return(
    <div className="login">
      <form className="ui form login-form py-5 error">

        <h1 className="udl-heading logo">Pineland Music School</h1>

        <button className="ui button">Login </button>

        <a href="#">forget password?</a>

        <button className="ui button primary">
          Create Account
        </button>
      </form>
      
      <Poster/>
    </div>
  )
}

export default Login;