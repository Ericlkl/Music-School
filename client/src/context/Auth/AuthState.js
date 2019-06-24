import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const AuthState = (props) => {

    const initialState = {
        courses: null,
        current: null
    };

    const [state,dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value = {{

        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;