import {FETCH_TEACHER,FETCH_TEACHERS} from '../types';

export default (state, action) => {
    switch(action.type){
        case FETCH_TEACHER:
            return {
                ...state,
                current: action.payload
            };
        case FETCH_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            };
        default:
            return state;
    }
}