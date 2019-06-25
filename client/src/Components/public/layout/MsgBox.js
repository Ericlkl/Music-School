import React, {useContext} from 'react';
import MsgboxContext from '../../../context/MsgBox/MsgboxContext';

const MsgBox = () => {

    const {isShow, messages, type, clearMsgBox} = useContext(MsgboxContext);

    let msgContent;
    if (typeof messages === "string"){
        msgContent = <div className="header">{messages}</div>
    } else if ( Array.isArray(messages) ){
        msgContent = <ul className="list"> { messages.map(msg => <li>{msg}</li> ) } </ul>
    }
    
    return (
        <div style={ isShow === false ? { display: "none" } : {} } id="msgbox">
            <div className={"ui message compact floating " + type}>
                <i onClick={clearMsgBox} className="close icon"></i>
                {msgContent}
            </div>
        </div>
    )
}

export default MsgBox
