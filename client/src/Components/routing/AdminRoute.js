import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/Auth/AuthContext';

const AdminRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated, loading, user} = useContext(AuthContext);

    let isAdmin;
    
    if (isAuthenticated){
        isAdmin = user.type === "Admin" ? true : false;
    } else {
        isAdmin = false;
    }
    
    return(
        <Route {...rest} render={props => isAdmin && !loading ? 
            (<Component {...props} />) :
            (<Redirect to="/login" />) 
        } />
    )
}

export default AdminRoute;