import {REGISTER_MEMBER} from './types'
import axios from 'axios';

export const signUp = (member) => async dispatch => {

    const res = await axios.post('/api/member', member);

    dispatch({
        type: REGISTER_MEMBER,
        payload: member
    })
}