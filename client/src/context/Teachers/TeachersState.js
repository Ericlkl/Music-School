import React, { useReducer } from 'react';
import TeachersContext from './TeachersContext';
import TeachersReducer from './TeachersReducer';

import {
  FETCH_TEACHERS,
  CLEAR_CURRENT,
  SET_CURRENT,
  CLEAR_STATE
} from '../types';
import axios from 'axios';

const TeachersState = props => {
  const initialState = {
    teachers: [],
    current: null
  };

  const [state, dispatch] = useReducer(TeachersReducer, initialState);

  const fetchTeachers = async () => {
    const res = await axios.get('/api/teachers');
    dispatch({
      type: FETCH_TEACHERS,
      payload: res.data
    });
  };

  const clearTeachers = () => dispatch({ type: CLEAR_STATE });

  const setCurrent = field => dispatch({ type: SET_CURRENT, payload: field });

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  return (
    <TeachersContext.Provider
      value={{
        teachers: state.teachers,
        current: state.current,
        fetchTeachers,
        setCurrent,
        clearTeachers,
        clearCurrent
      }}
    >
      {props.children}
    </TeachersContext.Provider>
  );
};

export default TeachersState;
