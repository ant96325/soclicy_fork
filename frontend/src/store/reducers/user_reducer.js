import {
    GET_USER_PROFILE,
    SET_CHATUS_SIZE_EXPAND,
    SET_CHATUS_SIZE_DEFAULT
} from '../actions/types';

let INITIAL_STATE = {
    updateProfileFailMsg: '',
    profile: null,
    chatus_size: {w: 0, h: 0},
    sizeW: 0,
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return { ...state, profile: action.payload }
        case SET_CHATUS_SIZE_EXPAND:
            console.log('user reducer called');
            let new_state = {...state}
            new_state.chatus_size = {w: 540, h: 747}
            return new_state
            // return { ...state, chatus_size: {w: 540, h: 747}, sizeW: 540}            
        case SET_CHATUS_SIZE_DEFAULT:
            return { ...state, chatus_size: {w: 0, h: 0}, sizeW: 0}
        default:
            return state
    }
}