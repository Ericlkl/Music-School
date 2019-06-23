import React, {Component} from 'react';
import {connect} from 'react-redux';

import NavBar from '../public/NavBar';
import Hero from '../public/Hero';
import Footer from '../public/Footer';
import bg_img from '../../assets/img/course_bg.jpg'
import {fetchCourses} from '../../Actions/index'

const CourseCard = (props) => {
    const { courseName, description, fee, instrument, imageURI } = props.course;
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imageURI}) center center/cover`
        }} class="course-card">
        <p class="course-card__level">Level1</p>
        
        <div class="course-card__content">
            <div class="course-card__content_titlebox">
            <h3>{courseName}</h3>
            <p>{fee}</p>
            </div>
            <img class="logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo"/>
        </div>
        </div>
    )
}

// {this.props.courses.map(course => <CourseCard course={course} /> )}
class Courses extends Component{
    componentDidMount(){
        this.props.fetchCourses();
    }

    render(){
        const cardlistStyle = this.props.courses.length !== 0 ? "ui link cards" : "ui active centered inline loader";
        return(
            <div className="ui">
                <NavBar pages="courses"/>
                <Hero bg_img={bg_img}
                    title="Courses"
                    subtitle="Make the change Today!"/>

                <section className="courses">
                    <h1 className="udl-heading">Includes all Course</h1>
                    <div className="courses__content">
                        {this.props.courses.map(course => <CourseCard course={course} /> )}
                        
                    </div>
                </section>

                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = ({courses}) => ({courses})

export default connect(mapStateToProps, {
    fetchCourses
})(Courses);