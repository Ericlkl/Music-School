import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERROR
} from '../types';

const initialState = {
    user: null,
    isAuthenticated: null,
    errors: null,
    loading: false,
    token: null
};

export default (state = initialState, action) => {
    switch(action.type){

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
            
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
            return {
                ...initialState,
                errors: action.payload
            };
        
        case CLEAR_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return initialState
        
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                loading: true,
                token: action.payload.token
            };
        default:
            return state;
    }
}