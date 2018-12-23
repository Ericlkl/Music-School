import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import bg_img from '../assets/img/course_bg.jpg'

class Courses extends Component{
    render(){
        return(
            <div>
            <NavBar page="courses"
                    backgroundImg={bg_img}
                    title="Courses"
                    subtitle="Make the change Today!"/>
                <h1>
                    Courses
                </h1>
                <Footer/>
            </div>
        )
    }
}

export default Courses;