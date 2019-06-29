import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import AdminPageFrame from '../layout/AdminPageFrame'
import MsgboxContext from '../../../context/MsgBox/MsgboxContext';
import CoursesContext from '../../../context/Courses/CoursesContext';

const Row = (props) => {

    const { _id, courseName, description,requirement,
        fee, startDate, endDate, instrument, imageURI} = props.course;

    const {fetchCourses} = useContext(CoursesContext);
    const {showMsgBox} = useContext(MsgboxContext);

    const onDelete = async () => {
        try {
            await axios.delete(`/api/courses/${_id}`);
            showMsgBox("positive", "Course Deleted successfully");
            fetchCourses();
        } catch (error) {
            showMsgBox("negative", "Error! Please try again later");
        }
    }

    return (
        <tr>
            <td>{courseName}</td>
            <td>{description}</td>
            <td>{requirement}</td>
            <td>{fee}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>{instrument}</td>
            <td>{imageURI}</td>
            <td>
                <div className="ui basic buttons">
                    <button className="ui blue basic button">Update</button>
                    <button onClick={onDelete} className="ui red basic button">Delete</button>
                </div>
            </td>
        </tr>
    )
}
const Table = () => {

    const {courses, fetchCourses} = useContext(CoursesContext);

    useEffect(() => {
        if (courses.length === 0){
            console.log("Run");
            fetchCourses();
        }

        return () => {

        };
        // eslint-diable-next-line
    }, [courses])

    return (
        <table className="ui orange striped table">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Requirement</th>
                    <th>Fee</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Intrument</th>
                    <th>Image URL</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {courses.map(course => <Row course={course} key={course._id}/> )}
            </tbody>
        </table>
    )
}

const Courses = () => {
    return (
        <AdminPageFrame>
            <Table/>
        </AdminPageFrame>
    )
}

export default Courses
