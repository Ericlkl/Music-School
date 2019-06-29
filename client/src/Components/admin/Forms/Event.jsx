import React, {useState} from 'react';

export default (props) => {

    const [event, setEvent] = useState({
        eventName: "",
        company: "",
        description: "",
        place: "",
        date: null,
        tag: "",
        imageURI: ""
    });

    const { eventName, company, description, place, date, tag, imageURI } = event;

    const onSubmit = () => {
        console.log(event)
        // onSubmitAction(event);
    };

    const onChange = (e) => setEvent({ 
        ...event, 
        [e.target.name] : e.target.value 
    });
    
    return (
        <form onSubmit={onSubmit} className="ui form">
            <div className="field">
                <label>Event Name</label>
                <input type="text" name="eventName" value={eventName} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Company</label>
                <input type="text" name="company" value={company} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Description</label>
                <input type="text" name="description" value={description} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Place</label>
                <input type="text" name="place" value={place} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Date</label>
                <input type="date" name="date" value={date} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Tag</label>
                <input type="text" name="tag" value={tag} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Image URI</label>
                <input type="text" name="imageURI" value={imageURI} onChange={onChange}/>
            </div>

            <input class="ui button" type="submit" value="Submit"/>
        </form>
    )
}

