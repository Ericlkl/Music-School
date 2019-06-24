import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/Auth/AuthContext';

const StudentRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated, loading, user} = useContext(AuthContext);

    let isStudent;
    
    if (isAuthenticated){
        isAdmin = user.type === "Student" ? true : false;
    } else {
        isAdmin = false;
    }
    
    return(
        <Route {...rest} render={props => !loading && isStudent ? 
            (<Component {...props} />) :
            (<Redirect to="/login" />) 
        } />
    )
}

export default StudentRoute;