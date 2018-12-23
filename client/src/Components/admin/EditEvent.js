import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

class EditEvent extends Component{
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
        axios.post('/api/event', formValues);
    }

    render(){
        return(
            <div className="ui" >
                <AdminNavBar/>
                    <form className="ui form container error" onSubmit={this.props.handleSubmit(this.submit)}>

                        <Field name="eventName" 
                            label="Event Name : "
                            component={this.renderInput} />

                        <Field name="company" 
                            label="company : "
                            component={this.renderInput} />

                        <Field name="description" 
                            label="description : "
                            component={this.renderInput} />

                        <Field name="place" 
                            label="place : "
                            component={this.renderInput} />

                        <Field name="date" 
                            label="date : "
                            component={this.renderInput} />

                        <Field name="tag" 
                            label="tag : "
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

    if(!formValues.eventName){
        // Will becomes meta.error in eventName Field
        errors.eventName = "You must enter a eventName"
    }

    if(!formValues.company){
        // Will becomes meta.error in company Field
        errors.company = "You must enter a company"
    }

    if(!formValues.description){
        // Will becomes meta.error in description Field
        errors.description = "You must enter a description"
    }

    if(!formValues.place){
        // Will becomes meta.error in place Field
        errors.place = "You must enter a place"
    }

    if(!formValues.date){
        // Will becomes meta.error in date Field
        errors.date = "You must enter a date"
    }

    if(!formValues.tag){
        // Will becomes meta.error in tag Field
        errors.tag = "You must enter a tag"
    }

    if(!formValues.imageURI){
        // Will becomes meta.error in imageURI Field
        errors.imageURI = "You must enter a imageURI"
    }

    return errors;
}

const FormWrapped = reduxForm({
    form: 'eventForm',
    validate
})(EditEvent);

export default FormWrapped;