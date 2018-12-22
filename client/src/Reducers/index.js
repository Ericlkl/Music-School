import { combineReducers } from 'redux';
import { REGISTER_MEMBER } from '../Actions/types'

const memberReducer = (state = {}, action) => {
    switch(action.type){
        case REGISTER_MEMBER:
            console.log(state);
            return action.payload;
        default:
            return state;
    }
}

const reducers = combineReducers({
    member: memberReducer
});

export default reducers