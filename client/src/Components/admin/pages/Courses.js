import React, { useContext, useEffect } from 'react';
import AdminPageFrame from '../layout/AdminPageFrame';
import CoursesContext from '../../../context/Courses/CoursesContext';

const Row = (props) => {

    const {courseName, description,requirement,
        fee, startDate, endDate, instrument, imageURI} = props.course;

        console.log( props.course);

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
        </tr>
    )
}
const Table = () => {

    const {courses, fetchCourses} = useContext(CoursesContext);

    useEffect(() => {
        fetchCourses();
        return () => {

        };
        // eslint-diable-next-line
    }, [courses])

    return (
        <table class="ui striped table">
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
                </tr>
            </thead>

            <tbody>
                {courses.map(course => <Row course={course} /> )}
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
