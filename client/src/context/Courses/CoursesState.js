import React, {useReducer} from 'react';
import CoursesContext from './CoursesContext';
import CoursesReducer from './CoursesReducer';
import {FETCH_COURSE,FETCH_COURSES} from '../types';
import axios from 'axios';

const CoursesState = (props) => {

    const initialState = {
        courses: [],
        current: null
    };

    const [state,dispatch] = useReducer(CoursesReducer, initialState);

    const fetchCourses = async () => {
        const res = await axios.get('/api/course');
        dispatch({
            type: FETCH_COURSES,
            payload: res.data
        });
    }

    return (
        <CoursesContext.Provider value = {{
            courses: state.courses,
            current: state.current,
            fetchCourses
        }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export default CoursesState;