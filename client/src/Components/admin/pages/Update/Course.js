import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Form from '../../Forms/Course';
import AdminPageFrame from '../../layout/AdminPageFrame';
import CoursesContext from '../../../../context/Courses/CoursesContext';
import MsgboxContext from '../../../../context/MsgBox/MsgboxContext';

const Course = props => {
  const courseId = props.match.params.id;
  const { showMsgBox } = useContext(MsgboxContext);
  const { current, fetchCourse, clearCourses, clearCurrent } = useContext(
    CoursesContext
  );

  const updateCourse = async () => {
    try {
      await axios.put(`/api/courses/${courseId}`, current);
      clearCourses();
      showMsgBox('positive', 'Course Updated Successfully ! ');
      props.history.push('/admin/courses');
    } catch (error) {
      showMsgBox('negative', 'Error ! ');
    }
  };

  useEffect(
    () => {
      fetchCourse(courseId);
      return () => clearCurrent();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <AdminPageFrame>
      <div className='ui'>
        <h1 style={{ margin: '1rem 0rem' }} className='ui header breadcrumb'>
          <Link to='/admin/courses' className='section'>
            Courses
          </Link>
          <i className='right angle icon divider' />
          <div className='active section'>Update</div>
        </h1>

        <Form onSubmitAction={updateCourse} />
      </div>
    </AdminPageFrame>
  );
};

export default Course;
