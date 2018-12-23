import React, {Component} from 'react';
import {connect} from 'react-redux';

import NavBar from './NavBar';
import Footer from './Footer';
import bg_img from '../assets/img/course_bg.jpg'
import {fetchCourses} from '../Actions/index'
const CourseCard = (props) => {
    return (
        <div className="card">
            <div className="image">
                <img src="/images/avatar2/large/matthew.png"/>
            </div>
            <div className="content">
                <div className="header">Teacher Name</div>

                <div className="meta">
                    <p>Bachelor</p>
                </div>

                <div className="description">
                    This is the description box.
                </div>

            </div>
            
            <div className="extra content">
                <span className="right floated">
                    1 Years+ Experiences
                </span>
                <span>
                    <i className="user icon"></i>
                    75 Students
                </span>
            </div>
        </div>
    )
}

class Courses extends Component{
    componentDidMount(){
        this.props.fetchCourses();
    }
    render(){
        console.log(this.props.courses);
        return(
            <div>
                <NavBar page="courses"
                    backgroundImg={bg_img}
                    title="Courses"
                    subtitle="Make the change Today!"/>

                    <div style={{
                        margin: "50px"
                    }} className="ui container">
                        <div class="ui link cards">
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, {
    fetchCourses
})(Courses);