import {FETCH_COURSE,FETCH_COURSES} from '../types';

export default (state, action) => {
    switch(action.type){
        case FETCH_COURSE:
            return {
                ...state,
                current: action.payload
            };
        case FETCH_COURSES:
            return {
                ...state,
                courses: action.payload
            };
        default:
            return state;
    }
}