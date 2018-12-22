import { combineReducers } from 'redux';
import { REGISTER_MEMBER } from '../Actions/types'
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

export default combineReducers({
    member: memberReducer,
    form: formReducer,
});