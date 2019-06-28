import React from 'react'

export default () => {
    
    return (
        <form className="ui form">
            <h1>Course Information</h1>

            <div className="field">
                <label>Course Name</label>
                <input type="text" name="first-name" placeholder="First Name"/>
            </div>

            <div className="field">
                <label>Description</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>Requirement</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>fee</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>Start Date</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>End Date</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>Instrument</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>Image URI</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <button class="ui button" type="submit">Submit</button>
        </form>
    )
}

