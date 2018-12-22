import {REGISTER_MEMBER} from './types'
import axios from 'axios';

export const signUp = (member) => async dispatch => {

    const res = await axios.post('/api/student', member);
    console.log(res);

    dispatch({
        type: REGISTER_MEMBER,
        payload: member
    })
}