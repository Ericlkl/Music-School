import React, { useReducer } from 'react';
import CoursesContext from './CoursesContext';
import CoursesReducer from './CoursesReducer';
import {
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

  const fetchCourses = async () => {
    const res = await axios.get('/api/courses');
    dispatch({
      type: FETCH_COURSES,
      payload: res.data
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
