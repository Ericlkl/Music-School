import React, {useReducer} from 'react';
import TeachersContext from './TeachersContext';
import TeachersReducer from './TeachersReducer';
import {FETCH_TEACHER,FETCH_TEACHERS} from '../types';
import axios from 'axios';

const TeachersState = (props) => {

    const initialState = {
        teachers: [],
        current: null
    };

    const [state,dispatch] = useReducer(TeachersReducer, initialState);

    const fetchTeachers = async () => {
        const res = await axios.get('/api/teachers');
        dispatch({
            type: FETCH_TEACHERS,
            payload: res.data
        });
    }

    return (
        <TeachersContext.Provider value = {{
            teachers: state.teachers,
            current: state.current,
            fetchTeachers }}>
                
            {props.children}
        </TeachersContext.Provider>
    )
}

export default TeachersState;