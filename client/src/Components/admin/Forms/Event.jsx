import React from 'react'

export default () => {
    
    return (
        <form className="ui form">
            <div className="field">
                <label>Event Name</label>
                <input type="text" name="first-name" placeholder="First Name"/>
            </div>

            <div className="field">
                <label>Company</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>Description</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>Place</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>Date</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>

            <div className="field">
                <label>Tag</label>
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

