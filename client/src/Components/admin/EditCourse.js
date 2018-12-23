import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import AdminNavBar from './AdminNavBar';
import axios from 'axios';

class EditCourse extends Component{

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
        axios.post('/api/course', formValues);
    }

    render(){
        return(
            <div className="ui" >
                <AdminNavBar/>
                    <form className="ui form container error" onSubmit={this.props.handleSubmit(this.submit)}>

                        <Field name="courseName" 
                            label="Course Name : "
                            component={this.renderInput} />

                        <Field name="description" 
                            label="Description : "
                            component={this.renderInput} />

                        <Field name="requirement" 
                            label="Requirement : "
                            component={this.renderInput} />

                        <Field name="fee" 
                            label="Fee : "
                            component={this.renderInput} />

                        <Field name="startDate" 
                            label="Start Date : "
                            component={this.renderInput} />

                        <Field name="endDate" 
                            label="End Date : "
                            component={this.renderInput} />

                        <Field name="instrument" 
                            label="Instrument : "
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

    if(!formValues.courseName){
        // Will becomes meta.error in CourseName Field
        errors.courseName = "You must enter a courseName"
    }

    if(!formValues.description){
        // Will becomes meta.error in description Field
        errors.description = "You must enter a description"
    }

    if(!formValues.requirement){
        // Will becomes meta.error in requirement Field
        errors.requirement = "You must enter a requirement"
    }

    if(!formValues.fee){
        // Will becomes meta.error in fee Field
        errors.fee = "You must enter a fee"
    }

    if(!formValues.startDate){
        // Will becomes meta.error in startDate Field
        errors.startDate = "You must enter a startDate"
    }

    if(!formValues.endDate){
        // Will becomes meta.error in endDate Field
        errors.endDate = "You must enter a endDate"
    }

    if(!formValues.instrument){
        // Will becomes meta.error in instrument Field
        errors.instrument = "You must enter a instrument"
    }

    if(!formValues.imageURI){
        // Will becomes meta.error in imageURI Field
        errors.imageURI = "You must enter a imageURI"
    }

    return errors;
}

const FormWrapped = reduxForm({
    form: 'courseForm',
    validate
})(EditCourse)

export default FormWrapped;