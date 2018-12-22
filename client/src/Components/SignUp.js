import React, {Component} from 'react';

class SignUp extends Component{
    render(){
        return(
        <div className="ui container">
            <form className="ui form">

                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="First Name"/>
                </div>

                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" />
                </div> 

                <div class="field">
                    <select>
                    <option value="">Gender</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                    </select>
                </div>

                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox"/>
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>

                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default SignUp;