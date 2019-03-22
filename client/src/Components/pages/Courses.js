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
        <div className="card">
            <div class="ui fluid image">
                <div class="ui red ribbon label">
                  <i className="hotjar icon"></i>  Highest rated
                </div>
                <img src={imageURI} alt="course-img"/>
            </div>


            <div className="content">
                <div className="header">{courseName}</div>

                <div className="meta">
                    <p>{instrument}</p>
                </div>

                <div className="description">
                    {description}
                </div>

            </div>
            
            <div className="extra content">
                <span >
                    <i className="dollar sign icon"></i>{fee}
                </span>
                <span className="right floated">
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
        const cardlistStyle = this.props.courses.length !== 0 ? "ui link cards" : "ui active centered inline loader";
        return(
            <div className="ui">
            <NavBar pages="courses"/>
            <Hero bg_img={bg_img}
                title="Courses"
                subtitle="Make the change Today!"/>

                    <div style={{
                        margin: "50px"
                    }} className="ui container">
                        <div className={cardlistStyle}>
                        {this.props.courses.map(course => <CourseCard course={course} /> )}
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = ({courses}) => ({courses})

export default connect(mapStateToProps, {
    fetchCourses
})(Courses);