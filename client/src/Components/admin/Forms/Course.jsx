import React, {useState} from 'react';

export default ({onSubmitAction}) => {

    const initState = {
        courseName : "",
        description: "",
        requirement: "",
        fee: 0,
        startDate: undefined,
        endDate: undefined,
        instrument: "",
        imageURI: ""
    };

    const [course, setCourse] = useState({...initState});

    const { courseName, description, requirement, 
        fee, startDate, endDate, instrument, imageURI } = course;

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitAction(course);
    };

    const onChange = (e) => setCourse({ 
        ...course,
        [e.target.name]: e.target.value 
    });
    
    return (
        <form onSubmit={onSubmit} className="ui form">

            <div className="field">
                <label>Course Name</label>
                <input type="text" name="courseName" required value={courseName} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Description</label>
                <input type="text" name="description" required value={description} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Requirement</label>
                <input type="text" name="requirement" value={requirement} onChange={onChange}/>
            </div>

            <div className="field">
                <label>fee</label>
                <input type="number" name="fee" required value={fee} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Start Date</label>
                <input type="date" name="startDate" required value={startDate} onChange={onChange}/>
            </div>

            <div className="field">
                <label>End Date</label>
                <input type="date" name="endDate" required value={endDate} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Instrument</label>
                <input type="text" name="instrument" required value={instrument} onChange={onChange}/>
            </div>

            <div className="field">
                <label>Image URI</label>
                <input type="text" name="imageURI" value={imageURI} onChange={onChange}/>
            </div>

            <input className="ui button" type="submit" value="submit" />
        </form>
    )
}

