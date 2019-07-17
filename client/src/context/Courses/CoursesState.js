import React, { useReducer } from 'react';
import CoursesContext from './CoursesContext';
import CoursesReducer from './CoursesReducer';
import moment from 'moment';
import {
  FETCH_COURSE,
  FETCH_COURSES,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_STATE
} from '../types';
import axios from 'axios';

const CoursesState = props => {
  const initialState = {
    courses: [],
    current: {
      name: '',
      desc: '',
      require: '',
      price: 0,
      startDate: '2019-01-01',
      endDate: '2019-12-30',
      instrument: '',
      img: ''
    }
  };

  const [state, dispatch] = useReducer(CoursesReducer, initialState);

  const fetchCourse = async courseID => {
    const res = await axios.get(`/api/courses/${courseID}`);
    const course = res.data;

    course.startDate = moment(course.startDate).format('YYYY-MM-DD');
    course.endDate = moment(course.endDate).format('YYYY-MM-DD');
    course.createdAt = moment(course.createdAt).format('YYYY-MM-DD');
    course.updatedAt = moment(course.updatedAt).format('YYYY-MM-DD');
    dispatch({
      type: FETCH_COURSE,
      payload: course
    });
  };

  const fetchCourses = async () => {
    const res = await axios.get('/api/courses');
    const courses = res.data;

    courses.map(course => {
      course.startDate = moment(course.startDate).format('YYYY-MM-DD');
      course.endDate = moment(course.endDate).format('YYYY-MM-DD');
      course.createdAt = moment(course.createdAt).format('YYYY-MM-DD');
      course.updatedAt = moment(course.updatedAt).format('YYYY-MM-DD');
    });

    dispatch({
      type: FETCH_COURSES,
      payload: courses
    });
  };

  const clearCourses = () => dispatch({ type: CLEAR_STATE });

  const setCurrent = field => dispatch({ type: SET_CURRENT, payload: field });

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  return (
    <CoursesContext.Provider
      value={{
        courses: state.courses,
        current: state.current,
        fetchCourse,
        fetchCourses,
        setCurrent,
        clearCourses,
        clearCurrent
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesState;
