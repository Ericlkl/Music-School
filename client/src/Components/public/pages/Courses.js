import React, {useContext, useEffect} from 'react';

import PageFrame from '../layout/PageFrame';

import bg_img from '../../../assets/img/course_bg.jpg'
import CoursesContext from '../../../context/Courses/CoursesContext';

const CourseCard = ({ courseName, fee, instrument, imageURI }) => {
    let icon = "";

    if(instrument.trim() === 'Piano') 
        icon = "flaticon-grand-piano";
    else if (instrument.trim() === 'Gita')
        icon = "flaticon-acoustic-guitar"
    else if (instrument.trim() === 'violin')
        icon = "flaticon-violin";

    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imageURI}) center center/cover`
        }} className="course-card">
        <p className="course-card__level">Level1</p>
        
        <div className="course-card__content">
            <div className="course-card__content_titlebox">
            <h3>{courseName}</h3>
            <p>{fee}</p>
            </div>
        
        <i className={" logo " + icon}></i>
        
        </div>
        </div>
    )
}


const Courses = (props) => {

    const {courses, fetchCourses} = useContext(CoursesContext);

    useEffect(() => {
        fetchCourses();

        return () => {

        }
    // eslint-disable-next-line
    }, [])

    return(
        <PageFrame page="courses" 
            heroImg={bg_img} 
            heroTitle="Courses"
            heroSubtitle="Make the change Today!" >

            <section className="courses">
                <h1 className="udl-heading">Includes all Course</h1>
                <div className="courses__content">
                    {courses.map(course => 
                        <CourseCard courseName={course.courseName}
                            instrument={course.instrument}
                            imageURI={course.imageURI}
                            fee = {course.fee}
                        />)}
                    
                </div>
            </section>
        </PageFrame>
    )
}

export default Courses;