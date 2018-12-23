import React, {Component} from 'react';
import AdminNavBar from './AdminNavBar';

class EditEvent extends Component{
    render(){
        return(
            <div className="ui" >
                <AdminNavBar/>
                <h1>EditEvent</h1>
            </div>
        )
    }
}

export default EditEvent;