import React, {Component} from 'react';
import axios from 'axios';

import {Field, reduxForm} from 'redux-form';

import NavBar from '../public/NavBar';
import InfoSection from '../public/InfoSection';
import Hero from '../public/Hero';
import Footer from '../public/Footer';

import school_img from '../../assets/img/road.jpg'
import contact_img from '../../assets/img/mailbox.jpg'
import bg_img from '../../assets/img/aboutus_bg.jpg'
import join_us from '../../assets/img/join_us.jpg'

class JoinUsForm extends Component{

    renderInput = ({input, label, meta}) => {
        const className =  `field ${meta.error && meta.touched ? 'error' : '' }`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    // Deserialize Error and touched
    renderError = ({error, touched}) => {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    submit = (formValues) => {
        console.log(formValues);
        axios.post('/api/course', formValues);
    }

    render(){
        return(
            <div className="ui">
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.submit)}>
                    <Field name="firstname"
                        label="FirstName"
                        component={this.renderInput} />

                    <Field name="lastname"
                        label="lastName"
                        component={this.renderInput} />

                    <Field name="gender"
                        label="gender"
                        component={this.renderInput} />

                    <Field name="facebook"
                        label="FaceBook"
                        component={this.renderInput} />

                    <Field name="qualification"
                        label="Qualification : "
                        component={this.renderInput} />

                    <Field name="musicSkill"
                        label="Music Skill : "
                        component={this.renderInput} />

                    <Field name="language"
                        label="Language : "
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

    if(!formValues.name){
        errors.name = "You Must enter a name"
    }

    return errors
}

const FormWrapped = reduxForm({
    form : 'JoinUsForm',
    validate
})(JoinUsForm)

class AboutUs extends Component{
    render(){
        return(
            <div>
                <NavBar pages="aboutus"/>
                <Hero bg_img={bg_img}
                    title="About US"
                    subtitle="Professional Music Insititute in Australia"/>

                <InfoSection title="Our History" imgPosition="left" img={school_img} >
                    <h2>35 Years Teaching Experience</h2>
                    <p>Pineland Music school was established in {2019 - 35}. It has passed a long time that teaching different kind of people about playing music and theory.  </p>
                </InfoSection>

                <InfoSection title="Contact US" img={contact_img} bg_color={{backgroundColor: 'rgb(233, 233, 233)'}} >
                    <h2>Telphone Number :</h2>
                    <h3>0415 869 377</h3>
                    <h2>Address :</h2>
                    <h3>70 Pinelands Rd, Sunnybank Hills QLD 4109 Austrlia</h3>
                    <h2>Email :</h2>
                    <h3> pineland_music_school@gmail.com </h3>
                </InfoSection>

                <InfoSection title="Join Us" img={join_us} imgPosition="left">
                    <FormWrapped/>
                </InfoSection>
                
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;