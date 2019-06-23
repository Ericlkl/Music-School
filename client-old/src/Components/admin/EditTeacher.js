import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

class EditTeacher extends Component{
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : '' }`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError = ({error, touched}) => {
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    submit = (formValues) =>{
        console.log(formValues);
        axios.post('/api/teacher', formValues);
    }

    render(){
        return(
            <div className="ui" >
                <AdminNavBar/>
                    <form className="ui form container error" onSubmit={this.props.handleSubmit(this.submit)}>

                        <Field name="firstname" 
                            label="First Name: "
                            component={this.renderInput} />

                        <Field name="lastname" 
                            label="lastname : "
                            component={this.renderInput} />

                        <Field name="gender" 
                            label="gender : "
                            component={this.renderInput} />

                        <Field name="address" 
                            label="address : "
                            component={this.renderInput} />

                        <Field name="DoB" 
                            label="DoB : "
                            component={this.renderInput} />

                        <Field name="tag" 
                            label="tag : "
                            component={this.renderInput} />

                        <Field name="phoneNumber" 
                            label="phoneNumber : "
                            component={this.renderInput} />

                        <Field name="facebook" 
                            label="facebook : "
                            component={this.renderInput} />

                        <Field name="qualification" 
                            label="qualification : "
                            component={this.renderInput} />


                        <Field name="musicSkill" 
                            label="musicSkill : "
                            component={this.renderInput} />

                        <Field name="language" 
                            label="language : "
                            component={this.renderInput} />

                        <Field name="imageURI" 
                            label="Image URI : "
                            component={this.renderInput} />

                        <button className="ui primary button">
                            Submit
                        </button>

                    </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.firstname){
        // Will becomes meta.error in firstname Field
        errors.firstname = "You must enter a firstname"
    }

    if(!formValues.lastname){
        // Will becomes meta.error in lastname Field
        errors.lastname = "You must enter a lastname"
    }

    if(!formValues.gender){
        // Will becomes meta.error in gender Field
        errors.gender = "You must enter a gender"
    }

    if(!formValues.address){
        // Will becomes meta.error in address Field
        errors.address = "You must enter a address"
    }

    if(!formValues.DoB){
        // Will becomes meta.error in DoB Field
        errors.DoB = "You must enter a DoB"
    }

    if(!formValues.tag){
        // Will becomes meta.error in tag Field
        errors.tag = "You must enter a tag"
    }

    if(!formValues.phoneNumber){
        // Will becomes meta.error in phoneNumber Field
        errors.phoneNumber = "You must enter a phoneNumber"
    }

    if(!formValues.imageURI){
        // Will becomes meta.error in imageURI Field
        errors.imageURI = "You must enter a imageURI"
    }

    return errors;
}

const FormWrapped = reduxForm({
    form: 'teacherForm',
    validate
})(EditTeacher);

export default FormWrapped;