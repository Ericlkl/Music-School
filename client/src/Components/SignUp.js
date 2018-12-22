import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signUp} from '../Actions/index'

import {Field, reduxForm} from 'redux-form';

class SignUp extends Component{

    submit = (values) => {
        // This function only works when the validate function
        // has no errors
        this.props.signUp(values);
    }

    renderInput = ({input, label, meta}) => {
        // input = input properties
        // label = label field name
        // meta = contain the error message
        const className = `field ${meta.error && meta.touched? 'error' : ''}`

        return (
            <div>
                <div className="field">
                    <label>{label}</label>
                    <input {...input} autoComplete="off"/>
                </div>
                {this.renderError(meta)}
            </div>
        )
    }

    renderError = ({error, touched}) => {
        if(touched && error){
            return (
                <div className="ui error message">
                    <p>
                        {error}
                    </p>
                </div>
            )
        }
    }

    render(){
        console.log("Redux Store : member")
        console.log(this.props.member);
        return(
            <form onSubmit={this.props.handleSubmit(this.submit)} className="ui form container error">

                <Field name="firstname" 
                label="First Name" 
                component={this.renderInput}/>
                
                <Field name="lastname" 
                label="Last Name" 
                component={this.renderInput}/>
                
                <Field name="email" 
                label="Email" 
                component={this.renderInput}/>   

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

                <button className="ui button primary" type="submit">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};
    if(!formValues.firstname){
        errors.firstname = "You must enter your firstname"
    }

    if(!formValues.lastname){
        errors.lastname = "You must enter your lastname"
    }

    if(!formValues.email){
        errors.email = "You must enter your email"
    }
    return errors
}

const FormWrapped = reduxForm({
    form: 'signup', //must be a unique name for this form 
    validate //middleWare before onSubmit
})(SignUp);

const mapStateToProps = state => ({ member: state.member })

export default connect(mapStateToProps, {
    signUp
})(FormWrapped);