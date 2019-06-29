import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import AdminPageFrame from '../../layout/AdminPageFrame';
import Form from '../../Forms/Event';


const Events = () => {

    const addEvent = async (formData) => {
        try {
            const res = await axios.post('/api/event', formData);
            console.log(res.data);
        } catch (error) {
            console.log(error.response.message.error);
        }
    }

    return (
        <AdminPageFrame>
            <div className="ui">
                <h1 style={{ margin: "1rem 0rem" }} className="ui header breadcrumb">
                    <a className="section">Event</a>
                    <i className="right angle icon divider"></i>
                    <div className="active section">Create</div>
                </h1>

                <Form onSubmitAction={addEvent} />        
            </div>
        </AdminPageFrame>
    )
}

export default Events
