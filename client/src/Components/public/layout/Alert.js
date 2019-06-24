import React from 'react'

const Alert = () => {
    return (
        <div id="msgbox">
            <div className="ui error message compact floating">
                <i className="close icon"></i>
                <div className="header">
                    There were some errors with your submission
                </div>
                <ul className="list">
                    <li>You must include both a upper and lower case letters in your password.</li>
                    <li>You need to select your home country.</li>
                </ul>
            </div>
        </div>
    )
}

export default Alert
