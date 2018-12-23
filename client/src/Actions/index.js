import {REGISTER_MEMBER} from './types';
import {FETCH_COURSES, FETCH_EVENTS, FETCH_TEACHERS} from './types';
import axios from 'axios';

export const signUp = (member) => async dispatch => {
    await axios.post('/api/member', member);

    dispatch({
        type: REGISTER_MEMBER,
        payload: member
    })
}

export const fetchCourses = () => async dispatch => {
    const res = await axios.get('/api/course');

    dispatch({
        type: FETCH_COURSES,
        payload: res.data
    });
}

export const fetchTeachers = () => async dispatch => {
    const res = await axios.get('/api/teacher');

    dispatch({
        type: FETCH_TEACHERS,
        payload: res.data
    });
}

export const fetchEvents = () => async dispatch => {
    const res = await axios.get('/api/event');

    dispatch({
        type: FETCH_EVENTS,
        payload: res.data
    });
}