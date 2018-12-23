import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import bg_img from '../assets/img/teachers_bg.jpg'

const TeacherCard = (props) => {
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

class Teachers extends Component{
    render(){
        return(
            <div>
            <NavBar page="teachers"
                    backgroundImg={bg_img}
                    title="Teachers"
                    subtitle="Professional Teachers in Australia"/>
                
                    <div style={{
                        margin: "50px"
                    }} className="ui container">
                        <div class="ui link cards">
                        <TeacherCard/>
                        <TeacherCard/>
                        <TeacherCard/>
                        <TeacherCard/>
                        </div>
                    </div>

                <Footer/>
            </div>
        )
    }
}

export default Teachers;