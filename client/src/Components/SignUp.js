import React, {Component} from 'react';
import {connect} from 'react-redux';

import {signUp} from '../Actions/index'

class SignUp extends Component{

    state = {
        firstName: null,
        lastName: null,
        email: null,
    }
    componentDidMount(){

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Works");
        console.log(this.state.firstName);
    }

    render(){
        console.log(this.props.member);
        return(
        <div className="ui container">
            <form onSubmit={this.handleSubmit} className="ui form">

                <div className="field">
                    <label>First Name</label>
                    <input type="text" value={this.state.firstName} placeholder="First Name"/>
                </div>

                <div className="field">
                    <label>Last Name</label>
                    <input type="text" value={this.state.lastName} placeholder="Last Name" />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type="email" value={this.state.email} placeholder="Email" />
                </div> 

                <div className="field">
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

const mapStateToProps = (state) => {
    return {
        member: state.member
    }
}

export default connect(mapStateToProps,{
    signUp
})(SignUp);