import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/Auth/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated, loading } = useContext(AuthContext);
    
    return(
        <Route {...rest} render={props => isAuthenticated && !loading ? 
            (<Component {...props} />) :
            (<Redirect to="/login" />) 
        } />
    )
}

export default PrivateRoute;