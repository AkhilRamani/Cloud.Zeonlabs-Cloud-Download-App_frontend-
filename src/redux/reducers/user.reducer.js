import {STORE_USER} from '../actions/types'

const initialState = {
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case STORE_USER:
            return { ...state, user: { ...state.user, ...action.user}}

        default: return state
    }
}