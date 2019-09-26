import {STORE_USER, INCREASE_USED_SPACE, DECREASE_USED_SPACE, UPDATE_USER} from '../actions/types'

const initialState = {
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case STORE_USER:
            return { ...state, user: { ...state.user, ...action.user}}

        case INCREASE_USED_SPACE:
            console.log('action payload ===> ', action.payload)
            return {
                ...state, 
                user: {
                    ...state.user,
                    storage: {
                        ...state.user.storage,
                        used: state.user.storage.used + action.payload
                    }
                }
            }

        case DECREASE_USED_SPACE:
            console.log('action.payload==', action.payload)
            return {
                ...state,
                user: {
                    ...state.user,
                    storage: {
                        ...state.user.storage,
                        used: state.user.storage.used - action.payload
                    }
                }
            }

        case UPDATE_USER:
            console.log('from redux', action.payload)
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }

        default: return state
    }
}