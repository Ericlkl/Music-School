import {REGISTER_MEMBER} from './types';
import {FETCH_COURSE, FETCH_EVENTS, FETCH_TEACHERS} from './types';
import axios from 'axios';

export const signUp = (member) => async dispatch => {
    const res = await axios.post('/api/member', member);

    dispatch({
        type: REGISTER_MEMBER,
        payload: member
    })
}

export const fetchCourses = () => async dispatch => {
    const res = await axios.get('/api/course');

    dispatch({
        type: FETCH_COURSE,
        payload: res.data
    });
}