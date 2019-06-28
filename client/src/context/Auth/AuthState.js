import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

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

const AuthState = (props) => {

    const initialState = {
        user: null,
        isAuthenticated: null,
        errors: null,
        loading: false,
        token: null
    };

    const [state,dispatch] = useReducer(AuthReducer, initialState);

    // Load User
    const loadUser = async () => {

        const token = localStorage.getItem('token');
        setAuthToken(token);

        try {
            const res = await axios.get('/api/auth');

            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload:  error.response.data.errors
            });

            setTimeout(() => clearError(), 4000);
        }
    }

    const login = async (formData) => {
        try {
            const res = await axios.post('/api/auth', formData);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            loadUser();

        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.errors
            });

            setTimeout(() => clearError(), 4000);
        }
    };

    const logout = () => dispatch({ type: LOGOUT })

    const register = async (formData) => {
        console.log(formData);
        try {
            const res = await axios.post('/api/users', formData);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            // Get User details
            loadUser();

        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.errors
            });

            setTimeout(() => clearError(), 4000);
        }
    }

    const clearError = () => dispatch({ type: CLEAR_ERROR });

    return (
        <AuthContext.Provider value = {{
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            errors: state.errors,
            loading: state.loading,
            token: state.token,
            loadUser,
            login,
            logout,
            register,
            clearError
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;