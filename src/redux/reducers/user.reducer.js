import {STORE_USER, INCREASE_USED_SPACE, DECREASE_USED_SPACE, UPDATE_USER, SAVE_AVATAR_URL} from '../actions/types'
import { getAvatarUrl } from '../../common/common.utils'

const initialState = {
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case STORE_USER:
            const avatarUrl = action.user.avatar ? getAvatarUrl(action.user._id) : null
            return { ...state,
                user: { 
                    ...state.user,
                    ...action.user,
                    avatarUrl
                }
            }

        case INCREASE_USED_SPACE:
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
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }

        case SAVE_AVATAR_URL: 
            return {
                ...state,
                user: {
                    ...state.user,
                    avatarUrl: action.payload
                }
            }

        default: return state
    }
}