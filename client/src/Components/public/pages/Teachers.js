import React , {useContext, useEffect} from 'react';

import PageFrame from '../layout/PageFrame';
import TeachersContext from '../../../context/Teachers/TeachersContext';
import bg_img from '../../../assets/img/teachers_bg.jpg';

const TeacherCard = (props) => {
    const { firstname, lastname, qualification, musicSkill } = props.teacher;

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

const Teachers = () => {

    const {teachers, fetchTeachers} = useContext(TeachersContext);

    useEffect(() => {

        fetchTeachers();

        return () => {

        }
    // eslint-disable-next-line
    }, [])

    return(
        <PageFrame heroImg={bg_img} heroTitle="Teachers" heroSubtitle="Professional Teachers in Australia">
            <div style={{ margin: "50px"}} className="ui container">
                {/* {teachers.map(teacher => <TeacherCard teacher={teacher} /> )} */}
            </div>
        </PageFrame>
    )
}


export default Teachers;