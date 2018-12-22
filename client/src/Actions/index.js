import {REGISTER_MEMBER} from './types'

export const signUp = (member) => {
    return {
        type: REGISTER_MEMBER,
        payload: member
    }
}