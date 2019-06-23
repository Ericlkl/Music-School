import React, {useReducer} from 'react';
import CoursesContext from './CoursesContext';
import CoursesReducer from './CoursesReducer';
import {FETCH_COURSE,FETCH_COURSES} from '../types';

const CoursesState = (props) => {
    const initialState = {
        courses: null,
        current: null
    };

    const [state,dispatch] = useReducer(CoursesReducer, initialState);

    return (
        <CoursesContext.Provider value = {{

        }}>
            {props.children}
        </CoursesContext.Provider>
    )
}