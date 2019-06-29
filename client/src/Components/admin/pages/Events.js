import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import AdminPageFrame from '../layout/AdminPageFrame';

import MsgboxContext from '../../../context/MsgBox/MsgboxContext';

import EventsContext from '../../../context/Events/EventsContext';

const Row = ({event}) => {

    const { _id, eventName, description,company,
        place, date, tag, imageURI} = event;

    const {fetchEvents} = useContext(EventsContext);
    const {showMsgBox} = useContext(MsgboxContext);

    const onDelete = async () => {
        try {
            await axios.delete(`/api/events/${_id}`);
            showMsgBox("positive", "Event Deleted successfully");
            fetchEvents();
        } catch (error) {
            showMsgBox("negative", "Error! Please try again later");
        }
    }

    return (
        <tr>
            <td>{eventName}</td>
            <td>{description}</td>
            <td>{company}</td>
            <td>{place}</td>
            <td>{date}</td>
            <td>{tag}</td>
            <td>{imageURI}</td>
            <td>
                <div className="ui basic buttons">
                    <button className="ui blue basic button">Update</button>
                    <button onClick={onDelete} className="ui red basic button">Delete</button>
                </div>
            </td>
        </tr>
    )
}
const Table = () => {

    const {events, fetchEvents} = useContext(EventsContext);

    useEffect(() => {
        if (events.length === 0){
            fetchEvents();
        }

        return () => {

        };
        // eslint-diable-next-line
    }, [events])

    return (
        <table className="ui orange striped table">
            <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Description</th>
                    <th>Company</th>
                    <th>Place</th>
                    <th>Date</th>
                    <th>Tag</th>
                    <th>Intrument</th>
                    <th>Image URL</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {events.map(event => <Row event={event} key={event._id}/> )}
            </tbody>
        </table>
    )
}

const Events = () => {
    return (
        <AdminPageFrame>
            <div className="ui">
                <h1 className="ui left floated header">
                    Events
                </h1>
                <h3 className="ui right floated header">
                    <button className="ui primary button">Create</button>
                </h3>
            </div>
            <Table/>
        </AdminPageFrame>
    )
}

export default Events
