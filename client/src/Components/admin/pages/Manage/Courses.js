import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminPageFrame from '../../layout/AdminPageFrame';
import MsgboxContext from '../../../../context/MsgBox/MsgboxContext';
import CoursesContext from '../../../../context/Courses/CoursesContext';

const Row = props => {
  const {
    _id,
    name,
    desc,
    require,
    price,
    startDate,
    endDate,
    instrument,
    img
  } = props.course;

  const { fetchCourses } = useContext(CoursesContext);
  const { showMsgBox } = useContext(MsgboxContext);

  const onDelete = async () => {
    try {
      await axios.delete(`/api/courses/${_id}`);
      showMsgBox('positive', 'Course Deleted successfully');
      fetchCourses();
    } catch (error) {
      showMsgBox('negative', 'Error! Please try again later');
    }
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{require}</td>
      <td>{price}</td>
      <td>{new Date(startDate).toUTCString()}</td>
      <td>{new Date(endDate).toUTCString()}</td>
      <td>{instrument}</td>
      <td>Image</td>
      <td>
        <div className='ui basic buttons'>
          <button className='ui blue basic button'>Update</button>
          <button onClick={onDelete} className='ui red basic button'>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

const Table = () => {
  const { courses, fetchCourses } = useContext(CoursesContext);

  useEffect(() => {
    fetchCourses();

    return () => {};
    // eslint-diable-next-line
  }, []);

  return (
    <table className='ui orange striped table'>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Description</th>
          <th>Requirement</th>
          <th>Price</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Intrument</th>
          <th>Image URL</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {courses.map(course => (
          <Row course={course} key={course._id} />
        ))}
      </tbody>
    </table>
  );
};

const Courses = () => {
  return (
    <AdminPageFrame>
      <div className='ui'>
        <h1 className='ui left floated header'>Courses</h1>
        <h3 className='ui right floated header'>
          <Link to='/admin/add_course' className='ui primary button'>
            Create
          </Link>
        </h3>
      </div>
      <Table />
    </AdminPageFrame>
  );
};

export default Courses;
