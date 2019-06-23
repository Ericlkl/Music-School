import React from 'react';

import NavBar from '../public/NavBar';
import Hero from '../public/Hero';
import Footer from '../public/Footer';

import bg_img from '../../assets/img/teachers_bg.jpg';

const TeacherCard = ({firstname, lastname, qualification, musicSkill}) => {

    return (
        <div className="card">
            <div className="image">
                <img src="/images/avatar2/large/matthew.png" alt="teacher-img"/>
            </div>
            <div className="content">
                <div className="header">{`${firstname} ${lastname}`}</div>

                <div className="meta">
                    <p>{qualification}</p>
                    <p>{musicSkill.map(skill => skill)}</p>
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

const Teachers = (props) => {

    return(
        <div>
        <NavBar pages="teachers"/>
        <Hero bg_img={bg_img}
            title="Teachers"
            subtitle="Professional Teachers in Australia"/>
            
                <div style={{ margin: "50px"}} className="ui container">
                    
                </div>

            <Footer/>
        </div>
    )
}


export default Teachers;