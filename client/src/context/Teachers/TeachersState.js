import React, {useReducer} from 'react';
import CoursesContext from './CoursesContext';
import CoursesReducer from './TeachersReducer';
import {FETCH_EVENT,FETCH_EVENTS} from '../types';
import axios from 'axios';

const EventsState = (props) => {

    const initialState = {
        events: [],
        current: null
    };

    const [state,dispatch] = useReducer(CoursesReducer, initialState);

    const fetchEvents = async () => {
        const res = await axios.get('/api/course');
        dispatch({
            type: FETCH_EVENTS,
            payload: res.data
        });
    }

    return (
        <CoursesContext.Provider value = {{
            events: state.courses,
            current: state.current,
            fetchEvents
        }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export default EventsState;