import { combineReducers } from 'redux';
import { REGISTER_MEMBER } from '../Actions/types'
import { FETCH_COURSES, FETCH_EVENTS, FETCH_TEACHERS } from '../Actions/types'
import { reducer as formReducer } from 'redux-form';

const memberReducer = (state = {}, action) => {
    switch(action.type){
        case REGISTER_MEMBER:
            console.log(state);
            return action.payload;
        default:
            return state;
    }
}

const coursesReducer = (state=[], action) => {
    switch(action.type){
        case FETCH_COURSES:
            return action.payload
        default:
            return state
    }
}

const teachersReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_TEACHERS:
            return action.payload;
        default:
            return state;
    }
}



export default combineReducers({
    member: memberReducer,
    courses: coursesReducer,
    teachers: teachersReducer,
    form: formReducer,
});