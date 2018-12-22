import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {signUp} from '../Actions/index'

import {Field, reduxForm} from 'redux-form';

class SignUp extends Component{

    submit = (values) => {
        console.log('submit inside form');
        console.log(values);
    }

    render(){
        return(
        <div className="ui container">
            <form onSubmit={this.props.handleSubmit(this.submit)} className="ui form">

                <div className="field">
                    <label>First Name</label>
                    <Field type="text" name="firstname" component="input"/>
                </div>

                <div className="field">
                    <label>Last Name</label>
                    <Field type="text" name="lastname" component="input" />
                </div>

                <div className="field">
                    <label>Email</label>
                    <Field type="email" name="email" component="input"/>
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


export default reduxForm({
    form: 'contact' //must be a unique name for this form 
})(SignUp);