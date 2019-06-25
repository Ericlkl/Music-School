import React, {useReducer} from 'react';
import MsgboxContext from './MsgboxContext';
import MsgboxReducer from './MsgboxReducer';
import { SHOW_MSGBOX, CLEAR_MSGBOX } from '../types';

const MsgboxState = (props) => {
    const initState = {
        isShow: true,
        messages: null,
        type: "positive"
    };

    const [state, dispatch] = useReducer(MsgboxReducer, initState);

    const showMsgBox = (type, messages, dismissIn = 4000) => {
        dispatch({
            type: SHOW_MSGBOX,
            payload: {
                type,
                messages
            }
        });

        setTimeout(() => clearMsgBox() , dismissIn);
    }

    const clearMsgBox = () => dispatch({ type: CLEAR_MSGBOX });

    return (
        <MsgboxContext.Provider
            value={{
                isShow: state.isShow,
                messages: state.messages,
                type: state.type,
                showMsgBox,
                clearMsgBox }}>
                    
            {props.children}
        </MsgboxContext.Provider>
    )
};

export default MsgboxState;