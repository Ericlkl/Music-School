import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Form from '../../Forms/Course';
import AdminPageFrame from '../../layout/AdminPageFrame';
import MsgboxContext from '../../../../context/MsgBox/MsgboxContext';

const Course = (props) => {

    const {showMsgBox} = useContext(MsgboxContext);

    const addCourse = async (formData) => {
        try {
            await axios.post('/api/courses', formData);
            showMsgBox("positive", "Create Course Successfully ! ");
            props.history.goBack();
        } catch (error) {
            showMsgBox("negative", "Error ! ");
        }
    };

    return (
        <AdminPageFrame>
            <div className="ui">
                <h1 style={{ margin: "1rem 0rem" }} className="ui header breadcrumb">
                    <Link to="/admin/courses" className="section">Courses</Link>
                    <i className="right angle icon divider"></i>
                    <div className="active section">Create</div>
                </h1>

                <Form onSubmitAction={addCourse} />        
            </div>
        </AdminPageFrame>
    )
}

export default Course
