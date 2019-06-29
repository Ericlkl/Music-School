import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Form from '../../Forms/Event';
import AdminPageFrame from '../../layout/AdminPageFrame';
import MsgboxContext from '../../../../context/MsgBox/MsgboxContext';

const Events = (props) => {

    const {showMsgBox} = useContext(MsgboxContext);

    const addEvent = async (formData) => {
        try {
            await axios.post('/api/events', formData);
            showMsgBox('positive', "Add Event Successfully !");
            props.history.goBack();
        } catch (error) {
            showMsgBox('negative', "Error" );
        }
    }

    return (
        <AdminPageFrame>
            <div className="ui">
                <h1 style={{ margin: "1rem 0rem" }} className="ui header breadcrumb">
                    <Link to="/admin/events" className="section">Event</Link>
                    <i className="right angle icon divider"></i>
                    <div className="active section">Create</div>
                </h1>

                <Form onSubmitAction={addEvent} />        
            </div>
        </AdminPageFrame>
    )
}

export default Events
